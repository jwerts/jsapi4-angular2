import { Map } from 'esri-mods';

export default class MapService {
  map: null;
  constructor() {
    this.map = new Map({ basemap: 'topo' });
  }
}

