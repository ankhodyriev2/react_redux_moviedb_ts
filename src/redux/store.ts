import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";

const store = configureStore({
    reducer: {
        movieReducer,
        genreReducer,
    }
});

type RootStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {
    RootStore,
    AppDispatch,
}

export {
    store,
}