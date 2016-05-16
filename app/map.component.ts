import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { MapService } from './map.service';
import { MapView, Point, SpatialReference } from 'esri';

@Component({
  selector: 'esri-map',
  template: '<div id="viewDiv" style="height:600px"><ng-content></ng-content></div>',
  providers: [MapService]
})
export class MapComponent {

  @Output() 
  viewCreated = new EventEmitter();
  
  view: MapView;
  
  constructor(private _service: MapService, private elRef:ElementRef) {}
  
  ngOnInit() {
    this.view = new MapView({
      container: this.elRef.nativeElement.firstChild,
      map: this._service.map,
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
