import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { getAllFilms } from './controllers/filmsController';
import { pool } from './db';

const db = pool();
const app = express();
dotenv.config();

app.get('/films', (req: Request, res: Response) => {
    getAllFilms(req, res);
});

app.listen(process.env.PORT, () => {
    console.log(`Firing up the projector on ${process.env.PORT}`);
});
