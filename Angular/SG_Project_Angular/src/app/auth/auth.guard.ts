import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../store/login.reducer';


/**
 * 
 * This guard is there to make sure that only logged in users can reach the 
 * game route of the application.
 * 
 * @param route 
 * @param state 
 * @returns 
 */
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
  const store: Store<{ appState: AppState }> = inject(Store);
  return store.select('appState').pipe(map(appstate => {
    return appstate.loggedInState;
  }));
};
