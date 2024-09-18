# https://www.codewars.com/kata/5a1d86dbba2a142e040000ee/train/ruby

def find_number start,stop,string
  range = (start..stop).to_a.join.chars.sort.join
  string.chars.each { |c| range.sub!(c, '') }
  p range

  (start..stop).select { |n| n.to_s.chars.sort.join == range }
end