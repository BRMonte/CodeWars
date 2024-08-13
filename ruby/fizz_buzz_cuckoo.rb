def fizz_buzz_cuckoo_clock(time)
  hour, minute = time.split(':').map(&:to_i)
  hour %= 12
  
  return 'Cuckoo' if minute == 30
  return ('Cuckoo ' * (hour.zero? ? 12 : hour)).strip if minute.zero?

  if minute % 15 == 0
    'Fizz Buzz'
  elsif minute % 5 == 0 && minute % 3 != 0
    'Buzz'
  elsif minute % 3 == 0
    'Fizz'
  else
    'tick'
  end
end
