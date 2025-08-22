#!/bin/bash

set -e

# Create ECR repository
echo "Creating ECR repository..."
aws ecr create-repository --repository-name ecommerce-api --region us-east-1 || echo "Repository already exists"

# Create ECS cluster
echo "Creating ECS cluster..."
aws ecs create-cluster --cluster-name ecommerce-cluster --region us-east-1 || echo "Cluster already exists"

# Create CloudWatch log group
echo "Creating CloudWatch log group..."
aws logs create-log-group --log-group-name /ecs/ecommerce-api --region us-east-1 || echo "Log group already exists"

# Create IAM role for ECS tasks
echo "Creating IAM roles..."
aws iam create-role \
  --role-name ecsTaskExecutionRole \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "ecs-tasks.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }' || echo "Role already exists"

# Attach policy to role
aws iam attach-role-policy \
  --role-name ecsTaskExecutionRole \
  --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy || echo "Policy already attached"

echo "AWS infrastructure setup complete!"