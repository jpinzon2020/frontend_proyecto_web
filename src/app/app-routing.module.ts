import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component'; 
import { AddPoblacionComponent } from './components/add-poblacion/add-poblacion.component';
import { ListPoblacionComponent } from './components/list-poblacion/list-poblacion.component'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'logout', component: LoginComponent },
  { path: 'addPoblacion', component:  AddPoblacionComponent },
  { path: 'listPoblacion', component: ListPoblacionComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
