diningCategories = []; diningLocations = []; mealStyle = [];
var iter = 0;

diningArray = [];


// Tabs 2 No wrap

diningClickLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/dining/page?name=";

diningLocations = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels"];
					// 0		1								2								3							4						5

diningCategories = ["none", "Casual Dining", "Counter Service", "Full Service", "Grab & Go", "Kiosk Ordering", "Poolside Dining", "Other"];
					//   0		1					2					3			4  	   		5					6

mealStyle = ["none", "Breakfast", "Lunch", "Dinner", "Snacks & Beverages", "Bar Drinks"];
		//    0			1	    	2			3			4					5
/*
iter+=1;diningArray[iter] = "restaurantName0 | clickName1 | category2 | mealStyles3 | location4 | shortDescription5 | imgSrc6";

- Restaurant Name: Display name (Careaway Proper)
- Click Name: for page index link (careaway-proper)
- Category: index of dining category
- meal style: comma seperated list of meal styles
- location: index of location
*/

diningArray[0] = "Careaway Proper | careaway-proper | 3 | 1,2,3 | 1 | A classy sit-down restaurant serving hearty minecraftian eats | https://dvcshop.com/wp-content/uploads/2022/04/May-30-e1651373944331.png";
iter+=1;diningArray[iter] = "Portlantic Grill | portlantic-grill | 3 | 2,3 | 2 | A sophisticated grill serving flavorful entrees inspired by Minecraftia's coastal regions | imgSrc6";
iter+=1;diningArray[iter] = "Mr. Teddy's Coffee Corner | mr-teddys-coffee-corner | 2 | 4 | 1 | A cutsey cuddly cafe run by the teddy bear himself | https://www.therealjapan.com/wp-content/uploads/2015/04/Japan-Oct-2010-014-e1527537504330.jpg";
iter+=1;diningArray[iter] = "Silver Screen Diner | silver-screen-diner | 1 | 1,2,3 | 2 | Step into the movies in this golden-age themed diner serving handcrafted meals and specialty drinks | https://ca-times.brightspotcdn.com/dims4/default/e4d9725/2147483647/strip/true/crop/3346x2231+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F87%2F8e%2F7d1e9a874ce4ad0bd4c13b102bd4%2F955546-fo-diner-poi-brite-spot-mrt-12-cropped.jpg";




