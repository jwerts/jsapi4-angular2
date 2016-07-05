import { Component, OnInit } from '@angular/core';

//import { Graphic, Collection, Point } from "esri";
import Graphic from 'esri/Graphic';
import Collection from 'esri/core/Collection';
import Point from 'esri/geometry/Point';

import { PointsModel } from './points.model';

@Component({
  selector: 'attribute-display',
  templateUrl: './app/attribute.component.html',
  //providers: [PointsModel]
})
export class AttributeComponent implements OnInit {
  points: Collection;
  constructor(private pointsModel:PointsModel) { }

  ngOnInit() { 
    this.points = this.pointsModel.getPointGraphics();
   }
}