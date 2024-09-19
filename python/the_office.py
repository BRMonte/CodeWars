def outed(meet, boss):
    count = sum(score * 2 if name == boss else score for name, score in meet.items())
    return 'Get Out Now!' if count / len(meet) <= 5 else 'Nice Work Champ!'