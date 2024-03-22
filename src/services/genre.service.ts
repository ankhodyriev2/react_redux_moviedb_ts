import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGenre} from "../interfaces";
import {IRes} from "../types";

const genreService = {
    getAll: (): IRes<{genres: IGenre[]}> => axiosService.get(urls.genres).then(),
};

export {genreService};