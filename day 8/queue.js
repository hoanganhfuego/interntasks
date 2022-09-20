class Queue {
    constructor(delay = 1000) {
        this.delay = delay;
        this.callbackQueue = [];
        this.current = 0
    }

    add(callback) {
        this.callbackQueue.push(callback);
        return this.runcallback()
    }

    runcallback() {
        const callback = this.callbackQueue[this.current];
        if(this.callbackQueue.length > 1){
            this.current +=1
            let callback1 = this.callbackQueue[this.current];
            return new Promise((res, rej)=>{
                setTimeout(()=>{
                    res(callback1())
                }, this.delay*this.current)
            })
        }
        return Promise.resolve(callback())
    }
}

const cb1 = () => 1;
const cb2 = () => 2;
const cb3 = () => 3;
const cb4 = () => 4;

const queue1 = new Queue(1500);
let test1 = queue1.add(cb1);
let test2 = queue1.add(cb2);
let test3 = queue1.add(cb3);
let test4 = queue1.add(cb4);
console.log(test1.then(res => console.log(new Date(), res)))
console.log(test2.then(res => console.log(new Date(), res)))
console.log(test3.then(res => console.log(new Date(), res)))
console.log(test4.then(res => console.log(new Date(), res)))

// const promise = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res('hoang anh')
//     }, 2000)
// })
// promise.then(res => console.log('xin chao '+res))