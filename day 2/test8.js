function countWords(str){
    return (str.split(' ').length)
}

function staticsWords(str){
    let convertToArray = str.split(' ')
    let result = {}
    for(let i = 0; i < convertToArray.length; i++){
        result = {
            ...result,
            [convertToArray[i]] : result[convertToArray[i]]? result[convertToArray[i]] += 1 : 1
        }
    }
    return result
}

console.log(staticsWords('easy frontend easy'))

function staticsCharacters(str){
    let convertToArray = str.split('')
    let result = {}
    for(let i = 0; i < convertToArray.length; i++){
        let property = convertToArray[i] == ' '? 'space' : convertToArray[i]
        result = {
            ...result,
            [property] : result[property]? result[property] += 1 : 1
        }
    }
    return result
}

// console.log(staticsCharacters('aa b cc c'))