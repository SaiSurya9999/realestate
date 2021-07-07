import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
  @Input() data: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  delete(index) {
     console.log(index);
  }

}
