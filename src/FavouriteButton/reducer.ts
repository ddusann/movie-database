import * as actions from './actions';

import { createReducer } from "redux-act";

export interface State {
    show: boolean;
}

const defaultState: State = {
    show: false
};

const reducer = createReducer<State>({}, defaultState);

reducer.on(actions.showFavourites, (state, payload): State => ({ ...state, show: payload }));

export default reducer;
