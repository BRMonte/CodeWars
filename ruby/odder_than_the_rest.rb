def oddOne(arr)
  arr.index(&:odd?) || -1
end