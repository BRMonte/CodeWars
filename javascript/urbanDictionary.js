class WordDictionary {
  constructor() {
    this.words = [];
  }

  addWord(word) {
    this.words.push(word);
  }

  search(word) {
    return this.words.some(w => {
      if (word.includes('.')) {
        const regex = new RegExp(`^${word.replace(/\./g, '[a-z]')}$`);
        return regex.test(w);
      } else {
        return w === word;
      }
    });
  }
}