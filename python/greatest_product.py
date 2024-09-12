def greatest_product(n):
    max_product = 0

    for i in range(len(n) - 4):
        chunk = n[i:i+5]
        product = 1
        for char in chunk:
            product *= int(char)
        if product > max_product:
            max_product = product

    return max_product