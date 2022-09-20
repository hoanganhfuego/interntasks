function handlepromise(){
    let promise = new Promise((resolve, reject) => {
        for(let i = 0; i < 6; i++){
            let randomNumber = parseInt(Math.random()*100)
            if(randomNumber % 2 === 0){
                resolve(randomNumber)
            }
        }
        reject('reject')
    })
    return promise
}

handlepromise().then(res => console.log(res)).catch(res => console.log(res))