const request = require('supertest');
const app = require('../server');
const Product = require('../models/Product');
const User = require('../models/User');

describe('Product Endpoints', () => {
  let adminToken, userToken;
  
  beforeEach(async () => {
    await Product.deleteMany({});
    await User.deleteMany({});
    
    // Create admin user
    const adminUser = new User({
      email: 'admin@example.com',
      password: 'password123',
      firstName: 'Admin',
      lastName: 'User',
      isAdmin: true
    });
    await adminUser.save();
    
    // Create regular user
    const regularUser = new User({
      email: 'user@example.com',
      password: 'password123',
      firstName: 'Regular',
      lastName: 'User'
    });
    await regularUser.save();
    
    // Get tokens
    const adminResponse = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@example.com', password: 'password123' });
    adminToken = adminResponse.body.token;
    
    const userResponse = await request(app)
      .post('/api/auth/login')
      .send({ email: 'user@example.com', password: 'password123' });
    userToken = userResponse.body.token;
  });

  describe('GET /api/products', () => {
    it('should return paginated products', async () => {
      // Create test products
      await Product.create([
        { name: 'Product 1', price: 10, description: 'Test product 1', category: 'electronics', inventory: 5 },
        { name: 'Product 2', price: 20, description: 'Test product 2', category: 'books', inventory: 10 }
      ]);

      const response = await request(app)
        .get('/api/products')
        .expect(200);

      expect(response.body.products).toHaveLength(2);
      expect(response.body.total).toBe(2);
    });
  });

  describe('POST /api/products', () => {
    it('should create product as admin', async () => {
      const productData = {
        name: 'New Product',
        price: 25,
        description: 'A new test product',
        category: 'electronics',
        inventory: 15
      };

      const response = await request(app)
        .post('/api/products')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(productData)
        .expect(201);

      expect(response.body.name).toBe(productData.name);
    });

    it('should not create product as regular user', async () => {
      const productData = {
        name: 'New Product',
        price: 25,
        description: 'A new test product',
        category: 'electronics',
        inventory: 15
      };

      await request(app)
        .post('/api/products')
        .set('Authorization', `Bearer ${userToken}`)
        .send(productData)
        .expect(403);
    });
  });
});