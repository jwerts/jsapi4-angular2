import { Component, OnInit } from '@angular/core';

import Collection from 'esri/core/Collection';

import { PointsModel } from './points.model';

@Component({
  selector: 'attribute-display',
  templateUrl: './app/attribute.component.html'
})
export class AttributeComponent implements OnInit {
  points: Collection;
  constructor(private pointsModel: PointsModel) { }

  ngOnInit() {
    this.points = this.pointsModel.getPointGraphics();
   }
}
