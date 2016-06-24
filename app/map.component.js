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
var map_service_1 = require('./map.service');
var esri_1 = require('esri');
var MapComponent = (function () {
    function MapComponent(_service, elRef) {
        this._service = _service;
        this.elRef = elRef;
        this.viewCreated = new core_1.EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
        this.view = new esri_1.MapView({
            container: this.elRef.nativeElement.firstChild,
            map: this._service.map,
            center: new esri_1.Point({
                x: -82.44,
                y: 35.61,
                spatialReference: new esri_1.SpatialReference({ wkid: 4326 })
            }),
            zoom: 14
        });
        this.viewCreated.next(this.view);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapComponent.prototype, "viewCreated", void 0);
    MapComponent = __decorate([
        core_1.Component({
            selector: 'esri-map',
            template: '<div id="viewDiv" style="height:600px"><ng-content></ng-content></div>',
            providers: [map_service_1.MapService]
        }), 
        __metadata('design:paramtypes', [map_service_1.MapService, core_1.ElementRef])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map