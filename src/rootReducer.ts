import { RouterState, connectRouter } from "connected-react-router";

import { History } from 'history';
import { combineReducers } from 'redux';

export interface IRootState {
    router: RouterState;
}

export default (history: History) => {
    return combineReducers<IRootState>({
        router: connectRouter(history)
    });
};
