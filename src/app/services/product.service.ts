import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list('/products').snapshotChanges();
  }

  getProductById(productId:string) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  create(product:any){
    return this.db.list('/products').push(product);
  }
  
  update(productId:string,product:any) {
    return this.db.object('/products/' + productId).update(product);
  }

  remove(productId:any) {
    return this.db.object('/products/' + productId).remove();
  }
  
}
