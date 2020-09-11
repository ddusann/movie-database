import { createAction } from 'redux-act';

export const setMovieName = createAction<string>('SearchBox/SET_MOVIE_NAME');
export const searchRequired = createAction<string>('SearchBox/SEARCH_REQUIRED');
