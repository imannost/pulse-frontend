FROM node:16.14.2-slim
WORKDIR /pulse

COPY package.json .
COPY package-lock.json .

RUN npm install --force

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]