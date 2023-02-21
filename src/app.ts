import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { pool } from './db';

const db = pool();
const app = express();
dotenv.config();

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('hi');
});

app.get('/', (req: Request, res: Response) => {
    res.send('hi');
});

app.listen(process.env.PORT, () => {
    console.log(`Firing up the projector on ${process.env.PORT}`);
});
