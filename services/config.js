const env = process.env;

const config = {
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'root',
    password: '',
    database: env.DB_NAME || 'db_hotels',
    port: 3306
};






module.exports = config;