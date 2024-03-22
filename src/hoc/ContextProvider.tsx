import {createContext, FC, PropsWithChildren, useState} from "react";

import {IContextState} from "../interfaces";

const Context = createContext(null);

interface IProps extends PropsWithChildren {
}

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useState<IContextState>({
        theme: false,
        posterPath: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9BfGggdaTOgdKJ7MdiBVjGKy3IE.jpg',
        queryParams: {},
    });

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
};

export {ContextProvider, Context}