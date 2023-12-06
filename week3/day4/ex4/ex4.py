#Exercice 1
import random


def get_lines_from_file(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()
    return [line.strip() for line in lines]

def get_random_sentence(number_of_lines, lines):
    return ' '.join(random.choices(lines, k=number_of_lines))

def main():
    print("This program generates a random sentence from lines in a file.")

    try:
        number_of_lines = int(input("Enter the number of lines to include in the sentence (between 2 and 20): "))
        if 2 <= number_of_lines <= 20:
            lines = get_lines_from_file("words-list.txt")
            sentence = get_random_sentence(number_of_lines, lines)
            print("Random Sentence:", sentence)
        else:
            print("Error: Number of lines must be between 2 and 20.")
    except ValueError:
        print("Error: Please enter a valid integer.")

if __name__ == "__main__":
    main()



#Exercice 2 

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data=json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

data["company"]["employee"]["birth_date"] = "1991-02-21"

with open('updated_data.json', 'w') as file:
    json.dump(data, file)

