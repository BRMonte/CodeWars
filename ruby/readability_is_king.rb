def clean_text(text)
  text.gsub(/[-–—'(){}\[\]…]/, '')
end

def syllable_count(word)
  word.downcase!
  word.scan(/[aeiou]{1,}/).count
end

def flesch_kincaid(text)
  text = clean_text(text)
  sentences = text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s+/).reject(&:empty?)
  words_count = 0
  syllables_count = 0
  
  sentences.each do |sentence|
    words = sentence.split(/\s+/)
    words_count += words.size
    syllables_count += words.sum { |word| syllable_count(word) }
  end
  
  avrg_words_per_sentence = words_count.to_f / sentences.size
  avrg_syllables_per_word = syllables_count.to_f / words_count
  
  ((0.39 * avrg_words_per_sentence) + (11.8 * avrg_syllables_per_word) - 15.59).round(2)
end