import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LegionService } from '../legion.service';

@Component({
  selector: 'app-legion-left',
  templateUrl: './legion-left.component.html',
  styleUrls: ['./legion-left.component.scss']
})
export class LegionLeftComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    task: new FormControl('', [Validators.required])
  });

  constructor(public legionService: LegionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.legionService.data.push(this.form.controls.task.value);
      // this.onAdd.emit(this.form.controls.task.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
