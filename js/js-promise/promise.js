const response = async () => 7;

// const results = await Array.from({ length: 3 }, async () => {
//   console.log("In the async fun results above the await");
//   const result = await response();
//   console.log(result);
//   console.log("In the async fun results below the await");
//   return 3;
// });

const a = async () => {
  console.log("above");
  const result = await response();
  console.log(result);
  console.log("below");
};

for (let i = 0; i < 5; i++) {
  a();
}

// console.log(results);
