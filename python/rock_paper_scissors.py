GAME_MAP = {
    'scissors': ['paper', 'lizard'],
    'paper': ['rock', 'spock'],
    'rock': ['lizard', 'scissors'],
    'lizard': ['spock', 'paper'],
    'spock': ['scissors', 'rock']
}

def rpsls(p1, p2):
    if p2 in GAME_MAP[p1]:
        return 'Player 1 Won!'
    elif p1 in GAME_MAP[p2]:
        return 'Player 2 Won!'
    return 'Draw!'
