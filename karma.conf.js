module.exports = function(config) {
  
  var appBase   = 'app/';      // transpiled app JS files
  var appAssets ='/base/app/'; // component assets fetched by Angular's compiler

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-htmlfile-reporter')
    ],

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // Reflect and Zone.js
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Angular 2 itself and the testing library
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      {pattern: 'systemjs.config.js', included: false, watched: false},
      'karma-test-shim.js',

      


      // ********* esri load ***********
      // must be able to serve these files for dojo require
      // NOTE: karma gives a cryptic error when 
      // files can't be found  (msg || "").replace is not a function
      { pattern: 'bower_components/dojo/**/*.*', included: false, watched: false },
      { pattern: 'bower_components/dojox/**/*.*', included: false, watched: false },
      { pattern: 'bower_components/dstore/**/*.*', included: false, watched: false },     
      { pattern: 'bower_components/dgrid/**/*.*', included: false, watched: false },
      
      { pattern: 'bower_components/dijit/**/*.*', included: false, watched: false },
      { pattern: 'bower_components/esri/**/*.*', included: false, watched: false },    
      { pattern: 'bower_components/moment/**/*.js', included: false, watched: false },   

      // load dojoConfig so dojo knows where to "require" modules from
      'dojoConfigTest.js',
      
      // we need the actual dojo startup file for "requrire" to be defined
      'bower_components/dojo/dojo.js',
      
      // load in esri's systemJs util
      'node_modules/esri-system-js/dist/esriSystem.js',
      
      // load in our array of esri dependencies
      'esriLoadConfig.js',
      
      // bootstrap in the modules using esri-system-js
      'esriSystemLoadTest.js', 
      // ************ END esri load ***************



      // transpiled application & spec code paths loaded via module imports
      {pattern: appBase + '**/*.js', included: false, watched: true},

      // asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: appBase + '**/*.html', included: false, watched: true},
      {pattern: appBase + '**/*.css', included: false, watched: true},

      // paths for debugging with source maps in dev tools
      {pattern: appBase + '**/*.ts', included: false, watched: false},
      {pattern: appBase + '**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      "/app/": appAssets
    },

    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'html'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}