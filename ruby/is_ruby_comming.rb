# https://www.codewars.com/kata/5827acd5f524dd029d0005a4/solutions/ruby

def is_ruby_coming(list)
  list.any? {|hash| hash[:language] == 'Ruby'}
end