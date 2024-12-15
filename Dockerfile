FROM oven/bun:1.0.26
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
EXPOSE 8080
ENTRYPOINT ["bun", "run", "start"]