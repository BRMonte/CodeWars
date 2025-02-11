def id_best_users(*arrays):
    common_users = set.intersection(*map(set, arrays))
    user_counts = {}
    result = []

    for array in arrays:
        for id in array:
            if id in common_users:
                user_counts[id] = user_counts.get(id, 0) + 1

    grouped = {}
    for id, count in user_counts.items():
        grouped.setdefault(count, []).append(id)

    for count, ids in grouped.items():
        result.append([count, sorted(ids)])

    return sorted(result, key=lambda item: -item[0])