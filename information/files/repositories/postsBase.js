blogHeadings = []; // For all blogs and operational updates, used to populate the blog page
operationContents = []; // Operational updates dont have their own pages, this div contains the contents of those updates to populate the operation-update page
blogContents = []; // For auto-populated blog / news report pages

blogCategories = ["none", "Operations Updates", "Attractions", "Restaurants and Dining"];
		    0		1

var iter = 0;

// 
/*
OPERATIONS UPDATE (clickLink = auto) -> auto will take the integer value of iter

iter += 1 blogHeadings[iter] = "blogTitle0 | postDate1 | 1 | author3 | auto";
	operationContents[iter] = "operationsText";

 BLOG POST (clickLink = blogPost=NUM)

 iter += 1 blogHeadings[iter] = "blogTitle0 | postDate1 | category2 | author3 | clickLink";
	blogContents[iter] = "flashImage | postText";
 */
	
iter += 1 blogHeadings[iter] = "Limited dining, retail, and facility operations due to budget and staffing constraints | February 7 | 1 | Resort Operations | auto";
	operationContents[iter] = "As the off-season moves forward, guests may notice some dining and retail locations within Globe-City's Careaway Park and Port of Adventure are closed on some visits. Due to staffing limitations and tighter budget restrictions, the Resort Operations team has planned to limit the number of locations open to better service guests in our open restaurants and stores.<p>Additionally, some restroom facilities may be closed during low-attendance days so that our limited park services team can ensure guest facilities are kept to our highest standards.";
