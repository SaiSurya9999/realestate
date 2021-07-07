import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  @Output() onAdd: EventEmitter<any> = new EventEmitter();

  public form: FormGroup = new FormGroup({
    task: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.onAdd.emit(this.form.controls.task.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

}
