import { Injectable } from '@angular/core';

import Map from 'esri/Map';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

import { PointsModel } from './points.model';

@Injectable()
export class MapService {
  map: Map;
  pointGraphicsLayer: GraphicsLayer;
  constructor(pointsModel: PointsModel) {
    this.map = new Map({
      basemap: 'topo'
    });
    this.map.add(pointsModel.pointsLayer);
  }
}

