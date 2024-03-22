import React, {FC, PropsWithChildren} from 'react';
import {useLoaderData,} from "react-router-dom";

import {MovieInfo} from "../components";
import {IMovieDetail} from "../interfaces";

interface IProps extends PropsWithChildren {
}

const MovieInfoPage: FC<IProps> = () => {

    const {data} = useLoaderData() as { data: IMovieDetail };

    return (
        <div>
            <MovieInfo movie={data}/>
        </div>
    );
};

export {MovieInfoPage};