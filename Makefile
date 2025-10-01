# DailyDevQ 프론트엔드 전용 Makefile

.PHONY: help setup up down restart logs build clean test

help: ## 사용 가능한 명령어 목록 표시
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

setup: ## 초기 환경 설정 (.env 파일 생성)
	@echo "🔧 프론트엔드 환경 설정 중..."
	@if [ ! -f .env.local ]; then cp .env.example .env.local && echo "✅ .env.local 생성됨"; fi
	@echo "✅ 프론트엔드 환경 설정 완료!"
	@echo ""
	@echo "⚠️  백엔드 서버가 필요합니다:"
	@echo "   dailydevq-backend 레포를 별도로 실행해주세요."

up: ## 프론트엔드 서비스 시작
	@echo "🚀 프론트엔드 서비스 시작 중..."
	docker-compose up -d
	@echo "✅ 프론트엔드가 시작되었습니다!"
	@echo "프론트엔드: http://localhost:3000"
	@echo ""
	@echo "⚠️  백엔드 API가 http://localhost:8000에서 실행 중인지 확인하세요."

up-build: ## 프론트엔드 빌드 후 시작
	@echo "🔨 프론트엔드 빌드 및 시작 중..."
	docker-compose up --build -d
	@echo "✅ 프론트엔드가 빌드되고 시작되었습니다!"

down: ## 프론트엔드 서비스 중지
	@echo "⏹️  프론트엔드 서비스 중지 중..."
	docker-compose down
	@echo "✅ 프론트엔드 서비스가 중지되었습니다!"

restart: ## 프론트엔드 서비스 재시작
	@echo "🔄 프론트엔드 서비스 재시작 중..."
	docker-compose restart
	@echo "✅ 프론트엔드 서비스가 재시작되었습니다!"

logs: ## 프론트엔드 로그 보기
	docker-compose logs -f frontend

ps: ## 실행 중인 컨테이너 상태 확인
	docker-compose ps

build: ## 이미지 빌드 (캐시 사용)
	@echo "🔨 프론트엔드 이미지 빌드 중..."
	docker-compose build
	@echo "✅ 이미지 빌드 완료!"

build-no-cache: ## 이미지 빌드 (캐시 미사용)
	@echo "🔨 프론트엔드 이미지 빌드 중 (캐시 미사용)..."
	docker-compose build --no-cache
	@echo "✅ 이미지 빌드 완료!"

shell: ## 프론트엔드 컨테이너 쉘 접속
	docker-compose exec frontend sh

test: ## 프론트엔드 테스트 실행
	docker-compose exec frontend pnpm test

lint: ## ESLint 실행
	docker-compose exec frontend pnpm lint

type-check: ## TypeScript 타입 체크
	docker-compose exec frontend pnpm type-check

install: ## 패키지 설치
	docker-compose exec frontend pnpm install

clean: ## 중지된 컨테이너 및 미사용 이미지 정리
	@echo "🧹 정리 중..."
	docker-compose down
	docker system prune -f
	@echo "✅ 정리 완료!"

health: ## 서비스 헬스체크 상태 확인
	@echo "🏥 프론트엔드 상태 확인 중..."
	@docker inspect --format='Frontend: {{.State.Health.Status}}' dailydevq-frontend 2>/dev/null || echo "Frontend: not running"

stats: ## 컨테이너 리소스 사용량 확인
	docker stats dailydevq-frontend

.DEFAULT_GOAL := help
