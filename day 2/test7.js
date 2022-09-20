function isDivisibleBy10(n){
    let convertToString = n.toString()
    let sum = 0
    for(let i = 0; i < convertToString.length; i++){
        sum += parseInt(convertToString[i])
    }
    return (sum % 10 == 0)
}
console.log(isDivisibleBy10(123455))