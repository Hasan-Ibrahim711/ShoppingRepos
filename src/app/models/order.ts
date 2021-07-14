import { shoppingCard } from './shoppingCard';
export class Order {
    datePlaced?:number;
    items?:any[];
    constructor(public userId?:string, public shipping?:any,card?:shoppingCard) {
            this.datePlaced=new Date().getTime(),
            this.items=card?.items.map(i=> {
              return {
                  product:i.product,
                  quantity:i.quantity,
                  totalPrice:i.totalPrice
              }
            })
        }
}