import { Injectable } from '@angular/core';
import { RouteredirectService } from './routeredirect.service';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private _routeService: RouteredirectService, private _authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      if(!this._authService.isUserLoggedIn)
      {
        
        this._routeService.getMeToLoginView();
        // alert("Not Loged in .. taking you to the login page");
        return false
      }
      else
      {
        alert("Signed in successfully. Welcome sir! I hope we have orders for you!")
        return true;
      }
    }

}
