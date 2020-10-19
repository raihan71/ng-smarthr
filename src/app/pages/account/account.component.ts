import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: []
})
export class AccountComponent implements OnInit {
  title = 'NgSmartHR';

  isAuthed: boolean = false;

  constructor(private auth: AuthService) {
    this.auth.isAuthenticated() ? this.isAuthed = true : this.isAuthed = false;
  }

  ngOnInit() {
  }

}
