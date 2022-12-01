import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnowfallBgComponent } from './modules/components/snowfall-bg/snowfall-bg.component';
import { HeaderComponent } from './modules/widgets/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SnowflakeComponent } from './modules/components/snowfall-bg/snowflake/snowflake.component';
import { SidenavComponent } from './modules/widgets/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlElementsComponent } from './modules/widgets/control-elements/control-elements.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider'
import {MatSelectModule} from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    AppComponent,
    SnowfallBgComponent,
    HeaderComponent,
    SnowflakeComponent,
    SidenavComponent,
    ControlElementsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
