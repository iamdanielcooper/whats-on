import { Request, Response } from 'express';
import { default as Films } from '../models/Films';

const getAllFilms = (req: Request, res: Response) => {
    res.send(Films.all);
};

export { getAllFilms };
