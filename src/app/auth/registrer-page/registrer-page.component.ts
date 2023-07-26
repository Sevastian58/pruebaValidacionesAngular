import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrer-page',
  templateUrl: './registrer-page.component.html',
  styleUrls: ['./registrer-page.component.css']
})
export class RegistrerPageComponent {

  public myForm:FormGroup = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(3)]],
  })

  constructor(private fb:FormBuilder, private router:Router){}

  onRedirect():void{
    if(this.myForm.invalid){
      return;
    }
    else{
      this.router.navigate(['/reactive/formulario']);
    }
  }
}
