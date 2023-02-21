interface filmData {
    title: string;
    rating: string;
    runTime: string;
    posterUrl: string;
    nowShowing: boolean;
}

class Film {
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

    static create() {
        const data: filmData = {
            title: 'Tar',
            rating: '15',
            runTime: '2.38',
            posterUrl: '',
            nowShowing: true,
        };
        const newFilm: Film = new Film(data);

        // Add new film to database
    }
}
