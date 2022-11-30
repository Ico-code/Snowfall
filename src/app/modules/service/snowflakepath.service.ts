import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnowflakepathService {
  generateRandomStartingPoint() {
    let i = Math.floor(Math.random() * 100);
    return i;
  }

  getStartingPointX(): number {
    if(this.generateRandomStartingPoint() > 60){
      return -Math.abs(this.generateRandomStartingPoint())
    }
    return this.generateRandomStartingPoint();
  }

  getStartingPointY(): number {
    return -1;
  }

  constructor() {}
}
