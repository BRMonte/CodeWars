function loneliest(string) {
    const trimmedString = string.trim();
    const spaceCounts = {};
    const length = trimmedString.length;
  
    for (let i = 0; i < length; i++) {
      const char = trimmedString[i];
      if (/[a-z]/.test(char)) {
        let leftSpaces = 0;
        for (let j = i - 1; j >= 0; j--) {
          if (/[a-z]/.test(trimmedString[j])) break;
          leftSpaces++;
        }
  
        let rightSpaces = 0;
        for (let j = i + 1; j < length; j++) {
          if (/[a-z]/.test(trimmedString[j])) break;
          rightSpaces++;
        }
  
        spaceCounts[char] = (spaceCounts[char] || 0) + leftSpaces + rightSpaces;
      }
    }
  
    const maxSpaceCount = Math.max(...Object.values(spaceCounts));
    return Object.keys(spaceCounts).filter(char => spaceCounts[char] === maxSpaceCount);
  }
  