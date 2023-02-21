import { Pool } from 'pg';
var pg = require('pg');

let pool: Pool;

var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
};

const getPool = () => {
    if (pool) return pool;
    pool = new pg.Pool(config);
    return pool;
};

export { getPool as pool };
