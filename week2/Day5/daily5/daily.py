#Challenge1

def sort_words(input_string):
   
    sorted_words = sorted([word.strip() for word in input_string.split(',')])
   
    return ','.join(sorted_words)

input_string = input("Enter a comma separated sequence of words: ")

print(sort_words(input_string))


#Challenge2

def find_longest_word(sentence):
   
    words = sentence.split()

    longest_word = max(words, key=len)

    return longest_word

sentence = "My dog love fish and hamburger "
print("The longest word is:", find_longest_word(sentence))
