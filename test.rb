
# Write an efficient method that checks whether any permutation of an input string is a palindrome.

# You can assume the input string only contains lowercase letters, and lenght fron 1 to 255 characters.

# Examples:

# "civic" should return true
# "ivicc" should return true
# "civil" should return false
# "livci" should return false

def has_palindrome_permutation(the_string)
  return true if the_string.size == 1
  return false if the_string.empty?
  return false unless the_string.is_a?(String)

  char_counts = Hash.new(0)
  odd_counts  = 0

  the_string.chars.each { |c| char_counts[c] += 1 }

  return true if char_counts.values.all?(&:even?)
  return true if char_counts.values.uniq.size == 1

  char_counts.values.count { |v| odd_counts += 1 if v.odd? }

  odd_counts <= 1
end

p has_palindrome_permutation('civic')
p has_palindrome_permutation('ivicc')
p has_palindrome_permutation('civil')
p has_palindrome_permutation('livci')
