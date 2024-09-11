function countRepeats(text) {
    if (new Set(text).size !== text.length) {
      let count = 0;
      for (let i = 0; i < text.length - 1; i++) {
        if (text[i] === text[i + 1]) {
          count++;
        }
      }
      return count;
    }
    return 0;
  }