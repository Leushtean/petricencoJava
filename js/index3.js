// 19. Практика, ч.1. Начинаем создавать приложение

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('One of the last watched movies?', ''),
    b = prompt('How many starts you give on?', ''),
    c = prompt('One of the last watched movies?', ''),
    d = prompt('How many starts you give on?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);