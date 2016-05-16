import { Injectable, Inject } from '@angular/core';
import { Map, GraphicsLayer } from 'esri';

import { PointsModel } from './points.model';

@Injectable()
export class MapService {
  map:Map;
  pointGraphicsLayer:GraphicsLayer;
  constructor(@Inject(PointsModel) pointsModel: PointsModel) {
    this.map = new Map({ 
      basemap: 'topo' 
    });
    console.log("in map.service.ts");
    this.map.add(pointsModel.pointsLayer);
  }
}

