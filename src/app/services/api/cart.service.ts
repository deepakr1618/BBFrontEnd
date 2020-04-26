import { NotificationService } from './../notification.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductInf } from 'src/app/models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _cart: BehaviorSubject<ProductInf[]> 
  cart$: Observable<ProductInf[]>
  constructor(
    private ns: NotificationService
  ) {
    this._cart = new BehaviorSubject([])
    this.cart$ = this._cart.asObservable()
   }

  
  addToCart(product: ProductInf){
    let currentCart:Array<ProductInf>= this._cart.value
    currentCart.push(product)
    this._cart.next(currentCart)
    this.ns.notify(`Added ${product.name} to cart`)
  }
}
