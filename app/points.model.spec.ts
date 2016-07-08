import { PointsModel } from './points.model';

import Graphic from 'esri/Graphic';
import Point from 'esri/geometry/Point';

describe('PointsModel tests', () => {
  let mockPointGraphic = new Graphic({
    attributes: {
      index: 1
    },
    geometry: new Point({
      x: 1,
      y: 2,
      spatialReference: {
        wkid: 4326
      }
    })
  });

  let pointsModel;
  beforeEach(() => {
    pointsModel = new PointsModel();
  });

  it('should contstruct it', () => {
    expect(pointsModel).toBeDefined();
    expect(pointsModel.getPointGraphics()).toBeDefined();
  });

  describe('adding and removing points', () => {
    it('should add a point to collection', () => {
       pointsModel.addPoint(mockPointGraphic);
       pointsModel.addPoint(mockPointGraphic);
       expect(pointsModel.getPointGraphics().length).toEqual(2);
    });

    it('should add points to collection', () => {
      pointsModel.addPoints([mockPointGraphic, mockPointGraphic]);
      expect(pointsModel.getPointGraphics().length).toEqual(2);
    });

    it('should clear points', () => {
      pointsModel.addPoint(mockPointGraphic);
      pointsModel.addPoint(mockPointGraphic);
      pointsModel.clear();
      expect(pointsModel.getPointGraphics().length).toEqual(0);
    });
  });

  describe('calculations', () => {
    it('should calculate the sum of the index attributes', () => {
      pointsModel.addPoints([mockPointGraphic, mockPointGraphic]);
      let sum = pointsModel.getIndexSum();
      expect(sum).toEqual(2);
    });
  });

});
