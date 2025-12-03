# --------- ランタイムステージ ---------
FROM eclipse-temurin:17-jdk-jammy

# Node.js（sharp 用）
RUN apt-get update \
  && apt-get install -y curl ca-certificates \
  && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && rm -rf /var/lib/apt/lists/*

# warの配置
WORKDIR /app

# CodeBuild の Gradle ビルドで作った war を使う
COPY aip-backend/build/libs/aip-backend.war app.war

# nodejsの配置
WORKDIR /app/node-scripts
COPY aip-backend/node-scripts/package*.json ./
RUN npm ci --omit=dev
COPY aip-backend/node-scripts ./

WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.war"]