import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  formEmployee:FormGroup;


  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 
    this.formEmployee = this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("me presonaste");
    console.log(this.formEmployee.value);
    this.crudService.AddEmployee(this.formEmployee.value).subscribe(response=>{
      this.ruteador.navigateByUrl('/show-employees');
    });
    
  }

}
