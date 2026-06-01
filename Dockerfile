# Optional Railway deploy via Dockerfile (docs/deployment-plan.md).
FROM python:3.11-slim

WORKDIR /app

COPY requirements-api.txt requirements-core.txt ./
RUN pip install --no-cache-dir -r requirements-api.txt

COPY api/ api/
COPY src/ src/
COPY scripts/start-api.sh scripts/start-api.sh
COPY data/processed/restaurants.parquet data/processed/

ENV PYTHONPATH=src
ENV DATA_PATH=data/processed/restaurants.parquet
ENV CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000,https://foodie-lens.vercel.app

RUN chmod +x scripts/start-api.sh

EXPOSE 8000
CMD ["bash", "scripts/start-api.sh"]
