import Rectangle from "../src/Rectangle";

describe('Rectangle', function () {
    it('should return area of rectangle', function () {
        let rectangle = new Rectangle(5,10);
        let area = rectangle.area();
        expect(area).toBe(50);
    });

    it('should return perimeter of rectangle', function () {
        let rectangle = new Rectangle(5,10);
        let perimeter = rectangle.perimeter();
        expect(perimeter).toBe(30);
    });

});
