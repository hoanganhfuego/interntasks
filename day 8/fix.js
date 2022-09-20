const array = []
for(let i = 1; i < 15; i++){
    array.push(i)
}
  
  function run() {
    const keywords = array.splice(0, 5);
    if (keywords.length <= 0) {
      return;
    }
    const promises = keywords.map((item) =>
      fetch("https://dummyjson.com/products/" + item)
    );
    Promise.allSettled(promises)
      .then((responses) => {
        let fulfilled = []
        responses.forEach((res, index) => {
          if (res.status === "fulfilled" && res.value.status === 200) {
            fulfilled.push(res.value.json())
          } else {
            array.push(keywords[index]);
          }
        });
        return Promise.all(fulfilled)
      })
      .then(fulfilled => console.log(fulfilled))
      .then(() => run(array));
  }
  
  run();