import re

def pseudo_sort(text):
    words =  re.sub(r'[^\w\s]', '', text).split()

    if all(word.islower() for word in words):
        return ' '.join(sorted(words))
    elif all(word.isupper() for word in words):
        return ' '.join(sorted(words, reverse=True))

    lower_case_words = sorted(word for word in words if word.islower())
    upcase_words = sorted((word for word in words if any(c.isupper() for c in word)), reverse=True)

    lower_case_str = ' '.join(lower_case_words)
    upcase_str = ' '.join(upcase_words)

    if lower_case_str and upcase_str:
        return ' '.join([lower_case_str, upcase_str])
    elif lower_case_str and upcase_str == '':
        return lower_case_str
    else:
        return upcase_str
