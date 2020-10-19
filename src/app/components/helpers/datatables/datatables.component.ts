import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import serviceUtil from 'src/app/utils/service.util';
import { Employees } from './../../../models/employee.model';
import { ApiService } from './../../../services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styles: [`
    table {width: 100%}
    td, th {width: 25%}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatablesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  params: any;
  displayedColumns = ['no', 'nip', 'full_name', 'action'];
  dataSource = new MatTableDataSource<Employees>();
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogDelete(id: string, name: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Are you sure want to delete?',
        message: `Data of ${name} will be deleted, it can't be undo.`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loader.show();
        this.apiService.delete(serviceUtil.demo.employee.delete(id), true)
              .pipe(first())
                .subscribe({
                  next: (resp) => {
                    this.getEmployees();
                    this.openSnackBar(resp.message, 'OK');
                  },
                  error: err => {
                    console.log(err);
                    this.openSnackBar(err.message, 'Retry');
                    this.loader.hide();
                  }
                });
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  private getEmployees = () => {
    this.params = {
      query: {
        value: '',
      },
      start_birth_date: '',
      end_birth_date: '',
      pagination: {
        page: 1,
        perpage: 100
      },
      sort: {
        sort: 'ASC',
        field: 'id'
      }
    };
    this.loader.show();
    this.apiService.post(serviceUtil.demo.employee.list, this.params, true)
         .pipe(first())
          .subscribe({
            next: (resp) => {
              this.loader.hide();
              this.dataSource.data = resp.rows as Employees[];
            },
            error: err => {
              this.loader.hide();
              console.log(err);
            }
          });
  }

}
