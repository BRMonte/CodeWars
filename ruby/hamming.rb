def hamming(a, b)
  count = 0
  a.chars.each.with_index { |letter, index| count += 1 if b[index] != letter }
  
  count
end