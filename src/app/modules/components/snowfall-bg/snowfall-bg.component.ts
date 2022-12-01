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
    if(this.snowfallActive == false){
      return;
    }
    if (this.currentAmoutOfSnow == this.snowfallAmount) {
      this.fallingObject.unsubscribe();
    }
    if (this.snowfallAmount * 0.25 < this.currentAmoutOfSnow) {
      this.source = interval(300);
      this.fallingObject.unsubscribe();
      this.fallingObject = this.source.subscribe((val) =>
        this.createSnow(this.currentAmoutOfSnow)
      );
    }
    this.snowFallList.push({
      id: index,
    });
    this.currentAmoutOfSnow++;
  }

  constructor(private snowfallService: SnowflakeService) {
    this.snowfallActive = this.snowfallService.snowfallActive;
    this.snowfallSubscription = this.snowfallService.snowfallActivityChange.subscribe((val)=> {
      this.snowfallActive = val
    })
  }

  ngOnInit(): void {

  }
}
