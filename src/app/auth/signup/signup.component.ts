import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
  }

  getErrorMessage(control:AbstractControl){
    if(control.errors.required) return 'Required';
    if(control.errors.email) return 'Enter a valid email address';
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }
}
