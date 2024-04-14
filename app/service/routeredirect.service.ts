import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteredirectService {

  constructor(private route: Router) { }

  getMeToHome()
  {
    this.route.navigate(['home']);
  }

  getMeToLoginView()
  {
    this.route.navigate(['login']);
  }

  getMeToCakeRequestsView()
  {
    this.route.navigate(['myorders']);
  }

}
