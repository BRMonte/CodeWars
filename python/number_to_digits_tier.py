def create_array_of_tiers(num):
    num_str = str(num)
    length = len(num_str)
    result = [num_str[:length - i] for i in range(length)]
    return result[::-1]