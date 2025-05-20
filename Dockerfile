# Указываем операционную систему иди образ
FROM mcr.microsoft.com/playwright:v1.52.0-noble

# Копируем папку с автотестами в наш образ
COPY . .
# ставим npm пакеты
RUN npm i
# ставим сам pw
RUN npx -y playwright@1.52.0 install --with-deps

# команда для запуска тестов
CMD ["npm", "run", "test"]
