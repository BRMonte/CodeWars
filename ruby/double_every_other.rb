# Write a function that doubles every second integer in a list, starting from the left.

# Example:

# For input array/list :

# [1,2,3,4]
# the function should return :

# [1,4,3,8]

# https://www.codewars.com/kata/5809c661f15835266900010a/train/ruby

def double_every_other(num_array)
  return num_array if num_array.length == 1
  return [] if num_array.empty?
  
  num_array.each_with_index.map {|num, idx| idx.odd? ? num * 2 : num}
end