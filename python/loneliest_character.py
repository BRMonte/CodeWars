def loneliest(s):
    trimmed_string = s.strip()
    space_counts = {}
    length = len(trimmed_string)

    for i in range(length):
        char = trimmed_string[i]
        if char.isalpha():
            left_spaces = 0
            for j in range(i - 1, -1, -1):
                if trimmed_string[j].isalpha():
                    break
                left_spaces += 1

            right_spaces = 0
            for j in range(i + 1, length):
                if trimmed_string[j].isalpha():
                    break
                right_spaces += 1

            if char in space_counts:
                space_counts[char] += left_spaces + right_spaces
            else:
                space_counts[char] = left_spaces + right_spaces

    max_space_count = max(space_counts.values(), default=0)
    return [char for char, count in space_counts.items() if count == max_space_count]
