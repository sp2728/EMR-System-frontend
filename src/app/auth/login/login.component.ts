import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })
  }

  getErrorMessage(control:AbstractControl){
    if(control.errors.required) return 'Required';
    if(control.errors.email) return 'Enter a valid email address';
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }
}
