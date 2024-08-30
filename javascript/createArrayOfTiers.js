function createArrayOfTiers(num) {
    const numStr = num.toString();
    const length = numStr.length;
    const result = [];
  
    for (let i = 0; i < length; i++) {
      result.push(numStr.slice(0, length - i));
    }
  
    return result.reverse();
  }