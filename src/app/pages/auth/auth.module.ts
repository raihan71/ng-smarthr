import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AppMaterialModule } from './../../app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Pages
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule {}
