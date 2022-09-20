function isSymetricList(numberList){
    for(let  i = 0; i < numberList.length; i++){
        if(numberList[i] != numberList[numberList.length -1 - i]){
            return false
        }
    }
    return true
}

console.log(isSymetricList([1, 2, 1]))