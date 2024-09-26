# https://www.codewars.com/kata/57d29ccda56edb4187000052/train/ruby

GAME_MAP = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
}

def rpsls(p1, p2)
  return 'Player 1 Won!' if GAME_MAP[p1.to_sym].include?(p2)
  return 'Player 2 Won!' if GAME_MAP[p2.to_sym].include?(p1)
  
  'Draw!'
end