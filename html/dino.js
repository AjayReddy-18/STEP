let upArrow = {};
let downArrow = {};

document.onkeydown = (event) => {
  if (event.key === "ArrowUp") {
    upArrow = event;
  }

  if (event.key === "ArrowDown") {
    downArrow = event;
  }
};

const keyHandler = (event) => {
  console.log(event.key);
  if (event.key === "k") {
    const upEvent = new KeyboardEvent("keydown", upArrow);
    document.dispatchEvent(upEvent);
  }

  if (event.key === "j") {
    const downEvent = new KeyboardEvent("keydown", downArrow);
    document.dispatchEvent(downEvent);
  }
};

document.addEventListener("keydown", keyHandler);
