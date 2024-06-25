module.exports = {
    server: {
      port: process.env.TEST_PORT || 3002
    },
    database: {
      url: process.env.TEST_MONGODB_URI || 'mongodb://localhost:27017/myapp_test'
    },
    jwt: {
      secret: process.env.TEST_JWT_SECRET || 'test-secret-key',
      expiresIn: '1h'
    }
  };