#!/bin/bash

set -e

# Configuration
AWS_REGION="us-east-1"
ECR_REPOSITORY="ecommerce-api"
CLUSTER_NAME="ecommerce-cluster"
SERVICE_NAME="ecommerce-api-service"

# Get AWS account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# Build and tag Docker image
echo "Building Docker image..."
cd backend
docker build -t $ECR_REPOSITORY .

# Tag image for ECR
docker tag $ECR_REPOSITORY:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest

# Login to ECR
echo "Logging in to ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Push image
echo "Pushing image to ECR..."
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest

# Update ECS service
echo "Updating ECS service..."
aws ecs update-service \
  --cluster $CLUSTER_NAME \
  --service $SERVICE_NAME \
  --force-new-deployment \
  --region $AWS_REGION

echo "Deployment initiated successfully!"