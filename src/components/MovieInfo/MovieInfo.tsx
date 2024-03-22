import React, {FC, PropsWithChildren} from 'react';

import css from './MovieInfo.module.css';
import {IMovieDetail} from "../../interfaces";
import {urls} from "../../constants";
import {StarsRating} from "../StarsRating";

interface IProps extends PropsWithChildren {
    movie: IMovieDetail;
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {
        adult,
        backdrop_path,
        belongs_to_collection,
        budget,
        genres,
        homepage,
        id,
        imdb_id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        production_companies,
        production_countries,
        release_date,
        revenue,
        runtime,
        spoken_languages,
        status,
        tagline,
        title,
        video,
        vote_average,
        vote_count,
    } = movie;

    console.log(movie);

    return (
        <div className={css.MovieInfo}>

            <img src={`${urls.image}/${poster_path}`} alt={original_title}/>

            <div className={css.movie_details}>

                <h3>{original_title}</h3>
                <hr/>

                <div>
                    <b>Genres:</b> {genres.map(genre => <span key={genre.id}>{genre.name}, {' '}</span>)}
                </div>

                <div><b>Original language:</b> {original_language}</div>
                <div><b>Release date:</b> {release_date}</div>

                <div>
                    <b>Production countries:</b> {
                    production_countries.map((country, index) => <span key={index}>
                        {country.name}, {' '}
                    </span>)
                }
                </div>

                <div>
                    <b>Production companies:</b> {
                    production_companies.map((company) => <span key={company.id}>
                        {company.name}, {' '}
                    </span>)
                }
                </div>

                <div>
                    <b>Spoken languages:</b> {
                    spoken_languages.map((language, index) => <span key={index}>
                        {language.english_name}, {' '}
                    </span>)
                }
                </div>

                <div><b>Overview :</b> {overview}</div>
                <div><b>Homepage:</b> <a href={homepage}>{homepage}</a></div>

                <div className={css.logo_companies}>
                    {
                        production_companies.map((company) => <span key={company.id}>
                        <img src={`${urls.image}/${company.logo_path}`} alt=""/>
                    </span>)
                    }
                </div>

                <div className={css.right_bloc}>
                    <div className={css.status_badge}>{status}</div>
                    <StarsRating vote_average={vote_average}/>
                </div>

            </div>

        </div>
    );
};

export {MovieInfo};