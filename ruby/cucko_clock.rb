# https://www.codewars.com/kata/656e4602ee72af0017e37e82/solutions/ruby

def cuckoo_clock(initial_time, total_chimes)
  hh, mm = initial_time.split(':').map(&:to_i)
  count_of_chimes = 0

  while count_of_chimes < total_chimes
    count_of_chimes += hh if mm == 0
    count_of_chimes += 1 if mm == 15
    count_of_chimes += 1 if mm == 30
    count_of_chimes += 1 if mm == 45

    return format("%02d:%02d", hh, mm) if count_of_chimes >= total_chimes

    mm += 1
    if mm == 60
      mm = 0
      hh += 1
      hh = 1 if hh == 13
    end
  end

  format("%02d:%02d", hh, mm)
end