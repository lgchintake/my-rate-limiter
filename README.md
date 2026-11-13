# Gateway

## Application setup

### Prerequisites

- Java 21
- Docker with the Compose plugin, only if you want to run the optional Redis tools

Each service is a separate Gradle project with its own wrapper; there is no root-level build. From the repository root, start each service in a separate terminal, in this order:

1. Start service discovery:

   ```sh
   cd discovery
   ./gradlew bootRun
   ```

2. Start the user service:

   ```sh
   cd user-service
   ./gradlew bootRun
   ```

3. Start the gateway:

   ```sh
   cd gateway
   ./gradlew bootRun
   ```

On Windows, use `gradlew.bat bootRun` in each service directory.

### Services

| Service | Port | Description |
|---------|------|-------------|
| `discovery` | 8080 | Manages service registration and discovery. |
| `gateway` | 9081 | Handles incoming requests and routes them to services. |
| `user-service` | 9082 | Manages user-related operations. |

### Optional Redis tools

The application can be run without Redis. To start the optional Redis and RedisInsight containers from the repository root:

```sh
docker compose -f z-docs/redis-setup/docker-compose.yml up -d
```

Redis is available on port `6379` and RedisInsight on port `5540`. Stop the containers with:

```sh
docker compose -f z-docs/redis-setup/docker-compose.yml down
```
