#exercice1

print("hello world\n"*4,end="")

#exercice2

result = (99 ** 3) * 8
print(result)

#exercice3

print(5 < 3 ) #false
print(3 == 3 ) #true
print(3 == "3") #false
#print("3" > 3) #except TypeError:   didnt understand the question
print("Hello" == "hello")#false

#Exercice4
computer_brand="Asus"
print(f"i have a Asus computer")

#Exercice5

name = "Lior"  
age = 30  
shoe_size = 42  

info = f" my name {name}, i'm {age} years old and my shoe size is {shoe_size}."
print(info)

#Exercice6

a=10
b=5
if a>b:
    print("Hello World")
    
#Exercice7


number = int(input("Please enter a number: "))
if number % 2 == 0:
    print(f"The number {number} is even.")
else:
    print(f"The number {number} is odd.")

#Exercice8

user_name=input("what is your name? ")
my_name="Lior"
if user_name.lower()==my_name.lower():
    print("we have the same name")
else:
    print (f"nice to meet you {user_name}")

#Exercice9


height_in_inches = float(input("what is your height in inches ? "))

height_in_cm = height_in_inches * 2.54

if height_in_cm >= 145:
    print("Tall enough !")
else:
    print("You are too small !")



