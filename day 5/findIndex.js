Array.prototype.findIndexCus = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])) return i
    }
    return -1
}

console.log([4,2,3,4,5,5,5].findIndexCus(e => e == 3))