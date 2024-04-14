import { Component } from '@angular/core';
import { RouteredirectService } from '../service/routeredirect.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cakeRequestCode: string = "";
  checkIfLoggedIn: boolean = false;

  constructor(private _route : RouteredirectService, private _authService: AuthService){}

  ngOnInit():void{
    this.checkIfLoggedIn = this._authService.isUserLoggedIn;
    if(this.checkIfLoggedIn == true)
    alert("You are already logged in.. Taking you to your Cake Requests Interface!")
  }

  validateCakeRequestCode()
  {
    this._authService.logIn(this.cakeRequestCode);
    if(this._authService.isUserLoggedIn)
    {
      this._route.getMeToCakeRequestsView()
    }
    this.clearField();
  }

  clearField()
  {
    this.cakeRequestCode = "";
  }

  navigateToHome()
  {
    this._route.getMeToHome();
  }
}
