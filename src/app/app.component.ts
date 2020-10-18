import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent {
  title = 'NgSmartHR';
  isAuthed: boolean = false;
  constructor(private auth: AuthService) {
    this.auth.isAuthenticated() ? this.isAuthed = true : this.isAuthed = false;
  }
}
