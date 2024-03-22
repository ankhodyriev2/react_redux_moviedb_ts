import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import {router} from './router';
import {ContextProvider} from './hoc';
import {Provider} from 'react-redux';
import {store} from './redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ContextProvider>

        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>

    </ContextProvider>
);

