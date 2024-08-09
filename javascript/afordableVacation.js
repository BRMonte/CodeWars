function findMinCost(money, days, cost) {
    const totalDays = cost.length;
    
    // Finding the minimum cost for exactly `days` consecutive days using sliding window
    let currentSum = cost.slice(0, days).reduce((a, b) => a + b, 0);
    let minCost = currentSum;
  
    for (let i = days; i < totalDays; i++) {
      currentSum += cost[i] - cost[i - days];
      minCost = Math.min(minCost, currentSum);
    }
  
    if (minCost <= money) {
      return `money: ${minCost}`;
    }
  
    // Finding the maximum duration within the given money using sliding window
    let maxDuration = 0;
    currentSum = 0;
    let left = 0;
  
    for (let right = 0; right < totalDays; right++) {
      currentSum += cost[right];
  
      while (currentSum > money) {
        currentSum -= cost[left];
        left++;
      }
  
      maxDuration = Math.max(maxDuration, right - left + 1);
    }
  
    return `days: ${maxDuration}`;
  }
  