def tram(stops, descending, onboarding)
  current_passengers = 0
  max_capacity       = 0

  (0...stops).each.with_index do |s, i|
    current_passengers -= descending[i]
    current_passengers += onboarding[i]
    max_capacity        = [max_capacity, current_passengers].max
  end

  max_capacity
end

# https://www.codewars.com/kata/5b190aa7803388ec97000054/solutions/ruby
