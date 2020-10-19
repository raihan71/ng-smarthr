import { LoaderService } from './../../../services/loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import serviceUtil from 'src/app/utils/service.util';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [
    `
    td {
      padding-right: 8px;
    }
    .mat-form-field {
      width: 100%;
      min-width: 300px;
    }

    mat-card-subtitle,
    mat-card-title {
      display: flex;
    }

    ::ng-deep .mat-form-field-prefix, .mat-form-field-suffix {
      white-space: nowrap!important;
      flex: none!important;
      position: static!important
    }

    .button {
      display: flex;
      justify-content: flex-end;
    }
    @media only screen and (max-width: 768px) and (min-width: 260px) {
      table > tr {
        display: inline-grid
      }
    }
    `
  ]
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  loading = false;
  submitted = false;
  isAddMode: boolean;

  @Input() btnTxt: string = 'Save';
  @Input() iconTxt: string = 'save';
  @Input() id: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
    private loader: LoaderService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.isAddMode = !this.id;
    this.createForm();
    if (!this.isAddMode) {
      this.loader.show();
      this.api.get(serviceUtil.demo.employee.show(this.id), true)
          .pipe(first())
            .subscribe({
              next: (resp) => {
               this.loader.hide();
               this.employeeForm.patchValue(resp);
              },
              error: err => {
                this.loader.hide();
              }
            });
    }
  }

  openSnackBar(message: string, action: string, isSubmit?: boolean) {
      const snacky = this.snackbar.open(message, action);
      if (isSubmit) {
        snacky.afterDismissed().subscribe(
          result => {
            if (result) {
              this.router.navigate(['/account/employee']);
            }
          }
        );
      }
  }

  get f() { return this.employeeForm.controls; }

  createForm() {
    this.employeeForm = this.fb.group({
      nip: ['', [Validators.required]],
      full_name: ['', [Validators.required]],
      nick_name: ['', [Validators.required]],
      birth_date: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  resetForm() {
    this.employeeForm.reset();
    this.employeeForm.markAsPristine();
    this.employeeForm.markAsUntouched();
    this.employeeForm.updateValueAndValidity();
  }

  onSubmit() {
    this.submitted = true;
    if (this.employeeForm.invalid) { return; }
    this.loading = true;
    this.isAddMode ? this.createData() : this.updateData();
  }

  private createData() {
    this.loader.show();
    this.api.post(serviceUtil.demo.employee.create, this.employeeForm.value, true)
          .pipe(first())
            .subscribe({
              next: (resp) => {
                this.loader.hide();
                this.openSnackBar(resp.message, 'Ok', true);
              },
              error: err => {
                this.loading = false;
                this.loader.hide();
                this.openSnackBar(err.message, 'Retry');
                console.log(err);
              }
            });
  }

  private updateData() {
    this.loader.show();
    this.api.update(serviceUtil.demo.employee.update(this.id), true, this.employeeForm.value)
          .pipe(first())
            .subscribe({
              next: (resp) => {
                this.loader.hide();
                this.openSnackBar(resp.message, 'Ok', true);
              },
              error: err => {
                this.loading = false;
                this.loader.hide();
                this.openSnackBar(err.message, 'Retry');
                console.log(err);
              }
            });
  }
}
