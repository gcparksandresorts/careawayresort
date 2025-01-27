attractionList = []; attractionCategories = []; attractionLocations = []; attractionAge = [];
var iter = 0;

// Tabs 2 No wrap

attractionClickLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/attractions/";

attractionLocations = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels"];
			// 0		1				2			3				4			  5

attractionCategories = ["none", "Thrill Rides", "Immersive Dark Rides", "Family Friendly Attractions", "Interactive Experiences",  "Seasonal Attractions", "Other"];
			// 0		 1		2			3				4			5			6

attractionAge = ["none", "For all ages", 'Minimum Height 35" (89cm)', 'Minimum Height 40" (102cm)', 'Minimum Height 45" (115cm)', 'Minimum Height 48" (122cm)', 'Minimum Height 50" (127cm)', 'Mature Themes (PG13)', 'Other']
		// 0		 1			2			3				4				5				6`			7

/*
iter+=1; attractionList[iter] = "attractionName - sponsorText | attractionLocation | attractionCategory | attractionAge | clickLink | imageLink";

link to pages: atIndex=NUM
*/

attractionList[iter] = "Action! On the Backlot - Sponsored by Audi | 2 | 1 | 2 | atIndex=1 | https://i.imgur.com/wsSggBe.jpeg";
iter+=1; attractionList[iter] = "Careaway Castle Mini Golf - none | 4 | 4 | 1 | clickLink | https://blog-cdn.touringplans.com/blog/wp-content/uploads/2021/04/hollywoodriveingolf_sperduto-700x465.jpeg";
iter+=1; attractionList[iter] = "Enchanted Forest to Creature Cove Gondola - none | 1 | 3 | 1 | clickLink | https://www.disneytouristblog.com/wp-content/uploads/2019/06/hollywood-studios-skyliner-gondolas-disney-world-2215.jpg";
iter+=1; attractionList[iter] = "Escape from Realinu - none | 1 | 2 | 2 | clickLink | https://miro.medium.com/v2/da:true/resize:fit:1200/0*w5Zv7N4WakVhjhKn";
iter+=1; attractionList[iter] = "Frankenkoaster - Sponsored by Duracel<sup>TM</sup> | 2 | 1 | 6 | clickLink | https://i.imgur.com/RwM26qC.jpeg";
iter+=1; attractionList[iter] = "Lightspeed - Sponsored by General Electric | 1 | 1 | 5 | clickLink | https://static.wikia.nocookie.net/tron/images/7/77/Clu2LtCycl01.jpg/revision/latest?cb=20110827053101";
iter+=1; attractionList[iter] = "Looney's Musical Train - Sponsored by Dole | 1 | 2 | 1 | clickLink | https://s7d2.scene7.com/is/image/TWCNews/1203_n13_disney_mickey_minnie_runaway_railway";
iter+=1; attractionList[iter] = "Mission 14 - Sponsored by Kracken Eyewear | 1 | 1 | 3 | clickLink | https://insidethemagic.net/wp-content/uploads/2021/02/Space-Mountain-Ride.jpg";
iter+=1; attractionList[iter] = "Starfield Horizons - Sponsored by Unity3D | 1 | 3 | 2 | clickLink | https://ca-times.brightspotcdn.com/dims4/default/e46afb6/2147483647/strip/true/crop/4928x3280+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb2%2Fb8%2F6ae2faf94bdba46e6fd1b98188e4%2F1209zv-0320msa.jpg";
iter+=1; attractionList[iter] = "Temple of Medusa - none | 1 | 2 | 2 | clickLink | https://gcparksandresorts.github.io/careawayresort/files/images/rides/medussa1.webp";
iter+=1; attractionList[iter] = "The Magic Bakery Ride - none | 1 | 2 | 1 | clickLink | https://aztechadmit.github.io/gcresorthighland/main/images/banner2.jpg";
iter+=1; attractionList[iter] = "The Nightmare Dracula - none | 2 | 1 | 4 | clickLink | https://i.imgur.com/Iu4oHYO.jpeg";
iter+=1; attractionList[iter] = "The Quest of Odysseus - none | 2 | 2 | 2 | clickLink | https://gcparksandresorts.github.io/careawayresort/files/images/rides/odyseus1.webp";
iter+=1; attractionList[iter] = "Voyage to Atlantia - A rebuild of the #1 Globe-City darkride! | 2 | 2 | 2 | clickLink | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/atlantisConcept4.png";
iter+=1; attractionList[iter] = "Wonder Reel Studio Tour - none | 2 | 4 | 1 | atIndex=2 | https://i.imgur.com/ZMFbfYk.jpeg";
iter+=1; attractionList[iter] = "World of Ghibli - Sponsored by Aztech Cinema | 1 | 3 | 2 | atIndex=3 | ../files/images/banners/ghibliArt.webp";
