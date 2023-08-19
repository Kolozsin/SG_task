import { createReducer, on } from '@ngrx/store';
import { loadUsers, login, logout } from './login.actions';
import { User } from '../Model/user';


export interface AppState {
    loggedInState: boolean;
    users: User[];
  }
  
export const initialState: AppState = {
    loggedInState: false,
    users: []
  };


export const loggedInReducer = createReducer(
    initialState,
    on(login, state => ({ ...state, loggedInState: true })),
    on(logout, state => ({ ...state, loggedInState: false })),
    on(loadUsers,(state, { users }) => ({ ...state, users }))
);