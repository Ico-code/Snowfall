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

  snowFallList: Array<snowfallList> = [
    {
      id: 0,
    },
  ];

  source = interval(300);
  fallingObject = this.source.subscribe((val) =>
    this.createSnow(this.currentAmoutOfSnow)
  );
  currentAmoutOfSnow: number = 1;

  snowfallAmount: number = this.service.getSnowfallAmount();

  snowfallDirection: number = this.service.getSnowfallDirection();
  direction: string = 'rotateZ(' + this.snowfallDirection + 'deg)';

  createSnow(index: number) {
    if (this.currentAmoutOfSnow == this.snowfallAmount) {
      this.fallingObject.unsubscribe()
    }
    this.snowFallList.push({
      id: index,
    });
    this.currentAmoutOfSnow++;
  }

  constructor(private service: SnowflakeService) {
    this.snowfallActive = this.service.snowfallActive;
  }

  ngOnInit(): void {}
}
