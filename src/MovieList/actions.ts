import { createAction } from 'redux-act';

export interface Movie {
    id: string;
    name: string;
}

export const setMovieList = createAction<Movie[]>('MovieList/SET_LIST');
