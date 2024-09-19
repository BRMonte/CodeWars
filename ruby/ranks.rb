# https://www.codewars.com/kata/545f05676b42a0a195000d95/train/ruby

def ranks(scores)
  ranks = scores.map.with_index.sort_by { |score, index| -score }
  p ranks
  rank_map = {}
  
  ranks.each_with_index do |(score, index), rank|
    rank_map[score] ||= rank + 1
  end

  scores.map { |score| rank_map[score] }
end