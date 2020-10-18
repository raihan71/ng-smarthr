import { AppMaterialModule } from './../../../app-material.module';
import { EmployeeComponent } from './employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterialModule
  ],
  exports: [EmployeeComponent],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule { }
