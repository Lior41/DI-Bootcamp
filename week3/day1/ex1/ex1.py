#Exercice 1


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Cesar", 5)
cat2 = Cat("Oscar", 7)
cat3 = Cat("Leo", 9)


def find_oldest_cat(cats):
    oldest_cat=max(cats, key=lambda cat:cat.age)
    return oldest_cat


cats=[cat1, cat2, cat3]

oldest=find_oldest_cat(cats)



print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")


 
 
#Exercice 2


class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")    

davids_dog = Dog("Rex", 50)
print(f"David's dog  is {davids_dog.name}, and he jump {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog is {sarahs_dog.name}, and she {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is: {davids_dog.name}")
else:
    print(f"The bigger dog is: {sarahs_dog.name}")


#Exercice 3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


stairway = Song(["Theres a lady who's sure", "all that glitters is gold", "and shes buying a stairway to heaven"])


stairway.sing_me_a_song()
 


#Exercice 4





    

