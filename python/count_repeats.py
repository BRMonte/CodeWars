# https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/ruby

def count_repeats(text):
    if len(text) != len(set(text)):
        count = 0
        for i in range(len(text) - 1):
            if text[i] == text[i + 1]:
                count += 1
        return count
    return 0