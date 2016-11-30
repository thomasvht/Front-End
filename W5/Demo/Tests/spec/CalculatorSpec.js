/**
* @Author: thomasvanhoutte
* @Date:   2016-10-26T09:32:51+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-26T10:33:47+02:00
*/
// describe --> suite
describe('Calculator', () => {

  var calc, a = 3, b = 5;
  beforeEach(function () {
    calc = new Calculator();
  });


  it('should be able to add 3 and 5', () => {
    //SEE
    //AAA

    //Setup or Arrange
    var sum = 0;

    //Execute or Act
    sum = calc.add(a,b);

    //Change Expectations or Assert
    expect(sum).toBe(8);
  });

  it('should be able to devide 3 by 5', () =>{
    var quotient = 0;

    quotient = calc.devide(a,b);

    expect(quotient).toBeBetween(0,1);
  });

  it('should be able to multiply 3 by 5', () => {
    var multiplication = 0;

    multiplication = calc.multiply(a,b);

    expect(multiplication).toBe(15);
  });

  it('should be able to substract 3 by 5', () => {
    var substraction = 0;

    substraction = calc.substract(a,b);

    expect(substraction).toBeLessThan(0);
  });
});
