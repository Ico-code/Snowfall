import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SnowflakeService } from '../../service/snowflake.service';

@Component({
  selector: 'app-control-elements',
  templateUrl: './control-elements.component.html',
  styleUrls: ['./control-elements.component.css']
})
export class ControlElementsComponent implements OnInit {

  controlItems:Array<string> = ['Snowfall-Switch']

  changeSnowfall() {
    this.snowfallservice.stopSnowfall();
  }

  constructor(public snowfallservice:SnowflakeService) { }

  ngOnInit(): void {
  }

}
