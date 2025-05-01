restaurantInfo = []; rSections = []; rSubsections = []; rItems = [];
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

-> NEW SECTION (Breakfast, Lunch, ETC)

sIter+=1; rSections[sIter]="code0 | sectionName1";
    -> code0: will be used for child sections

-> NEW SUB-SECTION (Appetizers, Entres, Etc.)

subIter+=1; rSubsections[subIter]="parentCode0 | newCode1 | sectionName2 | sectionSubtitle3";
    -> parentCode0: the code of the section this subsection belongs to
    -> sectionSubtitle: leave as-is if none


-> MENU ITEM

    iIter+=1; rItems[iIter]="sectionCode0 | itemName1 | itemPrice2 | allergens3 | itemDescription4";
        -> sectionCode0: 
            default (will always appear): none
            otherwise, code of parent section it will appear in (can be a section or subsection)
        -> allergens3: include comma if needed (gf or gf,v) - leave as is for neither
    

- > Allergen -> v = vegan, gf = gluten free, k = certified kosher, df = dairy free, ef = egg free
*/

var sIter = -1; var subIter = -1; var iIter=-1;

sIter+=1; rSections[sIter]="breakfast | Breakfast (opening - 12PM)";

subIter+=1; rSubsections[subIter]="breakfast | section1 | sectionName2 | sectionSubtitle3";
    iIter+=1; rItems[iIter]="section1 | itemName1 | itemPrice2 | allergens3 | itemDescription4";
    iIter+=1; rItems[iIter]="section1 | itemName1 | itemPrice2 | allergens3 | itemDescription4";
    iIter+=1; rItems[iIter]="section1 | itemName1 | itemPrice2 | allergens3 | itemDescription4";


subIter+=1; rSubsections[subIter]="none | drinks | Standard Beverages | sectionSubtitle3";
    iIter+=1; rItems[iIter]="drinks | Fountain Drink | 5.00 | allergens3 | Self-Serve, choose from over 100 different flavors";
    iIter+=1; rItems[iIter]="drinks | Premium Bottled Water | 6.00 | allergens3 | itemDescription4";
    iIter+=1; rItems[iIter]="drinks | Apple Juice Box | 4.00 | allergens3 | itemDescription4";
    iIter+=1; rItems[iIter]="drinks | 2% Milk Bottle | 4.00 | allergens3 | itemDescription4";



// Nothing goes after this line
populatePage();