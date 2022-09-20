const input = document.querySelector('#input')
const input1 = document.getElementById('input1')
const debounce = document.querySelector('#debounce > h1')
const throttle = document.querySelector('#throttle > h1')
input.addEventListener('input', debounceMethod(()=>debounce.innerHTML = input.value, 1000))
input1.addEventListener("input", throttled(()=>throttle.innerHTML = input1.value, 1000))

function debounceMethod(cb, delay){
    console.log(2);
    let clearTimer;
    return ()=>{
        cb
        clearInterval(clearTimer)
        clearTimer = setTimeout(cb, delay)
    }
}

function throttled(callback, delay) {
    console.log(1);
    let lastRun = delay;
    return () => {
        console.log(2);
        const now = new Date().getTime();
        if(now - lastRun >= delay){
            lastRun = now;
            callback();
        }
    }
}