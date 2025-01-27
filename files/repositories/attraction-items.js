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
attractionItems[NUM] = "rideName0/font | rideCategory1 | rideLocation2,parkIndex | rideDuration3 | queueIndex4 | minHeight5 | accessibility6 | photoPassYN7";
	attractionDescrition[NUM] = "shortIntro0 | tags1,otherTag | longParagraph2";
	attractionImg[NUM] = "mainImg0 | otherImg1 - otherImg";

 Replace font with NONE for no font
 Replace otherImg1 with NONE for no extra images
 PhotoPass? yes | no
*/

attractionItems[0] = "rideName0/font | rideCategory1 | rideLocation2,parkIndex | rideDuration3 | queueIndex4 | minHeight5 | accessibility6 | photoPassYN7";
	attractionDescrition[0] = "shortIntro0 | tags1,otherTag | longParagraph2";
	attractionImg[0] = "mainImg0 | otherImg1 - otherImg";

attractionItems[1] = "Action! On the Backlot/Bevan | 1 | Wonder Reel Studios,2 | 5 Minutes | 2 | 2 | 1 | yes";
	attractionDescrition[1] = "Ride into the movies on this action packed silver-screenified thrill ride. | Cinema,Thrilling,Fire Effects,Action,Blockbuster | \
				Ready for his next blockbuster, famed director Joshua Owens is looking to amp up the action. To perfectly capture his cinematic vision, Owens has employed the use of Stuntmobiles, high tech vehicles capable of capturing the narliest and actioniest shots. <p>Participate in the movies by riding in one of the high-tech stuntmobiles and experience the action of filmaking for yourself!</p>\
				<p><h3>Know Before You Go</h3><em>Action! On the Backlot</em> is a thrilling simulator dark-ride that employs the use of fire, water, fog, and strobe effects. This ride features simulated motion, sporadic movement, fast turns and drops. Expectant mothers, and those with conditions which may be agrivated by this experience should not ride.</p>";
	attractionImg[1] = "https://www.rwsentosa.com/-/jssmedia/project/non-gaming/rwsentosa/attractions/universal-studios-singapore/rides/uss-sci-fi-transformers-750-x-422.jpg?mw=1200 | otherImg1 - otherImg";
