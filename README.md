# E-commerce Starter App


A production-ready full-stack e-commerce application built with React, Node.js, TypeScript, and MongoDB. Features modern UI/UX, secure payment processing with Stripe, and scalable cloud infrastructure.

## Features

### Frontend (React + TypeScript)
- Modern responsive design with Tailwind CSS
- Auto-hiding navigation header with scroll detection
- Product catalog with search and filtering
- Shopping cart with persistent state
- User authentication and profile management
- Stripe checkout integration
- Mobile-responsive design

### Backend (Node.js + Express)
- RESTful API with proper error handling
- JWT authentication with bcrypt password hashing
- MongoDB integration with Mongoose ODM
- Stripe payment processing with webhook support
- Security features: CORS, helmet, rate limiting
- Input validation and sanitization

## Tech Stack

### Frontend
- React 19.1.1 with TypeScript
- Tailwind CSS 3.3.6
- React Router 7.8.1
- Stripe Elements
- Axios for API calls
- Context API for state management

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Stripe API for payments
- bcryptjs for password hashing

## Prerequisites

- Node.js 16+ (18+ recommended)
- MongoDB (local or Atlas)
- Stripe account
- Git

## Quick Setup

### Automated Setup (Recommended)
```bash
# Clone the repository
git clone https://github.com/yourusername/ecommerce-starter.git
cd ecommerce-starter

# Run the setup script
chmod +x setup.sh
./setup.sh

# Configure environment variables (see below)
# Edit backend/.env
# Edit frontend/.env.local

# Start development servers
npm run dev

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (React)       │◄──►│  (Node.js)      │◄──►│   (MongoDB)     │
│   AWS Amplify   │    │   Railway       │    │  MongoDB Atlas  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐              │
         │              │     Stripe      │              │
         └──────────────►│   (Payments)    │◄─────────────┘
                        └─────────────────┘
```

## Manual Setup

# Clone the repository
git clone https://github.com/yourusername/ecommerce-starter.git
cd ecommerce-starter

# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your configuration
cd ..

# Install backend dependencies
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
cd ..

# Start development servers
npm run dev
```

### Environment Configuration

**Backend (.env)**

**Create backend/.env from backend/.env.example:**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
FRONTEND_URL=http://localhost:3000
```

**Frontend (.env.local):**

**Create frontend/.env.local from frontend/.env.example**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

Getting Stripe Keys

Sign up at stripe.com
Get your keys from dashboard.stripe.com/apikeys
Use test keys (pk_test_... and sk_test_...) for development
Use live keys only in production

### Available Scripts

# Development
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start frontend only (port 3000)
npm run dev:backend      # Start backend only (port 5000)

# Installation
npm run install:all      # Install all dependencies

# Production Build
npm run build            # Build frontend for production

# Testing
npm test                 # Run all tests
npm run test:frontend    # Run frontend tests
npm run test:backend     # Run backend tests

### Project Structure
```
ecommerce-starter/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React context providers
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service layer
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── setup.sh                 # Automated setup script
├── .gitignore
└── package.json
```

### API Documentation

# Authentication Endpoints
```
MethodEndpointDescriptionPOST/api/auth/registerUser registrationPOST/api/auth/loginUser loginGET/api/auth/meGet current user (requires auth)
Product Endpoints
MethodEndpointDescriptionGET/api/productsGet all productsGET/api/products/:idGet single productPOST/api/productsCreate product (admin only)PUT/api/products/:idUpdate product (admin only)DELETE/api/products/:idDelete product (admin only)
Payment Endpoints
MethodEndpointDescriptionPOST/api/payments/create-payment-intentCreate Stripe paymentPOST/api/payments/webhookStripe webhook handler
```
### Deployment

# Frontend Deployment Options
# Vercel (Recommended - Free)
```
npm install -g vercel
cd frontend
vercel --prod
```
# Netlify
```
npm install -g netlify-cli
cd frontend
npm run build
netlify deploy --prod --dir=build
```

### AWS Amplify

Connect GitHub repository
Set build command: npm run build
Set publish directory: build
Add environment variables

###  Deployment Options
# Railway

Sign up at railway.app
Create new project from GitHub
Add environment variables
Deploy automatically on push

### Render

Sign up at render.com
Create new Web Service
Connect GitHub repository
Add environment variables

### Database Options
# MongoDB Atlas (Recommended - Free tier available)

Sign up at mongodb.com/cloud/atlas
Create free M0 cluster
Get connection string
Add to MONGODB_URI in backend/.env

### Security Features

JWT authentication with httpOnly cookies
Password hashing with bcrypt (12 salt rounds)
Rate limiting on sensitive endpoints
CORS configuration
Helmet security headers
Input validation and sanitization
XSS protection
CSRF protection

### Cost Considerations
# Free Tier Options

MongoDB Atlas: Free M0 cluster (512MB)
Vercel: Unlimited personal projects
Railway: $5/month credit (sufficient for demos)
Netlify: 300 build minutes/month free

### Estimated Monthly Costs

Development/Demo: $0-10/month (free tiers)
Low Traffic: $25-50/month
Production Scale: $100+/month (with auto-scaling)

### Cost Optimization

Use free tiers for development
Monitor usage with provider dashboards
Set up billing alerts
Clean up unused resources
Use serverless options when possible

### Troubleshooting
# Common Issues
# Build fails with Tailwind errors
```
# Ensure you're using Tailwind v3, not v4
cd frontend
npm install -D tailwindcss@^3.3.6
rm -rf node_modules/.cache
npm start
```

### ResizeObserver errors in development
This is a harmless warning from Stripe Elements in React StrictMode. It won't appear in production builds. To suppress it, update frontend/src/index.tsx with the debounce code provided in the setup guide.
CORS errors

### Verify FRONTEND_URL in backend/.env matches your frontend URL
Check backend CORS configuration in server.js

### Payment failures

Verify Stripe keys are correct (test keys in development)
Check webhook secret matches Stripe dashboard
Ensure webhook endpoint is publicly accessible in production

### Database connection errors

Verify MONGODB_URI is correct
Check MongoDB Atlas network access (whitelist IP)
Ensure database user has correct permissions

### Authentication not working

Verify JWT_SECRET is at least 32 characters
Check if cookies are being sent (credentials: 'include')
Ensure frontend and backend URLs match CORS settings

### Clearing Cache
```
# Clear frontend cache
cd frontend
rm -rf node_modules/.cache
npm start

# Clear backend cache
cd backend
rm -rf node_modules/.cache
npm run dev
```
### Testing
```
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run frontend tests only
npm run test:frontend

# Run backend tests only
npm run test:backend
```
### Contributing

# Fork the repository
Create a feature branch: git checkout -b feature/amazing-feature
Commit changes: git commit -m 'Add amazing feature'
Push to branch: git push origin feature/amazing-feature
Open a Pull Request

### Code Standards

Use TypeScript for frontend code
Follow ESLint configuration
Write tests for new features
Update documentation for API changes
Use meaningful commit messages

### License
MIT License - see LICENSE file for details
Support

Issues: GitHub Issues
Discussions: GitHub Discussions
Documentation: Check README files in frontend/ and backend/ directories

### Roadmap
# Planned Features

 Product reviews and ratings
 Wishlist functionality
 Order tracking
 Email notifications
 Social authentication (Google, Facebook)
 Admin dashboard
 Inventory management
 Multi-language support
 Advanced search with filters
 Product recommendations

### Acknowledgments

Stripe for payment processing
MongoDB Atlas for database hosting
Tailwind CSS for styling framework
React for the UI framework


Made with ❤️ by [Your Name]
Star this repo if you found it helpful!