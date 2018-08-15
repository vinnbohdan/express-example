module.exports = {
  development: {
    db: {
      host: 'localhost',
      name: 'test',
      user: 'root',
      password: '',
    },
  },
  test: {
    db: {
      host: 'localhost',
      name: 'test',
      user: 'root',
      password: '',
    },
  },
  production: {
    db: {

      host: process.env.DB_HOSTNAME,
      name: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  },
};
