def loneliest(s)
  letters = s.strip.scan(/(?=( *\w *))/).flatten
  max_length = letters.max_by(&:length).length
  letters.select { |a| a.length == max_length }.map(&:strip)
end