function isIncreasingNumberByDistance(n, x){
    let convertToString = n.toString()
    for(let i = 0; i < convertToString.length; i++){
        if(convertToString[i+1] && convertToString[i+1] - convertToString[i] != x){
            return false
        }
    }
    return true
}

console.log(isIncreasingNumberByDistance(135, 1))