def display_menu():
    print("Victim Assistance Resources")
    print("1. Emergency Numbers")
    print("2. Find a Help Center Near You")
    print("3. Self Defense Club")
    print("4. Exit")
    choice = input("Enter your choice (1-4): ").strip()  
    return choice

def emergency_numbers():
    print("Emergency Numbers:")
    print("- Police: 17 (or your country's emergency number)")
    print("- Ambulance: 15")
    print("- European Emergency: 112")

def find_help_center():
    print("Help Centers:")
    print("- Psychologist Clinical, 23 Champs-Elysees Avenue Paris, +33662138567")
    print("- Eiffel Tower Center, 34 Republic Avenue Paris, +332414518")
    print("- Visit our website for more information.")

def self_defense():
    print("Self Defense Club:")    
    print("- Hero Club, 54 De La Pompe Street Paris, +33681509043")
    print("- Jewish League, 12 des Rosiers Street Paris, +33014572908")

def main():
    while True:
        choice = display_menu()
        if choice.isdigit() and choice in ['1', '2', '3', '4']:
            if choice == '1':
                emergency_numbers()
            elif choice == '2':
                find_help_center()
            elif choice == '3':
                self_defense()
            elif choice == '4':
                print("Thank you for using our application. Take care of yourself!")
                break
        else:
            print("Invalid choice. Please enter a number between 1 and 4.")

if __name__ == "__main__":
    main()
