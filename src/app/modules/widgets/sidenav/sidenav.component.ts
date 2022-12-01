import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  fallingObjectControls: FormGroup;

  controlPresets:Array<string>=['None','Snow','Water','Lava','Dogs','Cats'];



  submit() {

  }
  constructor(private fb: FormBuilder) {
    this.fallingObjectControls = this.fb.group({
      Type:this.controlPresets[0],
      Color:'white',
      BackgroundColor:'Black',
      SpeedX:0,
      SpeedY:0,
      Amount:0,
      Angle:0,
      Width:0,
      Height:0
    })
  }

  get type(){
    return this.fallingObjectControls.get('Type')
  }
  get color(){
    return this.fallingObjectControls.get('Color')
  }
  get backgroundColor(){
    return this.fallingObjectControls.get('BackgroundColor')
  }

  ngOnInit(): void {

  }

}
