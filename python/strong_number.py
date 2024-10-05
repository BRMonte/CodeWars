def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

def strong_num(n):
    sum_of_factorials = sum(factorial(int(d)) for d in str(n))
    return "STRONG!!!!" if sum_of_factorials == n else "Not Strong !!"
