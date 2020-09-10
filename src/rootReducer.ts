import { RouterState, connectRouter } from "connected-react-router";

import { History } from 'history';
import type { State as SearchBoxState } from "./SearchBox";
import { combineReducers } from 'redux';
import { reducer as searchBoxReducer } from "./SearchBox";

export interface RootState {
    router: RouterState;
    searchBox: SearchBoxState;
}

export default (history: History) => {
    return combineReducers<RootState>({
        router: connectRouter(history),
        searchBox: searchBoxReducer
    });
};
