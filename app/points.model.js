System.register(['@angular/core', 'esri/layers/GraphicsLayer', 'esri/core/Collection'], function(exports_1, context_1) {
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
    var core_1, GraphicsLayer_1, Collection_1;
    var PointsModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (GraphicsLayer_1_1) {
                GraphicsLayer_1 = GraphicsLayer_1_1;
            },
            function (Collection_1_1) {
                Collection_1 = Collection_1_1;
            }],
        execute: function() {
            PointsModel = (function () {
                function PointsModel() {
                    this.points = new Collection_1.default();
                    this.pointsLayer = new GraphicsLayer_1.default();
                    this.points = this.pointsLayer.graphics;
                }
                PointsModel.prototype.addPoint = function (pointGraphic) {
                    this.points.add(pointGraphic);
                };
                PointsModel.prototype.addPoints = function (pointsGraphics) {
                    this.points.addMany(pointsGraphics);
                };
                PointsModel.prototype.getPointGraphics = function () {
                    return this.points;
                };
                PointsModel.prototype.clear = function () {
                    this.points.removeAll();
                };
                PointsModel.prototype.getIndexSum = function () {
                    var sum = 0;
                    if (this.points !== null) {
                        this.points.forEach(function (p) { return sum += p.attributes.index; });
                    }
                    return sum;
                };
                PointsModel = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PointsModel);
                return PointsModel;
            }());
            exports_1("PointsModel", PointsModel);
        }
    }
});
//# sourceMappingURL=points.model.js.map