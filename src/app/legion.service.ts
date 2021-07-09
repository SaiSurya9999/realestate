import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegionService {
  public data: Array<any> = [];
  constructor() { }
}
