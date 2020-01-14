export default class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  static createSquare(side) {
    return new Rectangle(side, side);
  }

  perimeter() {
    return 2 * (this.length + this.breadth);
  }

  area() {
    return this.length * this.breadth;
  }
}
