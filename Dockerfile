# Build frontend
FROM node:20 AS frontend
WORKDIR /work
COPY derrick-portfolio/ ./derrick-portfolio/
RUN corepack enable && cd derrick-portfolio && pnpm install && pnpm run build

# Backend
FROM python:3.11-slim
WORKDIR /app/portfolio-backend
COPY portfolio-backend/ ./
RUN pip install --no-cache-dir -r requirements.txt gunicorn==22.0.0
# drop built frontend into Flask static
COPY --from=frontend /work/derrick-portfolio/dist/ ./src/static/
ENV PORT=8080 PYTHONUNBUFFERED=1
CMD gunicorn -w 2 -k gthread -b 0.0.0.0:$PORT src.main:app
