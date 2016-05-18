"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var esri_1 = require('esri');
var points_model_1 = require('./points.model');
var MapService = (function () {
    function MapService(pointsModel) {
        this.map = new esri_1.Map({
            basemap: 'topo'
        });
        console.log("in map.service.ts");
        this.map.add(pointsModel.pointsLayer);
    }
    MapService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(points_model_1.PointsModel)), 
        __metadata('design:paramtypes', [points_model_1.PointsModel])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map