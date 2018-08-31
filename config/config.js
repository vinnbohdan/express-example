module.exports = {
  development: {
    db: {
      host: 'localhost',
      name: process.env.DB_NAME || 'test',
      user: 'root',
      password: process.env.DB_PASSWORD || 'example',
      // jwtSecret: 'secret_word',
      // jwtExpiresIn: 24 * 60 * 60,
    },
    productPageLimit: 20,
  },
  test: {
    db: {
      host: 'localhost',
      name: 'test',
      user: 'root',
      password: 'example',
    },
  },
  production: {
    db: {
      host: process.env.DB_HOSTNAME,
      name: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      // productPageLimit: process.env.PROD_LIMIT,
      // jwtSecret: process.env.SECRET,
      // jwtExpiresIn: process.env.EXPIRES,
    },
  },
};
