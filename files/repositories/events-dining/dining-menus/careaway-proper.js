restaurantInfo = []; restaurantBreakfast = []; restaurantDinner = []; restaurantCMen = []; restaurantImages = [];

// diningLocations = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels"];
// diningCategories = ["none", "Casual Dining", "Counter Service", "Full Service", "Grab & Go", "Kiosk Ordering", "Poolside Dining", "Other"];
// mealStyle = ["none", "Breakfast", "Lunch", "Dinner", "Snacks & Beverages", "Bar Drinks"];

// This page populates the menus for each restaurant. 
// THE NAME OF THIS DOCUMENT SHOULD EQUAL THE CLICKNAME VALUE SET IN DINING.JS

restaurantInfo[0] = "Careaway Proper";
restaurantInfo[1] = "Short_Description_of_Restaurant";
restaurantInfo[2] = "https://dvcshop.com/wp-content/uploads/2022/04/May-30-e1651373944331.png";
restaurantInfo[3] = "Sit-down,Classy,Large Plates,Fresh Cooked,Gourmet";
restaurantInfo[4] = "Park Entryway, 1"; // use park index for 1

/* Menu Arrays
-> new | categoryName will start a new sub category (I.E. new | side orders)
   iter+=1; restaurantBreakfast[iter] = "new | subCategory | description";
   iter+=1; restaurantDinner[iter] = "new | subCategory | description";
   iter+=1; restaurantCMen[iter] = "new | subCategory | description";

-> after category, start listing items.
    iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2";
    iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2";
    iter+=1; restaurantCMen[iter] = "itemName0 | price1 | description2";

-> If no breakfast category use restaurantBreakfast[0] = "empty"; -> same goes for others too

-> restaurantCMen is used for items that are always on the menu (such as drinks, etc) no matter time of day
    For restaurants with no breakfast and lunch menus (ie. snack stands) just use restaurantCMen only

*/

// BREAKFAST
iter=0; restaurantBreakfast[iter] = "new | Classic Breakfast Plates | description";
iter+=1; restaurantBreakfast[iter] = "Careacado Toast | 14.00 | Avocado on thick slice of olive bread with pickled onions, feta cheese, parsley. Served with breakfast potatos";
iter+=1; restaurantBreakfast[iter] = "Reuven's Classic Egg Sandwich | 13.99 | Half-bagel with cheddar cheese, skillet-fried sausage, avocado mayo, and fried egg. Served with choice of breakfast potatoes or fruit";
iter+=1; restaurantBreakfast[iter] = "Minecraftian Breakfast Plate | 21.99 | 2 eggs your way, skillet cooked breakfast sausage, bacon, choice of fruit or breakfast potatoes, choice of toast with jam";
iter+=1; restaurantBreakfast[iter] = "Careaway Proper Skillet | 19.99 | Breakfast potatoes, scrambled egg, cheddar cheese, diced tomatoes, onions, mushrooms, creamy sauce, all cooked in a cast-iron skillet";

iter+=1; restaurantBreakfast[iter] = "new | Sweet Breakfast | description";
iter+=1; restaurantBreakfast[iter] = "Vegas Boy's Granola French Toast | 14.00 | Brioche french toast topped with fresh banana puree, peanut butter, honey and oats granola, blueberries";
iter+=1; restaurantBreakfast[iter] = "Berry French Toast | 12.99 | Thick brioche bread dipped in vanilla egg mixture and toasted to a delightful golden brown. Served with jam and berries.";
iter+=1; restaurantBreakfast[iter] = "Lemon Blackberry Pancakes | 15.00 | Thick buttermilk pancakes sandwiching a layer of creamy lemon curd with blackberry jam";
iter+=1; restaurantBreakfast[iter] = "Strawberry n' Cream Crepe | 15.00 | description2";
iter+=1; restaurantBreakfast[iter] = "Nutella Peanutbutter Crepe | 15.00 | description2";

iter+=1; restaurantBreakfast[iter] = "new | Al a Carte | description";
iter+=1; restaurantBreakfast[iter] = "Breakfast potatoes | 8.99 | description2";
iter+=1; restaurantBreakfast[iter] = "Hashbrowns | 8.99 | description2";
iter+=1; restaurantBreakfast[iter] = "Fresh Fruit | 8.99 | description2";
iter+=1; restaurantBreakfast[iter] = "Scrambled Eggs | 7.99 | description2";
iter+=1; restaurantBreakfast[iter] = "Fried Egg (1) | 4.00 | description2";
iter+=1; restaurantBreakfast[iter] = "Slice of Toast | 2.75 | description2";



// LUNCH & DINNER
iter=0; restaurantDinner[iter] = "new | Main Course | description";
iter+=1; restaurantDinner[iter] = "Minecraftian Beef Wellington | 27.99 | Scillet cooked beef slices with mushroom, potato, onion, in creamy gravy sauce baked inside a butter puff pastry. Served with vegitables and potatoes";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2";

iter+=1; restaurantDinner[iter] = "new | Al a carte | description";


// ALLWAYS ON THE MENU
iter=0; restaurantCMen[iter] = "new | Beverages | description";
iter+=1; restaurantCMen[iter] = "Iced Tea | 5.00 | Optional sweetener";
iter+=1; restaurantCMen[iter] = "Fresh Lemonade | 5.00 | With a hint of mint";
iter+=1; restaurantCMen[iter] = "itemName0 | price1 | description2";





// Nothing goes after this line
populatePage();