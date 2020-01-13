export default class Rectangle {
    constructor(l,b){
       this.length = l
       this.breadth = b
    }
    area() {
        return this.length*this.breadth;
    }

    perimeter(){
        return (this.length+this.breadth)*2
    }
}
