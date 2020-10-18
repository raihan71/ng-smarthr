import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavModule } from 'ngx-bottom-nav';
import { MenuComponent } from './menu.component';
import { AppMaterialModule } from './../../../app-material.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    BottomNavModule
  ],
  bootstrap: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }
