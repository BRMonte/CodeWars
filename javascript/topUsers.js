function idBestUsers(...arrays) {
    const commonUsers = arrays.reduce((intersection, array) => {
      if (!intersection) return new Set(array);
      return new Set([...intersection].filter(x => array.includes(x)));
    }, null);
  
    if (!commonUsers) return [];
  
    const userCounts = {};
    for (const array of arrays) {
      for (const id of array) {
        if (commonUsers.has(id)) {
          userCounts[id] = (userCounts[id] || 0) + 1;
        }
      }
    }
  
    const result = [];
    for (const id in userCounts) {
      const count = userCounts[id];
      let found = false;
      for (const [existingCount, existingUsers] of result) {
          if (existingCount === count) {
              existingUsers.push(id);
              existingUsers.sort();
              found = true;
              break;
          }
      }
      if (!found) {
          result.push([count, [id]]);
      }
    }
    
    result.sort((a,b) => b[0] - a[0])
  
    return result;
  }
  