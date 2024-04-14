import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  logIn(cakeRequestCode: string)
  {
    this.isUserLoggedIn = cakeRequestCode ==='admin'
  }

  logOut()
  {
    this.isUserLoggedIn = false;
  }

}
