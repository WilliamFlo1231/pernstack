const { Pool } = require('pg');

const pool = new Pool({
    user: 'will',
    password: 'addidases',
    host: 'localhost',
    port: 5432,
    database: 'tasksdb'
})

module.exports = pool;