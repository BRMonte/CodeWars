# https://www.codewars.com/kata/5ae64f86783bb4722c0000d7/train/ruby

def collect_lowest(arr)
  lowest_arrays = []
  arr.each { |e| lowest_arrays.concat(collect_lowest(e)) if e.is_a?(Array) }

  lowest_arrays.empty? ? [arr] : lowest_arrays
end

def near_flatten(array)
  arrays = collect_lowest(array)
  arrays.sort_by { |sub_array| sub_array.min }
end