import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../../../app-material.module';
import { FloatButtonComponent } from './float-button.component';

@NgModule({
  declarations: [FloatButtonComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  exports: [FloatButtonComponent],
  bootstrap: [FloatButtonComponent]
})
export class FloatButtonModule { }
