function isIncreasingNumber(n){
    if(n >= 10){
        let convertToString = n.toString()
        for(let i = 0; i < convertToString.length; i++){
            if(convertToString[i+1] && convertToString[i] >= convertToString[i+1]) return false
        }
        return true
    }
    else console.log('wrong input')
}

console.log(isIncreasingNumber(1111))