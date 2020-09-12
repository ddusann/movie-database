import { createAction as actions } from 'redux-act';

export const detailsRequired = actions<string>('Details/DETAILS_REQUIRED');
export const setDetails = actions('Details/SET_DETAILS');