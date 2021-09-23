import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class AuthModule { }
