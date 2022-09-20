Array.prototype.flatCus = function(depth){
    let array = []
    let subtract = (depth != undefined)? depth : 1
    for(let i = 0; i < this.length; i++){
        if(Array.isArray(this[i]) && subtract > 0) {
            subtract -= 1
            if(this.every(item => !Array.isArray(item))) break
            array = [...array, ...this[i].flatCus(subtract)]
        }
        else array = [...array, this[i]]
    }
    return array
}

console.log([0, 1, 2, [[[3, 4]]], [[[[1,2,3]]]],'dasd'].flatCus(Infinity))