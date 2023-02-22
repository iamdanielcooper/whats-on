"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Film {
    constructor(data) {
        this.title = data.title;
        this.rating = data.rating;
        this.runTime = data.runTime;
        this.posterUrl = data.posterUrl;
        this.nowShowing = data.nowShowing;
    }
    static create() {
        const data = {
            title: 'Tar',
            rating: '15',
            runTime: '2.38',
            posterUrl: '',
            nowShowing: true,
        };
        return new Film(data);
    }
    static get all() {
        const allFilms = [];
        allFilms.push(this.create());
        return allFilms;
    }
}
exports.default = Film;
