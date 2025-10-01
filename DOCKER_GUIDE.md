# DailyDevQ Docker 개발 환경 가이드

## 🚀 시작하기

### 1. 환경 변수 설정

```bash
# 메인 .env 파일 생성
cp .env.example .env.local

# 필요한 경우 백엔드 전용 .env 생성
cp packages/backend/.env.example packages/backend/.env
```

### 2. Docker Compose로 전체 환경 실행

```bash
# 전체 서비스 빌드 및 실행
docker-compose up --build

# 백그라운드 실행
docker-compose up -d

# 특정 서비스만 실행
docker-compose up frontend backend
```

### 3. 서비스 접근

| 서비스 | URL | 설명 |
|--------|-----|------|
| 프론트엔드 | http://localhost:3000 | Next.js 애플리케이션 |
| 백엔드 API | http://localhost:8000 | FastAPI 서버 |
| API 문서 | http://localhost:8000/docs | Swagger UI |
| Nginx | http://localhost:80 | 리버스 프록시 |
| MailHog | http://localhost:8025 | 이메일 테스트 UI |
| Redis | localhost:6379 | 캐시 서버 |
| PostgreSQL | localhost:5432 | 데이터베이스 |
| DynamoDB | localhost:8000 | AWS DynamoDB Local |
| LocalStack | localhost:4566 | AWS 서비스 에뮬레이션 |

## 🛠️ 개발 워크플로우

### 코드 수정 및 핫 리로드

**프론트엔드 (Next.js):**
- 파일 저장 시 자동 리로드
- 볼륨 마운트로 실시간 반영

**백엔드 (FastAPI):**
- 파일 저장 시 uvicorn이 자동 재시작
- 볼륨 마운트로 실시간 반영

### 컨테이너 관리

```bash
# 전체 로그 보기
docker-compose logs -f

# 특정 서비스 로그
docker-compose logs -f frontend
docker-compose logs -f backend

# 서비스 재시작
docker-compose restart frontend
docker-compose restart backend

# 서비스 중지
docker-compose stop

# 서비스 중지 및 컨테이너 삭제
docker-compose down

# 볼륨까지 삭제 (데이터 초기화)
docker-compose down -v
```

### 컨테이너 내부 접근

```bash
# 프론트엔드 컨테이너 접속
docker-compose exec frontend sh

# 백엔드 컨테이너 접속
docker-compose exec backend sh

# PostgreSQL 접속
docker-compose exec postgres psql -U dailydevq -d dailydevq

# Redis CLI 접속
docker-compose exec redis redis-cli -a redis123
```

## 📦 의존성 관리

### 프론트엔드 (pnpm)

```bash
# 컨테이너 내부에서 패키지 설치
docker-compose exec frontend pnpm install <package>

# 또는 컨테이너 재빌드
docker-compose up --build frontend
```

### 백엔드 (uv)

```bash
# 컨테이너 내부에서 패키지 설치
docker-compose exec backend uv pip install <package>

# pyproject.toml 수정 후 재빌드
docker-compose up --build backend
```

## 🧪 테스트 실행

### 프론트엔드 테스트

```bash
# Jest 테스트 실행
docker-compose exec frontend pnpm test

# E2E 테스트
docker-compose exec frontend pnpm test:e2e
```

### 백엔드 테스트

```bash
# pytest 실행
docker-compose exec backend uv run pytest

# 커버리지 포함
docker-compose exec backend uv run pytest --cov=dailydevq_backend
```

## 🔧 문제 해결

### 포트 충돌

포트가 이미 사용 중일 경우 `.env.local`에서 포트 변경:

```bash
FRONTEND_PORT=3001
BACKEND_PORT=8001
POSTGRES_PORT=5433
```

### 캐시 문제

빌드 캐시를 무시하고 처음부터 빌드:

```bash
docker-compose build --no-cache
docker-compose up
```

### 볼륨 권한 문제

```bash
# 볼륨 소유권 확인 및 수정
sudo chown -R $USER:$USER .
```

### 컨테이너가 시작되지 않을 때

```bash
# 이전 컨테이너 및 볼륨 정리
docker-compose down -v
docker system prune -f

# 다시 시작
docker-compose up --build
```

## 🌐 AWS 로컬 서비스 (LocalStack)

### S3 버킷 생성

```bash
# LocalStack에 S3 버킷 생성
docker-compose exec backend aws --endpoint-url=http://localstack:4566 s3 mb s3://dailydevq-dev-bucket
```

### DynamoDB 테이블 생성

```bash
# DynamoDB 테이블 생성 스크립트 실행
docker-compose exec backend python scripts/create_dynamodb_tables.py
```

## 📊 모니터링

### 리소스 사용량 확인

```bash
# 컨테이너 리소스 사용량
docker stats

# 특정 컨테이너만
docker stats dailydevq-frontend dailydevq-backend
```

### 헬스체크 상태 확인

```bash
# 모든 서비스 상태
docker-compose ps

# 헬스체크 로그
docker inspect --format='{{json .State.Health}}' dailydevq-frontend
```

## 🔐 보안 권고사항

1. **프로덕션 환경에서는 절대 사용하지 마세요**
   - 이 설정은 개발 전용입니다
   - 프로덕션에서는 별도의 보안 설정 필요

2. **비밀번호 변경**
   - `.env.local`의 모든 기본 비밀번호 변경
   - `JWT_SECRET`, `POSTGRES_PASSWORD` 등

3. **환경 변수 보호**
   - `.env*` 파일을 절대 git에 커밋하지 마세요
   - `.gitignore`에 이미 포함됨

## 🚢 프로덕션 배포

프로덕션 배포는 다음을 사용:
- AWS ECS/Fargate
- Terraform을 통한 IaC
- GitHub Actions CI/CD

자세한 내용은 `dailydevq-infra` 리포지토리 참조.

## 💡 유용한 팁

### 데이터베이스 마이그레이션

```bash
# Alembic 마이그레이션 실행
docker-compose exec backend uv run alembic upgrade head

# 새 마이그레이션 생성
docker-compose exec backend uv run alembic revision --autogenerate -m "migration message"
```

### 로그 파일로 저장

```bash
# 모든 로그 파일로 저장
docker-compose logs > logs.txt

# 특정 서비스 로그만
docker-compose logs backend > backend-logs.txt
```

### 개발 환경 완전 초기화

```bash
# 모든 컨테이너, 볼륨, 네트워크 삭제
docker-compose down -v
docker system prune -a --volumes -f

# 처음부터 다시 시작
docker-compose up --build
```

## 📝 환경별 설정

### 로컬 개발
```bash
docker-compose up
```

### 통합 테스트
```bash
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

### 프로덕션 시뮬레이션
```bash
docker-compose -f docker-compose.prod.yml up
```

## 🤝 팀 협업

### 동일한 환경 보장

1. 모든 팀원이 동일한 Docker 이미지 사용
2. `.env.example` 파일 공유
3. 각자 `.env.local`에서 개인 설정

### 개발 서버 URL 공유

ngrok 또는 로컬 터널링 사용:

```bash
# ngrok으로 로컬 서버 공개
ngrok http 3000
```

---

**문의사항이나 이슈가 있으면 GitHub Issues에 등록해주세요.**
