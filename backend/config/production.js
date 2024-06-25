module.exports = {
    server: {
      port: process.env.PORT || 3001
    },
    database: {
      url: process.env.MONGODB_URI
    },
    jwt: {
      secret: process.env.JWT_SECRET
    }
  };