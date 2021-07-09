import { Component, OnInit } from '@angular/core';
import { LegionService } from '../legion.service';

@Component({
  selector: 'app-legion-right',
  templateUrl: './legion-right.component.html',
  styleUrls: ['./legion-right.component.scss']
})
export class LegionRightComponent implements OnInit {

  constructor(public legionService: LegionService) { }

  ngOnInit(): void {
  }

  delete(index){
    this.legionService.data.splice(index, 1);
  }

}
