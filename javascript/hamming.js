function hamming(a, b) {
    return Array.from(a).reduce((count, letter, index) => count + (b[index] !== letter), 0);
  }