var longestCommonPrefix = function(strs) {
    let result = ""
    for(let i = 0; i < strs[0].length; i++){
        let prev = result
        result = result + strs[0][i]
        for(let j = 1; j < strs.length; j++){
            if(!strs[j].includes(result) && result){
                return prev
            }
            if(!strs[j].includes(result)){
                result = ""
            }
        }
    }
    return result
};

// file longest common text between array elements
