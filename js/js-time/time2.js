console.log("start of the program");

const id = setTimeout(() => {
  console.log("Hi, I'm inside setTimeout");
}, 1000);

const a = () => {
  for (let i = 0; i < 1000; i++) {
    console.log("A");
  }
};

const b = () => {
  for (let i = 0; i < 1000; i++) {
    console.log("B");
  }
};

const c = () => {
  for (let i = 0; i < 1000; i++) {
    console.log("C");
  }
};

a();
b();
c();

console.log("End of the program");
