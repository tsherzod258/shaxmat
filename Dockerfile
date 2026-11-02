FROM node:22-alpine
WORKDIR /app
COPY --chown=node:node package.json server.mjs engine.mjs economy.mjs ./
COPY --chown=node:node public ./public
RUN mkdir -p /app/data && chown node:node /app/data
ENV NODE_ENV=production PORT=3000 DATA_DIR=/app/data
USER node
EXPOSE 3000
CMD ["node", "server.mjs"]
