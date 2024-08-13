import re

def clean_text(text):
    return re.sub(r"[-–—'(){}\[\]…]", '', text)

def syllable_count(word):
    word = word.lower()
    return len(re.findall(r'[aeiou]{1,}', word))

def flesch_kincaid(text):
    text = clean_text(text)
    sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s+', text)
    sentences = [s for s in sentences if s.strip()]
    
    words_count = 0
    syllables_count = 0
    
    for sentence in sentences:
        words = sentence.split()
        words_count += len(words)
        syllables_count += sum(syllable_count(word) for word in words)
    
    avrg_words_per_sentence = words_count / len(sentences)
    avrg_syllables_per_word = syllables_count / words_count
    
    grade_level = (0.39 * avrg_words_per_sentence) + (11.8 * avrg_syllables_per_word) - 15.59
    return round(grade_level, 2)