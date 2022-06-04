import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HttpInterceptorService } from './services/auth/http-interceptor.service';
import { AppComponent } from './app.component';
import { AddPoblacionComponent } from './components/add-poblacion/add-poblacion.component'
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ListPoblacionComponent } from './components/list-poblacion/list-poblacion.component'; 

import { ListFilterPipe } from './services/listerfilter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AddPoblacionComponent,
    ListPoblacionComponent,
    ListFilterPipe,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
