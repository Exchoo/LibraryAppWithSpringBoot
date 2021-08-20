import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { ManagerComponent } from './components/manager/manager.component';
import { MemberComponent } from './components/member/member.component';

const routes: Routes = [
  {
    
      path:'',redirectTo:"login",pathMatch:"full"
    },
    
    {
      path:'login',
    component:LoginComponent
  },
    {
    path:'member',
    component:MemberComponent
  },
  {
    path:'manager',
    component:ManagerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
