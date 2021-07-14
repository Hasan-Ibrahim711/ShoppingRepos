import { CategoryService } from './../../services/category.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  @Input('category') category: any;
  categories$?:any;
  constructor(private categoryservice: CategoryService) {
    this.categories$=this.categoryservice.getCategory();
   }

  ngOnInit(): void {
  }

}
