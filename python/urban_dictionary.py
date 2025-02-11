class WordDictionary:
    def __init__(self):
        self.words = []

    def add_word(self, word):
        self.words.append(word)

    def search(self, word):
        for w in self.words:
            if "." in word:
                import re
                regex = re.compile("^" + word.replace(".", "[a-z]") + "$")
                if regex.match(w):
                    return True
            elif w == word:
                return True
        return False