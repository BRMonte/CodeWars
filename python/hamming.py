def hamming(a, b):
    return sum(1 for i in range(len(a)) if a[i] != b[i])
