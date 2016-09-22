/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'https://npmcdn.com/'
    },
    // map tells the System loader where to look for things
    map: {
      'app': 'app', // 'dist',

      // angular bundles
      '@angular/core': 'npm:@angular/core@2.0.0/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@2.0.0/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@2.0.0/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@2.0.0/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router@3.0.0/bundles/router.umd.js',

      // angular testing umd bundles
      '@angular/core/testing': 'npm:@angular/core@2.0.0/bundles/core-testing.umd.js',
      '@angular/common/testing': 'npm:@angular/common@2.0.0/bundles/common-testing.umd.js',
      '@angular/compiler/testing': 'npm:@angular/compiler@2.0.0/bundles/compiler-testing.umd.js',
      '@angular/platform-browser/testing': 'npm:@angular/platform-browser@2.0.0/bundles/platform-browser-testing.umd.js',
      '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@2.0.0/bundles/platform-browser-dynamic-testing.umd.js',
      '@angular/http/testing': 'npm:@angular/http@2.0.0/bundles/http-testing.umd.js',
      '@angular/router/testing': 'npm:@angular/router@3.0.0/bundles/router-testing.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs@5.0.0-beta.12',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',

      'esri': 'http://js.arcgis.com/4.0/esri'
    },

    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);