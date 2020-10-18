import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSortModule,
  MatFormFieldModule,
  MatDividerModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSnackBarModule,
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatDividerModule,
  MatDialogModule,
  MatSnackBarModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AppMaterialModule {}
