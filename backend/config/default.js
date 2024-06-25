module.exports = {
    server: {
      port: 3001
    },
    database: {
      url: 'mongodb://localhost:27017/myapp'
    },
    jwt: {
      secret: 'your-secret-key',
      expiresIn: '1d'
    }
  };