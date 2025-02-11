# https://www.codewars.com/kata/5838b5eb1adeb6b7220000f5/train/ruby

# bom para aprender macete de intersecao: arrays.reduce(:&) 
# bom pra aprender a trabalhar com group_by

def id_best_users(*arrays)
  common_users = arrays.reduce(:&)  
  user_counts  = Hash.new(0)
  result       = []
  
  arrays.each do |array|
    array.each { |id| user_counts[id] += 1 if common_users.include?(id) }
  end
    
  user_counts.group_by { |id, count| count }.each do |count, count_id_pairs|
    user_ids = count_id_pairs.map(&:first).sort
    result   << [count, user_ids]
  end
  
  result.sort_by { |count, users| -count }
end