# https://www.codewars.com/kata/58298e19c983caf4ba000c8d/train/ruby

# muito bom para raqciocinio logico
# muito bom para organizacao
# muuto bom para nomear bem variaveis

def min_umbrellas(weather)
  with_umbrella = ["rainy", "thunderstorms"]
  home_umbrellas = 0
  work_umbrellas = 0

  weather.each_with_index do |w, i|
    if with_umbrella.include?(w)
      if i.even? # Morning
        if home_umbrellas > 0
          home_umbrellas -= 1
          work_umbrellas += 1
        else
          work_umbrellas += 1 # Needs a new umbrella
        end
      else # Afternoon
        if work_umbrellas > 0
          work_umbrellas -= 1
          home_umbrellas += 1
        else
          home_umbrellas += 1 # Needs a new umbrella
        end
      end
    end
  end

  home_umbrellas + work_umbrellas
end

