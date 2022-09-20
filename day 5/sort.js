Array.prototype.sortCus = function(callback){
    let array = [...this]
    let result = []
    if(callback){
        for(let i = 0; i < array.length; i++){
            let min = array[i]
            let index = 0
            for(let j = 0; j < array.length; j++){
                if(callback(min, array[j]) > 0){
                    min = array[j]
                    index = j
                }
            }
            array.splice(index, 1)
            i -= 1
            result = [...result, min]
        }
        return result
    }
    result = sortString()
    return result
}

console.log([8,8,2,1,9,4,5,11111, -1].sortCus((a,b) => b-a))
console.log([8,8,2,1,9,4,5,11111, -1].sort((a,b)=> a-b))

function sortString(){
    let result = []
    for(let i = 0; i < array.length; i++){
        let min = array[i].toString()
        let index = 0
        for(let j = 0; j < array.length; j++){
            if(min > array[j].toString() && array[j] > current){
                min = array[j].toString()
                index = j
            }
        }
        array.splice(index, 1)
        i -= 1
        result = [...result, parseInt(min)]
    }
    return result
}