module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        database: 'offers',
        host: '127.0.0.1', // equates to `localhost`, e.g., the local machine
        user: 'postgres',
        password: 'Msm98t8576@',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
    production: {
      client: 'postgresql',
      connection: {
        database: 'to-be-determined',
        user: 'username',
        password: 'password',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
  }