import { Component, ElementRef, Output, EventEmitter } from 'angular2/core';
import MapService from './map.service';
import { MapView } from 'esri-mods';

@Component({
    selector: 'esri-map',
    template: '<div id="viewDiv"><ng-content></ng-content></div>',
    providers: [MapService]
})
export class MapComponent {

  @Output() viewCreated = new EventEmitter();
  
  view: null;
  
  constructor(private _service: MapService, private elRef:ElementRef) {}
  
  ngOnInit() {
    this.view = new MapView({
      container: this.elRef.nativeElement.firstChild,
      map: this._service.map,
      zoom: 10,
      center: [-120.76, 37.93]
    });
    this.viewCreated.next(this.view);
  }
}
