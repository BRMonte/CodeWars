function collectLowestLevelArrays(arr) {
    let result = [];
    for (const x of arr) {
      if (Array.isArray(x)) {
        result = result.concat(collectLowestLevelArrays(x));
      }
    }
    return result.length === 0 ? [arr] : result;
  }
  
  function nearFlatten(array) {
    const lowestLevelArrays = collectLowestLevelArrays(array);
    return lowestLevelArrays.sort((a, b) => Math.min(...a) - Math.min(...b));
  }