def fizz_buzz_cuckoo_clock(time):
    hour, minute = map(int, time.split(':'))
    hour %= 12

    if minute == 30:
        return 'Cuckoo'
    if minute == 0:
        return ('Cuckoo ' * (12 if hour == 0 else hour)).strip()

    if minute % 15 == 0:
        return 'Fizz Buzz'
    elif minute % 5 == 0 and minute % 3 != 0:
        return 'Buzz'
    elif minute % 3 == 0:
        return 'Fizz'
    else:
        return 'tick'