import { createAction as actions } from 'redux-act';

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

export const setMovieList = actions<MovieList>('MovieList/SET_LIST');
export const searchRequired = actions<MovieSearchRequirement>('MovieList/SEARCH_REQUIRED');
export const setLoading = actions<boolean>('MovieList/SET_LOADING');