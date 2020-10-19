import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BottomNavItem } from 'ngx-bottom-nav';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `::ng-deep app-menu {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    @media only screen and (max-width: 768px) and (min-width: 260px) {
      ::ng-deep app-menu {
        position: relative;
      }
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  items: BottomNavItem[] = [
    {icon: 'home', label: 'Home', routerLink: '/account/home'},
    {icon: 'people_alt', label: 'Employee', routerLink: '/account/employee'},
    {icon: 'info', label: 'About', routerLink: '/account/about'},
  ];
  hidden = false;

  constructor() { }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  ngOnInit() {
  }

}
