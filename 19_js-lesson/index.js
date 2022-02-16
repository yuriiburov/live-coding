const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }

      this.secondsPassed += 1;
    }, 1000);
  },
  getTime() {
    if (this.secondsPassed <= 9) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

// const obj = {
//   firstName: 'Ron',
//   printName() {
//     console.log(this);
//   },
// };

// obj.printName();

// const print = obj.printName;
// print();

// test data
