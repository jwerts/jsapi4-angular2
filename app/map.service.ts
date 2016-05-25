import { Injectable, Inject } from '@angular/core';
import { Map, GraphicsLayer, WebTileLayer, Basemap, Collection } from 'esri';

import { PointsModel } from './points.model';

@Injectable()
export class MapService {
  map:Map;
  pointGraphicsLayer:GraphicsLayer;
  
  // Create a WebTileLayer with a third-party cached service
  mapBaseLayer: WebTileLayer = new WebTileLayer({
    urlTemplate: "http://{subDomain}.tile.stamen.com/terrain/{level}/{col}/{row}.png",
    subDomains: ["a", "b", "c", "d"],
    copyright: "Map tiles by <a href=\"http://stamen.com/\">Stamen Design</a>, " +
      "under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. " +
      "Data by <a href=\"http://openstreetmap.org/\">OpenStreetMap</a>, " +
      "under <a href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>."
  });
  
  // Create a Basemap with the WebTileLayer. The thumbnailUrl will be used for the image in the BasemapToggle widget.
  stamen: Basemap = new Basemap({
      baseLayers: new Collection([this.mapBaseLayer]),
      title: "Terrain",
      id: "terrain",
      thumbnailUrl: "http://stamen-tiles.a.ssl.fastly.net/terrain/10/177/409.png"
  });
    
  constructor(@Inject(PointsModel) pointsModel: PointsModel) {
    this.map = new Map({ 
      //basemap: 'topo',
      basemap: this.stamen
    });

    this.map.add(pointsModel.pointsLayer);
  }
}

