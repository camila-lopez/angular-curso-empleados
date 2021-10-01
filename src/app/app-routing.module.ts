import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'show-employees'},
  {path: 'add-employee', component:AddEmployeeComponent},
  {path: 'show-employees', component:ShowEmployeesComponent},
  {path: 'edit-employee/:id', component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
