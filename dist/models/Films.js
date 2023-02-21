"use strict";
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
        const newFilm = new Film(data);
        // Add new film to database
    }
}
