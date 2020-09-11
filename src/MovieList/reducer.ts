import * as actions from './actions';

import type { Movie } from "./actions";
import { createReducer } from "redux-act";

export interface State {
    movies: Movie[];
}

const defaultState: State = {
    movies: []
};

const reducer = createReducer<State>({}, defaultState);

reducer.on(actions.setMovieList, (state, payload): State => ({ ...state, movies: payload }));

export default reducer;
