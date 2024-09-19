# https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/ruby

def outed(meet, boss)
  count = 0
  meet.each { |m| m.first.to_sym == boss ? count += m.last * 2 : count += m.last }
  
  count / meet.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
end