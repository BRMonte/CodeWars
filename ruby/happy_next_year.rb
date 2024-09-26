# https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/ruby

def next_happy_year(year)
  year += 1
  until year.digits.uniq.count == 4 do
    year += 1
  end
  year
end