const f = () => {
  let calls = 0;
  return () => {
    calls++;
    return calls;
  };
};

export const x = f();
console.log(x());