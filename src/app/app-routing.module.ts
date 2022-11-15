import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'form',component:EmployeeFormComponent},
  {path:'data',component:DisplayDataComponent},
  {path:'**',redirectTo:'form'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeFormComponent,DisplayDataComponent]
