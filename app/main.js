System.register(['@angular/platform-browser-dynamic', './app.component', './points.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, points_model_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (points_model_1_1) {
                points_model_1 = points_model_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [points_model_1.PointsModel]);
        }
    }
});
//# sourceMappingURL=main.js.map