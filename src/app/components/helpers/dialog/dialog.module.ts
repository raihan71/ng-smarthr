import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { AppMaterialModule } from './../../../app-material.module';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [DialogComponent],
  bootstrap: [DialogComponent]
})
export class DialogModule { }
