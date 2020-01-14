export default class Square {
    constructor(side){
       this.side = side
    }
    area() {
        return this.side*this.side
    }
    perimeter(){
        return this.side*4
    }
}
