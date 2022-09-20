const example = ['swift','rust','javascript','react','rx','ruby','rails','php','objective-c','html','CSS','pug']

function getApi(example){
    if(example.length){
        let keywords = [...example]
        if(keywords.length){
            let apis = keywords.splice(0,5).map(keyword => fetch(`https://api.github.com/search/repositories?q=${keyword}`))
            Promise.allSettled(apis)
            .then(responses => {
                responses.forEach((response, index) => {
                    if(response.status === 'fulfilled'){
                        console.log(response.value.json().then(res => console.log(res.items[0])))
                    }
                    else{
                        keywords.push(keywords[index])
                    }
                })
                return keywords
            })
            .then(responses => getApi(responses))
        }
    }
}
getApi(example)