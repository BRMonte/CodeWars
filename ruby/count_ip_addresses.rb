def ipsBetween(start, ending)
  ip_address_to_integer(ending) - ip_address_to_integer(start)
end

def ip_address_to_integer(ip_address)
  numbers = ip_address.split('.').map(&:to_i)
  numbers[0] * (256**3) + numbers[1] * (256**2) + numbers[2] * (256**1) + numbers[3] * (256**0)
end