"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const db = (0, db_1.pool)();
const app = (0, express_1.default)();
dotenv_1.default.config();
app.get('/test', (req, res, next) => {
    res.send('hi');
});
app.listen(process.env.PORT, () => {
    console.log(`Firing up the projector on ${process.env.PORT}`);
});