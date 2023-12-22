class UserChoiceHandler:
  
    def __init__(self, edu_function, map_function, questions_function, ressources_function):
        self.edu_function = edu_function
        self.map_function = map_function
        self.questions_function = questions_function
        self.ressources_function = ressources_function

    def execute_choice(self, choice):
        
        if choice == "edu":
            self.edu_function()
        elif choice == "map":
            self.map_function()
        elif choice == "questions":
            self.questions_function()
        elif choice == "ressources":
            self.ressources_function()
        else:
            print("Invalid choice. Please choose from 'edu', 'map', 'questions', or 'ressources'.")