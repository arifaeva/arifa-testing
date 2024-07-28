FROM node:18

# Install pnpm
RUN npm install -g pnpm

# Create app directory
WORKDIR /app

# mengsalin
COPY package*.json ./

#dep
RUN pnpm install

COPY . .

EXPOSE 7002

CMD ["pnpm", "run", "dev"]