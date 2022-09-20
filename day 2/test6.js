function isSymetricNumber(n){
    let convertToString = n.toString()
    for(let  i = 0; i < convertToString.length; i++){
        if(convertToString[i] != convertToString[convertToString.length -1 - i]){
            return false
        }
    }
    return true
}

console.log(isSymetricNumber(1))