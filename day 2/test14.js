function countNumberNotInB(a, b){
    let seen = 0
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])) seen += 1
    }
    return seen
}

console.log(countNumberNotInB([1,2,3,4,5,5,5,5], [1,2,4,5,6,8,8,9,10]))