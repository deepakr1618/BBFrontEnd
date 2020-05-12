import { Router } from '@angular/router';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private ns : NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  credits(){
    this.router.navigate(["/subject"])
  }


  becomeSeller(){
    let usn = prompt("Enter username : ")
    let pass = prompt("Enter Password : ")
    if(usn == "admin" &&  pass == "admin"){
      this.router.navigate(["/seller"])
    }else{
      alert("Username = admin Password = admin")
    }
  }
}
