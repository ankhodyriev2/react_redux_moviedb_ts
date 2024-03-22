import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[];
    genresVisibility: boolean;
}

const initialState: IState = {
    genres: [],
    genresVisibility: false,
}

const getAll = createAsyncThunk<{genres: IGenre[]}, void>(
    '',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return {genres: data.genres}

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        switchGenresVisibility: state => {
            state.genresVisibility = !state.genresVisibility;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            });
    }
});

const {
    reducer: genreReducer,
    actions,
} = genreSlice;

const genreActions = {...actions, getAll};

export {
    genreReducer,
    genreActions,
}