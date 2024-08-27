def array_packing(arr)
  binary_nums = arr.map {|n| n.to_s(2).rjust(8, '0')}.reverse.join.to_i(2)
end