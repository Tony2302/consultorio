import { LoginComponent } from './Vistas/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Vistas/dashboard/dashboard.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'menu', component:DashboardComponent},

  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'**',pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
