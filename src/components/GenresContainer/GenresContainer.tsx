import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";

const GenresContainer = () => {

    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, []);

    const moviesByTheGenre = (genreId: number) => {
        navigate(`/movies/all?page=1&with_genres=${genreId.toString()}`);
    }

    return (
        <div>
            {
                genres.slice(0,4).map((genre) => <div
                    key={genre.id}
                    onClick={() => moviesByTheGenre(genre.id)}
                >
                </div>)
            }
        </div>
    );
};

export {GenresContainer};