import React from 'react';
import {ImSun} from "react-icons/im";
import {RxMoon} from "react-icons/rx";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {useAppContext, useAppDispatch} from "../../hooks";

import {genreActions, movieActions} from "../../redux";

const Header = () => {

    const {setTheme, theme} = useAppContext();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const showMovies = async (mov: string) => {

        const {meta: {requestStatus}} = await dispatch(movieActions.getAllMovies({
            movies_list: mov,
            query: '',
        }));

        if (requestStatus === 'fulfilled') {
            navigate(`/movies/${mov}`);
        }
    };

    return (
        <div className={css.Header}>

            <div className={css.nav_side}>

                <div className={css.nav_bar} onClick={() => dispatch(genreActions.switchGenresVisibility())}>
                    <span className={`${css.nav_bar_element} ${theme ? css.nav_bar_light : css.nav_bar_dark}`}></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={css.nav_movies} onClick={() => showMovies('all')}>https://www.themoviedb.org/</div>

            </div>

            <div className={css.right_side}>

                <div onClick={() => setTheme()} className={css.light_dark_btn}>
                    {!theme ? <ImSun/> : <RxMoon/>}
                </div>

            </div>
        </div>
    );
};

export {Header};