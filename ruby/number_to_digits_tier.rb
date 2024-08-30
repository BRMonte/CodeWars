# https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/ruby

def create_array_of_tiers(num)
  result = []
  range = num.to_s.chars.length
  
  (1..range).each { |index| result << num.to_s[0..-index] }
  
  result.reverse
end