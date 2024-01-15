Promise.resolve()
  .then(() => console.log("a: 1"))
  .then(() => {
    setTimeout(() => console.log("timeout 2"));
    console.log("a: 2");
  })
  .then(() => {
    setTimeout(() => console.log("timeout 3"));
    console.log("a: 3");  
  });

new Promise((res, rej) => {
  console.log("b");
  rej(new Error("123"));
})
  .then(console.log("b 1"))
  .then(
    () => console.log("b 2"),
    () => console.log("b")
  )
  .catch(() => console.log("b 3"))
  .then(() => console.log("b 4"));