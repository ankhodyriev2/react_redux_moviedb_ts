import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import css from './Poster.module.css';
import {useAppContext, useAppDispatch} from "../../hooks";
import {urls} from "../../constants";
import {movieActions} from "../../redux";
import {IMovie} from "../../interfaces";


interface IProps extends PropsWithChildren {
    movies: IMovie[];
}

const PosterPreview: FC<IProps> = ({movies}) => {
    const {theme, setPosterPath} = useAppContext();
    const dispatch = useAppDispatch();

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        dispatch(movieActions.getAllMovies({movies_list: 'latest', query: ''}))
    }, []);

    useEffect(() => {
        if (movies.length) {
            setPosterPath(movies[count].poster_path);
        }
    }, [count, movies.length]);

    const prev = () => {
        setCount(prevState => prevState !== 0 ? --prevState : movies.length - 1);
    };

    const next = () => {
        setCount(nextState => nextState !== movies.length - 1 ? ++nextState : 0);
    };

    return (
        <div>

            {movies[count] &&
                <div className={`${css.Poster} ${theme && css.Poster_light}`}
                     style={{
                         backgroundImage: "url(" + `${urls.image}/${movies[count].backdrop_path}` + ")"
                     }}
                >
                    <div className={css.short_description}>
                        <div className={css.movie_badge}>New Movie</div>
                        <h1>{movies[count].original_title}</h1>
                        <div>{movies[count].overview}</div>
                        <div className={css.info_btn}>More Info -{'>'}</div>
                    </div>

                    <div onClick={() => prev()} className={css.prev}><AiOutlineLeft/></div>
                    <div onClick={() => next()} className={css.next}><AiOutlineRight/></div>

                </div>
            }


        </div>
    );
};

export {PosterPreview};