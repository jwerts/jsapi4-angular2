(function(window) {
  // set up your dojoConfig
  window.dojoConfig = {
    baseUrl: 'app/node_modules/',
    deps: ['app/main'],
    packages: [
      'app',
      'dijit',
      'dojo',
      'dojox',
      'dstore',
      'dgrid',
      'esri', {
        name: 'moment',
        location: 'moment',
        main: 'moment'
      }
    ]
  };
});