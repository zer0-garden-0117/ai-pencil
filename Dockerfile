# --------- ビルドステージ ---------
FROM gradle:8-jdk17-jammy AS build-java
WORKDIR /workspace

# Gradle 関連
COPY aip-backend/gradlew ./
COPY aip-backend/build.gradle.kts aip-backend/settings.gradle.kts ./
COPY aip-backend/gradle ./gradle

# OpenAPI 定義
COPY docs /docs

RUN chmod +x gradlew

# 依存解決
RUN ./gradlew --no-daemon dependencies || true

# ソース
COPY aip-backend/src ./src

# BootWar
RUN ./gradlew --no-daemon clean bootWar -x test

# --------- ランタイムステージ ---------
FROM eclipse-temurin:17-jdk-jammy

# Node.js（sharp 用）
RUN apt-get update \
  && apt-get install -y curl ca-certificates \
  && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=build-java /workspace/build/libs/aip-backend.war app.war
COPY aip-backend/node-scripts ./node-scripts

WORKDIR /app/node-scripts
RUN npm ci --omit=dev

WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.war"]