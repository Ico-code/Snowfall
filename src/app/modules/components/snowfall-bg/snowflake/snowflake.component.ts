import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SnowflakeService } from '../../../service/snowflake.service';

@Component({
  selector: 'app-snowflake',
  templateUrl: './snowflake.component.html',
  styleUrls: ['./snowflake.component.css'],
})
export class SnowflakeComponent implements OnInit {
  // Should have the same value as that of .transition css class
  snowfallActive: boolean = this.snowfallService.snowfallActive;
  snowfallSubscription;

  source = interval(100);
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
    if (this.snowfallActive == false) {
      return;
    }
    this.outOfAreaCheck();
    this.locationX = this.currentLocationXNum + '%';
    this.locationY = this.currentLocationYNum + '%';
  }

  outOfAreaCheck() {
    if (this.currentLocationYNum > 101) {
      this.snowFallAnimation = false;
      this.currentLocationYNum = this.snowfallService.getSnowfallBeginY();
      return;
    } else if (this.currentLocationXNum > 101) {
      this.snowFallAnimation = false;
      this.currentLocationXNum = this.snowfallService.getSnowfallBeginX();
      return;
    }
    this.snowFallAnimation = true;
    this.currentLocationXNum += this.movementSpeedX;
    this.currentLocationYNum += this.movementSpeedY;
  }

  constructor(private snowfallService: SnowflakeService) {
    this.snowfallSubscription = this.snowfallService.snowfallActivityChange.subscribe((val)=> {
      this.snowfallActive = val
    })
  }

  ngOnInit(): void {}
}
