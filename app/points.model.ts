import { Injectable } from '@angular/core';

import { Graphic, Point, GraphicsLayer, Collection } from 'esri';

@Injectable()
export class PointsModel {
  private _points: Collection = new Collection();
  pointsLayer: GraphicsLayer;
  constructor() {
    this.pointsLayer = new GraphicsLayer();
    this._points = this.pointsLayer.graphics;
  }
  addPoint(pointGraphic: Graphic) {
    this._points.add(pointGraphic);
  }
  addPoints(pointsGraphics: Graphic[]) {
    this._points.addMany(pointsGraphics);
  }
  getPointGraphics() {
    return this._points;
  }
  clear() {
    this._points.removeAll();
  }  
  getIndexSum() {
    var sum:number = 0;
    if (this._points !== null) {
      this._points.forEach(p => sum += p.attributes.index);
    }
    return sum;
  }
}