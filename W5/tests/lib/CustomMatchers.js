/**
* @Author: thomasvanhoutte
* @Date:   2016-10-26T11:03:18+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-26T11:19:44+02:00
*/
var customMatchers = {

  toBeOfType: () => {
    return{
      compare: (actual, expectedType) => {
        var str = actual.constructor.toString();
        var typeOfActual = str.substring(9, str.indexOf('('));
        return {
          pass: typeOfActual === expectedType
        };
      }
    };
  },
  toHaveProperty: () => {
    return {
      compare: (actual, propertyName) => {
        var isOK = actual.hasOwnProperty(propertyName);

        return {
          pass: isOK
        };
      }
    };
  }
};

beforeEach(() => {
  jasmine.addMatchers(customMatchers);
});
