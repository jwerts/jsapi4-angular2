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
var core_1 = require('@angular/core');
var esri_1 = require('esri');
var PointsModel = (function () {
    function PointsModel() {
        this._points = new esri_1.Collection();
        this.pointsLayer = new esri_1.GraphicsLayer();
        this._points = this.pointsLayer.graphics;
    }
    PointsModel.prototype.addPoint = function (pointGraphic) {
        this._points.add(pointGraphic);
    };
    PointsModel.prototype.addPoints = function (pointsGraphics) {
        this._points.addMany(pointsGraphics);
    };
    PointsModel.prototype.getPointGraphics = function () {
        return this._points;
    };
    PointsModel.prototype.clear = function () {
        this._points.removeAll();
    };
    PointsModel.prototype.getIndexSum = function () {
        var sum = 0;
        if (this._points !== null) {
            this._points.forEach(function (p) { return sum += p.attributes.index; });
        }
        return sum;
    };
    PointsModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PointsModel);
    return PointsModel;
}());
exports.PointsModel = PointsModel;
//# sourceMappingURL=points.model.js.map