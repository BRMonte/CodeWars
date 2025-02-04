def tram(stops, descending, onboarding):
    current_passengers = 0
    max_capacity = 0

    for i in range(stops):
        current_passengers -= descending[i]
        current_passengers += onboarding[i]
        max_capacity = max(max_capacity, current_passengers)

    return max_capacity
