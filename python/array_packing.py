def array_packing(arr):
    binary_nums = ''.join(f'{n:08b}' for n in reversed(arr))
    return int(binary_nums, 2)