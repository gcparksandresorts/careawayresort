attractionItems = [];
attractionDescrition = [];
attractionImg = [];

queueText = ["Standby queue only", "<a href='../../tickets/gc-vip'>Priority Queuing</a> available", "<a href='../../tickets/gc-vip'>Priority Queuing</a> and <a href='../../information/single-riders'>Single Riders</a> available", "Not Applicable"];
		// 0				1 (VIP only)									2 (VIP and single)				3 (not applicable)

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

 Sponsored Attraction: <em>Sponsored by COMPANY</em> - <a href='../../business/corporate-partners'>Learn More</a><p>SHORTpARAGRAPH</p>

 Replace font with NONE for no font
 Replace otherImg1 with NONE for no extra images
 PhotoPass? yes | no
*/

attractionItems[3] = "World of Ghibli/Overlock+SC | 3 | Creature's Cove,1 | 4 Minutes | 1 | 2 | 1 | no";
	attractionDescrition[3] = "<em>Sponsored by Aztech Cinema</em> - <a href='../../business/corporate-partners'>Learn More</a><p>A breathtaking 4D flying theater experience that brings the magic of Studio Ghibli's beloved animated films to life. Take your seat on a first-of-its-kind motion platform and prepare to be whisked away on a journey through the stunning landscapes and whimsical worlds that have captured hearts for generations.</p> | Screen Ride,4D Theater,Movies,Animation,Family Fun | \
				Feel the wind in your hair as you glide alongside Totoro through lush forests, soar above the clouds with the crew of <em>Castle in the Sky</em>, and race through the vibrant streets of <em>Spirited Away</em>. Immerse yourself in the wonder of it all with dazzling visuals, sweeping music, and sensory effects like mist, scents, and gentle breezes that transport you straight into these fantastical adventures. <p>This unique attraction is a first-of-its-kind in Minecraftia, comprised of a 150-seat motion theater surrounded by a 30 foot high 270 degree curved screen and illuminated with four <em>Aztech Cinema PureView</em> laser projectors. You will become immersed in the colorful scenes and gorgeous environments of Ghibli like never before.</p><p>Whether you’re a lifelong fan or discovering these masterpieces for the first time, <em>World of Ghibli</em> is an unforgettable celebration of imagination, beauty, and storytelling that will leave you spellbound.</p><div class='spacer'></div><h3>Know Before You Go</h3><em>World of Ghibli</em> is a motion simulator attraction featuring fast-moving visuals, simulated motion, flashing lights, various water and heat effects, and other elements. Those with conditions which may be aggrivated by this experience should not ride.";
	attractionImg[3] = "../../files/images/banners/ghibliArt.webp | https://dynamicattractions.com/wp-content/uploads/2022/09/Tornado-Round-Theater.jpg - otherImg";

attractionItems[2] = "Wonder Reel Studio Tour/Delius | 4 | Wonder Reel Studios,2 | 6 Minutes | 1 | 1 | 2 | yes";
	attractionDescrition[2] = "A scatterbrained director has accidentally lost dozens of film reels around the studio and it’s up to you to save the day. Hop aboard a studio-owned golf cart equipped with a barcode scanner and search through vibrant movie sets. Your mission? Spot and scan the hidden reels to help the director finish his blockbuster masterpiece. | Interactive,Cinema,Family Fun,Movie Making,Cutsey | \
				Lights, camera, action! With surprises around every corner, larger-than-life props, and plenty of Hollywood magic, this thrilling ride puts you right in the heart of the action. Whether you’re a film buff or just love a good adventure, the Wonder Reel Studio Tour Ride promises lights, laughs, and unforgettable memories for all ages!";
	attractionImg[2] = "../../files/images/banners/wonderReelStudioTour.webp | otherImg1 - otherImg";

attractionItems[0] = "rideName0/font | rideCategory1 | rideLocation2,parkIndex | rideDuration3 | queueIndex4 | minHeight5 | accessibility6 | photoPassYN7";
	attractionDescrition[0] = "shortIntro0 | tags1,otherTag | longParagraph2";
	attractionImg[0] = "mainImg0 | otherImg1 - otherImg";

attractionItems[1] = "Action! On the Backlot/Bevan | 1 | Wonder Reel Studios,2 | 5 Minutes | 2 | 2 | 1 | yes";
	attractionDescrition[1] = "Ride into the movies on this action packed silver-screenified thrill ride. | Cinema,Thrilling,Fire Effects,Action,Blockbuster | \
				Ready for his next blockbuster, famed director Joshua Owens is looking to amp up the action. To perfectly capture his cinematic vision, Owens has employed the use of Stuntmobiles, high tech vehicles capable of capturing the narliest and actioniest shots. <p>Participate in the movies by riding in one of the high-tech stuntmobiles and experience the action of filmaking for yourself!</p>\
				<p><h3>Know Before You Go</h3><em>Action! On the Backlot</em> is a thrilling simulator dark-ride that employs the use of fire, water, fog, and strobe effects. This ride features simulated motion, sporadic movement, fast turns and drops. Expectant mothers, and those with conditions which may be agrivated by this experience should not ride.</p>";
	attractionImg[1] = "https://www.rwsentosa.com/-/jssmedia/project/non-gaming/rwsentosa/attractions/universal-studios-singapore/rides/uss-sci-fi-transformers-750-x-422.jpg?mw=1200 | otherImg1 - otherImg";

attractionItems[4] = "The CozmiBotz Return/font | 3 | Galaxy Center,1 | 8 Minutes | 3 | minHeight5 | 0 | no";
	attractionDescrition[4] = "Following a long journey from Highland, Oras Nou, the CosmiBotz are ready for their next grand performance! | Musical,Animatronics,Performance,Experience,Querky | Delight in the sounds of <em>Baroque Hoedown</em> as the CosmiBotz fill the galaxy with energy and music.";
	attractionImg[4] = "../../files/images/banners/kookieBand.webp | otherImg1 - otherImg";

attractionItems[5] = "Peanuts Wonder Park/Chewy | 3 | Creature's Cove,1 | - | 3 | 1 | 0 | no";
	attractionDescrition[5] = "Join Snoopy and the Peanuts gang at their new park full of fun activities and lots to do | Family,Young Children,Interactive,Picnic Spots | Take a break from the action at this cute oasis nessled in the wooded outskirts of Creature's Cove. Featuring a delightful play area populated with cute creatures from the Peanuts universe and their new friends, everyone is shore to have an enjoyable time at the Wonder Park! Have snacks? Enjoy shaded picnic tables and water-refill stations.";
	attractionImg[5] = "https://admin.onlyinyourstate.com/wp-content/uploads/sites/2/2019/07/camp-snoopy-carowinds-1.jpg | https://media.nbclosangeles.com/2023/12/Camp-Snoopy-Barrel-Bridge-Rendering.jpg?quality=85&strip=all&w=1900 - https://cache.undercovertourist.com/blog/2024/06/0624-camp-snoopy-knotts-berry-farm-characters-camp-snoopy.jpg";

attractionItems[6] = "Starfield Horizons/Audiowide | 3 | Galaxy Center,1 | 5 Minutes | 1 | 2 | 1 | no";
	attractionDescrition[6] = "<em>Sponsored by UNITY 3D</em> - <a href='../../business/corporate-partners'>Learn More</a><p>Leave the confines of gravity below you and set course for the breathtaking Cosmiwave Galaxy on a gravity-defying tour of the cosmos.</p> | Simulator,Interspace,Adventure,Family Thrills | At Starfield Horizons Tour Agency, we provide you the opportunity to marvel at shimmering nebulas, distant star systems, and the wonders of deep space. Board a high-tech interplanetary aerojet and set-off on a grand adventure through space. <p>Your tour is full of fun until an unexpected distress signal changes everything. An alien ship, stranded by a powerful planetary flare, needs your help. What starts as a peaceful voyage quickly turns into a high-stakes rescue mission beyond the stars! Do you have what it takes to navigate the unknown and bring them to safety?</p>";
	attractionImg[6] = "https://ca-times.brightspotcdn.com/dims4/default/e46afb6/2147483647/strip/true/crop/4928x3280+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb2%2Fb8%2F6ae2faf94bdba46e6fd1b98188e4%2F1209zv-0320msa.jpg | https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Attraction-Images/Gateway/Spaceport-KSC/SpaceportKSC_ListItem_900x600.ashx?la=en&hash=59857FDCB26F2C3BF2355FEFF877F8901C6C04C8 - https://thumbs.dreamstime.com/b/futuristic-spaceport-terminal-filled-advanced-technology-sleek-designs-illuminated-neon-lights-rows-high-tech-340792017.jpg";

attractionItems[7] = "Buddy's Wooden Wheel/none | 3 | Creature's Cove,1 | 5 Minutes | 0 | 1 | 1 | no";
	attractionDescrition[7] = "Step aboard this family friendly wheel for a delightful spin around Buddy's workshop. | Young Children, Family Friendly, Delightful, Spinning | Get a sweet view of Creatur's Cove aboard Buddy's Wooden Wheel, his newest invention!";
	attractionImg[7] = "https://i.imgur.com/E0Bbpt0.jpeg | otherImg1 - otherImg";

attractionItems[8] = "The Magic Bakery Ride/Faculty+Glyphic | 2 | Enchanted Forest,1 | 5 Minutes | 1 | 1 | 2 | no";
	attractionDescrition[8] = "Climb aboard a friendly Magic Cat and embark on a whimsical adventure behind the scenes of the famous <em>Magic Bakery</em>! Journey into the kitchen and through a magical portal into a world brimming with sweet wonders where the bakery sources its delectable treats. | Magical,Sweets & Treats,Whimsical,Family Fun,Colorful,Cartoon | As the ride begins, your feline companions purr and leap with you through the bakery’s sweet-smelling halls, bringing you into the heart of the kitchen where the magic truly begins. From there, you’re whisked through a glowing portal into a fantastical world where everything is larger than life—gigantic cupcakes, towering candy canes, and rivers of flowing chocolate! This is the magical realm where the bakery’s scrumptious treats are created, and as you explore, you’ll discover where the secret to the bakery's delectable wonders comes from. Get ready for a delightful ride through an oversized, sugar-coated dreamscape that’s as sweet as it is magical -- But watch out for those pesky drats!";
	attractionImg[8] = "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/banners/banner2.jpg | https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQkRn-jRkUXNvGGmxPmdCpVrsFgVTZVHpKw&usqp=CAU - https://thumbs.dreamstime.com/b/candy-land-landscape-night-gingerbread-house-sweet-forest-magic-light-d-illustration-85970831.jpg";

attractionItems[9] = "Meowyan Madness/Goblin+One | 3 | Isles of Adventure,1 | 2 Minutes | 2 | 2 | 1 | yes";
	attractionDescrition[9] = "Board an excavation cart and careen through the ancient and magnificent Meowyan Temple—once home to the legendary Pride of the Mayan Cat Goddess | Family Thrills,Cats,Adventure,Anctient Temple,Mayan Theme,Swift Movement,Small Drops | Deep in the heart of a lush jungle lies the ancient ruins of the legendary Meowyan Temple, a sacred place devoted to the feline deities of old. But beware—these mischievous temple cats don’t take kindly to intruders...<p>Race through the overgrown ruins, dodging crumbling archways and zooming past whimsical cat statues, each frozen in time performing playful and mysterious activities.</p><p>Hold on tight—because once the Meowyan Madness begins, there’s no telling what these temple cats have in store!</p><br><h3>Know Before You Go</h3><em>Meowyan Madness</em> is a wild-mouse style roller coaster with steep drops, sharp turns, and chaotic movement. Guests with neck pain or pre-existing neck conditions should not ride. The seating for this attraction may cause discomfort for larger guests.";
	attractionImg[9] = "../../files/images/rides/meowyanMadness.webp | https://www.themeparkreview.com/parks/pimages/Tokyo_DisneySea/Raging_Spirits/TokyoDisney_178.jpg - https://farm4.static.flickr.com/3783/11467163015_4f22e97874_b.jpg";

attractionItems[10] = "Peanut's People Mover/none | 3 | Multiple,1 | 5-20 Minutes | 0 | 1 | 2 | no";
	attractionDescrition[10] = "<em>Sponsored by Dole</em> - <a href='../../business/corporate-partners'>Learn More</a><p>Rest your tired feet and hop aboard the PPM for a round-trip ride around Careaway Park!</p> | Transport Ride,Scenic | The Peanut's People Mover is a 4-seat-per-car powered train that circles Careaway Park. It has multiple stops, so you can hop aboard and get off wherever you please! <h3>Stops and Stations</h3><ol><li><b>Shops and More Station</b> - Access to the Shops and More District. Valid theme-park admission will be required if you would like to board the tram here. Exiting at this station is equivalent to leaving Careaway Park.</li><li><b>Enchanted Forest Station</b> - Access to the Enchanted Forest land of Careaway Park. Boards on the upper level of the Sprucewood Lodge pool-deck</li><li><b>Creature's Cove Station</b> - Stop here to explore the wonderful and cheerful Creature's Cove.</li><li><b>Cosmic Interior Station</b> - A stop right between Galactic Center and Isle of Adventure</li></ol>";
	attractionImg[10] = "https://orlandoinformer.com/wp-content/uploads/photo-gallery/imported_from_media_libray/20160430-_DSC6490.jpg?bwg=1604364022 | otherImg1 - otherImg";

attractionItems[11] = "BATx/font | 1 | Kingdom of Darkness,2 | 2 Minutes | 2 | 6 | 1 | no";
	attractionDescrition[11] = "A thrilling flat ride where you fly around in a Bat. Best part - you get to control how your bat spins! | Thrilling,Spinning,Flying,Interactive | <b>Know Before You Go</b> This ride involves intense spinning motion. Guests prone to motion sickness should not ride.";
	attractionImg[11] = "https://www.gerstlauer-rides.de/fileadmin/Daten/Bilder/Produkte/Rundfahrgeschaefte/Sky_Fly/SF_Einleitung/SF_Einleitung_Dreamworld2.JPG | otherImg1 - otherImg";
