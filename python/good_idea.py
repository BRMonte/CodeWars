def well(x):
    good_ideas_count = 0

    for array in x:
        for idea in array:
            if isinstance(idea, str) and idea.lower() == 'good':
                good_ideas_count += 1

    if good_ideas_count == 0:
        return 'Fail!'
    if good_ideas_count in [1, 2]:
        return 'Publish!'

    return 'I smell a series!'