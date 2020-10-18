import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppMaterialModule } from './../../../app-material.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [HeaderComponent],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
