// load esri modules needed by this application
// into a System.js module called esri
esriSystem.register(esriLoadConfig.modules, function () {
  console.log('loaded esri modules');
}, {
  outModuleName: esriLoadConfig.outModuleName,
  moduleNameOverrides: esriLoadConfig.moduleNameOverrides
});