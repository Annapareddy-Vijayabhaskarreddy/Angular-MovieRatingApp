import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';
import { MyratingComponent } from './components/myrating/myrating.component';
const routes: Routes = [{
  path:'',component:DashboardComponent, children:[{
    path:'notfound',component:Notfound404Component
  }]
},
{
  path:'rating',component:MyratingComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
