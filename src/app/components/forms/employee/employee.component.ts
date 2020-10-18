import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  @Input() btnTxt: string = 'Save';
  @Input() iconTxt: string = 'save';
  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

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

}
