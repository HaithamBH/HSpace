import { IndexComponent } from './index/index.component';
import { LogInComponent } from './log-in/log-in.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' ,
    component: LogInComponent ,
  },
  {
    path:'home' , 
    component:IndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
