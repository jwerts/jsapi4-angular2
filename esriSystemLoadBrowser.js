// load esri modules needed by this application
// into a System.js module called esri
esriSystem.register(esriLoadConfig.modules, function () {
  // then bootstrap application
  console.log('loaded esri modules');
  System.import('app/main').then(function () {
    console.log('app/main imported');
  }, function (error) {
    console.log("Esri system error:", error);
  });
}, {
  outModuleName: esriLoadConfig.outModuleName,
  moduleNameOverrides: esriLoadConfig.moduleNameOverrides
});