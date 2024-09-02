def find_children(string):
    result = ''
    moms = sorted(set(c for c in string if c.isupper()))
    for m in moms:
        result += m + (m.lower() * string.count(m.lower()))
    return result