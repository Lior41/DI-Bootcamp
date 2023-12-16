
from menu_item import MenuItem
from menu_manager import MenuManager


item = MenuItem('Burger', 35)
item.save()
print("Item saved: Burger with price 35")


item.delete()
print("Item deleted: Burger")


existing_item_id = 1  #
MenuItem.update(existing_item_id, 'Veggie Burger', 37)
print(f"Item updated: ID {existing_item_id} to Veggie Burger with price 37")


item_name_to_find = 'Beef Stew'
item2 = MenuManager.get_by_name(item_name_to_find)
if item2:
    print(f"Item found: {item2}")
else:
    print(f"No item found with the name {item_name_to_find}")


all_items = MenuManager.all_items()
print("All menu items:")
for item in all_items:
    print(f"{item['item_id']}: {item['item_name']} - {item['item_price']}")
