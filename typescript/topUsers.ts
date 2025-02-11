function topUsers(...arrays: string[][]): [number, string[]][] {
    const commonUsers = arrays.reduce((intersection: Set<string> | null, array) => {
      if (!intersection) return new Set(array);
      return new Set([...intersection].filter(x => array.includes(x)));
    }, null);
  
    if (!commonUsers) return [];
  
    const userCounts: { [id: string]: number } = {};
    for (const array of arrays) {
      for (const id of array) {
        if (commonUsers.has(id)) {
          userCounts[id] = (userCounts[id] || 0) + 1;
        }
      }
    }
  
    const result: [number, string[]][] = [];
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
  
    result.sort((a, b) => b[0] - a[0]);
    return result;
  }
  
  
  // Example usage (same as Ruby example):
//   console.log(id_best_users(['A042', 'B004', 'A025', 'A042', 'C025'], ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'], ['A042', 'A025', 'B004']));
//   console.log(id_best_users(['A043', 'B004', 'A025', 'A042', 'C025'], ['B009', 'B040', 'B003', 'A042', 'A027', 'A044'], ['A041', 'A026', 'B005']));