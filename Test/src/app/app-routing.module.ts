import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import {RegsuccessComponent} from './regsuccess/regsuccess.component';
import {ProductsComponent} from './products/products.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'

  },
{
    path:'login',
    component:LoginComponent
},

{
    path:'userregister',
    component:UserregisterComponent
},

{
    path:'regsuccess',
    component:RegsuccessComponent
},

{
    path:'products',
    component:ProductsComponent
},

{
    path:'dashboard',
    component:DashboardComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
