import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
=======
import { InventoryComponent } from './inventory/inventory.component';
import { PatientComponent } from './patient/patient.component';
import { BillingComponent } from './billing/billing.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
>>>>>>> master

const appRoutes: Routes =[
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
<<<<<<< HEAD
  { path: 'departments', component: DepartmentsComponent},
  { path: 'employees', component: EmployeesComponent}
=======
  { path: 'patient', component: PatientComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'scheduling', component: SchedulingComponent }

>>>>>>> master
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
<<<<<<< HEAD
    DepartmentsComponent,
    EmployeesComponent
=======
    InventoryComponent,
    PatientComponent,
    BillingComponent,
    InsuranceComponent,
    SchedulingComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
