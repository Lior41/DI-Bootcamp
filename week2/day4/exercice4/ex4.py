#exercice 1

def display_message():
    
    print("In this course, I am learning about  Python !") 


display_message()


#exercice 2

def favorite_book(title):
    print("My favourite book is Harry Potter. ")

favorite_book("Harry Potter")


#exercice 3

def describe_city(city, country):
    
    print(f"{city} is in {country}.")

describe_city("Paris", "France")


#exercice 4

import random

def compare_number(user_number):
    
    random_number = random.randint(1, 100)

   
    if user_number == random_number:
        print("Success! Both numbers are the same.")
    else:
        print(f"Fail! Your number was {user_number}, but the random number was {random_number}.")


compare_number(29)



#exercice 5 


def make_shirt(size , text):
    print(f"The size of the shirt is {size} and the text is {text}. ")
make_shirt("M" , "I love rock")

def make_shirt(size='large', text='Python is fun. ') :
    print(f"The size of the shirt is {size} and the text is {text}.")
make_shirt()

make_shirt(size="medium")  

make_shirt(size='small', text='Python is Fun!')

make_shirt(text="go to the gym" , size="XL" )


#exercice 6

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"


magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


make_great(magician_names)


show_magicians(magician_names)


#exercice 7 

import random

def get_random_temp(season):
    if season == 'winter':
        return random.uniform(-10, 16)
    elif season == 'spring':
        return random.uniform(0, 23)
    elif season == 'summer':
        return random.uniform(24, 40)
    elif season == 'autumn':
        return random.uniform(0, 23)
    else:
        return random.uniform(-10, 40)

def main():
    month = int(input("Enter the number of the month (1-12): "))
    if month in [12, 1, 2]:
        season = 'winter'
    elif month in [3, 4, 5]:
        season = 'spring'
    elif month in [6, 7, 8]:
        season = 'summer'
    elif month in [9, 10, 11]:
        season = 'autumn'
    else:
        season = 'unknown'

    temp = get_random_temp(season)
    print(f"The temperature right now is {temp:.1f} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 < temp <= 23:
        print("Nice and cool, perfect for a day out.")
    elif 24 <= temp <= 32:
        print("Getting warm, remember to stay hydrated.")
    elif temp > 32:
        print("It's really hot! Try to stay cool and avoid the sun during peak hours.")


main()


#Exercice 8

def conduct_quiz(data):
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ")
        if user_answer.lower() == item["answer"].lower():
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append((item["question"], user_answer, item["answer"]))

    return correct, incorrect, wrong_answers

def display_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct answers and {incorrect} incorrect answers.")

    if incorrect > 0:
        print("\nHere are the questions you got wrong:")
        for question, user_answer, correct_answer in wrong_answers:
            print(f"Question: {question}")
            print(f"Your answer: {user_answer}")
            print(f"Correct answer: {correct_answer}\n")

    if incorrect > 3:
        print("You had more than 3 wrong answers. Would you like to try the quiz again?")


data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]


correct, incorrect, wrong_answers = conduct_quiz(data)

display_results(correct, incorrect, wrong_answers)

