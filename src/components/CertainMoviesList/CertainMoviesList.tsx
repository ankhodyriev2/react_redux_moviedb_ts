import React, {FC, PropsWithChildren} from 'react';
import {BsArrowRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

import css from './CertainMoviesList.module.css';
import {MovieCard} from "../MoviesListCard";
import {IMoviePage} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

interface IProps extends PropsWithChildren {
    movies: IMoviePage,
    typeName: string,
}

const CertainMoviesList: FC<IProps> = ({movies, typeName}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const showMovies = () => {
        dispatch(movieActions.setMovies({movies}));
        navigate(`/movies/${typeName.toLowerCase()}`);
    }

    return (
        <div className={css.CertainMoviesList}>
            <h3>{typeName}</h3>

            <div className={css.more_movies}>
                <div className={css.more_movies_btn} onClick={() => showMovies()}>
                    <p>See more </p>
                    <BsArrowRight/>
                </div>
            </div>

            <div className={css.movies_bloc}>
                {
                    movies.results.slice(0, 5).map((movie) => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export {CertainMoviesList};