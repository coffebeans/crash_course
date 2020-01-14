export default class Rectangle {
  constructor(length, breadth) {
    if (length < 0 || breadth < 0) {
      throw new Error("Length or Breadth cannot be negative");
    } else {
      this.length = length;
      this.breadth = breadth;
    }
  }

  static createSquare(side) {
    if (side < 0) {
      throw new Error("Side cannot be negative");
    }
    return new Rectangle(side, side);
  }

  perimeter() {
    return 2 * (this.length + this.breadth);
  }

  area() {
    return this.length * this.breadth;
  }
}
