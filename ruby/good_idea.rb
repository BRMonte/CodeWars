def well(x)
  good_ideas_count = 0
  
  x.each do |array|
    array.each do |idea|
      next unless idea.is_a?(String)

      good_ideas_count += 1 if idea.downcase == 'good'
    end
  end
  
  return 'Fail!'   if good_ideas_count.zero?
  return 'Publish!'if [1, 2].include?(good_ideas_count)
  
  'I smell a series!'
end

# https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/ruby