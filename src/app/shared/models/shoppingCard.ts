import { shoppingCardItems } from './shoppingCardItems';
export class shoppingCard {
    items: shoppingCardItems[]=[];
    constructor(public itemsMap: { [productId:string]:shoppingCardItems }){
        for(let productId in itemsMap) {
            let item=itemsMap[productId];
            this.items.push(new shoppingCardItems(item.product,item.quantity))
        }
    };

    get totalPrice(){
        let sum=0;
        for(let productId in this.items)
            sum+=this.items[productId].totalPrice
        return sum;
    }
    get getTotalCount() {
        let count=0;
        for(let productId in this.itemsMap)
        count+=this.itemsMap[productId].quantity;
        return count;
    }
    getQuantity(product:any) {
        let item=this.itemsMap[product.key];
        return item? item.quantity :0;
    }
}