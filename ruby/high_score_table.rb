# https://www.codewars.com/kata/5962bbea6878a381ed000036/train/ruby

class HighScoreTable
  attr_reader :scores

  def initialize(limit)
    @limit = limit
    @scores = []
  end

  def update(score)
    @scores << score
    @scores.sort!.reverse!
    @scores = @scores.first(@limit)
  end

  def reset
    @scores.clear
  end
end