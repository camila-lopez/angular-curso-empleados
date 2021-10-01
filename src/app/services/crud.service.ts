import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost:8888/empleados/'; //api de php CRUD (API)

  constructor(private clientService:HttpClient) { 

  }

  AddEmployee(employeeData:Empleado):Observable<any>{
    return this.clientService.post(this.API+"?insertar=1",employeeData);
  }

  GetEmployees(){
    return this.clientService.get(this.API);
  }

  DeleteEmployee(id:any):Observable<any>{
    return this.clientService.get(this.API+"?borrar="+id);
  }

  GetEmployee(id:any):Observable<any>{
    return this.clientService.get(this.API+"?consultar="+id);
  }

  EditEmployee(id:any,employeeData:Empleado):Observable<any>{
    return this.clientService.post(this.API+"?actualizar="+id,employeeData);
  }
  

}
