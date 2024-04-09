function spinWords(sentence) {
    const words = sentence.split(" ");
    const result = [];

    for (let word of words) {
        if (word.length >= 5) {
            result.push(word.split("").reverse().join(""));
        } else {
            result.push(word);
        }
    }

    return result.join(" ");
}