const timers = (a, b) => {
  const countDown = () => {
    const id = setInterval(() => {
      if (a === 0) clearInterval(id);
      console.log(a--);
    }, 1000);
    console.log(id);
  };

  const countUp = () => {
    const id = setInterval(() => {
      if (b === 10) clearInterval(id);
      console.log(b++);
    }, 1000);
    console.log(id);
  };
  return { countDown, countUp };
};

const counters = timers(10, 0);
