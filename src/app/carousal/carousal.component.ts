import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit, OnDestroy {

  public slides: Array<any> = [];
  public slideActive: any = 0;
  public slideRef: any = null;

  constructor() { }

  ngOnInit(): void {
    // this.slideRef = setInterval(() => {
    //   this.next();
    // }, 5000);
  }

  next() {
    if (this.slideActive == 2) {
      this.slideActive = 0;
    } else {
      this.slideActive++;
    }
  }

  prev() {
    if (this.slideActive > 0) {
      this.slideActive--;
    } else {
      this.slideActive = 2;
    }
  }

  ngOnDestroy() {
    if (this.slideRef != null) {
      clearInterval(this.slideRef);
    }
  }
}
