import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNameComponent } from './user/user-name/user-name.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ButtonComponent } from './user/button/button.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path:'username' , component:UserNameComponent},
  { path:'userdetail', component:UserDetailsComponent},
  {path:'', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
