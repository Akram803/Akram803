import {Shape} from "https://akram803.github.io/ECMA/ecmaD2/modules/shape.js"


// Rectangle is a shape class with some additional things
export class Circle extends Shape{
    constructor(col, r, x, y){
        super()  // construct parent
        this.color = col;
        this.radius = r;
        this.x = x;
        this.y = y;
    }

    getArea(){
        this.drowShape()  // log color
        return Math.PI * this.radius**2
    }
}

// let C = new Circle("#545", 5, 78, 30)
// console.log(C)
// console.log(C.getArea())


