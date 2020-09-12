import * as actions from './actions';

import { createReducer } from "redux-act";

export interface State {
    page: number;
}

const defaultState: State = {
    page: 1
};

const reducer = createReducer<State>({}, defaultState);

reducer.on(actions.setPage, (state, payload): State => ({ ...state, page: payload }));

export default reducer;
