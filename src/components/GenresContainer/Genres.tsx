import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genres.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";

const Genres = () => {

    const {genres, genresVisibility} = useAppSelector(state => state.genreReducer);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const moviesByTheGenre = (genreId: number) => {
        navigate(`/movies/all?page=1&with_genres=${genreId.toString()}`);
        dispatch(genreActions.switchGenresVisibility());
    }

    return (
        <div id={'Genres'} className={`${css.Genres} ${!genresVisibility && css.Genres_hid}`}>
            <h3>Фільми по жанрам</h3>
            <hr/>

            {
                genres.map((genre) => <div
                    key={genre.id}
                    className={css.genre}
                    onClick={() => moviesByTheGenre(genre.id)}
                >
                    {genre.name}
                </div>)
            }
        </div>
    );
};

export {Genres};