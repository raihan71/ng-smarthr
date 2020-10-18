import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { AppMaterialModule } from './../../../app-material.module';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [SnackbarComponent],
  bootstrap: [SnackbarComponent]
})
export class SnackbarModule { }
