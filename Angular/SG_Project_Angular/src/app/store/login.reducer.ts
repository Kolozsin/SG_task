import { createReducer, on } from '@ngrx/store';
import { login, logout } from './login.actions';

export const initialState : boolean = false;


export const loggedInReducer = createReducer(
    initialState,
    on(login,(state) => true),
    on(logout,(state) => false)
);