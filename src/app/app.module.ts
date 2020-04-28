import { MongooseService } from './services/auth/mongoose/mongoose.service';
import { FirebaseAuthService } from './services/auth/firebase-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { SectionsComponent } from './components/landing/sections/sections.component';
import { ViewTypeComponent } from './components/view-type/view-type.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ItemCardComponent } from './components/view-type/item-card/item-card.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutItemComponent } from './components/checkout/checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    CustomButtonComponent,
    SectionsComponent,
    ViewTypeComponent,
    PagenotfoundComponent,
    ItemCardComponent,
    NotificationComponent,
    CheckoutComponent,
    CheckoutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseAuthService,MongooseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
