import { Component, OnInit } from '@angular/core';
import { SnowflakeService } from '../../service/snowflake.service';

@Component({
  selector: 'app-control-elements',
  templateUrl: './control-elements.component.html',
  styleUrls: ['./control-elements.component.css']
})
export class ControlElementsComponent implements OnInit {

  switchText:string='Snowfall-Switch: On';

  snowFallActive:boolean;

  changeSnowfall() {
    this.snowfallservice.stopSnowfall();
    this.snowFallActive = this.snowfallservice.snowfallActive;
    if(this.snowFallActive == false){
      this.switchText = 'Snowfall-Switch: Off';
      return;
    }
    this.switchText = 'Snowfall-Switch: On';
  }

  constructor(public snowfallservice:SnowflakeService) {
    this.snowFallActive = this.snowfallservice.snowfallActive;
  }

  ngOnInit(): void {
  }

}
