import { Injectable } from '@angular/core';

import Graphic from 'esri/Graphic';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import Collection from 'esri/core/Collection';

@Injectable()
export class PointsModel {
  private points: Collection = new Collection();
  pointsLayer: GraphicsLayer;
  constructor() {
    this.pointsLayer = new GraphicsLayer();
    this.points = this.pointsLayer.graphics;
  }
  addPoint(pointGraphic: Graphic) {
    this.points.add(pointGraphic);
  }
  addPoints(pointsGraphics: Graphic[]) {
    this.points.addMany(pointsGraphics);
  }
  getPointGraphics() {
    return this.points;
  }
  clear() {
    this.points.removeAll();
  }
  getIndexSum() {
    let sum = 0;
    if (this.points !== null) {
      this.points.forEach(p => sum += p.attributes.index);
    }
    return sum;
  }
}
