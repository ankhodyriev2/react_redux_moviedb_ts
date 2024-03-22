const baseURL = 'https://api.themoviedb.org';

const movieLists = '/3/movie';

const urls = {
    movies: '/3/discover/movie',
    latest: movieLists + '/now_playing',
    topRated: movieLists + '/top_rated',
    popular: movieLists + '/popular',
    upcoming: movieLists + '/upcoming',
    byId: (id: string) => `${movieLists}/${id}`,
    genres: '/3/genre/movie/list',
    search: '/3/search/movie',
    image: 'https://image.tmdb.org/t/p/w1280',
}

export {baseURL, urls}