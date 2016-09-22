import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { MapService } from './map.service';

import MapView from 'esri/views/MapView';
import Point from 'esri/geometry/Point';
import SpatialReference from 'esri/geometry/SpatialReference';


@Component({
  selector: 'esri-map',
  template: '<div id="viewDiv" style="height:600px"><ng-content></ng-content></div>'
})
export class MapComponent {

  @Output()
  viewCreated = new EventEmitter();

  view: MapView;

  constructor(private mapService: MapService,
              private elementRef: ElementRef) {}

  ngOnInit() {
    this.view = new MapView({
      container: this.elementRef.nativeElement.firstChild,
      map: this.mapService.map,
      center: new Point({
        x: -82.44,
        y: 35.61,
        spatialReference: new SpatialReference({ wkid: 4326 })
      }),
      zoom: 14
    });
    this.viewCreated.next(this.view);
  }
}
