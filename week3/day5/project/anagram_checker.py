class AnagramChecker:
    def __init__(self) :
        with open('sowpods.txt.crdownload', 'r') as file:
             self.words = set(file.read().split())

    def is_valid_word(self, word):
     return word.lower() in self.words
    
    def get_anagrams(self, word):
        return [w for w in self.words if self.is_anagram(word, w)]

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower()) and word1.lower() != word2.lower()
         