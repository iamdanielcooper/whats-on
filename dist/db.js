"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg = require('pg');
let pool;
var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
};
const getPool = () => {
    if (pool)
        return pool;
    pool = new pg.Pool(config);
    return pool;
};
exports.pool = getPool;
