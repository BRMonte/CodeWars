def find_children(string)
  result = ''
  moms = string.scan(/[A-Z]/).join.split('').sort
  moms.each { |m| result << m + (m.downcase * string.count(m.downcase)) }

  result
end