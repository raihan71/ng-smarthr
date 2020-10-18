import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styles: [`.float-btn {
      position: absolute;
      right: 10px;
      bottom: 65px;
      display: inline-block;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() route: string;
  constructor() { }

  ngOnInit() {
  }

}
