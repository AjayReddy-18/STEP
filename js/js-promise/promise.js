const promise = Promise.resolve("main promise");

const handler = (rv) => {
  console.log(rv);
  return `${rv} -> then`;
};

promise
  .then((rv) => {
    return Promise.resolve("new promise");
  })
  .then(handler)
  .then(handler);

promise
  .then((rv) => {
    return handler(rv + "-> second then");
  })
  .then(handler)
  .then(handler);
