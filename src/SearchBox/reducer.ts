import * as actions from './actions';

import { createReducer } from "redux-act";

export interface State {
    movieName: string;
}

const defaultState: State = {
    movieName: ""
};

const reducer = createReducer<State>({}, defaultState);

reducer.on(actions.setMovieName, (state, payload): State => ({ ...state, movieName: payload }));

export default reducer;
