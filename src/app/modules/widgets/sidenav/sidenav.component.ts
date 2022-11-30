import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  fallingObjectControls: FormGroup;

  options:Array<string> = ['SpeedX','SpeedY','Amount','Type','Angle'];

  label(value:number):string {
    return value.toString()
  }
  submit() {

  }

  constructor(private fb: FormBuilder) {
    this.fallingObjectControls = this.fb.group({
      SpeedX:0,
      SpeedY:0,
      Amount:0,
      Type:0,
      Angle:0,
      Color:String,
      Width:0,
      Height:0
    })
  }

  ngOnInit(): void {}

}
