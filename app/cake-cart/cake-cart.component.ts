import { Component } from '@angular/core';
import { Cake } from '../Models/cakes';
import { CakeService } from '../service/cake.service';
import { ActivatedRoute } from '@angular/router';
import { CakeRequest } from '../Models/cakerequests';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppRoutingModule } from '../app-routing.module';
import { RouteredirectService } from '../service/routeredirect.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cake-cart',
  templateUrl: './cake-cart.component.html',
  styleUrls: ['./cake-cart.component.css']
})
export class CakeCartComponent {
  cake?: Cake = {};
  minDate: Date = new Date(); //getting todays date!
  submitStatus: boolean = true;

  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm("Do you want to leave? The order has not been placed. Press Cancel if you want to continue with the order");
    }
    return this.submitStatus;
  }

  constructor(private cakeService: CakeService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar, private _routing: RouteredirectService ){};
   
    ngOnInit(): void {
      // A map that provides access to the required and optional 
      // parameters specific to a route. The map supports retrieving a single value with get() or multiple values with getAll().
      this.activatedRoute.paramMap.subscribe(params => {
        let id = params.get("id") ?? 0;
        this.cakeService.getCake(+id).subscribe(data => {
          this.cake = data;
          this.submitStatus = false;  
        })
      });
    }

  cakeRequest: CakeRequest = {};

  calculateTotalPrice():number
  {
    if(this.cakeRequest.quantity !== undefined && this.cake?.price !==undefined)
      if(this.cakeRequest.quantity>0)
      {
        return this.cake?.price*this.cakeRequest.quantity;
      }

    return 0;
  }

  placeTheOrder(orderRequestForm: NgForm)
  {
    console.log(this.cake?.name);
    this.cakeRequest.cakeName = this.cake?.name;
    console.log(this.cakeRequest.cakeName);
    this.cakeRequest.price = this.cake?.price;
    this.cakeRequest.totalPrice = this.calculateTotalPrice();

    const deliveryDate =
    this.cakeRequest.deliveryDate instanceof Date
      ? this.cakeRequest.deliveryDate
      : new Date();
      // Formats a date according to locale rules. :- formatDate
      const formattedDate = formatDate(deliveryDate, 'dd-MM-yyyy', 'en-US');
      this.cakeRequest.deliveryDate = formattedDate;

    this.cakeService.userSubmittedAnOrder(this.cakeRequest).subscribe({
      next: (data) =>{
        this.snackBar.open('ORDER HAS BEEN PLACED SUCCESSFULLY! THANK YOU FOR ORDERING WITH US!', 'success',{
          duration: 2000,
        });
        this.submitStatus = true;
        alert("Thank you for ordering! we have received your request and your order has been accepted successfully!")
        this._routing.getMeToHome(); 
      }, 
      
      error: (err) => alert("some unwanted error has occured kindly try again!")
    })

  }

}
