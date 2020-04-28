import { MongooseService } from './services/auth/mongoose/mongoose.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bigbasket';
  constructor(
    private mUser : MongooseService
  ){

  }
}
