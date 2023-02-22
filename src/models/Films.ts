interface filmData {
    title: string;
    rating: string;
    runTime: string;
    posterUrl: string;
    nowShowing: boolean;
}

export default class Film {
    title: string;
    rating: string;
    runTime: string;
    posterUrl: string;
    nowShowing: boolean;

    constructor(data: filmData) {
        this.title = data.title;
        this.rating = data.rating;
        this.runTime = data.runTime;
        this.posterUrl = data.posterUrl;
        this.nowShowing = data.nowShowing;
    }

    static create(): Film {
        const data: filmData = {
            title: 'Tar',
            rating: '15',
            runTime: '2.38',
            posterUrl: '',
            nowShowing: true,
        };
        return new Film(data);
    }

    static get all(): Film[] {
        const allFilms: Film[] = [];
        allFilms.push(this.create());
        return allFilms;
    }
}
