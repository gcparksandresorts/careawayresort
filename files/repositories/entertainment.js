entertainmentClickLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/entertainment/";

entertainmentList = []; entertainmentCategory = []; entertainmentLocation = []; entertainmentSeason = [];

entertainmentCategory = ["none", "Live Entertainment", "Nighttime Spectacular", "Parade / Cavalcade", "Theater Show / Performance", "Interactive Improv", "Atmospheric"];
			// 0		1			2			3			4			5			6

entertainmentLocation = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels"];
			// 0		1				2				3				4			5

entertainmentSeason = ["none", "Fall", "Winter", "Spring", "Summer", "Always Happening"];
			// 0	1	2  	   3		4	5

disclaimerTexts = ["Seperate ticket required", "Special event admission required", "Scareaway Screams admission required"];
			// 0				1				2

var iter = 0;

/*
	iter += 1; entertainmentList[iter] = "showCode0 | showName1 | showDescription2 | showDisclaimer3 | showHours4 | showLocation5 | showCategory6 | showSeason7 | clickLink8 | imgLink9";
*/


// OFF-PEAK / GENERIC ENTERTAINMENT
	entertainmentList[iter] = "GCMB | Globe-City Marching Band | A loud and proud high-rolling group | showDisclaimer3 | 10:00 AM, 12:00 PM, 2:00 PM, 4:00 PM | 1 | 1 | 5 | clickLink8 | https://www.widener.edu/sites/default/files/2019-07/marching-band.jpg";


// HALLOWEEN SEASON ENTERTAINMENT
	iter += 1; entertainmentList[iter] = "koda | Kingdom of Darkness Alive | A spooky special effects performance where the world of the dead comes to the living | 2 | Hourly beggining at 8PM | 2 | 6 | 1 | clickLink8 | https://www.wfla.com/wp-content/uploads/sites/71/2018/01/the-nighttime-lights-at-hogwarts-castle_36661926_ver1.0.jpg";
	iter += 1; entertainmentList[iter] = "haho | Haunting Hollywood | Horror and humor combine in this raunchy halloween retelling of some of the year's hottest gossip | 2 | 8:15 PM, 10:15 PM | 2 | 4 | 1 | clickLink8 | https://i.ytimg.com/vi/Phbnc10RXo4/maxresdefault.jpg";

// HOLIDAY SEASON ENTERTAINMENT
	iter += 1; entertainmentList[iter] = "iss | Ignite the Season Spectacular | A cheery fireworks, projections, and light spectacular featuring classic holiday magic | showDisclaimer3 | 9:30 PM | 2 | 2 | 2 | clickLink8 | https://media.wdwnt.com/2022/11/Believe-in-Holiday-Magic-Fireworks.jpg";
	iter += 1; entertainmentList[iter] = "fol | Fountains of Light | A dazzling watershow celebrating the magic of the holiday season | showDisclaimer3 | 9:00 PM, 10:30 PM | 1 | 2 | 2 | clickLink8 | https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/entertainment/disney-california-adventure/world-of-color-season-of-light/holidays-8-hr-duratex-16x9.jpg?1736238112292";

// SPRING AND SUMMER SEASON ENTERTAINMENT
	iter += 1; entertainmentList[iter] = "wick | Wicked! The Retelling | An abridged remake of the world-famous musical based on the book based on the movie based on a really old book. Live from the Sasson Theater at Wonder Reel Studios! | showDisclaimer3 | 12:45 PM, 4:15 PM | 2 | 4 | 4 | clickLink8 | https://gcparksandresorts.github.io/careawayresort/files/images/shows/wickedMusical.webp";
	iter += 1; entertainmentList[iter] = "das | Dreams of Adventure Spectacular | An epic nighttime fireworks and light show about the magic of dreams and the places they take us | showDisclaimer3 | 9:30 PM | 2 | 2 | 4 | clickLink8 | https://blogmickey.com/wp-content/uploads/2017/05/HappilyEverAfter-0512017-14.jpg";
