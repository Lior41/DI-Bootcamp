
user_input = input("H: ")

if len(user_input) < 10:
    print("String not long enough")
elif len(user_input) > 10:
    print("String too long")
else:
  
    print("Perfect string")
    print("First character:", user_input[0])
    print("Last character:", user_input[-1])

for i in range(1, len(user_input) + 1):
        print(user_input[:i])
        "HelloWorld"
 