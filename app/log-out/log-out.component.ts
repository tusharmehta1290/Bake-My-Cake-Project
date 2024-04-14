import { Component } from '@angular/core';
import { RouteredirectService } from '../service/routeredirect.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  checkIfLoggedIn: boolean = true;
  constructor( private _route : RouteredirectService, private _authService: AuthService ){}

  ngOnInit():void
  {
    this.checkIfLoggedIn = this._authService.isUserLoggedIn;
    if(this.checkIfLoggedIn == false)
    {
      alert("You are not logged in.");
      this._route.getMeToHome();
    }
  }

  LogMeOut()
  {
    let takePermission = confirm("Do you really want to log out?");
    if(takePermission == true)
    {
      this._authService.isUserLoggedIn = false;
      alert("You have logged out successfully!");
      this._route.getMeToHome();
    }
    
  };

  buttonClickedToNavigate()
  {
    this._route.getMeToCakeRequestsView();
  }

}
