import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component'; 
import { AddPoblacionComponent } from './components/add-poblacion/add-poblacion.component';
import { ListPoblacionComponent } from './components/list-poblacion/list-poblacion.component'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AddDelitoComponent } from './components/add-delito/add-delito.component';
import { ListDelitoComponent } from './components/list-delito/list-delito.component';
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'logout', component: LoginComponent },
  { path: 'addPoblacion', component:  AddPoblacionComponent },
  { path: 'listPoblacion', component: ListPoblacionComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'addDelito', component: AddDelitoComponent },
  { path: 'listDelito', component: ListDelitoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
