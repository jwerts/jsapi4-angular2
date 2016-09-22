import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent } from './app.component';
import { PointsModel } from './points.model';
import { AttributeComponent } from './attribute.component';
import { MapComponent } from './map.component';
import { MapService } from './map.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AttributeComponent,
    MapComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    PointsModel,
    MapService
  ]
})
export class AppModule {
  constructor() {

  }
}
