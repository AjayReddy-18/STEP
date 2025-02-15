// const promise = Promise.resolve("main promise");

// const handler = (rv) => {
//   console.log(rv);
//   return `${rv} -> then`;
// };

// promise
//   .then((rv) => {
//     return Promise.resolve("new promise");
//   })
//   .then(handler)
//   .then(handler);

// promise
//   .then((rv) => {
//     return handler(rv + "-> second then");
//   })
//   .then(handler)
//   .then(handler);

const p1 = new Promise((resolve, reject) => {
  resolve("Success");
});

p1.then((value) => {
  console.log(value + "##"); // "Success!"
  throw new Error("oh, no!##");
})
  .catch((e) => {
    console.error(e.message); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored##"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch")
  );

// The following behaves the same as above
p1.then((value) => {
  console.log(value); // "Success!"
  // return Promise.reject("oh, no!");
  throw new Error("oh, no!");
})
  .catch((e) => {
    console.error(e.message); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch")
  );
