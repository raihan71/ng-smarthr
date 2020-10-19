import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './employee-edit.component.html',
  styles: []
})
export class EmployeeEditComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params[`id`];
    console.log(this.id);
  }

}
