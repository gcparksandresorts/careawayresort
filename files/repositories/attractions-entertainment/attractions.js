attractionList = []; attractionCategories = []; attractionLocations = []; attractionAge = [];
var iter = 0;

const pageLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/attractions/";

// Tabs 2 No wrap

attractionClickLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/attractions/";

attractionLocations = ["none", "Globe-City's Careaway Park", "Globe-City Port of Adventure", "Globe-City's Splashport Bay", "Shops & More District", "Resort Hotels"];
			// 				0		1										2								3							4			 		5					

attractionCategories = ["none", "Thrill Rides", "Immersive Dark Rides", "Family Friendly Attractions", "Interactive Experiences",  "Seasonal Attractions", "Other"];
						// 0		 1					2						3								4						5						6

attractionAge = ["none", "For all ages", 'Minimum Height 35" (89cm)', 'Minimum Height 40" (102cm)', 'Minimum Height 45" (115cm)', 'Minimum Height 48" (122cm)', 'Minimum Height 50" (127cm)', 'Mature Themes (PG13)', 'Other']
				// 0		 1					2										3								4							5							6`						7				8

/*
iter+=1; attractionList[iter] = "attractionName - sponsorText | attractionLocation | attractionCategory | attractionAge | clickLink | imageLink";

link to pages: atIndex=NUM
*/

attractionList[iter] = "Action! On the Backlot - Sponsored by Audi | 2 | 1 | 2 | atIndex=1 | https://i.imgur.com/wsSggBe.jpeg";
iter+=1; attractionList[iter] = "BATx - none | 2 | 1 | 6 | atIndex=11 | https://i.imgur.com/wQcL9Tt.jpeg";
iter+=1; attractionList[iter] = "Careaway Castle Mini Golf - Tickets required | 4 | 4 | 1 | clickLink | https://blog-cdn.touringplans.com/blog/wp-content/uploads/2021/04/hollywoodriveingolf_sperduto-700x465.jpeg";
iter+=1; attractionList[iter] = "Careaway Garden Chair-o-Plane - none | 1 | 3 | 2 | clickLink | https://irvinleisure.co.uk/wp-content/uploads/2023/12/4FB87CE6-FFE4-47A8-9D25-A62B6D4C81A8.jpg";
//iter+=1; attractionList[iter] = "Enchanted Forest to Paradise Gardens Gondola - none | 1 | 3 | 1 | clickLink | https://www.disneytouristblog.com/wp-content/uploads/2019/06/hollywood-studios-skyliner-gondolas-disney-world-2215.jpg";
//iter+=1; attractionList[iter] = "Escape from Realinu - none | 1 | 2 | 2 | clickLink | https://miro.medium.com/v2/da:true/resize:fit:1200/0*w5Zv7N4WakVhjhKn";
iter+=1; attractionList[iter] = "Frankenkoaster - Sponsored by Duracel<sup>TM</sup> | 2 | 1 | 6 | "+pageLink+"frankenkoaster | https://i.imgur.com/RwM26qC.jpeg";
iter+=1; attractionList[iter] = "Lightspeed - Sponsored by General Electric | 1 | 1 | 5 | clickLink | https://static.wikia.nocookie.net/tron/images/7/77/Clu2LtCycl01.jpg/revision/latest?cb=20110827053101";
iter+=1; attractionList[iter] = "Looney's Musical Train - Sponsored by Frito Lay | 1 | 2 | 1 | clickLink | https://s7d2.scene7.com/is/image/TWCNews/1203_n13_disney_mickey_minnie_runaway_railway";
iter+=1; attractionList[iter] = "Mission 14 - Sponsored by Kracken Eyewear | 1 | 1 | 3 | "+pageLink+"mission-14 | https://insidethemagic.net/wp-content/uploads/2021/02/Space-Mountain-Ride.jpg";
iter+=1; attractionList[iter] = "Meowyan Madness - none | 1 | 3 | 2 | atIndex=9 | https://sometimeshome.com/wp-content/uploads/2017/09/sometimes_home-tokyo_disneysea-photos_advice_0018.jpg";
iter+=1; attractionList[iter] = "Peanut's Wonder Park - none | 1 | 3 | 1 | atIndex=5 | https://admin.onlyinyourstate.com/wp-content/uploads/sites/2/2019/07/camp-snoopy-carowinds-1.jpg";
iter+=1; attractionList[iter] = "Peanut's People Mover - Sponsored by Dole | 1 | 3 | 1 | atIndex=10 | https://orlandoinformer.com/wp-content/uploads/photo-gallery/imported_from_media_libray/20160430-_DSC6490.jpg?bwg=1604364022";
iter+=1; attractionList[iter] = "Posideon's Plunge - none | 2 | 1 | 2 | clickLink | https://pbs.twimg.com/ext_tw_video_thumb/1443984901984985094/pu/img/ODmzHHb0NMO7kZK0.jpg";
iter+=1; attractionList[iter] = "Starfield Horizons - Sponsored by Unity3D | 1 | 2 | 2 | atIndex=6 | https://ca-times.brightspotcdn.com/dims4/default/e46afb6/2147483647/strip/true/crop/4928x3280+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb2%2Fb8%2F6ae2faf94bdba46e6fd1b98188e4%2F1209zv-0320msa.jpg";
iter+=1; attractionList[iter] = "Star Shuttle Drop - none | 1 | 1 | 4 | clickLink | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/cc3.jpg";
iter+=1; attractionList[iter] = "Alpine Sleds Through Yeti Mountain - none | 1 | 1 | 2 | clickLink | https://i.imgur.com/NtKI5ta.jpeg";
iter+=1; attractionList[iter] = "Temple of Medusa - none | 1 | 2 | 2 | "+pageLink+"temple-of-medusa | https://gcparksandresorts.github.io/careawayresort/files/images/rides/medussa1.webp";
iter+=1; attractionList[iter] = "The CosmiBotz Return - none | 1 | 3 | 1 | atIndex=4 | https://gcparksandresorts.github.io/careawayresort/files/images/banners/kookieBand.webp";
iter+=1; attractionList[iter] = "The Magic Bakery Ride - none | 1 | 2 | 1 | atIndex=8 | https://aztechadmit.github.io/gcresorthighland/main/images/banner2.jpg";
iter+=1; attractionList[iter] = "The Nightmare Dracula - none | 2 | 1 | 4 | "+pageLink+"nightmare-dracula | https://i.imgur.com/Iu4oHYO.jpeg";
iter+=1; attractionList[iter] = "The Quest of Odysseus - none | 2 | 2 | 2 | clickLink | https://gcparksandresorts.github.io/careawayresort/files/images/rides/odyseus1.webp";
iter+=1; attractionList[iter] = "Treetop Tumble - none | 1 | 3 | 2 | clickLink | https://www.intamin.com/wp-content/uploads/2019/09/Parachute-Tower_15_ret-1920x1282.jpg";
iter+=1; attractionList[iter] = "Voyage to Atlantia - A rebuild of the #1 Globe-City darkride! | 2 | 2 | 2 | clickLink | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/atlantisConcept4.png";
iter+=1; attractionList[iter] = "Wonder Reel Studio Tour - none | 2 | 4 | 1 | atIndex=2 | https://i.imgur.com/ZMFbfYk.jpeg";
iter+=1; attractionList[iter] = "World of Ghibli - Sponsored by Aztech Cinema | 1 | 3 | 2 | atIndex=3 | ../files/images/banners/ghibliArt.webp";
iter+=1; attractionList[iter] = "8Lanes Bowling Alley and Sports Bar - Pay per game | 4 | 4 | 1 | "+pageLink+"8lanes | https://gcparksandresorts.github.io/careawayresort/files/images/banners/wavesAlley.jfif";
iter+=1; attractionList[iter] = "Buddy's Wooden Wheel - none | 1 | 3 | 1 | atIndex=7 | https://i.imgur.com/E0Bbpt0.jpeg";
iter+=1; attractionList[iter] = "Buddy's Friendship Factory - Sponsored by Build-a-bear | 1 | 4 | 1 | atIndex=12 | https://static.wikia.nocookie.net/sixflags/images/4/4d/Build-A-Bear_Workshop_SFMM_2023-04-02.jpg/revision/latest?cb=20230402204023";