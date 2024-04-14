import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeViewComponent } from './main-home-view/main-home-view.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { AdminOrderRequestsComponent } from './admin-order-requests/admin-order-requests.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CandeactivateService } from './service/candeactivate.service';
import { AuthguardService } from './service/authguard.service';
import { LogOutComponent } from './log-out/log-out.component';


const routes: Routes = [
  {
    path: 'home', component: MainHomeViewComponent
  },

  {
    path: 'myorders', component: AdminOrderRequestsComponent, canActivate: [AuthguardService]
  },

  {
    path: 'order-view/:id', component: CakeCartComponent, canDeactivate: [CandeactivateService],
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'logout', component: LogOutComponent
  },

  {
    path: '', redirectTo:'/home', pathMatch: 'full'
  },

  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
