#Exercice 1

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


bengal = Bengal("Oscar", 3)
chartreux = Chartreux("Cesar", 2)
siamese = Siamese("Ruby", 4)


all_cats = [bengal, chartreux, siamese]


sara_pets = Pets(all_cats)


sara_pets.walk()


#Exercice 2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_speed = self.run_speed() * self.weight
        other_speed = other_dog.run_speed() * other_dog.weight
        winner = self if my_speed > other_speed else other_dog
        return f"{winner.name} wins the fight!"


dog1 = Dog("Holly", 6, 35)
dog2 = Dog("Sid", 3, 20)
dog3 = Dog("Roxanne", 4, 30)


print(dog1.fight(dog2))  
print(dog2.fight(dog3))  
print(dog3.fight(dog1))



#Exercice 4



