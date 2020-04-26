import { FirebaseUser } from './../../models/firebaseUser';
import { FirebaseAuthService } from './../../services/auth/firebase-auth.service';
import { CartService } from './../../services/api/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart: Array<any>=[]
  user: any
  displayName:string=""
  constructor(
    private _cartService: CartService,
    private firebaseauth: FirebaseAuthService
  ) { }

  ngOnInit() {

    //Get Cart Service
    this._cartService.cart$.subscribe((data)=>{
      this.cart = data
    })

    //Get User Service from firebase
    this.firebaseauth.user$.subscribe((data)=>{
      if(data){
        this.user = data
        this.displayName = data.displayName
      }
    })
  }

  login(){
    if(this.user){
      this.firebaseauth.signOut()
      .then(()=>{
        this.displayName = "Log In"
      })
      .catch((e)=>{
        console.log(e)
      })
    }else{
      this.firebaseauth.signInWithGoogle()
      .then((res)=>{
        console.log(res)
      })
    .catch(err=>console.log(err))
    }
  }


}
