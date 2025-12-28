FROM node:20-slim

# Azure App Service için zorunlu env
ENV SSH_PORT=2222

# SSH için paketler
RUN apt-get update && \
    apt-get install -y openssh-server && \
    mkdir /var/run/sshd

# SSH root login (Azure ister)
RUN echo "root:Docker123*" | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# App klasörü
WORKDIR /usr/src/app

# package dosyaları
COPY package*.json ./
RUN npm install

# Source code
COPY . .

# TypeScript build
RUN npm run build

# Azure App Service container port
EXPOSE 3000
EXPOSE 2222

# Startup script
CMD service ssh start && node dist/index.js
