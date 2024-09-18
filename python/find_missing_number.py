# https://www.codewars.com/kata/5a1d86dbba2a142e040000ee/train/ruby

def find_number(start, stop, string):
  range_str = ''.join(sorted(''.join(str(n) for n in range(start, stop + 1))))
  for c in string:
      range_str = range_str.replace(c, '', 1)
  
  print(range_str)
  return [n for n in range(start, stop + 1) if ''.join(sorted(str(n))) == range_str]
