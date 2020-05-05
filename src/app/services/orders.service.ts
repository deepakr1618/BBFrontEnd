import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { MongooseService } from './auth/mongoose/mongoose.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderInf } from './../models/order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    private http: HttpClient,
    private mUser : MongooseService,
    private noti : NotificationService,
    private router: Router
  ) { }


  makeOrder(address, total){
    this.mUser.muser$.subscribe((user)=>{
      this.http.post(`${environment.apiUrl}/order/makeOrder`,{
        buyer : user._id,
        total,
        cart: user.cart,
        address
      })
      .subscribe((data:any)=>{
        if(data.status=="success"){
          this.noti.notify("Order successfully placed!")
          this.router.navigate(["/"])
        }
        else
          this.noti.warning("Something went wrong!")
      })
    })
  }
}
