import {IGenre} from "./genre.inteface";

export interface IMoviePage {
    page: number,
    results: IMovie[],
    total_pages: number,
}

export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface IMovieDetail {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres: IGenre[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompanies[],
    production_countries: IProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ISpokenLanguages[],
    status: string,
    tagline: string,
    title: string,
    video: string,
    vote_average: number,
    vote_count: number,
}

interface IProductionCompanies {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}

interface IProductionCountries {
    iso_3166_1: string,
    name: string,
}

interface ISpokenLanguages {
    english_name: string,
    iso_639_1: string,
    name: string,
}