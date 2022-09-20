// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM();
 
var start = performance.now();

function findSecondLargestNumber(numberList){
    let max = numberList[0];
    let secondLargest = 0;
    for(let i = 0; i < numberList.length; i++){
        if(numberList[i] > max){
            secondLargest = max
            max = numberList[i]
        }
        if(numberList[i] < max && numberList[i] > secondLargest){
            secondLargest = numberList[i]
        }
    }
    return secondLargest
}

findSecondLargestNumber([41,34,5,24,554,6,36,5,3,42,345,356,35,52,345,2345,42,34,1324,5,23,66,43,235,243,52,345,2345,24,352,346,35,62,435,243,5,3267,67,5,788709,7,8,7,65,3,546,3])

var end = performance.now();
console.log(`Execution time: ${end - start} ms`);