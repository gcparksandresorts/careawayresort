blogHeadings = []; // For all blogs and operational updates, used to populate the blog page
operationContents = []; // Operational updates dont have their own pages, this div contains the contents of those updates to populate the operation-update page
blogImg = [];
blogContents = []; // For auto-populated blog / news report pages

blogCategories = ["none", "Operations Updates", "Attractions", "Restaurants and Dining"];
//		    0		1

var iter = 0;

// 
/*
OPERATIONS UPDATE (clickLink = auto) -> auto will take the integer value of iter

iter += 1; blogHeadings[iter] = "blogTitle0 | postDate1 | 1 | author3 | auto";
	operationContents[iter] = "operationsText";

 BLOG POST (clickLink = auto)

 iter += 1; blogHeadings[iter] = "blogTitle0 | postDate1 | category2 | author3 | clickLink";
	blogImg[iter] = "flashImage";
 	blogContents[iter] = "blogContents";
 */
	
iter += 1; blogHeadings[iter] = "Limited dining, retail, and facility operations due to budget and staffing constraints | February 7 | 1 | Resort Operations | auto";
	operationContents[iter] = "As the off-season moves forward, guests may notice some dining and retail locations within Globe-City's Careaway Park and Port of Adventure are closed on some visits. Due to staffing limitations and tighter budget restrictions, the Resort Operations team has planned to limit the number of locations open to better service guests in our open restaurants and stores.<p>Additionally, some restroom facilities may be closed during low-attendance days so that our limited park services team can ensure guest facilities are kept to our highest standards.";

 iter += 1; blogHeadings[iter] = "Mr. Teddy becomes the official Mascot of Globe-City's Careaway Park! | March 1 | 0 | Andrew Sanchez | auto";
	blogImg[iter] = "https://img.freepik.com/premium-photo/teddy-bear-chair-coffee-shop-kid-room-empty-space-add-artwork-3d-rendering_1028938-222455.jpg";
	blogContents[iter] = "It's official, Mr. Teddy is the mascot of Globe-City's Careaway Park! YAYYYYYY Your favorite coffee-brewing cuddle-doing bear is ready for his next grand adventure. He's like the mickey mouse of the park! But even better! because he's not black!";
