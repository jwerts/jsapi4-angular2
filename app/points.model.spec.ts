import { PointsModel } from './points.model';

describe('points model tests', function() {
  it('should contsctruct it', function() {
    var pointsModel = new PointsModel();
    expect(pointsModel).toBeDefined();
  });
});