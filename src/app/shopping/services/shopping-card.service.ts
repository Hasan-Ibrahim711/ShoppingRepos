import { shoppingCard } from 'shared/models/shoppingCard';
import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {
  public shoppingCardCounter=0;
  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-card').push({
      dateCreated: new Date().getTime()
    })
  }

  private async getOrCreateCardId():Promise<string> {
    let cardId = localStorage.getItem('cartId');
    if (cardId)
      return cardId;
    let result: any = await this.create()
    localStorage.setItem('cartId', result.key);
    return result.key
  }
 public async getCard(){
   let cardId= await this.getOrCreateCardId();
   return this.db.object('/shopping-card/' + cardId).valueChanges()
   .pipe(map((cart:any) =>new shoppingCard(cart.items)));
   
  }
  get_Item(cardId?: any, productId?: any) {
    return this.db.object('/shopping-card/' + cardId + '/items/' + productId)
  }
  async addToCard(product: any) {
    return this.updateToCard(product, +1)
  }
  async removeFromCard(product: any) {
    this.updateToCard(product, -1)
  }

  async clearCard() {
    let cardId=await this.getOrCreateCardId();
    this.db.object('/shopping-card/' + cardId + '/items').remove()
  }
  async updateToCard(product: any,quantitystate:number) {
    let cardId = await this.getOrCreateCardId();
    let item$ = this.get_Item(cardId, product.key)
    item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      item$.update({
        product: {
          category: product.payload.val().category,
          imageUrl: product.payload.val().imageUrl,
          price: product.payload.val().price,
          title: product.payload.val().title,
        }, quantity: (item.payload.val()?.quantity || 0) + quantitystate
      })
    });
  }
}
