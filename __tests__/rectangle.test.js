import Rectangle from "../src/rectangle";

describe('area', function () {
    it('should return area of rectangle for given length and breadth', () => {
        let rectangle = new Rectangle(10, 5);
        let area = rectangle.area();
        expect(area).toBe(50);
    });
});

describe('perimter', function () {
    it('should return perimeter of rectangle for given length and breadth', () => {
        let rectangle = new Rectangle(10, 5);
        let perimeter = rectangle.perimeter();
        expect(perimeter).toBe(30);
    });
});
