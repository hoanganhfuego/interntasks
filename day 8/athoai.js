let keywords = [];
for(let i = 1; i <= 100; i++){
    keywords.push(i)
}
console.log(keywords)

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

async function runSearch() {
    if (keywords.length > 0) {
        const currentSearchKeywords = keywords.splice(0, 5);
        // const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))
        // const promises = currentSearchKeywords.map((keyword) => {
        //     return delay(8000).then(()=>fetch(`https://dummyjson.com/products/${keyword}`, requestOptions))
        // })
        const promises = currentSearchKeywords.map((keyword) => {
            return fetch(`https://dummyjson.com/products/${keyword}`, requestOptions)
        })

        let searchResponses 
        setTimeout(searchResponses = await Promise.allSettled(promises), 8000)
        const jsonDataList = await Promise.all(searchResponses.map(response => response.value.json()));
        for (let i = 0; i < jsonDataList.length; i++) {
            const jsonData = jsonDataList[i];

            if (searchResponses[i].status === "fulfilled" && searchResponses[i].value.status === 200) {
                console.log(`keywords: ${currentSearchKeywords[i]} - success: ${true}`);
                console.log("first item: ", jsonData.title)
            } else {
                console.log(`keywords: ${currentSearchKeywords[i]} - success: ${false}`);
                console.log("first item: ", undefined)
                keywords.push(currentSearchKeywords[i]);
            }
        }
        return runSearch()
    }
}

runSearch()

// async function api(){
//     let keywords = [];
//     for(let i = 1; i <= 1; i++){
//         keywords.push(i)
//     }
//     const promises = keywords.map((keyword) => {
//         return fetch(`https://dummyjson.com/products/${keyword}`)
//     })
//     let test = await Promise.allSettled(promises);
//     let abc = 
//     // let test1 = await Promise.all(test.map(response => response.value.json()))
//     // console.log(test1)
//     console.log('######')
// }

// api()