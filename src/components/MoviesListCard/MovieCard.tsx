import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import css from './MoviesListCard.module.css';
import {IMovie} from "../../interfaces";
import {StarsRating} from '../StarsRating'
import {urls} from "../../constants";
import {useAppContext, useAppSelector} from "../../hooks";

interface IProps extends PropsWithChildren {
    movie: IMovie,
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {
        id,
        original_title,
        poster_path,
        vote_average,
        genre_ids,
    } = movie;

    const {setPosterPath} = useAppContext();
    const {genres} = useAppSelector(state => state.genreReducer);
    const navigate = useNavigate();

    const moveToInfoPage = () => {
        navigate(`/movies/info/${id}`);
        setPosterPath(poster_path);
    }

    return (
        <div className={css.MovieCard} onClick={() => moveToInfoPage()}>
            {
                poster_path
                    ? <img src={`${urls.image}/${poster_path}`} alt={original_title}/>
                    : <img
                        src="data:image/png;base64,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"
                        alt="empty"
                    />
            }

            <div className={css.common_info}>
                <StarsRating vote_average={vote_average}/>
                <b>{original_title}</b>
            </div>

            {
                genres.length && <div className={css.genres_badge}>
                    {genre_ids.map((genre) => <div key={genre}>{genres.find(item => item.id === genre).name}</div>)}
                </div>
            }
        </div>
    );
};

export {MovieCard};