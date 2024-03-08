# I will give you an integer (N) and a string.
# Break the string up into as many substrings of N as you can without spaces.
# If there are leftover characters, include those as well.

# ex: string_breakers(5, 'This is an example string')
# return "Thisi"+"\n"+"sanex"+"\n"+"ample"+"\n"+"strin"+"\n"+"g")

def string_breakers(n, str)
  arr = str.split(' ').join.chars

  arr.each_slice(n).to_a.map(&:join).join("\n")
end
