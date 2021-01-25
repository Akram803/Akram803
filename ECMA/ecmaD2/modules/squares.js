import {Shape} from "https://akram803.github.io/ECMA/ecmaD2/modules/shape.js"


// Rectangle is a shape class with some additional things
class Rectangle extends Shape{
    constructor(col, w, h){
        super()  // construct parent
        this.color = col;
        this.width = w;
        this.height = h;
    }

    getArea(){
        this.drowShape()  // log color
        return this.width * this.height
    }
}

class Square extends Rectangle{
    constructor(col, len){
        super(col, len, len)  // // construct parent
    }
    
}

export {Rectangle, Square}

