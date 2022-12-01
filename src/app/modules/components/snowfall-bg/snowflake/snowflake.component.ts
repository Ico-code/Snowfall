import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SnowflakeService } from '../../../service/snowflake.service';

@Component({
  selector: 'app-snowflake',
  templateUrl: './snowflake.component.html',
  styleUrls: ['./snowflake.component.css'],
})
export class SnowflakeComponent implements OnInit {
  //Used for setting the color and dimension of the falling object
  objectWidth: number = 2;
  objectHeight: number = 2;
  objectWidthPX: string = this.objectWidth+'px';
  objectHeightPX: string = this.objectHeight+'px';
  objectColor: string = 'white';
  // Should have the same value as that of .transition css class
  snowfallActive: boolean = false;
  snowfallSubscription;

  source = interval(400);
  fallingObject = this.source.subscribe((val) => {
    this.changeLocation();
  });

  //How fasr the snow moves
  movementSpeedX: number = this.snowfallService.movementSpeedX;
  movementSpeedY: number = this.snowfallService.movementSpeedY;

  //current location of the snow
  currentLocationXNum: number = this.snowfallService.getSnowfallBeginX();
  currentLocationYNum: number = this.snowfallService.getSnowfallBeginY();
  locationX: string = this.currentLocationXNum + '%';
  locationY: string = this.currentLocationYNum + '%';

  //Should snowfall have an animation
  snowFallAnimation: boolean = false;

  changeLocation() {
    this.checkForUpdatedValues();
    if (this.snowfallActive == false) {
      return;
    }
    this.outOfAreaCheck();
    this.locationX = this.currentLocationXNum + '%';
    this.locationY = this.currentLocationYNum + '%';
  }

  checkForUpdatedValues() {
    if(this.objectHeight != this.snowfallService.getFallingObjectHeight() || this.objectWidth != this.snowfallService.getFallingObjectWidth()) {
      this.objectWidth = this.snowfallService.getFallingObjectWidth();
      this.objectHeight = this.snowfallService.getFallingObjectHeight();
      this.objectWidthPX = this.objectWidth+'px';
      this.objectHeightPX = this.objectHeight+'px';
    }
    if(this.movementSpeedX != this.snowfallService.getSnowfallSpeedX() || this.movementSpeedY != this.snowfallService.getSnowfallSpeedY()){
      this.movementSpeedX = this.snowfallService.getSnowfallSpeedX();
      this.movementSpeedY = this.snowfallService.getSnowfallSpeedY();

    }
    this.objectColor = this.snowfallService.getFallingObjectColor();
  }

  outOfAreaCheck() {
    if (this.currentLocationYNum > 105) {
      this.snowFallAnimation = false;
      this.currentLocationYNum = this.snowfallService.getSnowfallBeginY();
      return;
    } else if (this.currentLocationXNum > 105) {
      this.snowFallAnimation = false;
      this.currentLocationXNum = this.snowfallService.getSnowfallBeginX();
      this.currentLocationYNum = this.snowfallService.getSnowfallBeginY();
      return;
    }
    this.snowFallAnimation = true;
    this.currentLocationXNum += this.movementSpeedX;
    this.currentLocationYNum += this.movementSpeedY;
  }

  constructor(private snowfallService: SnowflakeService) {
    this.snowfallSubscription =
      this.snowfallService.snowfallActivityChange.subscribe((val) => {
        this.snowfallActive = val;
      });
  }

  ngAfterViewChecked() {
    this.snowfallActive = this.snowfallService.snowfallActive;
  }

  ngOnInit(): void {}
}
