import { NotificationService } from './../../notification.service';
import { FirebaseAuthService } from './../firebase-auth.service';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInf } from './../../../models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'firebase';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MongooseService {
  muser_ : BehaviorSubject<UserInf> = new BehaviorSubject({
    firebaseUID: undefined,
    _id:undefined,
    name: undefined,
    cart: [],
    address:{
        houseNo:undefined,
        street: undefined,
        city: undefined,
        pincode: undefined
    }
  })
  muser$: Observable<UserInf>
  fuser:any
  constructor(
    private http: HttpClient,
    private firebaseAuth : FirebaseAuthService,
    private noti: NotificationService
  ) {
    this.muser$ = this.muser_.asObservable()
    this.firebaseAuth.user$.subscribe((user)=>{
      console.log("Mongoose found change in firebase auth!")
      if(user){
        this.fuser = user
        this.updateMongooseUser()
      }else{
        this.muser_.next({
          _id:undefined,
          firebaseUID: undefined,
          name: undefined,
          cart: [],
          address:{
              houseNo:undefined,
              street: undefined,
              city: undefined,
              pincode: undefined
          }
        })
      }
    })
  }

  updateMongooseUser(){
    let fuser = this.fuser;
    this.http.get<UserInf>(`${environment.apiUrl}/user/firebase/${fuser.uid}`)
    .subscribe((user:any)=>{
      if(user.status=="success"){
        this.noti.notify(`Welcome ${user.data.name}!`)
        this.muser_.next(user.data)
      }
    })
  }

  

}
