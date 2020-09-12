import { createAction as movieListActions } from 'redux-act';

export interface Movie {
    id: string;
    name: string;
}

interface MovieList {
    list: Movie[];
    totalCount: number;
}

export interface MovieSearchRequirement {
    name: string;
    page: number;
}

export const setMovieList = movieListActions<MovieList>('MovieList/SET_LIST');
export const searchRequired = movieListActions<MovieSearchRequirement>('MovieList/SEARCH_REQUIRED');
export const setLoading = movieListActions<boolean>('MovieList/SET_LOADING');