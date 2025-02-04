const recursion = (top) => {
  console.log(top);
  return recursion(top + 1);
};

recursion(1);
