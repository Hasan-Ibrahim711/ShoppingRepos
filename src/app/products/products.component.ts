import { ShoppingCardService } from './../services/shopping-card.service';
import { CategoryService } from './../services/category.service';
import { switchMap } from 'rxjs/operators';
import { ProductService } from './../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filterproducts: any[] = [];
  card:any;
  subsicription?:Subscription;

  category?: string | null;
  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private cardService: ShoppingCardService) {
    this.productservice.getAll()
      .pipe(switchMap(
        products => {
          this.filterproducts = this.products = products;
          return route.queryParamMap
        })).subscribe(params => {
          this.category = params.get('category');
          this.filterproducts = (this.category) ? this.products.filter(
            p => p.payload.val().category === this.category) : this.products;
        })
  }
  async ngOnInit() {
    this.subsicription=(await this.cardService.getCard()).subscribe(card => {
      this.card=card
    })
  }

  ngOnDestroy() {
    this.subsicription?.unsubscribe();
  }
}
