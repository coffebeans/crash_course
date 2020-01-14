import Square from "../src/Square";

describe('Square', function () {

    describe('area', function () {
    it('should return area of square', function () {
        let square = new Square(10);
        let area = square.area();
        expect(area).toBe(100);
    });
  })

  describe('perimeter', function () {
    it('should return perimeter of square', function () {
        let square = new Square(10);
        let perimeter = square.perimeter();
        expect(perimeter).toBe(40);
    });
  })

});


