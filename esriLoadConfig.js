(function(window) {
  window.esriLoadConfig = {
      modules: [
      'esri/Map',
      'esri/views/MapView',
      'esri/core/Collection',
      'esri/layers/GraphicsLayer',
      'esri/Graphic',
      'esri/geometry/Point',
      'esri/geometry/SpatialReference',
      'esri/symbols/SimpleMarkerSymbol',
      'esri/Color',
      'esri/layers/WebTileLayer',
      'esri/Basemap'
    ], 
    outModuleName: 'esri',
    moduleNameOverrides: {
      'esri/arcgis/utils': 'arcgisUtils'
    }
  };
}(window))