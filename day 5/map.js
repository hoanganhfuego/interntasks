Array.prototype.mapCus = function(callback){
    let result = []
    for(let i = 0; i < this.length; i++){
        result = [...result, callback(this[i])]
    }
    return result
}

console.log([1,2,3,4].mapCus((e)=> e+1))