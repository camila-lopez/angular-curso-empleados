import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {
  Empleados:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetEmployees().subscribe(response=>{console.log(response);
      this.Empleados=response;
    });
  }

  deleteEmployee(id:any, iControl:any){
      console.log(id);
      console.log(iControl);
      if(window.confirm("¿Desea borrar el registro?")){
        this.crudService.DeleteEmployee(id).subscribe((response)=>{
          this.Empleados.splice(iControl,1);
        });
      }
      
  }



}
