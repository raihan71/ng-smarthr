import { DatatablesModule } from './../../components/helpers/datatables/datatables.module';
import { MenuModule } from './../../components/helpers/menu/menu.module';
import { HeaderModule } from './../../components/helpers/header/header.module';
import { DialogModule } from './../../components/helpers/dialog/dialog.module';
import { EmployeeModule } from './../../components/forms/employee/employee.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../../app-material.module';
import { FloatButtonModule } from './../../components/helpers/float-button/float-button.module';
import { AccountRoutingModule } from './account-routing.module';
import { EmployeeListComponent } from './employees/list/employee-list.component';
import { EmployeeEditComponent } from './employees/edit/employee-edit.component';
import { EmployeeAddComponent } from './employees/add/employee-add.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account.component';
@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent, EmployeeAddComponent, HomeComponent, AboutComponent, AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FloatButtonModule,
    AppMaterialModule,
    EmployeeModule,
    DialogModule,
    HeaderModule,
    MenuModule,
    DatatablesModule,
  ],
  exports: [
    AccountRoutingModule,
    FloatButtonModule,
    EmployeeModule,
    DialogModule,
    HeaderModule,
    MenuModule,
    DatatablesModule,
  ],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
