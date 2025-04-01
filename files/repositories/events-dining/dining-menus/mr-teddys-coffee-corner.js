restaurantInfo = []; restaurantBreakfast = []; restaurantDinner = []; restaurantCMen = []; restaurantImages = [];

// diningLocations = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels"];
// diningCategories = ["none", "Casual Dining", "Counter Service", "Full Service", "Grab & Go", "Kiosk Ordering", "Poolside Dining", "Other"];
// mealStyle = ["none", "Breakfast", "Lunch", "Dinner", "Snacks & Beverages", "Bar Drinks"];

// This page populates the menus for each restaurant. 
// THE NAME OF THIS DOCUMENT SHOULD EQUAL THE CLICKNAME VALUE SET IN DINING.JS

restaurantInfo[0] = "Mr. Teddy's Coffee Corner";
restaurantInfo[1] = "Take a break and relax in this warm and inviting Cafe where the lovable Mr. Teddy is crafting up yummy drinks and delightful snacks for all his visitors!";
restaurantInfo[2] = "https://www.therealjapan.com/wp-content/uploads/2015/04/Japan-Oct-2010-014-e1527537504330.jpg";
restaurantInfo[3] = "Cutsey,Coffee and Tea,Fresh Pastries,Inviting,Instagramable";
restaurantInfo[4] = "Creature's Cove, 1"; // use park index for 1

/* Menu Arrays
-> new | categoryName will start a new sub category (I.E. new | Entrees | served with fries) - leave description as-is for none
    iter+=1; restaurantBreakfast[iter] = "new | subCategory | description";
    iter+=1; restaurantDinner[iter] = "new | subCategory | description";
    iter+=1; restaurantCMen[iter] = "new | subCategory | description";

-> after category, start listing items.
    iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2 | allergen";
    iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2 | allergen";
    iter+=1; restaurantCMen[iter] = "itemName0 | price1 | description2 | allergen";

-> If no breakfast category use restaurantBreakfast[0] = "empty"; -> same goes for others too

-> restaurantCMen is used for items that are always on the menu (such as drinks, etc) no matter time of day
    For restaurants with no breakfast and lunch menus (ie. snack stands) just use restaurantCMen only

*/

// BREAKFAST
iter=0; restaurantBreakfast[iter] = "empty";
iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2 | allergen";
iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2 | allergen";
iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2 | allergen";

// LUNCH & DINNER
iter=0; restaurantDinner[iter] = "empty";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2 | allergen";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2 | allergen";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2 | allergen";

// ALLWAYS ON THE MENU
iter=0; restaurantCMen[iter] = "new | Espresso & Coffee Drinks | Made with choice of whole or 2% dairy milk <span class='gf'>GF</span>. Substitute oatmilk <span class='vegan'>V</span> for free!";
iter+=1; restaurantCMen[iter] = "Single Shot | 1.99 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Double Shot | 2.99 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Standard Latte or Cappuccino | 5.00 | Hot or Iced | allergen";
iter+=1; restaurantCMen[iter] = "Flavored Latte | 6.00 | Vanilla, SF Vanilla, Caramel, Brown Sugar, Seasonal Flavor | allergen";
iter+=1; restaurantCMen[iter] = "Dark Chocolate Mocha | 6.25 | Made with creamy homemade dark chocolate sauce, topped with whipped cream and a sprinkle of cinnamon | allergen";
iter+=1; restaurantCMen[iter] = "Caramel Machiatto | 6.25 | Upside-down vanilla latte with caramel drizzle | allergen";
iter+=1; restaurantCMen[iter] = "Overnight Cold Brew | 4.75 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Hot / Iced Coffee | 3.50 | description2 | allergen";


iter+=1; restaurantCMen[iter] = "new | Specialty Beverages | description";
iter+=1; restaurantCMen[iter] = "Shaken Espresso | 6.15 | Espresso poured over ice with choice of flavoring and shaken then mixed with milk. A frothy airy version of a classic latte | allergen";
iter+=1; restaurantCMen[iter] = "Honey Lavender Latte | 6.00 | Lavender and vanilla iced latte with extra honey drizzle | allergen";
iter+=1; restaurantCMen[iter] = "Brown Sugar Cookie Latte | 6.50 | Vanilla and brown sugar espresso and milk with heavy mocha sauce drizzle and a hint of cinnamon. Topped with whipped cream and oreo crumble | allergen";
iter+=1; restaurantCMen[iter] = "Peanut Butter Latte | 6.50 | Peanut butter sauce with a hint of vanilla. Topped with whipped cream and mocha drizzle | allergen";
iter+=1; restaurantCMen[iter] = "Fresh Squeezed Lemonade | 5.00 | Made daily in-house | allergen";
iter+=1; restaurantCMen[iter] = "Tropical Lemonade | 5.00 | Our awesome lemonade mixed with pure mango juice and a hint of pineapple | allergen";

iter+=1; restaurantCMen[iter] = "new | Snacks and Pastries | description";
iter+=1; restaurantCMen[iter] = "Huge freshly baked Chocolate Chunk cookie | 3.25 | Made with a mix of semi-sweet chips and dark chocolate chunks | allergen";
iter+=1; restaurantCMen[iter] = "Vegan chocolate chunk cookie | 3.25 | Made with vegan butter and non-dairy dark chocolate chunks | v";
iter+=1; restaurantCMen[iter] = "Butter Croissant | 6.15 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Almond Butter Croissant | 6.99 | Almond butter filling and sliced amond garnish | allergen";
iter+=1; restaurantCMen[iter] = "Dark chocolate brownie | 4.99 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Caramel Cookie Brownie | 4.99 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Cinnamon Coffee Cake | 4.99 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Blueberry Muffin | 5.16 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Double Chocolate Chip Muffin | 5.18 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Mr. Teddy Cookie | 3,99 | Soft sugar cookie decorated with icing | allergen";
iter+=1; restaurantCMen[iter] = "Mr. Zebra Cookie | 3.99 | Soft sugar cookie decorated with icing | allergen";


iter+=1; restaurantCMen[iter] = "new | Other Drinks | description";
iter+=1; restaurantCMen[iter] = "Water Bottle | 5.00 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Premium Sparkling Water | 6.00 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "Apple Juice Box | 4.75 | description2 | allergen";
iter+=1; restaurantCMen[iter] = "2% Milk Bottle | 4.75 | description2 | allergen";


// Nothing goes after this line
populatePage();