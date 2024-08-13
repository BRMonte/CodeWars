function cleanText(text) {
    return text.replace(/[-–—'(){}\[\]…]/g, '');
  }
  
  function syllableCount(word) {
    word = word.toLowerCase();
    return (word.match(/[aeiou]{1,}/g) || []).length;
  }
  
  function fleschKincaid(text) {
    text = cleanText(text);
    const sentences = text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s+/).filter(s => s.trim().length > 0);
    let wordsCount = 0;
    let syllablesCount = 0;
  
    sentences.forEach(sentence => {
      const words = sentence.split(/\s+/);
      wordsCount += words.length;
      syllablesCount += words.reduce((count, word) => count + syllableCount(word), 0);
    });
  
    const avrgWordsPerSentence = wordsCount / sentences.length;
    const avrgSyllablesPerWord = syllablesCount / wordsCount;
  
    return parseFloat((0.39 * avrgWordsPerSentence + 11.8 * avrgSyllablesPerWord - 15.59).toFixed(2));
  }
  