def ranks(scores):
    ranks = sorted(enumerate(scores), key=lambda x: -x[1])
    rank_map = {}
    
    for rank, (index, score) in enumerate(ranks):
        if score not in rank_map:
            rank_map[score] = rank + 1

    return [rank_map[score] for score in scores]
