import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { MainSystemComponent } from './main-system/main-system.component';

const routes: Routes = [
  {path:'login',component:AuthComponent},
  {path: '' ,component:MainSystemComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
