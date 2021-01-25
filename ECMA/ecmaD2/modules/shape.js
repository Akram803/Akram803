

export class Shape{
    constructor(){
        let color ; //private
        Object.defineProperty(this, "color", {
            get: function() { return color },
            set: function(v) { color=v }
        })
    }

    drowShape(){
        console.log(this.color)
    }

}

// let sq = new Shape();
// console.log(sq)
// console.log(sq.color)

// sq.color = "5555"
// console.log(sq)
// console.log(sq.color)

// sq.drowShape()
