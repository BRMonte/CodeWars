# https://www.codewars.com/kata/66871953e441f6da6e36a0cc/train/ruby
def find_min_cost(money, days, cost)
  total_days = cost.size
  
  current_sum = cost.take(days).sum
  min_cost = current_sum

  (days...total_days).each do |i|
    current_sum += cost[i] - cost[i - days]
    min_cost = [min_cost, current_sum].min
  end

  if min_cost <= money
    return "money: #{min_cost}"
  end

  max_duration = 0
  current_sum = 0
  left = 0

  cost.each_with_index do |c, right|
    current_sum += c

    while current_sum > money
      current_sum -= cost[left]
      left += 1
    end

    max_duration = [max_duration, right - left + 1].max
  end

  return "days: #{max_duration}"
end

