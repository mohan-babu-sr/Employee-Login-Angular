import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

import { HttpClientModule } from "@angular/common/http";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ErrorComponent } from './Auth/error/error.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';

const routers: Routes = [
  {path:'employees',component: ListEmployeeComponent},
  {path:'addemployee',component: AddEmployeeComponent},
  {path:'addemployee/:id',component: AddEmployeeComponent},
  {path:'login',component:LoginComponent},
  {path:'error',component:ErrorComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'', redirectTo: 'login',pathMatch:'full'},
  {path:'**', component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    DashboardComponent,
    NavbarComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
