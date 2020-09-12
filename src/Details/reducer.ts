import * as actions from './actions';

import { createReducer } from "redux-act";

export interface State {
    name: string;
}

const defaultState: State = {
    name: ""
};

const reducer = createReducer<State>({}, defaultState);

reducer.on(actions.setDetails, (state, payload): State => ({
    ...state
}));

export default reducer;
