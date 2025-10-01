#!/bin/bash

# E-commerce Starter - Automated Setup Script
# This script automates the initial project setup

set -e  # Exit on error

echo "🚀 E-commerce Starter - Automated Setup"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 16+ first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js found: $(node --version)${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm found: $(npm --version)${NC}"
echo ""

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install
echo -e "${GREEN}✓ Root dependencies installed${NC}"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
echo -e "${GREEN}✓ Frontend dependencies installed${NC}"
echo ""

# Setup frontend environment
if [ ! -f .env.local ]; then
    echo "📝 Creating frontend .env.local from .env.example..."
    cp .env.example .env.local
    echo -e "${YELLOW}⚠️  Please edit frontend/.env.local and add your API keys${NC}"
else
    echo -e "${YELLOW}⚠️  frontend/.env.local already exists, skipping...${NC}"
fi
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
echo -e "${GREEN}✓ Backend dependencies installed${NC}"
echo ""

# Setup backend environment
if [ ! -f .env ]; then
    echo "📝 Creating backend .env from .env.example..."
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Please edit backend/.env and add your configuration${NC}"
else
    echo -e "${YELLOW}⚠️  backend/.env already exists, skipping...${NC}"
fi
cd ..

echo ""
echo "========================================"
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "📋 Next steps:"
echo "1. Configure backend/.env with your MongoDB URI, JWT secret, and Stripe keys"
echo "2. Configure frontend/.env.local with your API URL and Stripe publishable key"
echo "3. Start the development servers with: npm run dev"
echo ""
echo "📚 Documentation:"
echo "- Frontend README: frontend/README.md"
echo "- Backend README: backend/README.md"
echo "- Main README: README.md"
echo ""
echo "🎉 Happy coding!"