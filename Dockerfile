# Use the official Node.js image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy dependency manifests first to leverage Docker cache
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire application code (including Prisma files)
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Run the Nextjs application
CMD ["npm", "run", "start"]