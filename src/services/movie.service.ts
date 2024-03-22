import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovieDetail, IMoviePage} from "../interfaces";

const movieService = {
    getAll: (queryParams: string): IRes<IMoviePage> => axiosService.get(urls.movies + queryParams).then(),
    getLatest: (queryParams: string): IRes<IMoviePage> => axiosService.get(urls.latest + queryParams).then(),
    getPopular: (queryParams: string): IRes<IMoviePage> => axiosService.get(urls.popular + queryParams).then(),
    getTopRated: (queryParams: string): IRes<IMoviePage> => axiosService.get(urls.topRated + queryParams).then(),
    getUpcoming: (queryParams: string): IRes<IMoviePage> => axiosService.get(urls.upcoming + queryParams).then(),
    getById: (id: string): IRes<IMovieDetail> => axiosService.get(urls.byId(id)).then(),
    search: (queryParams: string): IRes<IMoviePage> => axiosService.get(urls.search + queryParams).then(),
};

export {movieService};