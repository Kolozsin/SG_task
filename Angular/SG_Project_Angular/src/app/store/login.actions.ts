import { createAction, props } from '@ngrx/store';
import { User } from '../Model/user';

export const loadUsers = createAction('[Home Component] LoadUsers',props<{ users: User[] }>());
export const login = createAction('[Home Component] Login');
export const logout = createAction('[Home Component] Logout');