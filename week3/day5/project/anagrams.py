from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker()
    while True:
        print("\nAnagram Checker")
        print("1. Check a word")
        print("2. Exit")
        choice = input("Enter your choice: ")

        if choice == '2':
            break
        elif choice == '1':
            word = input("Enter a word: ").strip()
            if ' ' in word or not word.isalpha():
                print("Error: Please enter a single, alphabetic word.")
            else:
                if checker.is_valid_word(word):
                    anagrams = checker.get_anagrams(word)
                    print(f"Anagrams for '{word}': {', '.join(anagrams)}")
                else:
                    print(f"'{word}' is not a valid English word.")
        else:
            print("Invalid choice. Please choose 1 or 2.")

if __name__ == "__main__":
    main()


