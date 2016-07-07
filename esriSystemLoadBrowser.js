// load esri modules needed by this application
// into a System.js module called esri
console.log("Loading esri modules: ", esriLoadConfig.modules);
start = performance.now();
esriSystem.register(esriLoadConfig.modules, function () {
  // then bootstrap application
  end = performance.now();
  time = end - start;
  console.log('Loaded esri modules', time / 1000.0);
  System.import('app/main').then(function () {
    console.log('app/main imported');
  }, function (error) {
    console.log("Esri system error:", error);
  });
});