import { ShoppingCardService } from './shopping-card.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,private cardservice:ShoppingCardService) { }

  async storeOrder(order:any) { 
    let result=await this.db.list('/orders').push(order);
    //this.cardservice.clearCard();
    return result;
  }

  getOrders() {
    return this.db.list('/orders').snapshotChanges();
  }
  getOrdersByUser(userId: string) {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).snapshotChanges();
  }
}
