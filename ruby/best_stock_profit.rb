# https://www.codewars.com/kata/58f174ed7e9b1f32b40000ec/train/ruby

def max_profit(prices)
  return 0 if prices.size < 2
  
  min_price_so_far = prices[0]
  max_profit = -Float::INFINITY
  
  prices[1..-1].each do |price|
    max_profit = [max_profit, price - min_price_so_far].max
    min_price_so_far = [min_price_so_far, price].min
  end
  
  max_profit
end