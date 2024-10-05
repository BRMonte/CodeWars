# https://www.codewars.com/kata/5a4d303f880385399b000001/train/ruby
def strong_num(n)
  sum = 0
  n.digits.each {|d| sum += factorial(d) }

  sum == n ? "STRONG!!!!" : "Not Strong !!"
end

def factorial(n)
  return 1 if n == 0
  n * factorial(n - 1)
end
