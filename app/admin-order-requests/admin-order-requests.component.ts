import { Component, ViewChild } from '@angular/core';
import { CakeRequest } from '../Models/cakerequests';
import { CakeService } from '../service/cake.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-admin-order-requests',
  templateUrl: './admin-order-requests.component.html',
  styleUrls: ['./admin-order-requests.component.css']
})
export class AdminOrderRequestsComponent {

  displayedColumns: string[] = [
    'deliveryDate',
    'email',
    'phone',
    'pincode',
    'address',
    'eggEggles',
    'cakeName',
    'price',
    'quantity',
    'totalPrice',
    'done'
  ];
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  cakeRequests: CakeRequest[] = [];
  dataSource: any;

  constructor(private cakeRequestService: CakeService) {}

  ngOnInit(): void {
    this.showCakes();
  }

  showCakes()
  {
    this.cakeRequestService.getAllCakeRequests().subscribe({
      next: (data) => {
        this.cakeRequests = data;
        this.dataSource = new MatTableDataSource(this.cakeRequests);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.cakeRequests);
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cakeCompleted(id:number)
  {

    let recheck = confirm("Have you completed the Order Successfully?");
    if(recheck == true)
    {
      this.cakeRequestService.cakeCompleted(id).subscribe({
        next: (Response) => {
          alert("Congrats! cake order is successfull!");
          this.showCakes();
        },
        error: (err) => {alert("Some Error occured in deleting the old cake!")}
      })
    }
  }


}
