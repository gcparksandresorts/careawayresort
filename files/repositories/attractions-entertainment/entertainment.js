entertainmentClickLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/entertainment/";
entertainmentList = []; entertainmentCategory = []; entertainmentLocation = []; entertainmentSeason = [];

entertainmentCategory = ["none", "Live Entertainment", "Nighttime Spectacular", "Parade / Cavalcade", "Theater Show / Performance", "Interactive Improv", "Atmospheric", "Meet & Greet"];
						// 0		1						2						3						4							5						6			7

entertainmentLocation = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels", "Multiple Locations"];
						// 0		1								2								3								4						5				6

entertainmentSeason = ["none", "Fall", "Winter", "Spring", "Summer", "Always Happening"];
						// 0	1		 2  	   3		  4			5

disclaimerTexts = ["Seperate ticket required", "Special event admission required", "Scareaway Screams admission required"];
							// 0						1							2

gcVipInfo = ["None", "Preffered Viewing Available", "Early-Access Available", "VIP Seated Section Available"]
			//	0				1								2							3

accessibilityInfo = ["Guest may remain in wheelchair or ECV", "Guest must transfer from wheelchair", "Accessible seating section available"];
							//		0									1										2


var iter = -1;

/*
	iter+=1; entertainmentList[iter] = {
		name: "showName", code: "showCode", pageLink: "pageLink",
		font:"font", description: "shortDescription",
		info: "disclaimer0 | season1 | locationName,parkIndex | category3 | accessibility4 | gcVIP5", img: "bannerImg",
		showTimes: "showTimes", showDuration: "showDuration", showOnPage: "yesORno", // show on events page
		tagsList: "tag1,tag2", pageIntro: "introDescription", 
		longDescription: "longDescription",
		otherImg: "img1 | img2" // leave default if none
	}
*/


// OFF-PEAK / GENERIC ENTERTAINMENT
	iter+=1; entertainmentList[iter] = {
		name: "Character Meet & Greets", code: "cmng", pageLink: "character-greetings",
		font:"font", description: "Meet friendly new faces at various locations in the parks",
		info: "none | 5 | Various,6 | 7 | 0 | 0", img: "https://i.imgur.com/oSHVWEH.jpeg",
		showTimes: "Hourly", showDuration: "N/A", showOnPage: "yes", // show on events page
		tagsList: "tag1,tag2", pageIntro: "introDescription", 
		longDescription: "longDescription",
		otherImg: "img1 | img2" // leave default if none
	}

	iter+=1; entertainmentList[iter] = {
		name: "Globe-City Marching Band", code: "gcmb", pageLink: "gc-marching-band",
		font: "font", description: "A loud and proud high-rolling group",
		info: "none | 5 | Palace Gardens,1 | 1 | 0 | 0", img: "https://www.widener.edu/sites/default/files/2019-07/marching-band.jpg",
		showTimes: "10:00 AM, 12:00 PM, 2:00 PM, 4:00 PM", showDuration: "15 Minutes", showOnPage: "yes", // show on events page
		tagsList: "atmospheric,musical,orchestral", pageIntro: "Dressed in vibrant shades of blue, this high-energy ensemble brings the Palace Gardens to life with electrifying performances and infectious rhythms. With a mix of classic tunes and modern hits, their dynamic music and lively choreography will have you clapping, dancing, and marching along in no time!", 
		longDescription: "Get ready to groove with the Globe-City Marching Band, an energetic ensemble decked out in vibrant blue uniforms that bring the Palace Gardens to life! With lively rhythms, bold brass, and infectious energy, this talented band fills the air with music that will have you clapping, dancing, and marching along. Don't miss their electrifying performances as they celebrate the spirit of adventure and joy in every note!",
		otherImg: "img1 | img2" // leave default if none
	}

// HALLOWEEN SEASON ENTERTAINMENT (Season 1)
	iter+=1; entertainmentList[iter] = {
		name: "Kingdom of Darkness Alive", code: "koda", pageLink: "kingdom-of-darkness",
		font:"font", description: "A spooky special effects performance where the world of the dead comes to the living",
		info: "1 | 1 | Kingdom of Darkness,2 | 6 | 0 | 0", img: "https://www.wfla.com/wp-content/uploads/sites/71/2018/01/the-nighttime-lights-at-hogwarts-castle_36661926_ver1.0.jpg",
		showTimes: "Hourly beggining at 8PM", showDuration: "11 minutes", showOnPage: "yes", // show on events page
		tagsList: "projection,show,scareaway,screams", pageIntro: "<b>Available during Scareaway Screams Event Only</b><p>Witness Draculas decrepit castle ignite in horrific sights and sounds</p>", 
		longDescription: "Powered by dozens of advanced projectors, hidden speakers, and other dazzling effects. You won't want to miss it!",
		otherImg: "img1 | img2" // leave default if none
	}

	iter+=1; entertainmentList[iter] = {
		name: "Haunting Hollywood", code: "haho", pageLink: "haunting-hollywood",
		font:"font", description: "Horror and humor combine in this raunchy halloween retelling of some of the year's hottest gossip",
		info: "1 | 1 | Wonder Reel Studios,2 | 6 | 2 | 0", img: "https://i.ytimg.com/vi/Phbnc10RXo4/maxresdefault.jpg",
		showTimes: "8:15 PM, 10:15 PM", showDuration: "22 Minutes", showOnPage: "yes", // show on events page
		tagsList: "comedy,topical,dark,raunchy", pageIntro: "Horror and humor combine in this raunchy halloween retelling of some of the year's hottest gossip. It's musical, it's magnificent, it's sure to make you get up and leave.", 
		longDescription: "This halloween, laugh in horror as some dreadfully delightful monsters and ghouls sing and dance to covers of hit songs in a dramatic and comedic recap of world events",
		otherImg: "https://media.licdn.com/dms/image/D4D12AQFSNMl_D9H18w/article-cover_image-shrink_720_1280/0/1697143116072?e=2147483647&v=beta&t=URzF5qfS1URMCRxdCfMelyCeBvUa4mV4DuV1eKJbX5g | https://i.ytimg.com/vi/BfoV03t7ptQ/maxresdefault.jpg" // leave default if none
	}



// HOLIDAY SEASON ENTERTAINMENT (Season 2)
	iter+=1; entertainmentList[iter] = {
		name: "The Greatest Showman - A Funtastic Stageshow Spectacle", code: "gsm", pageLink: "greatest-showman",
		font:"Rye", description: "Experience the magic and mystique of the Greatest Showman as the wonderful and energy-filled circus leaves the screen and comes to life right before your very eyes!",
		info: "none | 2 | Wonder Reel Studios,2 | 4 | 2 | 2", img: "https://townsquare.media/site/442/files/2017/12/the-greatest-showman.jpg",
		showTimes: "showTimes", showDuration: "45 Minutes", showOnPage: "yes", // show on events page
		tagsList: "Live,Circus,Spectacle,Musical,Movie", pageIntro: "Experience the magic and mystique of the Greatest Showman as the wonderful and energy-filled circus leaves the screen and comes to life right before your very eyes!", 
		longDescription: "Step right up and prepare to be dazzled—<b>The Greatest Showman</b> is a heart-pounding, visually stunning theatrical spectacle that brings the beloved story and music of the hit film to glorious life. Set inside a majestic, vintage circus theater, this immersive production celebrates the power of imagination, inclusion, and the indomitable spirit of showmanship.<p>Follow the visionary P.T. Barnum as he builds a world of wonder from nothing, uniting a cast of extraordinary performers who challenge the limits of what’s possible. With breathtaking acrobatics, powerful vocal performances, and dance numbers that will have you on your feet, this production delivers the magic of the big top with every dazzling cue and costume change.</p><p>Featuring beloved songs like \"This Is Me,\" \"Rewrite the Stars,\" and \"The Greatest Show,\" this high-energy experience reimagines the film's cinematic grandeur through live performance, lighting, and choreography that makes the audience part of the spectacle. Whether you’re young or young at heart, this show is a tribute to dreamers everywhere—and a reminder that no one ever made a difference by being like everyone else.</p><p>Step into the ring and let the show begin! Would you like a version of this tailored for a program, brochure, or website?</p>",
		otherImg: "https://i.imgur.com/Ah0Lz75.png | https://i.imgur.com/95xwWGy.png" // leave default if none
	}

	iter+=1; entertainmentList[iter] = {
		name: "The Polar Express Parade", code: "pxp", pageLink: "polar-express-parade",
		font:"font", description: "Dance and cheer as the Polar Express choo-choo's its way down the boulevard under a delightful snowfall.",
		info: "none | 2 | Palace Gardens,1 | 3 | 0 | 3", img: "https://gcparksandresorts.github.io/careawayresort/files/images/shows/polarExpressShow.jpg",
		showTimes: "3:15 PM, 5:15 PM, 7:15 PM", showDuration: "15 Minutes", showOnPage: "yes", // show on events page
		tagsList: "tag1,tag2", pageIntro: "On this rare occassion, witness snowfall over the Palace Gardens and -- chug, chug, chug -- OMG! The Polar Express locamotive is coming right for us!", 
		longDescription: "<h2>Ho Ho HO!</h2>Step into the magic of the beloved holiday classic as The Polar Express comes to life in this enchanting parade! Watch as the grand locomotive steams down a snow-dusted resort boulevard, bringing with it the spirit of Christmas. Dancers dressed as conductors, festive carolers, and jolly snowmen spread holiday cheer, while twinkling lights and swirling snow create a breathtaking winter wonderland. With heartwarming music and dazzling performances, this parade is a magical journey to the North Pole you won’t want to miss!",
		otherImg: "img1 | img2" // leave default if none
	}

	iter+=1; entertainmentList[iter] = {
		name: "Fountains of Light", code: "fol", pageLink: "fountains-of-light",
		font:"font", description: "A dazzling watershow celebrating the magic of the holiday season",
		info: "none | 2 | Palace Gardens,1 | 2 | 2 | 2", img: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/entertainment/disney-california-adventure/world-of-color-season-of-light/holidays-8-hr-duratex-16x9.jpg?1736238112292",
		showTimes: "9:00 PM, 10:30 PM", showDuration: "18 minutes", showOnPage: "yes", // show on events page
		tagsList: "water,dazzling", pageIntro: "Embrace the spirit and cheer of the holiday season in this advanced water and projection spectacular. Featuring nostaligic and familiar holiday music and some new heartfelt songs, this show is the perfect holiday kiss goodnight.", 
		longDescription: "<h4>Immerse in the Holidays</h4>With a wonderous orchestral overture to kick off the show, The <em>Fountains of Light</em> spectacular whips you right into the magic. Featuring over one-hundred advanced LED water fountains, dozens of lasers and advanced lighting effects, and hundreds of square feet of projection mapping, there will be magic and wonder to see all around you.<p>\
		<h4>Music, Magic, and More</h4><em>Fountains of Light</em> features a unique soundtrack curated by our in-house creative team with the talents of the Oras Nou Harmonic Orchestra and the Minecraftian Jewish Association of Art and Culture. Featuring reworks of some popular holiday music and innovative custom content, the show blends together music from all sorts of cultures and nations to create a unique display of hummanity and how we celebrate the season.</p>",
		otherImg: "img1 | img2" // leave default if none
	}



// SPRING AND SUMMER SEASON ENTERTAINMENT (season 3 and 4)
	iter+=1; entertainmentList[iter] = {
		name: "Wicked! The Retelling", code: "wick", pageLink: "wicked-musical",
		font: "Great+Vibes", description: "An abridged remake of the world-famous musical based on the book based on the movie based on a really old book. Live from the Sasson Theater at Wonder Reel Studios!",
		info: "none | 4 | Wonder Reel Studios,2 | 4 | 2 | 2", img: "https://gcparksandresorts.github.io/careawayresort/files/images/shows/wickedMusical.webp",
		showTimes: "12:45 PM, 4:15 PM", showDuration: "45 Minutes", showOnPage: "yes", // show on events page
		tagsList: "wicked,witch,musical,sasson,theater,play", pageIntro: "Return to the magical land of Oz for an exhilarating 45-minute adaptation of the beloved Broadway musical <em>Wicked</em>. This abridged version brings the spellbinding story of Elphaba and Glinda to life with breathtaking musical numbers, dazzling comedy, and awe-inspiring theater technology.", 
		longDescription: "Witness the untold tale of the Wicked Witch of the West as her journey intertwines with that of Glinda the Good, revealing the surprising events that shaped the characters we thought we knew. <p>Performed in the cutting-edge Sasson Theater, this high-energy production combines crystal-clear projection mapping, a state-of-the-art fly system, and stunning effects to immerse you in the world of Oz like never before. With powerhouse vocals, heartfelt storytelling, and a touch of humor, <em>Wicked! The Retelling</em> delivers a Broadway-caliber experience in a fraction of the time—perfect for fans of all ages. Don’t miss this magical reimagining of a classic tale!</p>",
		otherImg: "https://www.thehobbycenter.org/wp-content/uploads/2022/12/WickedLargeFeaturedNewsImage1200x650-scaled.jpg | https://wickedthemusical.com/wp-content/uploads/2024/08/0028-Homepage-Carousel-Assets.jpg" // leave default if none
	}

	iter+=1; entertainmentList[iter] = {
		name: "Dreams of Adventure Spectacular", code: "das", pageLink: "dreams-of-adventure",
		font:"font", description: "An epic nighttime fireworks and light show about the magic of dreams and the places they take us",
		info: "none | 4 | Port of Entry,2 | 2 | 2 | 1", img: "https://blogmickey.com/wp-content/uploads/2017/05/HappilyEverAfter-0512017-14.jpg",
		showTimes: "9:30 PM", showDuration: "20 Minutes", showOnPage: "yes", // show on events page
		tagsList: "tag1,tag2", pageIntro: "A glorious nighttime spectacular that has it all. Fireworks, lasers, dancing fountains, and illumated drones fill the night sky with millions of wonderfull colors. It's a beautiful conclusion and grand finale to anyone's epic Adventure!", 
		longDescription: "As the sun sets over Port of Adventure, prepare to be captivated by <em>Dreams of Adventure</em>, a breathtaking nighttime spectacular that celebrates the magic of dreams and the incredible places they take us. This awe-inspiring show combines the brilliance of fireworks, the elegance of dancing fountains, the enchantment of illuminated drones, and the dazzling spectacle of lasers to create an unforgettable symphony of light, color, and music.\
				<p>The night sky comes alive with millions of vibrant hues as dreams of exploration, wonder, and adventure are brought to life before your eyes. Stunning water effects rise and fall in perfect harmony with a soaring musical score, while shimmering drones paint the sky with intricate patterns and scenes. Fireworks burst overhead in a kaleidoscope of colors, illuminating the park and filling the air with excitement and awe.</p>\
				<p><em>Dreams of Adventure</em> is more than just a show—it’s a heartfelt celebration of the imagination and the journeys that unite us all. Whether you’re embarking on your first adventure or reminiscing about your day’s discoveries, this grand finale is the perfect way to conclude your epic journey at Port of Adventure.</p>",
		otherImg: "img1 | img2" // leave default if none
	}

	iter+=1; entertainmentList[iter] = {
		name: "AquaMagic - River of Light", code: "aqm", pageLink: "aquamagic",
		font:"font", description: "A lighted boat parade with musical fountains and dazzling colors",
		info: "none | 4 | Palace Gardens,1 | 2 | 2 | 1", img: "https://i.imgur.com/dyUVluy.jpeg",
		showTimes: "8:15 PM", showDuration: "22 Minutes", showOnPage: "yes", // show on events page
		tagsList: "Musical,Nighttime,Pretty Lights,Dazzling,Magical,Parade", pageIntro: "Grab a spot along the Palace Garden Lake and delight in this beautiful lighted boat parade and water show that will ignite the night sky with millions of dazzling colors", 
		longDescription: "longDescription",
		otherImg: "img1 | img2" // leave default if none
	}

	iter+=1; entertainmentList[iter] = {
		name: "Boulevard Band", code: "blvdBand", pageLink: "boulevard-band",
		font:"font", description: "Parading around in a stylish vintage car, the Boulevard band blends modern sounds with ragtime jazz for a swingin' good time!",
		info: "none | 4 | Wonder Reel Studios,2 | 1 | 0 | 0", img: "bannerImg",
		showTimes: "11:00 AM, 12:30 PM, 2:00 PM, 3:30 PM", showDuration: "19 Minutes", showOnPage: "yes", // show on events page
		tagsList: "tag1,tag2", pageIntro: "introDescription", 
		longDescription: "longDescription",
		otherImg: "img1 | img2" // leave default if none
	}



// SPECIAL EVENT ENTERTAINMENT
	iter+=1; entertainmentList[iter] = {
		name: "Proud and Colorful", code: "nopEnt", pageLink: "proud-and-colorful",
		font:"font", description: "A dazzling rainbow watershow celebrating pride month",
		info: "1 | 4 | Port of Entry,2 | 2 | 2 | 0", img: "https://d23.com/app/uploads/2015/07/world-of-color.jpg",
		showTimes: "10:00 PM", showDuration: "20 Minutes", showOnPage: "no", // show on events page
		tagsList: "water,rainbow,performance,show,entertainment,pride", pageIntro: "introDescription", 
		longDescription: "longDescription",
		otherImg: "img1 | img2" // leave default if none
	}