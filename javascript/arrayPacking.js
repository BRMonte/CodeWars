function arrayPacking(arr) {
    const binaryString = arr.reverse().map(n => n.toString(2).padStart(8, '0')).join('');
    
    return parseInt(binaryString, 2);
  }