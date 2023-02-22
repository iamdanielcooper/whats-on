"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFilms = void 0;
const Films_1 = __importDefault(require("../models/Films"));
const getAllFilms = (req, res) => {
    res.send(Films_1.default.all);
};
exports.getAllFilms = getAllFilms;
