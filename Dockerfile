# Use official Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and lockfile first
COPY package*.json ./

# Copy Prisma schema so it can generate early
COPY prisma ./prisma

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Now copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Start the app
EXPOSE 3000
CMD ["npm", "start"]
