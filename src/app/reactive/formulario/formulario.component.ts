import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public myForm:FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    lastName:['', [Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    dni:[0 ,[Validators.required, Validators.pattern('^[0-9]{8}$')]],
    age:[0, [Validators.required]],
    address:['', [Validators.required, Validators.minLength(3)]],
    city:['', [Validators.required, Validators.minLength(3)]],
    country:['', [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb:FormBuilder){}

  public cliente:Cliente={
    name:'',
    lastName:'',
    email:'',
    dni:'',
    age:0,
    address:'',
    city:'',
    country:''
  }

  onSave():void{
    if(this.myForm.invalid) return;
    console.log(this.cliente)
  }
}
