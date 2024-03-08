# Trilingual democracy
# Switzerland has four official languages: German, French, Italian, and Romansh.1

# When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4

# When all three are native speakers of the same language, it also becomes their group's language.5a

# When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

# When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

# The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

# Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8

link = 'https://www.codewars.com/kata/62f17be8356b63006a9899dc/train/ruby'

def trilingual_democracy(group)
  official_languages = ['D', 'F', 'I', 'K']
  array = group.split('')

  return array.first if array.uniq.size == 1
  return array.select { |c| array.count(c) == 1 }.first if array.uniq.size == 2
  return official_languages.select { |l| array.count(l) == 0 }.first
end
