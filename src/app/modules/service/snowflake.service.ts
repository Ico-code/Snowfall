import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnowflakepathService } from './snowflakepath.service';
import { settingsInterface } from './../../../assets/data/settignsInterface';

@Injectable({
  providedIn: 'root',
})
export class SnowflakeService {

  messageSource: Subject<string>;

  snowfallActivityChange: Subject<boolean> = new Subject<boolean>();
  snowfallActive: boolean = true;

  fallingObjectColor:string = 'white';
  fallingObjectBackgroundColor:string = 'black';

  fallingObjectSizeWidth: number = 2;
  fallingObjectSizeHeight: number = 2;

  snowfallAmount: number = 100;
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

  getFallingObjectColor(){
    return this.fallingObjectColor
  }
  getFallingObjectBackgroundColor(){
    return this.fallingObjectBackgroundColor
  }
  getFallingObjectWidth(){
    return this.fallingObjectSizeWidth
  }
  getFallingObjectHeight(){
    return this.fallingObjectSizeHeight
  }

  setValues(values: settingsInterface) {
    this.setSnowfallDirection(values.Angle);
    this.setSnowfallAmount(values.Amount);
    this.setSnowfallSpeedX(values.SpeedX);
    this.setSnowfallSpeedY(values.SpeedY);
    this.setFallingObjectSize(values.Width, values.Height);
    this.setFallingObjectBackgroundColor(values.BackgroundColor)
    this.setFallingObjectColor(values.Color)
  }

  setFallingObjectColor(color:string){
    this.fallingObjectColor = color;
  }
  setFallingObjectBackgroundColor(background_color:string){
    this.fallingObjectBackgroundColor = background_color;
  }

  setFallingObjectSize(Width: number, Height: number) {
    this.fallingObjectSizeHeight = Height;
    this.fallingObjectSizeWidth = Width;
  }
  setSnowfallDirection(Angle: number) {
    this.snowfallDirection = Angle;
  }
  setSnowfallSpeedX(SpeedX: number) {
    this.movementSpeedX = SpeedX;
  }
  setSnowfallSpeedY(SpeedY: number) {
    this.movementSpeedY = SpeedY;
  }
  setSnowfallAmount(Amount: number) {
    this.snowfallAmount = Amount;
  }

  stopSnowfall() {
    this.snowfallActivityChange.next(!this.snowfallActive);
  }

  constructor(private pathservice: SnowflakepathService) {
    this.messageSource = new Subject<string>();
    this.snowfallActivityChange.subscribe((val) => {
      this.snowfallActive = val;
    });
  }
}
