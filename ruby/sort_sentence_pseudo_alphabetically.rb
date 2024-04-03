# Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

# All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
# All words that begin with an upper case letter should come after that, and should be sorted in descending order.
# If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.

# Example
# For example, given the input string
# "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!",
# your method should return "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut".
# Lower case letters are sorted a -> l -> l -> o -> o -> t and upper case letters are sorted V -> T -> O -> M -> L -> C.

def sort sentence
  sentence = sentence.gsub(/[[:punct:]]/, '')
  words = sentence.split(' ')

  return words.sort.join(' ') if words.all? {|w| w.downcase[0] == w[0]}
  return words.sort! { |a, b| b <=> a }.join(' ') if words.all? {|w| w.upcase[0] == w[0]}

  lowcase_words = words.select { |w| w.upcase[0] != w[0] }.sort.join(' ')
  upcase_words = words - lowcase_words.sort! { |a, b| b <=> a }.join(' ')

  lowcase_words + ' ' + upcase_words
end

