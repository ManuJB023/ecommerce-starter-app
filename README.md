# E-commerce Starter App

A production-ready full-stack e-commerce application built with React, Node.js, and deployed on AWS. Features modern UI/UX, secure payment processing, and scalable cloud infrastructure.

## 🚀 Demo

This project was successfully deployed and tested with:
- **Frontend**: AWS Amplify hosting
- **Backend API**: Railway deployment  
- **Database**: MongoDB Atlas

*Note: Live demo links have been removed as AWS resources were cleaned up to avoid ongoing costs. The complete deployment guide below shows how to recreate the full infrastructure.*

## ✨ Features

### 🎨 Frontend (React + TypeScript)
- **Modern UI**: Responsive design with Tailwind CSS and smooth animations
- **Advanced Header**: Auto-hiding navigation with backdrop blur and scroll effects
- **Product Catalog**: Browse, search, and filter products with pagination
- **Shopping Cart**: Persistent cart with real-time updates
- **User Authentication**: Secure registration, login, and profile management
- **Stripe Checkout**: Complete payment integration with secure processing
- **Mobile Responsive**: Optimized for all device sizes

### 🔧 Backend (Node.js + Express)
- **RESTful API**: Clean, documented endpoints with proper error handling
- **JWT Authentication**: Secure token-based authentication with bcrypt
- **MongoDB Integration**: Efficient data storage with Mongoose ODM
- **Stripe Payments**: Complete payment processing with webhook support
- **Security Hardened**: CORS, helmet, input validation, and rate limiting
- **Admin Features**: Product management and order tracking

### ☁️ Infrastructure & DevOps
- **AWS Amplify**: Frontend hosting with CDN and environment management
- **Railway**: Backend deployment with auto-scaling and monitoring
- **MongoDB Atlas**: Cloud database with automated backups
- **GitHub Actions**: CI/CD pipeline with automated testing and deployment
- **Environment Management**: Secure handling of secrets and configurations

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

## 📋 Tech Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for responsive styling
- **React Router** for client-side routing
- **Context API** for state management
- **Stripe Elements** for payment forms
- **Axios** for API communication

### Backend
- **Node.js** with Express framework
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Stripe API** for payment processing
- **bcryptjs** for password hashing
- **Helmet & CORS** for security

### DevOps
- **AWS Amplify** for frontend deployment
- **Railway** for backend hosting
- **GitHub Actions** for CI/CD
- **MongoDB Atlas** for database hosting

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Stripe account
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ecommerce-starter.git
cd ecommerce-starter

# Install all dependencies
npm run install:all

# Set up environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# Start development servers
npm run dev
```

### Environment Configuration

**Backend (.env):**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

**Frontend (.env.local):**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

## 🚀 Deployment

## 🚀 Deployment Options

### Frontend Hosting
| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **AWS Amplify** | 1000 build min/month | $0.01/min after | Enterprise features |
| **Vercel** | Unlimited personal | $20/month team | Next.js optimization |
| **Netlify** | 300 build min/month | $19/month | Static sites |
| **GitHub Pages** | Free for public repos | N/A | Simple demos |

### Backend Hosting
| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **Railway** | $5/month hobby | $20/month pro | Node.js apps |
| **Heroku** | None (discontinued) | $7/month basic | Traditional hosting |
| **Render** | 750 hours/month free | $7/month paid | Docker support |
| **AWS ECS/Fargate** | Limited free tier | Pay-per-use | Enterprise scale |

### Database Options
| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **MongoDB Atlas** | 512MB M0 cluster | $9/month M2 | Document database |
| **PlanetScale** | 1 database | $29/month | MySQL serverless |
| **Supabase** | 500MB + 2GB bandwidth | $25/month | PostgreSQL + auth |

### Recommended Setups

**Free Tier (Development)**
- Frontend: Vercel or Netlify
- Backend: Render free tier
- Database: MongoDB Atlas M0

**Low Cost ($10-15/month)**
- Frontend: Vercel Pro
- Backend: Railway hobby
- Database: MongoDB Atlas M2

**Production Scale ($50+/month)**
- Frontend: AWS Amplify
- Backend: AWS ECS with auto-scaling
- Database: MongoDB Atlas dedicated cluster

## 🧪 Testing

```bash
# Run all tests
npm test

# Backend tests only
npm run test:backend

# Frontend tests only
npm run test:frontend

# Run tests with coverage
npm run test:coverage
```

## 📊 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/me` | Get current user |

### Product Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product (admin) |
| PUT | `/api/products/:id` | Update product (admin) |
| DELETE | `/api/products/:id` | Delete product (admin) |

### Payment Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payments/create-payment-intent` | Create Stripe payment |
| POST | `/api/payments/webhook` | Stripe webhook handler |

## 🔒 Security Features

- **Authentication**: JWT tokens with secure httpOnly cookies
- **Password Security**: bcrypt hashing with salt rounds
- **API Security**: Rate limiting, CORS, and helmet protection
- **Payment Security**: PCI-compliant Stripe integration
- **Data Validation**: Input sanitization and schema validation
- **Environment Security**: Secure secret management

## 📈 Performance Optimizations

- **Frontend**: Code splitting, lazy loading, and image optimization
- **Backend**: Database indexing, connection pooling, and caching
- **Infrastructure**: CDN delivery, auto-scaling, and load balancing

## 🛡️ Monitoring & Logging

- **Application Logs**: Structured logging with Morgan
- **Error Tracking**: Comprehensive error handling and reporting
- **Health Checks**: API health monitoring endpoints
- **Performance Metrics**: Response time and throughput monitoring

## 💰 Cost Considerations

This project uses several cloud services. Here's a breakdown of potential costs:

### Free Tier Options
- **MongoDB Atlas**: Free M0 cluster (512MB storage)
- **Railway**: $5/month for hobby plan (sufficient for demo)
- **AWS Amplify**: Free tier includes 1000 build minutes/month
- **Stripe**: No monthly fees, only transaction fees (2.9% + 30¢)

### Estimated Monthly Costs
- **Development/Demo**: $0-10/month (using free tiers)
- **Low Traffic Production**: $25-50/month
- **High Traffic Production**: $100+/month (with scaling)

### Cost Optimization Tips
1. Use free tiers for development and testing
2. Monitor usage in AWS Cost Explorer
3. Set up billing alerts for budget management
4. Clean up unused resources regularly
5. Consider serverless alternatives for lower traffic

### Resource Cleanup
When done with the project, remember to:
- Delete AWS Amplify apps
- Remove Railway deployments
- Pause/delete MongoDB Atlas clusters
- Cancel any paid service subscriptions

```bash
# Run the database seeding script
cd backend
node seed-data.js
```

### Creating Admin Users

Admin users must be manually promoted in the database:
```javascript
// In MongoDB, update user to admin
db.users.updateOne(
  { email: "admin@example.com" }, 
  { $set: { isAdmin: true } }
)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Use TypeScript for new frontend code
- Follow ESLint configuration
- Write tests for new features
- Update documentation for API changes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Troubleshooting

### Common Issues

**CORS Errors**: Verify backend URL in frontend environment variables
**Payment Failures**: Check Stripe keys and webhook configuration
**Database Connection**: Verify MongoDB Atlas network access and credentials
**Build Failures**: Clear node_modules and reinstall dependencies

### Getting Help

- Check [Issues](https://github.com/yourusername/ecommerce-starter/issues) for known problems
- Create a [New Issue](https://github.com/yourusername/ecommerce-starter/issues/new) for bugs
- Review the [Wiki](https://github.com/yourusername/ecommerce-starter/wiki) for guides

## 🗺️ Roadmap

### Version 2.0
- [ ] Multi-vendor marketplace
- [ ] Advanced search with Elasticsearch
- [ ] Real-time notifications
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Social authentication
- [ ] Product reviews and ratings
- [ ] Inventory management system
- [ ] Multi-language support
- [ ] Advanced shipping options

## 👨‍💻 Author

**Manuel Bauka**
- GitHub: [@ManuJB023](https://github.com/ManuJB023)
- LinkedIn: [manuel-bauka](https://www.linkedin.com/in/manuel-bauka)

## 🙏 Acknowledgments

- [Stripe](https://stripe.com) for payment processing
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for database hosting
- [AWS Amplify](https://aws.amazon.com/amplify/) for frontend hosting
- [Railway](https://railway.app) for backend deployment
- [Tailwind CSS](https://tailwindcss.com) for styling framework

---

⭐ Star this repository if you found it helpful!