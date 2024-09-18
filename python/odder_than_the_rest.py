def odd_one(arr):
    return next((i for i, x in enumerate(arr) if x % 2 != 0), -1)