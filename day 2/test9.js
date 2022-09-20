function isIncreasingNumberList(numberList){
    if(numberList.length >= 2){
        for(let i = 0; i < numberList.length; i++){
            if(numberList[i] < numberList[i+1]) return true
        }
    }
    else console.log('wrong input')
    return false
}

console.log(isIncreasingNumberList([2,3]))