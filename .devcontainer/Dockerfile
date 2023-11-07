FROM node:20-slim

RUN apt-get update && apt-get install -y \
    bash \
    git \
    openssh-client \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*