def double_every_other(list):
    result = []
    for index, num in enumerate(list):
        if index % 2 == 1:
            result.append(num * 2)
        else:
            result.append(num)
    return result