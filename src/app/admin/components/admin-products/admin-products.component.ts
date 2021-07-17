import { ProductService } from 'shared/services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products?: any[];
  subsicribtion?:Subscription;
  plus=faPlus;
  edit=faEdit;
  // these Two variables is  as configration for data table
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private productservice: ProductService) { 
  this.subsicribtion=this.productservice.getAll().subscribe((products:any)=> {
    this.products=products;
      this.dtTrigger.next();
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  ngOnDestroy():void {
    this.subsicribtion?.unsubscribe();
    this.dtTrigger.unsubscribe();
  }

}
