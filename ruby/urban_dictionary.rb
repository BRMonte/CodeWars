# https://www.codewars.com/kata/5631ac5139795b281d00007d/train/ruby

class WordDictionary
  def initialize
    @words = []
  end

  def add_word(word)
    @words << word
  end

  def search(word)
    @words.any? do |w|
      if word.include?('.')
        regex = Regexp.new("^#{word.gsub('.', '[a-z]')}$")
        w.match?(regex)
      else
        w == word
      end
    end
  end
end

# Design a data structure that supports the following two operations:

# addWord / add_word which adds a word,
# search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter. Return true if the search term fully matches any word previously added; otherwise, return false.
# You may assume that all given words contain only lowercase letters.

# Examples
# wd = WordDictionary.new

# wd.add_word("bad")
# wd.add_word("dad")
# wd.add_word("mad")

# wd.search("pad") == false
# wd.search("bad") == true
# wd.search(".ad") == true
# wd.search("b..") == true
