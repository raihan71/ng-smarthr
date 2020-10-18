import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import serviceUtil from 'src/app/utils/service.util';
import { AuthService } from './../../../services/auth.service';
import { ApiService } from './../../../services/api.service';

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

  loginForm: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private api: ApiService
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
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loading = true;
      const formData = this.loginForm.value;
      this.api.request(serviceUtil.auth.login, formData, false)
          .pipe()
            .subscribe(resp => {
              const { token, user } = resp.data;
              this.auth.createSession(JSON.stringify(token));
              this.auth.createUser(JSON.stringify(user));
              this.router.navigateByUrl('/account');
              window.location.reload();
              this.loading = false;
            }, err => {
              this.loading = false;
              console.log(err);
            });
    }
  }

}
