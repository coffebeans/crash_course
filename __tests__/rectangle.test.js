import Rectangle from "../src/rectangle";

describe("Rectangle", function() {
  describe("area", function() {
    it("should return area as 50 when length and breadth are 10 and 5", function() {
      let rect = new Rectangle(10, 5);
      let area = rect.area();
      expect(area).toBe(50);
    });
  });

  describe("perimeter", function() {
    it("should return perimeter as 30 when length and breadth are 10 and 5", function() {
      let rect = new Rectangle(10, 5);
      let perimeter = rect.perimeter();
      expect(perimeter).toBe(30);
    });
  });
});

describe("Square", function() {
  describe("area", function() {
    it("should return area as 25 when side is 5", function() {
      let sqr = Rectangle.createSquare(5);
      let area = sqr.area();
      expect(area).toBe(25);
    });
  });

  describe("perimeter", function() {
    it("should return perimeter as 20 when side is 5", function() {
      let sqr = Rectangle.createSquare(5);
      let perimeter = sqr.perimeter();
      expect(perimeter).toBe(20);
    });
  });
});
