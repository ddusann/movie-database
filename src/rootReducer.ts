import { RouterState, connectRouter } from "connected-react-router";

import type { State as FavouriteButtonState } from "./FavouriteButton";
import type { State as FavouriteListState } from "./FavouriteList";
import { History } from 'history';
import type { State as MovieListState } from "./MovieList";
import type { State as SearchBoxState } from "./SearchBox";
import { combineReducers } from 'redux';
import { reducer as favouriteButtonReducer } from "./FavouriteButton";
import { reducer as favouriteListReducer } from "./FavouriteList";
import { reducer as movieListReducer } from "./MovieList";
import { reducer as searchBoxReducer } from "./SearchBox";

export interface RootState {
    favouriteButton: FavouriteButtonState;
    router: RouterState;
    searchBox: SearchBoxState;
    movieList: MovieListState;
    favouriteList: FavouriteListState;
}

export default (history: History) => {
    return combineReducers<RootState>({
        router: connectRouter(history),
        searchBox: searchBoxReducer,
        movieList: movieListReducer,
        favouriteList: favouriteListReducer,
        favouriteButton: favouriteButtonReducer
    });
};
