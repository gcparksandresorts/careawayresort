restaurantInfo = []; restaurantBreakfast = []; restaurantDinner = []; restaurantCMen = []; restaurantImages = [];

// diningLocations = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels"];
// diningCategories = ["none", "Casual Dining", "Counter Service", "Full Service", "Grab & Go", "Kiosk Ordering", "Poolside Dining", "Other"];
// mealStyle = ["none", "Breakfast", "Lunch", "Dinner", "Snacks & Beverages", "Bar Drinks"];

// This page populates the menus for each restaurant. 
// THE NAME OF THIS DOCUMENT SHOULD EQUAL THE CLICKNAME VALUE SET IN DINING.JS

restaurantInfo[0] = "Restaurant_Name";
restaurantInfo[1] = "Short_Description_of_Restaurant";
restaurantInfo[2] = "banner_img_link";
restaurantInfo[3] = "Tag1,Tag2,Tag3";
restaurantInfo[4] = "preciseLocation0, parkLocation1"; // use park index for 1

/* Menu Arrays
-> new | categoryName will start a new sub category (I.E. new | Entrees | served with fries) - leave description as-is for none
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
iter=0; restaurantBreakfast[iter] = "new | subCategory | description";
iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2";
iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2";
iter+=1; restaurantBreakfast[iter] = "itemName0 | price1 | description2";

// LUNCH & DINNER
iter=0; restaurantDinner[iter] = "new | subCategory | description";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2";
iter+=1; restaurantDinner[iter] = "itemName0 | price1 | description2";

// ALLWAYS ON THE MENU
iter=0; restaurantCMen[iter] = "new | subCategory | description";
iter+=1; restaurantCMen[iter] = "itemName0 | price1 | description2";
iter+=1; restaurantCMen[iter] = "itemName0 | price1 | description2";
iter+=1; restaurantCMen[iter] = "itemName0 | price1 | description2";



// Nothing goes after this line
populatePage();