import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  formEmployee:FormGroup;
  idEmployee:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
  ) { 
    this.idEmployee=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.idEmployee);
    this.crudService.GetEmployee(this.idEmployee).subscribe(
      response=>{
        console.log(response);
        this.formEmployee.setValue({
          nombre:response[0]['nombre'],
          correo:response[0]['correo']
        });
      }
    );
    this.formEmployee=this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
  }

  sendData():any{
    console.log(this.idEmployee);
    console.log(this.formEmployee.value);
    this.crudService.EditEmployee(this.idEmployee,this.formEmployee.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/show-employees');
    });
  }

}
