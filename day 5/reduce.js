Array.prototype.reduceCus = function(callback, initialValue){
    let previous = this[0]
    let current = this[1]
    let length = this.length - 1
    if(initialValue != undefined){
        previous = initialValue
        current = this[0] // 0
        length +=1
    }
    previous = callback(previous, current)
    for(let i = 1; i < length; i++){
        current == this[0]? previous = callback(previous, this[i]) : previous = callback(previous, this[i+1])
    }
    return previous
}

console.log([3,4,5].reduceCus((a,b)=>a+b))
console.log([3,4,5].reduceCus((a,b)=>a+b,''))
console.log([3,4,5].reduce((a,b)=>a+b,''))
console.log('' == false)