class Clock {
  #start;
  #hours;
  #minutes;
  #seconds;
  constructor() {
    this.#start = new Date();
    this.#hours = this.#start.getHours();
    this.#minutes = this.#start.getMinutes();
    this.#seconds = this.#start.getSeconds();
  }

  tick() {
    if (this.#seconds === 59) this.#updateForNextMinute();
    if (this.#minutes === 60) this.#updateForNextHour();
    this.#updateSec();
  }

  #updateSec() {
    this.#seconds++;
  }

  #updateForNextMinute() {
    this.#seconds = -1;
    this.#minutes++;
  }

  #updateForNextHour() {
    this.#minutes = 0;
    this.#hours = (this.#hours + 1) % 24;
  }

  currentTime() {
    return `${this.#hours}:${this.#minutes}:${this.#seconds}`;
  }
}

const clock = new Clock();

setInterval(() => {
  clock.tick();
  console.clear();
  console.log(clock.currentTime());
}, 1000);
