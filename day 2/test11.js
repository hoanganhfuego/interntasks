function generateFibonaciList(){
    let x = 0
    let x1 = 1
    let fiboniaciList = [x, x1]
    while(x + x1 < 100){
        x = fiboniaciList[fiboniaciList.length - 2]
        x1 = fiboniaciList[fiboniaciList.length - 1]
        if(x+x1<100)fiboniaciList = [...fiboniaciList, x + x1]
    }
    return fiboniaciList
}

function hasFibonaciNumber(numberList){
    const set = new Set([...numberList, ...generateFibonaciList()])
    return (concatArrays.length != set.size+1)
}
console.log(hasFibonaciNumber([4,6,7]))