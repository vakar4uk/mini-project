import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PatientComponent } from './patient/patient.component';
import { BillingComponent } from './billing/billing.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeedelComponent } from './employeedel/employeedel.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { EmployeesearchComponent } from './employeesearch/employeesearch.component';
import { InventoryaddComponent } from './inventoryadd/inventoryadd.component';
import { InventoryeditComponent } from './inventoryedit/inventoryedit.component';
import { InventorydelComponent } from './inventorydel/inventorydel.component';
import { InventorysearchComponent } from './inventorysearch/inventorysearch.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PatientaddComponent } from './patientadd/patientadd.component';

const appRoutes: Routes =[
  { path: '', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'patient', component: PatientComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'scheduling', component: SchedulingComponent },
  { path: 'employeeadd', component: EmployeeaddComponent },
  { path: 'employeedel', component: EmployeedelComponent },
  { path: 'employeeedit', component: EmployeeeditComponent },
  { path: 'employeesearch', component: EmployeesearchComponent },
  { path: 'inventoryadd', component: InventoryaddComponent },
  { path: 'inventorydel', component: InventorydelComponent },
  { path: 'inventoryedit', component: InventoryeditComponent },
  { path: 'inventorysearch', component: InventorysearchComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'patientadd', component: PatientaddComponent }
  

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeesComponent,
    InventoryComponent,
    PatientComponent,
    BillingComponent,
    InsuranceComponent,
    SchedulingComponent,
    EmployeeaddComponent,
    EmployeedelComponent,
    EmployeeeditComponent,
    EmployeesearchComponent,
    InventoryaddComponent,
    InventoryeditComponent,
    InventorydelComponent,
    InventorysearchComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    PatientaddComponent
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
