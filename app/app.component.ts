import { Component } from 'angular2/core';
import { MapComponent } from './map.component';
import { HomeComponent } from './home.component';

@Component({
  directives: [MapComponent, HomeComponent],
    selector: 'my-app',
    template:
    `
    <div>
    <esri-map #mapView (viewCreated)="homeButton.setView(mapView.view)">
      <esri-home #homeButton></esri-home>
    </esri-map>
    </div>
    `
})
export class AppComponent { }