def ips_between(start, ending):
    return ip_address_to_integer(ending) - ip_address_to_integer(start)

def ip_address_to_integer(ip_address):
    numbers = list(map(int, ip_address.split('.')))
    return numbers[0] * (256**3) + numbers[1] * (256**2) + numbers[2] * (256**1) + numbers[3] * (256**0)