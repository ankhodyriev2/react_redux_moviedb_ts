import React, {useEffect} from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import {useLocation, useParams} from "react-router-dom";

import css from './MoviesListCard.module.css';
import {MovieCard} from "./MovieCard";
import {useAppContext, useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const MoviesListCard = () => {

    const {setQueryParams} = useAppContext();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {movies_list} = useParams();

    const queryObj = new URLSearchParams(location.search);
    let page = Number(queryObj.get('page')) || 1;
    let with_genres = Number(queryObj.get('with_genres')) || null;
    let query = queryObj.get('query') || '';

    const {allMoviesPage} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getAllMovies({movies_list: movies_list || 'all', query: location.search}));
        window.scrollTo(0, 0);
        setQueryParams({page, with_genres, query});
    }, [page, with_genres, query]);

    const prev = () => {
        if (page !== 1) {
            page--;
            setQueryParams({page: page.toString()});
        }
    };

    const next = () => {
        if (page !== (movies_list === 'search' ? allMoviesPage.total_pages : '500')) {
            page++;
            setQueryParams({page: page.toString()});
        }
    };

    return (
        <div>
            <h1> Фільми </h1>
            <hr/>
            {allMoviesPage &&
                <div className={css.MoviesListCard}>

                    <div className={css.moviesList}>
                        {allMoviesPage.results.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                    </div>
                    <div className={css.pagination_bloc}>
                        <div className={css.prev} onClick={() => prev()}><AiFillCaretLeft/></div>
                        <div className={css.pages}>
                            <span onClick={() => prev()}>{page -1}</span>
                            <span>{page}</span>
                            <span onClick={() => next()}>{page +1}</span>
                        </div>
                        <div className={css.next} onClick={() => next()}><AiFillCaretRight/></div>
                    </div>
                </div>
            }
        </div>
    );
};

export {MoviesListCard};