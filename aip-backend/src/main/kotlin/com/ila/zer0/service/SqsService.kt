package com.ila.zer0.service

import com.fasterxml.jackson.databind.ObjectMapper
import com.ila.zer0.config.SqsConfig
import com.ila.zer0.service.user.UserManagerService
import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import software.amazon.awssdk.services.sqs.SqsClient
import software.amazon.awssdk.services.sqs.model.SendMessageRequest
import software.amazon.awssdk.services.sqs.model.ReceiveMessageRequest
import software.amazon.awssdk.services.sqs.model.DeleteMessageRequest
import java.time.Instant
import java.util.*

@Service
class SqsService(
    private val sqsClient: SqsClient,
    private val sqsConfig: SqsConfig,
    private val userManagerService: UserManagerService,
    private val stripeService: StripeService
) {

    private val log = LoggerFactory.getLogger(this::class.java)
    private val mapper = ObjectMapper()
    
    fun sendCreateImageMessage(
        workId: String, action: String, prompt: String, negativePrompt: String, model: String, nowDate: Instant
    ): String {
        val message = mapOf(
            "workId" to workId,
            "action" to action,
            "model" to model,
            "prompt" to prompt,
            "negativePrompt" to negativePrompt,
            "timestamp" to nowDate.toString()
        )
        val messageJson = mapper.writeValueAsString(message)

        val request = SendMessageRequest.builder()
            .queueUrl(sqsConfig.createImageQueueUrl)
            .messageBody(messageJson)
            .messageGroupId("create-image")
            .messageDeduplicationId(UUID.randomUUID().toString())
            .build()

        val response = sqsClient.sendMessage(request)
        return response.messageId()
    }
}