import { Injectable } from '@angular/core';

import Graphic from 'esri/Graphic';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import Collection from 'esri/core/Collection';

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
    let sum = 0;
    if (this._points !== null) {
      this._points.forEach(p => sum += p.attributes.index);
    }
    return sum;
  }
}
