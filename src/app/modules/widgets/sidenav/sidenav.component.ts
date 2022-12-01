import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { objectSettings } from './../../../../assets/data/objectSettings';
import { settingsInterface } from './../../../../assets/data/settignsInterface';
import { SnowflakeService } from '../../service/snowflake.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  settings: settingsInterface = objectSettings;

  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  fallingObjectControls: FormGroup;

  controlerActivity: boolean = true;

  snackbarOpen:boolean = false;

  closeAndOpenControls() {
    this.controlerActivity = !this.controlerActivity;
  }
  update(event: any, whatToUpdate: string) {
    this.fallingObjectControls.get(whatToUpdate)?.setValue(event.value);
  }
  snackbarSwitch(){
    this.snackbarOpen = !this.snackbarOpen
  }
  reset() {
    this.fallingObjectControls.get('Color')?.setValue(this.settings.Color);
    this.fallingObjectControls.get('BackgroundColor')?.setValue(this.settings.BackgroundColor);
    this.fallingObjectControls.get('SpeedX')?.setValue(this.settings.SpeedX);
    this.fallingObjectControls.get('SpeedY')?.setValue(this.settings.SpeedY);
    this.fallingObjectControls.get('Amount')?.setValue(this.settings.Amount);
    this.fallingObjectControls.get('Angle')?.setValue(this.settings.Angle);
    this.fallingObjectControls.get('Height')?.setValue(this.settings.Height);
    this.fallingObjectControls.get('Width')?.setValue(this.settings.Width);
    this.submit()
  }
  submit() {
    this.snowService.setValues(this.fallingObjectControls.value);
    console.log(this.fallingObjectControls.value.Color);
  }

  constructor(private fb: FormBuilder, private snowService: SnowflakeService) {
    this.fallingObjectControls = this.fb.group({
      Color: this.settings.Color,
      BackgroundColor: this.settings.BackgroundColor,
      SpeedX: this.settings.SpeedX,
      SpeedY: this.settings.SpeedY,
      Amount: this.settings.Amount,
      Angle: this.settings.Angle,
      Width: this.settings.Width,
      Height: this.settings.Height,
    });
    snowService.setValues(this.fallingObjectControls.value);
  }

  get speedx() {
    return this.fallingObjectControls.get('SpeedX');
  }
  get speedy() {
    return this.fallingObjectControls.get('SpeedY');
  }
  get amount() {
    return this.fallingObjectControls.get('Amount');
  }
  get angle() {
    return this.fallingObjectControls.get('Angle');
  }
  get width() {
    return this.fallingObjectControls.get('Width');
  }
  get height() {
    return this.fallingObjectControls.get('Height');
  }
  get color() {
    return this.fallingObjectControls.get('Color');
  }
  get backgroundColor() {
    return this.fallingObjectControls.get('BackgroundColor');
  }

  ngOnInit(): void {}
}
