def find_min_cost(money, days, cost):
    total_days = len(cost)
    
    # Finding the minimum cost for exactly `days` consecutive days using sliding window
    current_sum = sum(cost[:days])
    min_cost = current_sum

    for i in range(days, total_days):
        current_sum += cost[i] - cost[i - days]
        min_cost = min(min_cost, current_sum)

    if min_cost <= money:
        return f"money: {min_cost}"

    # Finding the maximum duration within the given money using sliding window
    max_duration = 0
    current_sum = 0
    left = 0

    for right in range(total_days):
        current_sum += cost[right]

        while current_sum > money:
            current_sum -= cost[left]
            left += 1

        max_duration = max(max_duration, right - left + 1)

    return f"days: {max_duration}"
