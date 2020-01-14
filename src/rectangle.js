export default class Rectangle {
    constructor(length, breadth) {
        if (length < 0 || breadth < 0) {
            throw 'Side cannot be negative';
        }
        this.length = length;
        this.breadth = breadth;
    }
    
    area() {
        return this.length * this.breadth;
    }

    perimeter() {
        return 2 * (this.length + this.breadth);
    }

    static createSquare(side){
        return new Rectangle(side, side);
    }
}
