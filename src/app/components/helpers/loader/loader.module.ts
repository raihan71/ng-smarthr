import { LoaderComponent } from './loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent],
  bootstrap: [LoaderComponent]
})
export class LoaderModule { }
