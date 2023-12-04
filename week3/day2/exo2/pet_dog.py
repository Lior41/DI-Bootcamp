

from ex2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))


if __name__ == "__main__":
    dog1 = PetDog("Holly", 6, 35)
    dog2 = PetDog("Sid", 3, 20)
    dog3 = PetDog("Roxanne", 4, 30)

    dog1.train()
    dog2.train()

    dog1.play(dog2, dog3)
    dog2.play(dog3)

    dog1.do_a_trick()
    dog2.do_a_trick()
    dog3.do_a_trick()  
