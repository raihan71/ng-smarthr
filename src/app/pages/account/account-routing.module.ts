import { AuthGuard } from './../../services/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Page
import { AccountComponent } from './account.component';
import { EmployeeListComponent } from './employees/list/employee-list.component';
import { EmployeeAddComponent } from './employees/add/employee-add.component';
import { EmployeeEditComponent } from './employees/edit/employee-edit.component';

const routes: Routes = [
  {
    path: 'account',
    canActivate: [AuthGuard],
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: '/account/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'employee',
        children: [
          {
            path: '',
            component: EmployeeListComponent,
          },
          {
            path: 'add',
            component: EmployeeAddComponent
          },
          {
            path: ':id/edit',
            component: EmployeeEditComponent
          }
        ],
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
