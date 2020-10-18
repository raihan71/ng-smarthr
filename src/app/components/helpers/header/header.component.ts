import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`.example-spacer {
    flex: 1 1 auto;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  authed:any;
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.authed = this.auth.getUser();
    }
  }

  logOut() {
    this.auth.removeSession();
    this.auth.removeUser();
    this.router.navigateByUrl('/');
    window.location.reload();
  }

}
