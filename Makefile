.PHONY: build
build: ## Build the development docker image.
	docker compose -f docker-compose.dev.yml build --no-cache --progress=plain

.PHONY: start
start: ## Start the development docker container.
	docker compose -f docker-compose.dev.yml up -d
.PHONY: stop
stop: ## Stop the development docker container.
	docker compose -f docker-compose.dev.yml down 

.PHONY: run dev
run dev: ## Start dev server
	docker compose -f docker-compose.dev.yml exec frontend yarn run dev

.PHONY: test
test: ## Start dev server
	docker compose -f docker-compose.dev.yml exec frontend yarn run test

.PHONY: test-component
test-component: ## Start dev server
	docker compose -f docker-compose.dev.yml exec frontend yarn run test-component

.PHONY: cypress
cypress: ## Start dev server
	docker compose -f docker-compose.dev.yml exec frontend yarn cypress install

# .PHONY: build-staging
# build-staging: ## Build the staging docker image.
# 	docker compose -f docker/staging/docker-compose.yml build

# .PHONY: start-staging
# start-staging: ## Start the staging docker container.
# 	docker compose -f docker/staging/docker-compose.yml up -d

# .PHONY: stop-staging
# stop-staging: ## Stop the staging docker container.
# 	docker compose -f docker/staging/docker-compose.yml down
  
.PHONY: build-production
build-production: ## Build the production docker image.
	docker compose -f docker-compose.yml build --no-cache --progress=plain

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f docker-compose.yml down