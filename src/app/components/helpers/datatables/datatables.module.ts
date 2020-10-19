import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatatablesComponent } from './datatables.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [DatatablesComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [DatatablesComponent],
  bootstrap: [DatatablesComponent]
})
export class DatatablesModule { }
