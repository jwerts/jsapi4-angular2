import { Component, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { AttributeComponent } from './attribute.component';
import { PointsModel } from './points.model';

//import { Point, Graphic, SimpleMarkerSymbol, Color } from 'esri';
import Point from 'esri/geometry/Point';
import Graphic from 'esri/Graphic';
import SimpleMarkerSymbol from 'esri/symbols/SimpleMarkerSymbol';
import Color from 'esri';


@Component({
  directives: [MapComponent, AttributeComponent],
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
  private _pointIndex = 0;
  private _pointLongitude = -82.43;
  private _pointLatitude = 35.61;
  private _defaultSymbol: SimpleMarkerSymbol = new SimpleMarkerSymbol({
    style: 'circle',
    size: 12,
    color: new Color("#000000")
  });
  constructor(private pointsModel:PointsModel) {
    
  }
  ngOnInit() {
    
  }
  onClearClicked() {
    this.pointsModel.clear();
  }
  onAddClicked() {
    this._pointIndex++;
    this._pointLatitude += 0.001;
    this._pointLongitude += 0.001;
    var g = new Graphic({
      geometry: new Point({
        x: this._pointLongitude,
        y: this._pointLatitude,
        spatialReference: 4326
      }),
      attributes: {
        index: this._pointIndex
      },
      symbol: this._defaultSymbol
    });
    this.pointsModel.addPoint(g);
  }
  onViewCreated() {
    console.log('view created');
  }  
}