def cuckoo_clock(initial_time, total_chimes):
    hh, mm = map(int, initial_time.split(':'))
    count_of_chimes = 0

    while count_of_chimes < total_chimes:
        if mm == 0:
            count_of_chimes += hh
        if mm == 15:
            count_of_chimes += 1
        if mm == 30:
            count_of_chimes += 1
        if mm == 45:
            count_of_chimes += 1

        if count_of_chimes >= total_chimes:
            return f"{hh:02d}:{mm:02d}"

        mm += 1
        if mm == 60:
            mm = 0
            hh += 1
            if hh == 13:
                hh = 1

    return f"{hh:02d}:{mm:02d}"
