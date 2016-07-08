System.register(['@angular/core', './map.component', './attribute.component', './points.model', 'esri/geometry/Point', 'esri/Graphic', 'esri/symbols/SimpleMarkerSymbol', 'esri/Color'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, map_component_1, attribute_component_1, points_model_1, Point_1, Graphic_1, SimpleMarkerSymbol_1, Color_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (attribute_component_1_1) {
                attribute_component_1 = attribute_component_1_1;
            },
            function (points_model_1_1) {
                points_model_1 = points_model_1_1;
            },
            function (Point_1_1) {
                Point_1 = Point_1_1;
            },
            function (Graphic_1_1) {
                Graphic_1 = Graphic_1_1;
            },
            function (SimpleMarkerSymbol_1_1) {
                SimpleMarkerSymbol_1 = SimpleMarkerSymbol_1_1;
            },
            function (Color_1_1) {
                Color_1 = Color_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(pointsModel) {
                    this.pointsModel = pointsModel;
                    this.pointIndex = 0;
                    this.pointLongitude = -82.43;
                    this.pointLatitude = 35.61;
                    this.defaultSymbol = new SimpleMarkerSymbol_1.default({
                        style: 'circle',
                        size: 12,
                        color: new Color_1.default('#000000')
                    });
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.onClearClicked = function () {
                    this.pointsModel.clear();
                };
                AppComponent.prototype.onAddClicked = function () {
                    this.pointIndex++;
                    this.pointLatitude += 0.001;
                    this.pointLongitude += 0.001;
                    var g = new Graphic_1.default({
                        geometry: new Point_1.default({
                            x: this.pointLongitude,
                            y: this.pointLatitude,
                            spatialReference: 4326
                        }),
                        attributes: {
                            index: this.pointIndex
                        },
                        symbol: this.defaultSymbol
                    });
                    this.pointsModel.addPoint(g);
                };
                AppComponent.prototype.onViewCreated = function () {
                    console.log('view created');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [map_component_1.MapComponent, attribute_component_1.AttributeComponent],
                        selector: 'my-app',
                        templateUrl: './app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [points_model_1.PointsModel])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map