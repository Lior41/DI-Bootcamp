#exercice2


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

def calculate_cost(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15

total_cost = 0

for name, age in family.items():
    cost = calculate_cost(age)
    print(f"{name} has to pay: ${cost}")
    total_cost += cost

print(f"The family's total cost for the movies is: ${total_cost}")



#Exercice3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}


brand["number_stores"]=2

print("Zara's clients included men, women, children, and home designer.")

brand["country_creation"]="Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print(brand["international_competitors"][-1])

print("The major clothes colors in the US for Zara are:", brand["major_color"]["US"])


print("The number of key-value pairs in the brand dictionary is:", len(brand))


print("The keys of the brand dictionary are:", list(brand.keys()))


more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}


brand.update(more_on_zara)


print("Number of stores:", brand["number_stores"])


#Exercice4

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}
for i, user in enumerate(users):
    disney_users_A[user] = i

print(disney_users_A)


disney_users_B = {}
for i, user in enumerate(users):
    disney_users_B[i] = user

print(disney_users_B)


disney_users_C = {user: i for i, user in enumerate(sorted(users))}

print(disney_users_C)


disney_users_with_i = {}
for i, user in enumerate(users):
    if "i" in user:
        disney_users_with_i[user] = i

print(disney_users_with_i)


disney_users_start_m_p = {}
for i, user in enumerate(users):
    if user.lower().startswith(("m", "p")):
        disney_users_start_m_p[user] = i

print(disney_users_start_m_p)


