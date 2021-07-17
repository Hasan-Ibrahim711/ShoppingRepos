import { ProductService } from 'shared/services/product.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  category$: Observable<any>;
  product:any={};
  id:string | null;
  btnText:string="Save";
  deletebtnState:boolean=false;
  constructor(private categoryservice: CategoryService,
    private productservice: ProductService,
    private router:Router,
    private route: ActivatedRoute,
    private toaste: ToastrService) {
    this.category$=categoryservice.getCategory();
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.productservice.getProductById(this.id).pipe(take(1)).subscribe(p => this.product=p);
      this.btnText="Update";
      this.deletebtnState=true;
    }
   }

  ngOnInit(): void {
  }

  save(product : any,formState:any){
    if(this.id){
      this.productservice.update(this.id,product)
      this.toaste.success('Product updated Successfully');
    }
      
    else  {
      this.productservice.create(product);
      this.toaste.success('Product created Successfully');
    }
      
    formState.reset();
    this.router.navigate(['/admin/products'])
  }
  delete() {
    if(confirm('Are you sure you want to delete this products?')) {
      this.productservice.remove(this.id);
      this.toaste.success('Product removed Successfully');
      this.router.navigate(['/admin/products'])
    }
  }
}
