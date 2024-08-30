def collect_lowest_level_arrays(arr):
    result = []
    for element in arr:
        if isinstance(element, list):
            result.extend(collect_lowest_level_arrays(element))
    return [arr] if not result else result

def near_flatten(array):
    arrays = collect_lowest_level_arrays(array)
    return sorted(arrays, key=lambda sub_array: min(sub_array))
