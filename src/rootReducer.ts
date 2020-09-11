import { RouterState, connectRouter } from "connected-react-router";

import { History } from 'history';
import type { State as MovieListState } from "./MovieList";
import type { State as SearchBoxState } from "./SearchBox";
import { combineReducers } from 'redux';
import { reducer as movieListReducer } from "./MovieList";
import { reducer as searchBoxReducer } from "./SearchBox";

export interface RootState {
    router: RouterState;
    searchBox: SearchBoxState;
    movieList: MovieListState;
}

export default (history: History) => {
    return combineReducers<RootState>({
        router: connectRouter(history),
        searchBox: searchBoxReducer,
        movieList: movieListReducer
    });
};
