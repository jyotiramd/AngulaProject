import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserregisterComponent } from './userregister/userregister.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { ProductsComponent } from './products/products.component';
import { RegsuccessComponent } from './regsuccess/regsuccess.component';
import {HttpClientModule} from '@angular/common/http';
import {UserregdataService} from './userregdata.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateuserregComponent } from './updateuserreg/updateuserreg.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregisterComponent,
    NavigationComponent,
    HomeComponent, 
    ProductsComponent,
    RegsuccessComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UpdateuserregComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [UserregdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
