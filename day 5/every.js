Array.prototype.everyCus = function(callback){
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i])) return false
    }
    return true
}

console.log([4,5,63,5,63,546,3764,7,456,7,4567].everyCus())
