import Rectangle from "../src/Rectangle";

describe('Validation', () => {
    it('should throw an error when one of two sides passed for Rectangle is negative', () => {
        const rectObj = () => {
            return new Rectangle(-1, 10);
        };
        expect(rectObj).toThrow(Error('Side cannot be negative!'))
    });
    it('should throw an error when the side of square passed is negative', () => {
        const squareObj = () => {
            return Rectangle.createSquare(-1);
        };
        expect(squareObj).toThrow(Error('Side cannot be negative!'))
    });
});

describe('Rectangle', () => {
    describe('Area', () => {
        it('should return 50 for sides 5 and 10', () => {
            let rectangle = new Rectangle(5,10);
            let area = rectangle.area();
            expect(area).toBe(50);
        });
    });
    describe('Perimeter', () => {
        it('should return 30 for sides 5 and 10', () => {
            let rectangle = new Rectangle(5, 10);
            let perimeter = rectangle.perimeter();
            expect(perimeter).toBe(30);
        });
    });
});

describe('Square', () => {
    describe('Area', () => {
        it('should return 100 for side 10', () => {
            let square = Rectangle.createSquare(10);
            let area = square.area();
            expect(area).toBe(100);
        });
    });

    describe('Perimeter', () => {
        it('should return 40 for side 10', () => {
            let square = new Rectangle.createSquare(10);
            let perimeter = square.perimeter();
            expect(perimeter).toBe(40);
        });
    })
});
