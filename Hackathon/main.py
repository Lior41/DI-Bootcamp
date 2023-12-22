from user_choice_handler import UserChoiceHandler

try:
    edu_script_content = open("C:\\Users\\ilayn\\OneDrive\\Documents\\DI-Bootcamp\\Hackathon\\edu.py").read()
    map_script_content = open("C:\\Users\\ilayn\\OneDrive\\Documents\\DI-Bootcamp\\Hackathon\\map.py").read()
    questions_script_content = open("C:\\Users\\ilayn\\OneDrive\\Documents\\DI-Bootcamp\\Hackathon\\questions.py").read()
    resources_script_content = open("C:\\Users\\ilayn\\OneDrive\\Documents\\DI-Bootcamp\\Hackathon\\ressources.py").read()
except FileNotFoundError as e:
    print(f"Error opening file: {e}")
    exit(1)

user_choice_handler = UserChoiceHandler(edu_script_content, map_script_content,
                                        questions_script_content, resources_script_content)

user_choice = input("Choose a script to execute ('edu', 'map', 'questions', 'ressources'): ").strip().lower()

user_choice_handler.execute_choice(user_choice)