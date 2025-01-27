attractionItems = [];
attractionDescrition = [];
attractionImg = [];

queueText = ["Standby queue only", "<a href='../../tickets/gcvip'>Priority Queuing</a> available", "<a href='../../tickets/gcvip'>Priority Queuing</a> and <a href='../../information/single-riders'>Single Riders</a> available"];
		// 0			1 (VIP only)								2 (VIP and single)

accessibilityInfo = ["Guest may remain in wheelchair or ECV", "Guest must transfer from wheelchair", "Some vehicles can accomodate standard wheelchairs"];
	//		0						1				2

attractionAge = ["none", "For all ages", 'Minimum Height 35" (89cm)', 'Minimum Height 40" (102cm)', 'Minimum Height 45" (115cm)', 'Minimum Height 48" (122cm)', 'Minimum Height 50" (127cm)', 'Mature Themes (PG13)', 'Other']
		// 0		 1			2			3				4				5				6`			7

attractionCategories = ["none", "Thrill Rides", "Immersive Dark Rides", "Family Friendly Attractions", "Interactive Experiences",  "Seasonal Attractions", "Other"];
			// 0		 1		2			3				4			5			6

/*
attractionItems[NUM] = "rideName0/font | rideCategory1 | rideLocation2,parkIndex | rideDuration3 | queueIndex4 | minHeight5 | accessibility6";
	attractionDescrition[NUM] = "shortIntro0 | tags1,otherTag | longParagraph2";
	attractionImg[NUM] = "mainImg0 | otherImg1 - otherImg";

 Replace font with NONE for no font
 Replace otherImg1 with NONE for no extra images
*/

attractionItems[0] = "rideName0/font | rideCategory1 | rideLocation2,parkIndex | rideDuration3 | queueIndex4 | minHeight5 | accessibility6";
	attractionDescrition[0] = "shortIntro0 | tags1,otherTag | longParagraph2";
	attractionImg[0] = "mainImg0 | otherImg1 - otherImg";

attractionItems[1] = "Action! On the Backlot/none | 1 | Wonder Reel Studios,2 | 5 Minutes | 2 | 2 | 1";
	attractionDescrition[1] = "shortIntro0 | tags1,otherTag | longParagraph2";
	attractionImg[1] = "mainImg0 | otherImg1 - otherImg";
