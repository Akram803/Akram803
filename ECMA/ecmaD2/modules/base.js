
import * as squares from "https://akram803.github.io/ECMA/ecmaD2/modules/squares.js"
import {Circle} from "https://akram803.github.io/ECMA/ecmaD2/modules/circle.js"

let rectangleObj = new squares.Rectangle("blue", 10, 5)
let rectangleArea = rectangleObj.getArea()
console.log(rectangleArea)

let squareObj = new squares.Square("green", 8)
let squareArea = squareObj.getArea()
console.log(squareArea)

let circleObj = new Circle("red", 6, 4.3, 1.9)
let circleArea = circleObj.getArea()
console.log(circleArea)




