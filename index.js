class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      const arr = this.items;
      const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
      return max;
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      const sum = this.items.reduce((a, b) => a + b, 0);
      return sum;
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      const avg = this.items.reduce((a, b) => a + b, 0);
      return avg / this.length;
    }
  }
}

module.exports = SortedList;
