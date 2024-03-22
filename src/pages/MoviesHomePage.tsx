import React, {useEffect} from 'react';

import {CertainMoviesList, PosterPreview} from "../components";
import {movieActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";

const MoviesHomePage = () => {
    const {
        popularMoviesPage,
        topRatedMoviesPage,
        upcomingMoviesPage,
        latestMoviesPage,
    } = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!latestMoviesPage) {
            dispatch(movieActions.getAllMovies({movies_list: 'latest', query: ''}));
        }
    }, [latestMoviesPage, dispatch]);

    useEffect(() => {
        if (!popularMoviesPage) {
            dispatch(movieActions.getAllMovies({movies_list: 'popular', query: ''}));
        }
    }, [popularMoviesPage, dispatch]);

    useEffect(() => {
        if (!topRatedMoviesPage) {
            dispatch(movieActions.getAllMovies({movies_list: 'topRated', query: ''}));
        }
    }, [topRatedMoviesPage, dispatch]);

    useEffect(() => {
        if (!upcomingMoviesPage) {
            dispatch(movieActions.getAllMovies({movies_list: 'upcoming', query: ''}));
        }
    }, [upcomingMoviesPage, dispatch]);


    return (
        <div>
            {latestMoviesPage && <PosterPreview movies={latestMoviesPage.results}/>}
            {popularMoviesPage && <CertainMoviesList movies={popularMoviesPage} typeName={'Popular'}/>}
            {topRatedMoviesPage && <CertainMoviesList movies={topRatedMoviesPage} typeName={'TopRated'}/>}
            {upcomingMoviesPage && <CertainMoviesList movies={upcomingMoviesPage} typeName={'Upcoming'}/>}
        </div>
    );
};

export {MoviesHomePage};