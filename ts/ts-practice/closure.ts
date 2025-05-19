const createCounter = (): Function => {
  let i = 1;
  return (): number => i++;
};

const counter: Function = createCounter();

const count = (n: number) => {
  Array.from({ length: n }, () => console.log(counter()));
};

count(+Deno.args[0]);
