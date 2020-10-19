import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { first } from 'rxjs/operators';
import serviceUtil from 'src/app/utils/service.util';
import { AuthService } from './../../../services/auth.service';
import { ApiService } from './../../../services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `.mat-form-field {
      width: 100%;
      min-width: 300px;
    }

    mat-card-subtitle,
    mat-card-title {
      display: flex;
      justify-content: center;
    }

    .button {
      display: flex;
      justify-content: flex-end;
    }
  `
  ]
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private loader: LoaderService,
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private api: ApiService,
    private snackBar: MatSnackBar,
  ) {
  }

  createForm() {
    this.loginForm = this.fb.group({
      identity: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  resetForm() {
    this.loginForm.reset();
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
    this.loginForm.updateValueAndValidity();
  }


  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loader.show();
      this.loading = true;
      const formData = this.loginForm.value;
      this.api.post(serviceUtil.auth.login, formData, false)
          .pipe(first())
            .subscribe({
              next: (resp) => {
                  this.loader.hide();
                  const { token, user } = resp.data;
                  this.auth.createSession(JSON.stringify(token));
                  this.auth.createUser(JSON.stringify(user));
                  this.router.navigateByUrl('/account');
              },
              error: err => {
                this.loader.hide();
                this.loading = false;
                this.openSnackBar(err.message, 'Retry');
                console.log(err);
              }
            });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
