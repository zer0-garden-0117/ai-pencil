package com.ila.zer0.controller.works

import com.ila.zer0.config.token.CustomAuthenticationToken
import com.ila.zer0.dto.WorkWithTag
import com.ila.zer0.entity.User
import com.ila.zer0.entity.Work
import com.ila.zer0.generated.endpoint.PublicworksApi
import com.ila.zer0.generated.model.ApiWorkWithTag
import com.ila.zer0.generated.model.ApiWorks
import com.ila.zer0.mapper.TagMapper
import com.ila.zer0.mapper.WorkMapper
import com.ila.zer0.service.user.UserManagerService
import com.ila.zer0.service.work.WorkManagerService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import kotlin.collections.forEach

@RestController
class PublicWorksController(
    private val workManagerService: WorkManagerService,
    private val workMapper: WorkMapper,
    private val tagMapper: TagMapper,
    private val userManagerService: UserManagerService,
) : PublicworksApi {

    override fun getPublicWorksByFilter(
        @RequestParam(value = "offset", required = true) offset: Int,
        @RequestParam(value = "limit", required = true) limit: Int,
        @RequestParam(value = "publicWorksFilterType", required = true) publicWorksFilterType: String
    ): ResponseEntity<ApiWorks> {
        // バリデーション
        if (publicWorksFilterType != "new" &&
            publicWorksFilterType != "theme" &&
            publicWorksFilterType != "random" &&
            publicWorksFilterType != "recommended") {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }

        // 作品検索
        val workResult = if (publicWorksFilterType == "new") {
            workManagerService.findWorksByTags(listOf("GLOBAL"), offset, limit)
        } else if (publicWorksFilterType == "random") {
            workManagerService.findWorksByRandom(offset, limit)
        } else if (publicWorksFilterType == "recommended") {
            workManagerService.findWorksByRecommended(offset, limit)
        } else {
            workManagerService.findWorksByTags(listOf("THEME"), offset, limit)
        }

        // publicはviewRatingを0とみなす
        val user = getUser() ?: User(viewRating = 0)
        applyViewRestriction(workResult?.works ?: emptyList(), user)

        // APIモデルに変換
        val apiWorksWithTags = mutableListOf<ApiWorkWithTag>()
        workResult?.works?.forEach { work ->
            val apiWork = workMapper.toApiWork(work)
            val apiWorkWithTag = ApiWorkWithTag(apiWork = apiWork, apiTags = null)
            apiWorksWithTags.add(apiWorkWithTag)
        }
        val apiWorks = ApiWorks(apiWorksWithTags, workResult?.totalCount ?: 0)
        return ResponseEntity.ok(apiWorks)
    }

    override fun getPublicWorksById(
        @PathVariable("workId") workId: String
    ): ResponseEntity<ApiWorkWithTag> {
        // 作品を取得
        val workWithTag = workManagerService.findWorkById(workId = workId)

        // statusがpostedでない場合はエラーを返す
        if (workWithTag.work.status != "posted") {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }

        // 表示用のユーザー情報、いいね数を取得
        val workUser = userManagerService.getUserByIdForWork(workWithTag.work.userId)
            ?: return ResponseEntity(HttpStatus.BAD_REQUEST)
        workWithTag.work.userName = workUser.userName
        workWithTag.work.customUserId = workUser.customUserId
        workWithTag.work.profileImageUrl = workUser.profileImageUrl
        workWithTag.work.likes = workManagerService.getLikes(workWithTag.work.workId)

        // publicはviewRatingを0とみなす
        val user = getUser() ?: User(viewRating = 0)
        applyViewRestriction(workWithTag, user)

        // APIモデルに変換して返却
        val response = toApiWorkWithTag(workWithTag)
        return ResponseEntity.ok(response)
    }

    override fun getPublicWorksByUserIdAndFilter(
        @PathVariable("customUserId") customUserId: String,
        @RequestParam(value = "offset", required = true) offset: Int,
        @RequestParam(value = "limit", required = true) limit: Int,
        @RequestParam(value = "publicWorksUserFilterType", required = true) publicWorksUserFilterType: String
    ): ResponseEntity<ApiWorks> {
        // publicWorksUserFilterTypeが"posted"または"liked"でない場合はエラーを返す
        if (publicWorksUserFilterType != "posted" && publicWorksUserFilterType != "liked") {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }

        // 作品を取得
        val usersWorks = workManagerService.getUsersWorksByCustomUserIdWithFilter(
            customUserId, offset, limit, publicWorksUserFilterType)
            ?: return ResponseEntity.notFound().build()

        // publicはviewRatingを0とみなす
        val user = getUser() ?: User(viewRating = 0)
        applyViewRestriction(usersWorks.works, user)

        // APIモデルに変換
        val apiWorkWithTags = mutableListOf<ApiWorkWithTag>()
        usersWorks.works.forEach { work ->
            val apiWork = workMapper.toApiWork(work)
            val apiWorkWithTag = ApiWorkWithTag(apiWork = apiWork, apiTags = null)
            apiWorkWithTags.add(apiWorkWithTag)
        }
        val apiWorks = ApiWorks(apiWorkWithTags, usersWorks.totalCount)
        return ResponseEntity.ok(apiWorks)
    }

    override fun getPublicWorksTags(
        @PathVariable("tag") tag: String,
        @RequestParam(value = "offset", required = true) offset: Int,
        @RequestParam(value = "limit", required = true) limit: Int
    ): ResponseEntity<ApiWorks> {
        // 作品検索
        val workResult = workManagerService.findWorksByTags(listOf(tag), offset, limit)

        // publicはviewRatingを0とみなす
        val user = getUser() ?: User(viewRating = 0)
        applyViewRestriction(workResult?.works ?: emptyList(), user)

        // APIモデルに変換
        val apiWorksWithTags = mutableListOf<ApiWorkWithTag>()
        workResult?.works?.forEach { work ->
            val apiWork = workMapper.toApiWork(work)
            val apiWorkWithTag = ApiWorkWithTag(apiWork = apiWork, apiTags = null)
            apiWorksWithTags.add(apiWorkWithTag)
        }
        val apiWorks = ApiWorks(apiWorksWithTags, workResult?.totalCount ?: 0)
        return ResponseEntity.ok(apiWorks)
    }

    private fun toApiWorkWithTag(
        workWithTag: WorkWithTag
    ): ApiWorkWithTag {
        val apiWork = workMapper.toApiWork(workWithTag.work)
        val apiTags = tagMapper.toApiTag(workWithTag.tags)
        val apiWorkWithTag = ApiWorkWithTag(
            apiWork = apiWork,
            apiTags = apiTags
        )
        return apiWorkWithTag
    }

    private fun getUser(): User? {
        val authentication: Authentication? =
            SecurityContextHolder.getContext().authentication
        val customAuth = authentication as? CustomAuthenticationToken
        if (customAuth?.userId == null) {
            return null
        }
        return userManagerService.getUserById(customAuth.userId)
    }

    private fun applyViewRestriction(work: Work, user: User) {
        val lockImageUrl = work.placeholderImgUrl
        if (user.viewRating < work.rating) {
            work.thumbnailImgUrl = lockImageUrl
            work.titleImgUrl = lockImageUrl
            work.prompt = ""
            work.negativePrompt = ""
        }
    }

    private fun applyViewRestriction(works: Iterable<Work>, user: User) {
        works.forEach { applyViewRestriction(it, user) }
    }

    private fun applyViewRestriction(workWithTag: WorkWithTag, user: User) {
        applyViewRestriction(workWithTag.work, user)
    }
}