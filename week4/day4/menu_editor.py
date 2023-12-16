from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\nProgram Menu:")
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("Exit (E)")
        
        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")

def view_item():
    name = input("Enter the name of the item to view: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(item)
    else:
        print("Item not found.")

def add_item_to_menu():
    name = input("Enter the name of the item: ")
    price = float(input("Enter the price of the item: "))
    item = MenuItem(name, price)
    item.save()
    print(f"{name} was added successfully.")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    item = MenuManager.get_by_name(name)
    if item:
        MenuItem(item['item_id'], item['item_name'], item['item_price']).delete()
        print(f"{name} was deleted successfully.")
    else:
        print("Item not found.")

def update_item_from_menu():
    item_id = int(input("Enter the ID of the item to update: "))
    new_name = input("Enter the new name of the item: ")
    new_price = float(input("Enter the new price of the item: "))
    MenuItem.update(item_id, new_name, new_price)
    print(f"Item with ID {item_id} was updated successfully.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        for item in items:
            print(f"{item['item_id']}: {item['item_name']} - {item['item_price']}")
    else:
        print("The menu is currently empty.")

if __name__ == "__main__":
    show_user_menu()
