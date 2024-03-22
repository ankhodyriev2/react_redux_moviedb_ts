import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {IMoviePage, IQueryParams} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    allMoviesPage: IMoviePage;
    popularMoviesPage: IMoviePage;
    topRatedMoviesPage: IMoviePage;
    upcomingMoviesPage: IMoviePage;
    latestMoviesPage: IMoviePage;
    query: IQueryParams;
    error: boolean;
}

const initialState: IState = {
    allMoviesPage: null,
    popularMoviesPage: null,
    topRatedMoviesPage: null,
    upcomingMoviesPage: null,
    latestMoviesPage: null,
    query: {},
    error: false,
}

//Change all by one

const getAllMovies = createAsyncThunk<{ movies: IMoviePage, page: string }, { movies_list: string, query: string }>(
    'movieSlice/getAllMovies',
    async ({movies_list, query}, {dispatch, rejectWithValue}) => {
        try {
            let movies: IMoviePage;

            switch (movies_list) {
                case 'all':
                    await movieService
                        .getAll(query).then(({data}) => movies = data);
                    break;
                case 'popular':
                    await movieService
                        .getPopular(query).then(({data}) => {
                            movies = data;
                            dispatch(movieActions.setPopularMovies({movies: data}));
                        });
                    break;
                case 'topRated':
                    await movieService
                        .getTopRated(query).then(({data}) => {
                            movies = data;
                            dispatch(movieActions.setTopRatedMovies({movies: data}));
                        });
                    break;
                case 'upcoming':
                    await movieService
                        .getUpcoming(query).then(({data}) => {
                            movies = data;
                            dispatch(movieActions.setUpcomingMovies({movies: data}));
                        });
                    break;
                case 'latest':
                    await movieService
                        .getLatest(query).then(({data}) => {
                            movies = data;
                            dispatch(movieActions.setLatestMovies({movies: data}));
                        });
                    break;
                case 'search':
                    await movieService.search(query)
                        .then(({data}) => movies = data);
                    break;
            }

            return {movies, page: movies_list};
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action: { payload: { movies: IMoviePage } }) => {
            state.allMoviesPage = action.payload.movies;
        },
        setPopularMovies: (state, action: { payload: { movies: IMoviePage } }) => {
            state.popularMoviesPage = action.payload.movies;
        },
        setTopRatedMovies: (state, action: { payload: { movies: IMoviePage } }) => {
            state.topRatedMoviesPage = action.payload.movies;
        },
        setUpcomingMovies: (state, action: { payload: { movies: IMoviePage } }) => {
            state.upcomingMoviesPage = action.payload.movies;
        },
        setLatestMovies: (state, action: { payload: { movies: IMoviePage } }) => {
            state.latestMoviesPage = action.payload.movies;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                console.log(action.payload);
                state.allMoviesPage = action.payload.movies;
            })
            .addMatcher(isFulfilled(
                getAllMovies,
            ), (state, actions) => {
                state.error = false;
            })
            .addMatcher(isRejected(
                getAllMovies,
            ), state => {
                state.error = true;
            })
    }
});

const {
    reducer: movieReducer,
    actions,
} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
};

export {
    movieReducer,
    movieActions,
}