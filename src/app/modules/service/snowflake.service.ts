import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnowflakepathService } from './snowflakepath.service';

@Injectable({
  providedIn: 'root',
})
export class SnowflakeService {
  snowfallActivityChange: Subject<boolean> = new Subject<boolean>();
  snowfallActive: boolean = true;

  snowfallAmount: number = 500;
  snowfallDirection: number = 0;

  movementSpeedX = 0.1;
  movementSpeedY = 0.5;

  getSnowfallDirection() {
    return this.snowfallDirection;
  }
  getSnowfallBeginX() {
    return this.pathservice.getStartingPointX();
  }
  getSnowfallBeginY() {
    return this.pathservice.getStartingPointY();
  }
  getSnowfallSpeedX() {
    return this.movementSpeedX;
  }
  getSnowfallSpeedY() {
    return this.movementSpeedY;
  }
  getSnowfallAmount() {
    return this.snowfallAmount;
  }

  setSnowfallDirection() {
    return this.snowfallDirection;
  }
  setSnowfallSpeedX() {
    return this.movementSpeedX;
  }
  setSnowfallSpeedY() {
    return this.movementSpeedY;
  }
  setSnowfallAmount() {
    return this.snowfallAmount;
  }

  stopSnowfall() {
    this.snowfallActivityChange.next(!this.snowfallActive);
  }

  constructor(private pathservice: SnowflakepathService) {
    this.snowfallActivityChange.subscribe((val) => {
      this.snowfallActive = val;
    });

  }
}
