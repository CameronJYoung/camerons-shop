module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'password',
    DB: 'test',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}