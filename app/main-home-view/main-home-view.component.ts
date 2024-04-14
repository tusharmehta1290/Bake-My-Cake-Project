import { Component } from '@angular/core';
import { Cake } from '../Models/cakes';
import { CakeService } from '../service/cake.service';

@Component({
  selector: 'app-main-home-view',
  templateUrl: './main-home-view.component.html',
  styleUrls: ['./main-home-view.component.css']
})
export class MainHomeViewComponent {
  cakes: Cake[] = [];

  constructor(private _cakeservices: CakeService){}

  ngOnInit(): void
  {
    this._cakeservices.getAllCakes().subscribe({
      next: (data)=>{
        this.cakes = data;
      },
      error: (err) => alert("Failed fetching data from the server. Kindly check the server!")
    })
  }


  onSearchTextChanged(cakeName: string) {
    this._cakeservices.getAllCakes().subscribe({
      next: (data) => {
        if (cakeName || cakeName !== '') {
          this.cakes = this.cakes.filter((cake) =>
            cake.name?.toLowerCase().includes(cakeName.toLowerCase())
          );
        } else {
          this.cakes = data;
        }
      },
    });
  }

  categoryFilter: string = "";

  onFilter(filter: string) {
    this.categoryFilter = filter;
    this._cakeservices.getAllCakes().subscribe({
      next: data => {
        this.cakes = data.filter(cake => cake.category === this.categoryFilter)
        if(this.categoryFilter === "all") {
          this.cakes = data;
        }
      }
    })
  }



}
