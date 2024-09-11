import re

def frame(score):
    first_player_wins = 0
    second_player_wins = 0
    
    frames = score.split('; ')
    
    for play in frames:
        parts = play.split('-')        
        scores = [re.sub(r'\(.*?\)', '', score).strip() for score in parts]
        
        first_score, second_score = map(int, scores)
        
        first_player_wins += 1 if first_score > second_score else 0
        second_player_wins += 1 if second_score >= first_score else 0
    
    return [first_player_wins, second_player_wins]