import {useContext} from "react";
import {useSearchParams} from "react-router-dom";

import {Context} from "../hoc";
import {IContextState, IUseContext} from "../interfaces";
import {urls} from "../constants";

const useAppContext = (): IUseContext => {
    const [state, setState] = useContext(Context);
    const [, setSearchParams] = useSearchParams(state.queryParams);

    return {
        theme: state.theme,
        setTheme: () => setState((prev: IContextState) => ({...prev, theme: !prev.theme})),

        posterPath: state.posterPath,
        setPosterPath: (value: string) => setState((prev: IContextState) => (
            {
                ...prev,
                posterPath: `${urls.image}/${value}`
            }
        )),

        queryParams: state.queryParams,
        setQueryParams: (value: {}) => {
            const params = {...state.queryParams, ...value};

            setSearchParams(params);
            setState((prev: IContextState) => ({...prev, queryParams: {...prev.queryParams, ...value}}))
        }
    };
};

export {useAppContext};

