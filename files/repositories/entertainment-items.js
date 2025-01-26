entertainmentItems = [];
entertainmentDescription = [];
entertainmentImages = [];

gcVipInfo = ["None", "Preffered Seating Available", "Early-Access Available", "VIP Seated Section Available"]
	//	0	1				2			3
accessibilityInfo = ["Guest may remain in wheelchair or ECV", "Guest must transfer from wheelchair", "Accessible seating section available"];
	//		0						1				2

entertainmentCategory = ["none", "Live Entertainment", "Nighttime Spectacular", "Parade / Cavalcade", "Theater Show / Performance", "Interactive Improv", "Atmospheric"];

/* NOTES - leave default value if you dont have someting (I.E. if no extra images, leave as extraImg - extraImg2 

      CATEGORY - make sure showCategory is a number that aligns with the categories in the entertainment repository:
                Live Entertainment - 1 ; Nighttime Show - 2 ; Parade - 3 ; Theater Show - 4 ; Interactive Improv - 5 ; Atmospheric - 6
                
      LOCATION - parkIndex should be replaced with a number corresponding with the following:
                Careaway Park - 1 ; Port of Adventure - 2; Splashport - 3; Shops&More - 4; Hotels - 5
                
      DEFAULT ACCESSIBILITY: 0

      CUSTOM FONT - use a google font name or write none
*/


/*
entertainmentItems[0] = "showName0/none | showCategory1 | showLocation2,parkIndex | showDuration3 | gcVipInfo4 | accessibility5";
	entertainmentDescription[0] = "shortDescription0 | tagList1,tag2 | longDescription2";
	entertainmentImages[0] = "mainImg0 | extraImg - extraImg2";
*/

entertainmentItems[0] = "showName0/none | showCategory1 | showLocation2,parkIndex | showDuration3 | gcVipInfo4 | accessibility5";
	entertainmentDescription[0] = "shortDescription0 | tagList1,tag2 | longDescription2";
	entertainmentImages[0] = "mainImg0 | extraImg - extraImg2";

entertainmentItems[1] = "Wicked! The Retelling/Great+Vibes | 4 | Wonder Reel Studios,2 | 45 Minutes | 2 | 2";
  	entertainmentDescription[1] = "Return to the magical land of Oz for an exhilarating 45-minute adaptation of the beloved Broadway musical <em>Wicked</em>. This abridged version brings the spellbinding story of Elphaba and Glinda to life with breathtaking musical numbers, dazzling comedy, and awe-inspiring theater technology. | Broadway,Live Performance,Musical,Magic and Wizardry | \
	  			Witness the untold tale of the Wicked Witch of the West as her journey intertwines with that of Glinda the Good, revealing the surprising events that shaped the characters we thought we knew. <p>Performed in the cutting-edge Sasson Theater, this high-energy production combines crystal-clear projection mapping, a state-of-the-art fly system, and stunning effects to immerse you in the world of Oz like never before. With powerhouse vocals, heartfelt storytelling, and a touch of humor, <em>Wicked! The Retelling</em> delivers a Broadway-caliber experience in a fraction of the time—perfect for fans of all ages. Don’t miss this magical reimagining of a classic tale!</p>";
  	entertainmentImages[1] = "https://gcparksandresorts.github.io/careawayresort/files/images/shows/wickedMusical.webp | https://www.thehobbycenter.org/wp-content/uploads/2022/12/WickedLargeFeaturedNewsImage1200x650-scaled.jpg - https://wickedthemusical.com/wp-content/uploads/2024/08/0028-Homepage-Carousel-Assets.jpg";

entertainmentItems[2] = "Globe-City Marching Band/none | 1 | Plaza Gardens,1 | 15 Minutes | 0 | 0";
	entertainmentDescription[2] = "Dressed in vibrant shades of blue, this high-energy ensemble brings the Palace Gardens to life with electrifying performances and infectious rhythms. With a mix of classic tunes and modern hits, their dynamic music and lively choreography will have you clapping, dancing, and marching along in no time! | Musical,Live Band,Orchestral,High Energy,Street Performance,Atmospheric | Get ready to groove with the Globe-City Marching Band, an energetic ensemble decked out in vibrant blue uniforms that bring the Palace Gardens to life! With lively rhythms, bold brass, and infectious energy, this talented band fills the air with music that will have you clapping, dancing, and marching along. Don't miss their electrifying performances as they celebrate the spirit of adventure and joy in every note!";
	entertainmentImages[2] = "https://www.musictravel.com/img/disney/disney-imagination-campus-marching-band-performances-a.jpg | extraImg - extraImg2";

entertainmentItems[3] = "Dreams of Adventure/Marhey | 2 | Atlantis Castle,2 | 15 Minutes | 1 | 2";
	entertainmentDescription[3] = "A glorious nighttime spectacular that has it all. Fireworks, lasers, dancing fountains, and illumated drones fill the night sky with millions of wonderfull colors. It's a beautiful conclusion and grand finale to anyone's epic Adventure! | Firworks,Water Show,Drone Show,Musical,Dreamlike | \
				As the sun sets over Port of Adventure, prepare to be captivated by <em>Dreams of Adventure</em>, a breathtaking nighttime spectacular that celebrates the magic of dreams and the incredible places they take us. This awe-inspiring show combines the brilliance of fireworks, the elegance of dancing fountains, the enchantment of illuminated drones, and the dazzling spectacle of lasers to create an unforgettable symphony of light, color, and music.\
				<p>The night sky comes alive with millions of vibrant hues as dreams of exploration, wonder, and adventure are brought to life before your eyes. Stunning water effects rise and fall in perfect harmony with a soaring musical score, while shimmering drones paint the sky with intricate patterns and scenes. Fireworks burst overhead in a kaleidoscope of colors, illuminating the park and filling the air with excitement and awe.</p>\
				<p><em>Dreams of Adventure</em> is more than just a show—it’s a heartfelt celebration of the imagination and the journeys that unite us all. Whether you’re embarking on your first adventure or reminiscing about your day’s discoveries, this grand finale is the perfect way to conclude your epic journey at Port of Adventure.</p>";
	entertainmentImages[3] = "https://media.disneylandparis.com/d4th/en-gb/images/n040208_2031jan09_world_disney-elctrical-sky-parade-drones_16-9_tcm752-271775.jpg?w=960 | extraImg - extraImg2";
