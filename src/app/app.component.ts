import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dummy:Array<any> = ["Test", "gsdgvazs"];

  updateData(event) {
    this.dummy.push(event);
    
  }
  
}
