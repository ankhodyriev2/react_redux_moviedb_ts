import React, {FC, PropsWithChildren, useState} from 'react';
import StarRatings from "react-star-ratings";

import css from './StarsRating.module.css';
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
    vote_average: number,
}

const StarsRating: FC<IProps> = ({vote_average}) => {

    const {theme} = useAppContext()
    const [rating, setRating] = useState(vote_average / 2)

    return (
        <div className={css.Rating}>
            <StarRatings
                rating={rating}
                starRatedColor={theme ? '#ff5722' : 'gold'}
                starEmptyColor={theme ? 'black' : 'white'}
                changeRating={setRating}
                numberOfStars={5}
                name='rating'
            />

        </div>
    );
};

export {StarsRating};