# https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/ruby

def greatest_product(n)
  result = []
  range = (0..(n.length - 5)).to_a
  
  range.each do |index|
    integers = n[index, 5].chars.map(&:to_i)
    product = integers.inject(1) { |product, num| product * num }
    result << product
  end

  result.max
end