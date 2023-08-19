import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';


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
  const store: Store<{ loggedInState: boolean }> = inject(Store);
  return store.select('loggedInState').pipe(map(s => {
    console.log("Within the auth Guard it is: " + s);
    return s;
  }));
};
