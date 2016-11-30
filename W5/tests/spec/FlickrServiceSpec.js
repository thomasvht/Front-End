/**
* @Author: thomasvanhoutte
* @Date:   2016-10-26T11:30:41+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-26T11:50:14+02:00
*/
describe('FlickrServer', () => {
  var svc = window.flickrService;

  it("should have a 'getPhotos' method", () => {
    expect(svc).toHaveProperty("getPhotos");
  });

  it('should return an array after "getPhotos"', () => {
    var result = svc.getPhotos();
    expect(result).toBeOfType("Array");
  });

  it('should return an array of "FlickrPhoto"', () => {
    var result = svc.getPhotos();
    expect(result[0]).toBeOfType("FlickrPhoto");
  });
});
