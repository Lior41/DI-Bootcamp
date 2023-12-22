import json

class Question:
    def __init__(self, question, choices, answer, explanation):
        self.question = question
        self.choices = choices
        self.answer = answer
        self.explanation = explanation

    def ask(self):
        print(self.question)
        for i, choice in enumerate(self.choices):
            print(f"{i+1}. {choice}")
        user_answer = int(input("Your answer (1-4): "))
        return self.choices[user_answer - 1] == self.answer, self.explanation, user_answer

class Quiz:
    def __init__(self, questions):
        self.questions = questions
        self.score = 0

    def run(self):
        for question in self.questions:
            correct, explanation, user_answer= question.ask()
            if correct:
                print("Correct!")
                self.score += 1
                return question, user_answer, True
            else:
                print("Incorrect.")
            print(explanation)
            return question, user_answer, False

        print(f"Your score: {self.score}/{len(self.questions)}")
        print("Thank you for participating. Remember, knowledge is a key step in combating stereotypes and prejudice.")

def load_questions(filename):
    with open(filename, 'r') as file:
        data = json.load(file)
        return [Question(q["question"], q["choices"], q["answer"], q["explanation"]) for q in data]


if __name__ == '__main__':
    questions = load_questions("C:\\Users\\ilayn\\OneDrive\\Documents\\DI-Bootcamp\\Hackathon\\questions.json")


    quiz = Quiz(questions)
    question, user_answer, is_correct = quiz.run()
    print(question.question, user_answer, is_correct)
