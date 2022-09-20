function isPerfectSquare(n){
    return (!Boolean(Math.sqrt(n).toString().split('.')[1]))
}

console.log(isPerfectSquare(25))