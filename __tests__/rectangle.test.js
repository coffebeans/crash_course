import Rectangle from "../src/rectangle";
describe("Rectangle", () => {
    it('should throw error if length is negative', () => {
        try {
            new Rectangle(-10, 5);
        }  catch (err) {
            expect(err).toBe('Side cannot be negative');
        }
    });

    describe('#area', () => {
        it('should return area of rectangle for given length and breadth', () => {
            let rectangle = new Rectangle(10, 5);
            let area = rectangle.area();
            expect(area).toBe(50);
        });
    });
    
    describe('#perimter', () => {
        it('should return perimeter of rectangle for given length and breadth', () => {
            let rectangle = new Rectangle(10, 5);
            let perimeter = rectangle.perimeter();
            expect(perimeter).toBe(30);
        });
    })
});

describe("Square", () => {
    describe('#area', () => {
        it('should return area 100 for square of side 10', () => {
            let square = Rectangle.createSquare(10);
            let area = square.area();
            expect(area).toBe(100);
        });
    });

    describe('#perimeter', () => {
        it('should return perimeter 40 for square of side 10', () => {
            let square = Rectangle.createSquare(10);
            let perimeter = square.perimeter();
            expect(perimeter).toBe(40);
        });
    });

    it('should throw error if side is negative', () => {
        try {
            Rectangle.createSquare(-10);
        }  catch (err) {
            expect(err).toBe('Side cannot be negative');
        }
    });
});
