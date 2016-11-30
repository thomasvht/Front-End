/**
* @Author: thomasvanhoutte
* @Date:   2016-10-26T10:57:52+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-26T11:23:56+02:00
*/
describe('Flickr Photo Model and Properties', () => {

  var fliPh = new FlickrPhoto(1, "owner", "secret", "server", "farm");

  it("should be of type 'FlickrPhoto'", () => {
    expect(fliPh).toBeOfType("FlickrPhoto");
  });

  it("should contain an 'id' property", () => {
    expect(fliPh).toHaveProperty("id");
  });

  it("should contain an 'owner' property", () => {
    expect(fliPh).toHaveProperty("owner");
  });

  it("should contain a 'secret' property", () => {
    expect(fliPh).toHaveProperty("secret");
  });

  it("should contain a 'server' property", () => {
    expect(fliPh).toHaveProperty("server");
  });

  it("should contain a 'farm' property", () => {
    expect(fliPh).toHaveProperty("farm");
  });
});
