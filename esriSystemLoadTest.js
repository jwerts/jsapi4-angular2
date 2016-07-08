// load esri modules needed by this application
// into a System.js module called esri
start = performance.now();
esriSystem.register(esriLoadConfig.modules, function () {
  end = performance.now();
  time = end - start;
  console.log('Loaded esri modules', time / 1000.0);
});