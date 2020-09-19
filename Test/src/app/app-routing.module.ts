import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import {RegsuccessComponent} from './regsuccess/regsuccess.component';
import {ProductsComponent} from './products/products.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateuserregComponent } from './updateuserreg/updateuserreg.component';
import {UpdateproductComponent} from './updateproduct/updateproduct.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'

  },
  {
    path:'header',
    component:HeaderComponent
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
    path:'updateuserreg/:id',
    component:UpdateuserregComponent
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
    path:'updateproduct/:id',
    component:UpdateproductComponent
},

{
    path:'dashboard',
    component:DashboardComponent

},
{
    path:'footer',
    component:FooterComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
