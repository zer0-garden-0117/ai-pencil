package com.ila.zer0.repository

import com.ila.zer0.entity.Usage
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Repository
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbEnhancedClient
import software.amazon.awssdk.enhanced.dynamodb.Key
import software.amazon.awssdk.enhanced.dynamodb.TableSchema
import software.amazon.awssdk.services.dynamodb.DynamoDbClient
import software.amazon.awssdk.services.dynamodb.model.AttributeValue
import software.amazon.awssdk.services.dynamodb.model.ConditionalCheckFailedException
import software.amazon.awssdk.services.dynamodb.model.DynamoDbException
import software.amazon.awssdk.services.dynamodb.model.ReturnValue
import software.amazon.awssdk.services.dynamodb.model.UpdateItemRequest

@Repository
class UsageRepository(
    private val dynamoDbClient: DynamoDbClient
) {
    private val enhancedClient: DynamoDbEnhancedClient =
        DynamoDbEnhancedClient.builder()
            .dynamoDbClient(dynamoDbClient)
            .build()
    private val table =
        enhancedClient.table("usage", TableSchema.fromClass(Usage::class.java))
    private val logger = LoggerFactory.getLogger(UsageRepository::class.java)

    fun findByKey(userId: String, yyyymmdd: String): Usage? {
        return try {
            table.getItem { r ->
                r.key(
                    Key.builder()
                        .partitionValue(userId)
                        .sortValue(yyyymmdd)
                        .build()
                )
            }
        } catch (e: DynamoDbException) {
            throw RuntimeException(
                "Failed to retrieve usage by key: userId=$userId, yyyymmdd=$yyyymmdd",
                e
            )
        }
    }

    fun putUsage(usage: Usage): Usage {
        return try {
            table.putItem(usage)
            usage
        } catch (e: DynamoDbException) {
            throw RuntimeException("Failed to put usage: key=(${usage.userId}, ${usage.yyyymmdd})", e)
        }
    }

    fun updateUsage(usage: Usage): Usage {
        return try {
            table.updateItem(usage)
            usage
        } catch (e: DynamoDbException) {
            throw RuntimeException("Failed to update usage: key=(${usage.userId}, ${usage.yyyymmdd})", e)
        }
    }

    fun deleteByKey(userId: String, yyyymmdd: String): Usage {
        return try {
            table.deleteItem { r ->
                r.key(
                    Key.builder()
                        .partitionValue(userId)
                        .sortValue(yyyymmdd)
                        .build()
                )
            }
        } catch (e: DynamoDbException) {
            throw RuntimeException(
                "Failed to delete usage by key: userId=$userId, yyyymmdd=$yyyymmdd",
                e
            )
        }
    }


    fun getRemaining(userId: String, yyyymmdd: String, limit: Int): Int {
        val item = findByKey(userId, yyyymmdd)
        return if (item == null) {
            limit
        } else {
            val used = item.usedCount
            (limit - used).coerceAtLeast(0)
        }
    }

    fun consumeOne(
        userId: String,
        yyyymmdd: String,
        ttlEpochSeconds: Long? = null
    ): Int {
        try {
            val key = mapOf(
                "userId" to AttributeValue.builder().s(userId).build(),
                "yyyymmdd" to AttributeValue.builder().s(yyyymmdd).build()
            )

            val exprAttrValues = mutableMapOf<String, AttributeValue>(
                ":one" to AttributeValue.builder().n("1").build()
            )
            val exprAttrNames = mutableMapOf<String, String>()

            // TTL をセットする場合のみ SET 句を付ける
            val updateExpression = if (ttlEpochSeconds != null) {
                exprAttrValues[":ttl"] = AttributeValue.builder().n(ttlEpochSeconds.toString()).build()
                exprAttrNames["#ttl"] = "ttl"
                "ADD usedCount :one SET #ttl = :ttl"
            } else {
                "ADD usedCount :one"
            }

            val requestBuilder = UpdateItemRequest.builder()
                .tableName("usage")
                .key(key)
                .updateExpression(updateExpression)
                .expressionAttributeValues(exprAttrValues)
                .returnValues(ReturnValue.UPDATED_NEW)

            if (exprAttrNames.isNotEmpty()) {
                requestBuilder.expressionAttributeNames(exprAttrNames)
            }

            val res = dynamoDbClient.updateItem(requestBuilder.build())
            return res.attributes()["usedCount"]?.n()?.toInt() ?: 0

        } catch (e: DynamoDbException) {
            throw RuntimeException(
                "Failed to consumeOne for userId=$userId, yyyymmdd=$yyyymmdd",
                e
            )
        }
    }
}