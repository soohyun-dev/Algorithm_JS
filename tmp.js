class app {
  constructor(input) {
    this.input = input;
  }

  error() {
    if (this.input.length === 5) throw new Error();
  }
}

console.log(new app([1, 2, 3, 4, 5]));
