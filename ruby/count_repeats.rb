# https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/ruby

def count_repeats(text)
  return 0 if text.chars == text.chars.uniq
  count = 0
  
  text.chars.each.with_index { |letter, index| count += 1 if letter == text[index + 1] }  
  count
end
