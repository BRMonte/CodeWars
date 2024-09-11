# https://www.codewars.com/kata/58b28e5830473070e5000007/solutions/ruby

def frame(score)
  first_player_wins = 0
  second_player_wins = 0
  
  score.split('; ').each do |play|
    sanitized = play.gsub(/\(\d+\)/, '')
    first_score, second_score = sanitized.split('-').map(&:to_i)
    
    first_score > second_score ? first_player_wins += 1 : second_player_wins += 1
  end
  
  [first_player_wins, second_player_wins]
end
