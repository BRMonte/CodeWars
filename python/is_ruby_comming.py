def is_ruby_coming(lst):
    return any(d.get('language') == 'Ruby' for d in lst)