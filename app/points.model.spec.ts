import { PointsModel } from './points.model';

describe('PointsModel tests', function() {
  var mockPoint = {
    attributes: {
      index: 1
    },
    geometry: {
      x: 1,
      y: 2,
      spatialReference: {
        wkid: 4326
      }
    }
  };

  var pointsModel;
  beforeEach(function() {
    pointsModel = new PointsModel();
  });
  
  it('should contstruct it', function() {
    expect(pointsModel).toBeDefined();
    expect(pointsModel.getPointGraphics()).toBeDefined();
  });
  
  describe("adding and removing points", function() {
    it('should add a point to collection', function() {
       pointsModel.addPoint(mockPoint);
       pointsModel.addPoint(mockPoint);
       expect(pointsModel.getPointGraphics().length).toEqual(2);
    });
    
    it('should add points to collection', function() {
      pointsModel.addPoints([mockPoint, mockPoint]);
      expect(pointsModel.getPointGraphics().length).toEqual(2);
    });
    
    it('should clear points', function() {
      pointsModel.addPoint(mockPoint);
      pointsModel.addPoint(mockPoint);
      pointsModel.clear();
      expect(pointsModel.getPointGraphics().length).toEqual(0);
    });
  });
  
  describe('calculations', function() {
    it('should calculate the sum of the index attributes', function() {
      pointsModel.addPoints([mockPoint, mockPoint]);
      var sum = pointsModel.getIndexSum();
      expect(sum).toEqual(2);
    });
  });
 
});