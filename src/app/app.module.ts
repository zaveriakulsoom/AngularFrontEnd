import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewDrugComponent } from './view-drug/view-drug.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriptionStatusComponent } from './subscription-status/subscription-status.component';
import { AdhocRefillComponent } from './adhoc-refill/adhoc-refill.component';
import { RefillStatusComponent } from './refill-status/refill-status.component';
import { RefillDuesDateComponent } from './refill-dues-date/refill-dues-date.component';
import { LogoutComponent } from './logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailiblityComponent } from './availiblity/availiblity.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'search-drug/:id',
    component:SearchDrugComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ViewDrugComponent,
    SearchDrugComponent,
    SubscribeComponent,
    SubscriptionStatusComponent,
    AdhocRefillComponent,
    RefillStatusComponent,
    RefillDuesDateComponent,
    LogoutComponent,
    AvailiblityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
