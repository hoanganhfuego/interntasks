function findLastPerfectSquare(numberList){
    let perfectSquare
    for(let i = 0; i < numberList.length; i++){
        if(!Boolean(Math.sqrt(numberList[i]).toString().split('.')[1])){
            perfectSquare = numberList[i]
        }
    }
    return perfectSquare
}

console.log(findLastPerfectSquare([25,2,3,5,4]))