export default class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    
    area() {
        return this.length * this.breadth;
    }

    perimeter() {
        return 2 * (this.length + this.breadth);
    }
}
