export default class Rectangle {
    constructor(length, breadth) {
        if (length <= 0 || breadth <= 0) {
            throw new Error('Side cannot be negative!');
        }
        this.length = length;
        this.breadth = breadth;
    }
    area() {
        return this.length * this.breadth;
    }

    perimeter(){
        return (this.length + this.breadth) * 2;
    }
    static createSquare(side) {
        return new Rectangle(side, side);
    }
}
