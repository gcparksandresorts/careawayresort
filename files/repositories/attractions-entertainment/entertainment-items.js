entertainmentItem = []; // entertainment items repository

gcVipInfo = ["None", "Preffered Seating Available", "Early-Access Available", "VIP Seated Section Available"]
			//	0				1								2							3
accessibilityInfo = ["Guest may remain in wheelchair or ECV", "Guest must transfer from wheelchair", "Accessible seating section available"];
							//		0									1										2

entertainmentSeason = ["none", "Fall", "Winter", "Spring", "Summer", "Always Happening"];
// 						0		1		 2  	   3		  4			5

entertainmentCategory = ["none", "Live Entertainment", "Nighttime Spectacular", "Parade / Cavalcade", "Theater Show / Performance", "Interactive Improv", "Atmospheric"];

disclaimerTexts = ["Included with admission", "Seperate ticket required", "Special event admission required", "Scareaway Screams admission required"];
//						0							1											2					3

var iter = -1;

/*
	Seasons: if multiple, use comma separated list
		Example: Spring,Summer,Winter

	Link name: if external link use "[ext] linkName"

	Font: use google font name (name+name form)

	Leave default values if none (ie. for disclaimer text or second image)


iter+=1; entertainmentItem[iter] = {
	names: "showCode0 | linkName1 | showName2/font",
	quickInfo: "categoryIndex0 | location,parkIndex1 | showTimes2 | showDuration3 | showSeasons4 | vipIndex5 | accessibilityIndex6 | disclaimerText7",
	description: "briefDescription0 | tagList1,tag2",
	images: "mainImg0 | extraImg", // for more, use " | " between links
	longDescription: "introDescription0 | longerDescription1"
};

*/

iter+=1; entertainmentItem[iter] = {
	names: "fol | fountains-of-light | Fountains of Light/font",
	quickInfo: "2 | Plaza Gardens,1 | 9:30PM, 10:30PM | 18 Minutes | 2 | 2 | 2 | disclaimerText7",
	description: "A dazzling watershow celebrating the magic of the holiday season | Water Show,Dazzling,Orchestral,Emotional,Spirited,Projection Mapping",
	images: "https://gcparksandresorts.github.io/careawayresort/files/images/banners/plaza-gardens.webp | extraImg", // for more, use " | " between links
	longDescription: "Embrace the spirit and cheer of the holiday season in this advanced water and projection spectacular. Featuring nostaligic and familiar holiday music and some new heartfelt songs, this show is the perfect holiday kiss goodnight. | <h4>Immerse in the Holidays</h4>With a wonderous orchestral overture to kick off the show, The <em>Fountains of Light</em> spectacular whips you right into the magic. Featuring over one-hundred advanced LED water fountains, dozens of lasers and advanced lighting effects, and hundreds of square feet of projection mapping, there will be magic and wonder to see all around you.<p>\
		<h4>Music, Magic, and More</h4><em>Fountains of Light</em> features a unique soundtrack curated by our in-house creative team with the talents of the Oras Nou Harmonic Orchestra and the Minecraftian Jewish Association of Art and Culture. Featuring reworks of some popular holiday music and innovative custom content, the show blends together music from all sorts of cultures and nations to create a unique display of hummanity and how we celebrate the season.</p>"
};

iter+=1; entertainmentItem[iter] = {
	names: "haho | haunting-hollywood | Haunting Hollywood/Vina+Sans",
	quickInfo: "4 | Wonder Reel Studios,2 | 8:15 PM, 10:15 PM | 28 Minutes | 1 | 2 | 2 | 3",
	description: "Horror and humor combine in this raunchy halloween retelling of some of the year's hottest gossip | Comedy,Musical,Crude Humor, PG13,Satirical,World Events",
	images: "https://i.ytimg.com/vi/Phbnc10RXo4/maxresdefault.jpg | https://media.licdn.com/dms/image/D4D12AQFSNMl_D9H18w/article-cover_image-shrink_720_1280/0/1697143116072?e=2147483647&v=beta&t=URzF5qfS1URMCRxdCfMelyCeBvUa4mV4DuV1eKJbX5g | https://i.ytimg.com/vi/BfoV03t7ptQ/maxresdefault.jpg", // for more, use " | " between links
	longDescription: "Horror and humor combine in this raunchy halloween retelling of some of the year's hottest gossip. It's musical, it's magnificent, it's sure to make you get up and leave. | This halloween, laugh in horror as some dreadfully delightful monsters and ghouls sing and dance to covers of hit songs in a dramatic and comedic recap of world events"
};

iter+=1; entertainmentItem[iter] = {
	names: "wick | wicked-retelling | Wicked! The Retelling/Great+Vibes",
	quickInfo: "4 | Wonder Reel Studios,2 | 12:45 PM, 4:15 PM | 45 Minutes | 4 | 2 | 2 | disclaimerText7",
	description: "An abridged remake of the world-famous musical based on the book based on the movie based on a really old book. Live from the Sasson Theater at Wonder Reel Studios! | Broadway,Live Performance,Musical,Magic and Wizardry",
	images: "https://gcparksandresorts.github.io/careawayresort/files/images/shows/wickedMusical.webp | https://www.thehobbycenter.org/wp-content/uploads/2022/12/WickedLargeFeaturedNewsImage1200x650-scaled.jpg | https://wickedthemusical.com/wp-content/uploads/2024/08/0028-Homepage-Carousel-Assets.jpg", // for more, use " | " between links
	longDescription: "Return to the magical land of Oz for an exhilarating 45-minute adaptation of the beloved Broadway musical <em>Wicked</em>. This abridged version brings the spellbinding story of Elphaba and Glinda to life with breathtaking musical numbers, dazzling comedy, and awe-inspiring theater technology. | \
		Witness the untold tale of the Wicked Witch of the West as her journey intertwines with that of Glinda the Good, revealing the surprising events that shaped the characters we thought we knew. <p>Performed in the cutting-edge Sasson Theater, this high-energy production combines crystal-clear projection mapping, a state-of-the-art fly system, and stunning effects to immerse you in the world of Oz like never before. With powerhouse vocals, heartfelt storytelling, and a touch of humor, <em>Wicked! The Retelling</em> delivers a Broadway-caliber experience in a fraction of the time—perfect for fans of all ages. Don’t miss this magical reimagining of a classic tale!</p>"
};

iter+=1; entertainmentItem[iter] = {
	names: "gcmb | gc-marching-band | Globe-City Marching Band/none",
	quickInfo: "1 | Plaza Gardens,1 | showTimes2 | 15 Minutes | 1,2,3,4 | 0 | 0 | disclaimerText7",
	description: "briefDescription0 | Musical,Live Band,Orchestral,High Energy,Street Performance,Atmospheric",
	images: "https://www.widener.edu/sites/default/files/2019-07/marching-band.jpg | extraImg", // for more, use " | " between links
	longDescription: "Dressed in vibrant shades of blue, this high-energy ensemble brings the Palace Gardens to life with electrifying performances and infectious rhythms. With a mix of classic tunes and modern hits, their dynamic music and lively choreography will have you clapping, dancing, and marching along in no time! | \
		Get ready to groove with the Globe-City Marching Band, an energetic ensemble decked out in vibrant blue uniforms that bring the Palace Gardens to life! With lively rhythms, bold brass, and infectious energy, this talented band fills the air with music that will have you clapping, dancing, and marching along. Don't miss their electrifying performances as they celebrate the spirit of adventure and joy in every note!"
};


entertainmentItems[3] = "Dreams of Adventure/Marhey | 2 | Atlantis Castle,2 | 15 Minutes | 1 | 2";
	entertainmentDescription[3] = "A glorious nighttime spectacular that has it all. Fireworks, lasers, dancing fountains, and illumated drones fill the night sky with millions of wonderfull colors. It's a beautiful conclusion and grand finale to anyone's epic Adventure! | Firworks,Water Show,Drone Show,Musical,Dreamlike | \
				As the sun sets over Port of Adventure, prepare to be captivated by <em>Dreams of Adventure</em>, a breathtaking nighttime spectacular that celebrates the magic of dreams and the incredible places they take us. This awe-inspiring show combines the brilliance of fireworks, the elegance of dancing fountains, the enchantment of illuminated drones, and the dazzling spectacle of lasers to create an unforgettable symphony of light, color, and music.\
				<p>The night sky comes alive with millions of vibrant hues as dreams of exploration, wonder, and adventure are brought to life before your eyes. Stunning water effects rise and fall in perfect harmony with a soaring musical score, while shimmering drones paint the sky with intricate patterns and scenes. Fireworks burst overhead in a kaleidoscope of colors, illuminating the park and filling the air with excitement and awe.</p>\
				<p><em>Dreams of Adventure</em> is more than just a show—it’s a heartfelt celebration of the imagination and the journeys that unite us all. Whether you’re embarking on your first adventure or reminiscing about your day’s discoveries, this grand finale is the perfect way to conclude your epic journey at Port of Adventure.</p>";
	entertainmentImages[3] = "https://media.disneylandparis.com/d4th/en-gb/images/n040208_2031jan09_world_disney-elctrical-sky-parade-drones_16-9_tcm752-271775.jpg?w=960 | none";

entertainmentItems[4] = "Kingdom of Darkness: Alive/none | 6 | Kingdom of Darkness,2 | 12 Minutes | 0 | 0";
	entertainmentDescription[4] = "<b>Available during Scareaway Screams Event Only</b><p>Witness Draculas decrepit castle ignite in horrific sights and sounds</p> | Projection Show,Pyrotechnics,Lasers,Light Show,Awe | longDescription2";
	entertainmentImages[4] = "https://www.wfla.com/wp-content/uploads/sites/71/2018/01/the-nighttime-lights-at-hogwarts-castle_36661926_ver1.0.jpg | none";

entertainmentItems[7] = "AquaMagic - Rivers of Light/none | 2 | Palace Gardens,1 | 22 Minutes | 3 | 2";
	entertainmentDescription[7] = "Grab a spot along the Palace Garden Lake and delight in this beautiful lighted boat parade and water show that will ignite the night sky with millions of dazzling colors | Musical,Nighttime,Pretty Lights,Dazzling,Magical,Parade | longDescription2";
	entertainmentImages[7] = "https://i.imgur.com/dyUVluy.jpeg | extraImg - extraImg2";

entertainmentItems[8] = "The Greatest Showman - A Funtastic Stageshow Spectacle/none | 4 | Wonder Reel Studios,2 | 45 Minutes | 2 | 2";
	entertainmentDescription[8] = "Experience the magic and mystique of the Greatest Showman as the wonderful and energy-filled circus leaves the screen and comes to life right before your very eyes! | Live Performance,Circus,Spectacle,Musical,Based on a movie | longDescription2";
	entertainmentImages[8] = "https://townsquare.media/site/442/files/2017/12/the-greatest-showman.jpg | https://images.bauerhosting.com/legacy/empire-images/articles/59a5eb714fd5042f0596aaaf/greatest%20showman2.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80 - https://imageio.forbes.com/blogs-images/scottmendelson/files/2018/01/MV5BYTE0ZTE1MTAtZWQ3OS00MTc2LTg0OTUtZmIzYzc1NzMzOThmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SY1000_SX1500_AL_-1200x800.jpg?height=474&width=711&fit=bounds";

entertainmentItems[9] = "The Polar Express Parade/none | 3 | Palace Gardens,1 | 15 Minutes | 0 | 1";
	entertainmentDescription[9] = "On this rare occassion, witness snowfall over the Palace Gardens and -- chug, chug, chug -- OMG! The Polar Express locamotive is coming right for us! | Magical,Snow,Based on a movie,Dazzling | <h2>Ho Ho HO!</h2>Step into the magic of the beloved holiday classic as The Polar Express comes to life in this enchanting parade! Watch as the grand locomotive steams down a snow-dusted resort boulevard, bringing with it the spirit of Christmas. Dancers dressed as conductors, festive carolers, and jolly snowmen spread holiday cheer, while twinkling lights and swirling snow create a breathtaking winter wonderland. With heartwarming music and dazzling performances, this parade is a magical journey to the North Pole you won’t want to miss!";
	entertainmentImages[9] = "../../files/images/shows/polarExpressShow.jpg | extraImg - extraImg2";

