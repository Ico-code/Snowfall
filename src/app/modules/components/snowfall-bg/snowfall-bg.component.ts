import { Component, OnInit, Input } from '@angular/core';
import { SnowflakeService } from '../../service/snowflake.service';
import { interval } from 'rxjs';

interface snowfallList {
  id: number;
}

@Component({
  selector: 'app-snowfall-bg',
  templateUrl: './snowfall-bg.component.html',
  styleUrls: ['./snowfall-bg.component.css'],
})
export class SnowfallBgComponent implements OnInit {

  background_color:string = 'black';

  snowfallActive: boolean;
  snowfallSubscription;

  snowFallList: Array<snowfallList> = [
    {
      id: 0,
    },
  ];

  source = interval(250);
  fallingObject = this.source.subscribe((val) =>
    this.createSnow(this.currentAmoutOfSnow)
  );
  currentAmoutOfSnow: number = 1;

  snowfallAmount: number = this.snowfallService.getSnowfallAmount();

  snowfallDirection: number = this.snowfallService.getSnowfallDirection();
  direction: string = 'rotateZ(' + this.snowfallDirection + 'deg)';

  createSnow(index: number) {
    this.checkForNewValues();
    if (this.snowfallActive == false) {
      return;
    }
    if(this.checkForSnowLimit()){
      return;
    }
    this.slowDownSnowCreationRate();
    this.snowFallList.push({
      id: index,
    });
    this.currentAmoutOfSnow++;
  }

  checkBackground(){
    if(this.background_color != this.snowfallService.getFallingObjectBackgroundColor()){
      this.background_color = this.snowfallService.getFallingObjectBackgroundColor()
    }
  }

  checkForNewValues(){
    this.checkBackground();
    if(this.snowfallDirection != this.snowfallService.getSnowfallDirection()){
      this.snowfallDirection = this.snowfallService.getSnowfallDirection();
      this.direction = 'rotateZ(' + this.snowfallDirection + 'deg)';
    }
    this.snowfallAmount = this.snowfallService.getSnowfallAmount();
  }

  slowDownSnowCreationRate() {
    if (
      this.snowfallAmount * 0.25 < this.currentAmoutOfSnow &&
      this.snowfallAmount > this.currentAmoutOfSnow
    ) {
      this.source = interval(300);
      this.fallingObject.unsubscribe();
      this.fallingObject = this.source.subscribe((val) =>
        this.createSnow(this.currentAmoutOfSnow)
      );
    }
  }

  checkForSnowLimit() {
    if (this.currentAmoutOfSnow >= this.snowfallAmount) {
      this.source = interval(1000);
      this.fallingObject.unsubscribe();
      this.fallingObject = this.source.subscribe((val) =>
        this.createSnow(this.currentAmoutOfSnow)
      );
      return true;
    }
    return false;
  }

  constructor(private snowfallService: SnowflakeService) {
    this.snowfallActive = this.snowfallService.snowfallActive;
    this.snowfallSubscription =
      this.snowfallService.snowfallActivityChange.subscribe((val) => {
        this.snowfallActive = val;
      });
  }

  ngOnInit(): void {}
}
