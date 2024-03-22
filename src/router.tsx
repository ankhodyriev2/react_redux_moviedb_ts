import {createBrowserRouter, Navigate} from 'react-router-dom';

import {MainLayout} from './layouts';
import {MovieInfoPage, MoviesHomePage, MoviesPage, NotFound} from './pages';
import {movieService} from './services';

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <NotFound/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <MoviesHomePage/>},
            {
                path: 'movies/:movies_list',
                element: <MoviesPage/>,
            },
            {
                path: 'movies/info/:id',
                element: <MovieInfoPage/>,
                loader: ({params}) => movieService.getById(params.id as string)
            },
        ]
    }

]);

export {router};