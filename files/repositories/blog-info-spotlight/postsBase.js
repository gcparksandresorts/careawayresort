blogData = [];

blogCategories = ["none", "Operations Updates", // 0 1
	"Attractions & Entertainment", "Restaurants and Dining",// 2 3
	"Vacation Inspiration & Advice", "Business Operations",  // 4 5
	"Merchandise", "Seasonal Events & Celebrations",  // 6 7
	"Community Service", "Just for Fun"];// 8 9
		

var iter = -1;
const shortLink = "https://gcparksandresorts.github.io/careawayresort/information/blog/";

/*

FOR AUTO-GENERATED BLOGS AND OPERATIONS UPDATES:
-> Use builder: https://gcparksandresorts.github.io/careawayresort/files/working/blog-builder.html

FOR ONES THAT LINK TO EXTERNAL PAGES:

iter += 1; blogData[iter] = {
	title: "Title of the Blog Post",
	info: "April 22 | 2 | Author Name", tagsList: "tag1,tag2",
	externalLink: shortLink+"externalLink"
}

*/

// JANUARY
iter += 1; blogData[iter] = {
	title: "Closed for Referb: Attraction Refurbishment Calendar",
	info: "January 1 | 1 | Resort Operations",
	blogLink: "referb-calendar", tagsList: "closed,attractions,rides,ride",
	contents: "During our off-season we take the time to ensure our rides and attractions are operating at their best! This includes repairing and improving the things you see, and sometimes the things you may not see. Here is the current calendar for our refurbishment closures.<p><em><b>Note:</b> This calendar is subject to change, we recommend downloading the GC RESORT mobile app for the most up-to-date attraction operating schedules</em></p><table><tr><th>Attraction Name</th><th>Closure Type</th><th>Closure Dates</th><th>Closure Plans</th></tr><tr><td>Gondolas</td><td>Full Closure</td><td>January 6 - March 7</td><td>Extensive inspection and mechanical maintenance</td></tr><tr><td>Wonder Reel Studio Tour</td><td>Full Closure</td><td>January 6 - March 28</td><td>Repair and restoration of guest interaction points</td></tr><tr><td>Looney's Musical Train</td><td>Weekday Only</td><td>February 1 - February 18</td><td>Exterior ride path cleaning and general maintenance</td></tr><tr><td>Temple of Medusa</td><td>Weekdays Only</td><td>February 3 - April 18</td><td>Vehicle maintenance, scenery enhancement, operational improvements, queue enhancement</td></tr><tr><td>Mission 14</td><td>Full Closure</td><td>March 1 - March 14</td><td>Vehicle maintenance, scenery enhancement, operational improvements</td></tr><tr><td>Voyage to Atlantis</td><td>Full Closure</td><td>January 6 - March 24</td><td>Water basin maintenance, painting, scenery enhancement</td></tr><tr><td>Action! On the backlot</td><td>Weekdays Only</td><td>March 1 - March 24</td><td>General maintenance, painting, queue enhancement</td></tr><tr><td>The Nightmare Dracula</td><td>Full Closure</td><td>February 24 - March 14</td><td>Ride system maintenance, large animatronic / scenery maintenance, queue and scenery enhancement</td></tr></table>"
}

iter += 1; blogData[iter] = {
	title: "M.Wesley Family Enterprises Becomes Official Food & Beverage Distributor of the Globe-City Resorts",
	info: "January 19 | 5 | Meuven Vaqueyman and ChatGPT",
	blogLink: "mwesley-official-food-and-bev-sponsor", tagsList: "business,history,plan",
	headerImg: "https://i.imgur.com/QuTkj0o.jpeg",
	contents: "Following the liquidation of R&R Industry's food & beverage distribution division, restaurants and dining locations in the large family of companies under R&R have been scrambling to secure new contracts with other distributors. Out of the chaos that ensued following executive board member David Reyman's announcement of this action, a new hero emerged. This hero doesn’t wear capes or drive epic Batmobiles; however, he does come with big trucks full of food!<p>Hurrah! M.Wesley Family Enterprises, a food distributor with a strong connection to the Minecraftian restaurant economy, arrives on the scene!</p><img src='https://i.imgur.com/8bED69l.jpeg'><p class='imgCaption'>Mr. Michael M. Wesley, President of M.Wesley Family Enterprises, saying his famous 'Let them eat' phrase whilst proudly watching as the first distribution truck arrives at Globe-City's Careaway Resort, probably full of Mr. Teddy-shaped cupcakes or something.</p><p>With a reputation for reliability, quality, and a dash of gentlemanity, M.Wesley Family Enterprises has been selected as the sole provider of food and beverage for not only the Globe-City’s Careaway Resort, but for all the food service divisions under R&R Industries and Concept Cafe LLC. Pertianing to Globe-City's parks and resorts, the announcement marks a new era for dining experiences across our resorts, ensuring that guests will continue to enjoy high-quality meals and treats without disruption.</p><p>Mr. Wesley, known for his charismatic leadership and commitment to excellence, expressed his enthusiasm for the partnership. 'Careaway Resort is a place of magic, adventure, and wonderful memories,' he said during the official signing ceremony. 'We’re honored to bring our expertise in food distribution to such a beloved destination. Our goal is simple: to keep guests well-fed and delighted, one meal at a time.'</p><p>The transition is expected to roll out smoothly, with new distribution logistics already in place. Careaway Resort’s beloved restaurants and snack kiosks will continue serving fan-favorite menu items while introducing a few surprises along the way. Guests can expect innovative new dishes, locally sourced ingredients, and a commitment to sustainability in line with the resort’s mission to provide top-tier experiences. With M.Wesley Family Enterprises now at the helm of food and beverage distribution, Careaway Resort enters a new chapter of delicious adventures. Let the feasting begin!</p>"
}


// FEBRUARY
iter += 1; blogData[iter] = {
	title: "Romantic Inspiration for an Adventerous Valentine's Day at the Careaway Resort",
	info: "February 1 | 4 | Fruit Valentine",
	blogLink: "valentines-day-advice", tagsList: "plan,vacation,valentine,valentines,date,romance,romantic,love,couple,couple's",
	headerImg: "https://i.imgur.com/oSHVWEH.jpeg",
	contents: "Valentine's day is nearing and you know what that means: Depression for the singles and a whole lot of stressful planning and expectant SO's for the cuffed. But fret not my friends and lovers, for I have compiled this guide to assist you with the planning, whether you will be visiting alone or with the one you call yours (or yours with 'conditions') -- or even yours in certain 'situations'."
}

iter += 1; blogData[iter] = {
	title: "Limited dining, retail, and facility operations due to budget and staffing constraints",
	info: "February 7 | 1 | Resort Operations",
	blogLink: "updates-to-facilities-ops", tagsList: "dining,retail,facility,budget,staffing",
	contents: "As the off-season moves forward, guests may notice some dining and retail locations within Globe-City's Careaway Park and Port of Adventure are closed on some visits. Due to staffing limitations and tighter budget restrictions, the Resort Operations team has planned to limit the number of locations open to better service guests in our open restaurants and stores.<p>Additionally, some restroom facilities may be closed during low-attendance days so that our limited park services team can ensure guest facilities are kept to our highest standards."
}

iter += 1; blogData[iter] = {
	title: "Behind the Scenes of the Careaway Resort",
	info: "February 18 | 9 | Samuel Jaxon", tagsList: "tour,secrets,reveal,learning",
	externalLink: shortLink+"behind-the-scenes" // used localized link if possible
}


// MARCH
iter += 1; blogData[iter] = {
	title: "Mr. Teddy becomes the official Mascot of Globe-City's Careaway Park!",
	info: "March 1 | 9 | Andrew Sanchez",
	blogLink: "mr-teddy-official-mascot", tagsList: "mr,bear,character,teddy",
	headerImg: "https://i.imgur.com/VTR44Rt.jpeg",
	contents: "Globe-City’s Careaway Park has always been a place of magic, adventure, and heartwarming stories, but now, it has a new face representing the five wonderous lands of the park. Mr. Teddy, the lovable barista from Creature’s Cove, has officially become the theme park’s beloved mascot! <h3>A Cup of Kindness</h3> Mr. Teddy’s journey began in the cozy corner of Creature’s Cove, a land known for its whimsical, cartoonish creatures and inviting atmosphere. As the friendly barista at the Cove’s most popular café, he wasn’t just serving up delicious cups of coffee and sweet treats—he was pouring out warmth, encouragement, and positivity with every order. Visitors and park-goers found themselves uplifted by his cheerful attitude, heartfelt conversations, and signature catchphrase: 'Good Vibes & Good Coffee'<img src='https://i.imgur.com/0gC5CaG.jpeg'><p class='imgCaption'>Mr. Teddy posed with VP Resort Operations, Andrew Sanchez</p><h3>Spreading Warmth Across Careaway Park</h3>Word of Mr. Teddy’s kindness quickly spread beyond Creature’s Cove, reaching all five lands of Careaway Park. In the snowy wonderland of the Enchanted Kingdom, he braved the cold to deliver hot cocoa to shivering explorers. In Isles of Adventure, he helped guide lost adventurers back to their paths with a warm smile. Among the twinkling stars of Tomorrow’s frontier in Galaxy Center, he encouraged dreamers to reach for the impossible. In the Palace Gardens, the heart of the park, he danced and laughed with visitors, making memories that would last a lifetime.<p>Seeing the joy he brought to every corner of the park, the people of Careaway Park knew they had to give back to the bear who had given them so much.\
	 As a grand gesture of appreciation, the park officially named Mr. Teddy its mascot, a symbol of warmth, happiness, and community.</p><img src='https://i.imgur.com/UYxQT2p.jpeg'><h3>A Celebration Worth Visiting!</h3>During a spectacular ceremony at the Creature's Cove Town Hall, park officials unveiled a brand-new statue of Mr. Teddy, marking his place in Careaway Park history. Fans cheered as the lovable bear, now dressed in his signature barista apron and a special golden badge, waved to the crowd, promising to continue spreading joy for years to come.<p>As the official face of Careaway Park, Mr. Teddy will now greet guests at the park entrance, star in parades and shows, and, of course, continue to remind everyone that a little kindness can make the world a brighter place. Whether you’re sipping on a warm latte in Creature’s Cove or exploring the many lands of Careaway Park, you’re sure to feel the comforting presence of everyone’s favorite teddy bear. So next time you visit Careaway Park, be sure to stop by and give Mr. Teddy a big bear hug—after all, he’s here to make your day just a little sweeter!</p>"
}


// APRIL
iter += 1; blogData[iter] = {
	title: "April Birthday Celebrations: Celebrating Andrew and Leora 🥳",
	info: "April 1 | 7 | Booven Bayman",
	blogLink: "april-birthdays", tagsList: "birthday,birthdays,leora,andrew,celebration",
	headerImg: "https://i.imgur.com/rDQnaiQ.jpeg",
	contents: "This month we celebrate two (well actually three) very important birthdays! From the valley, Happy Birthday to my mommy, Leora Reyman! And from northern California, we have my bestie friend in the whole world, Andrew Sanchez!<p>As an honorable mention, it is also Dassy DeBasc, my auntie's birthday, so make sure to give her a blessing too!</p><h3>Celebration Activities</h3>My mommy and bestie obviously deserve the bestest celebration, so this month enjoy deluxe chocolate cakes (my mommy's favorite) served at every resort eatery and 10% off all sour candies (andrews fav) at select locations!<p>Additionally, individual celebrations will be happening on each of their respective birthdays:</p><ul><li><b>April 26 - Leora's Birthday</b><br>Enjoy a fun mini-event at Careaway Park featuring free chocolate cake and strawberries!</li><li><b>April 27 - Andreew's Birfday</b><br>Enjoy a buffet of sour candies and goldfish and a meet and greet with Mr. Teddy in his birfday fit (no, not the naked one)!</li></ul>Thank you all for helping celebrate two of the most important people in my life!! Whoo Hoo 🥳"
}

iter += 1; blogData[iter] = {
	title: "Celebrating the Jew's Exodus From Egypt: Family YUM with Passover Friendly Meal Options",
	info: "April 4 | 3 | Miriam the Orthodox Jew",
	blogLink: "passover-meal-options", tagsList: "food,dining,special,allergen,gluten,bread,passover,jewish",
	headerImg: "https://i.imgur.com/ikKyxdg.png",
	contents: "At the Careaway Resort, we strive to curate inclusive and accomodating adventures for everyone, including our proud celebration of cultural and religious traditions. This Passover, we're excited to offer a variety of Passover-friendly meal options throughout the park so that all of our guests can savor delicious food while observing the holiday.<p>Passover, or <em>Pesach</em>, is a meaningful time in the Jewish tradition, commemorating the Exodus from Egypt. It includes dietary guidelines that exclude leavened grains (known as <em>chametz</em>) and embrace symbolic foods such as matzah. That’s why we’ve worked closely with our <em>Creative Culinary</em> team and Kosher advisers to create special dishes.</p><h3>What to Look For</h3>From snacks to full meals, we've got you covered. Look for <b>Passover Special</b> menus at our restaurants and always feel free to ask our friendly cast members for assistance. Whether you're looking for a quick bite or a sit-down meal, you'll find options that follow traditional guidelines and taste amazing.<h3>Featured Restaurants and Menu Options</h3><b>Careaway Proper</b> - Careaway Park & <b>PortLantic Grill</b> - Port of Adventure<ul><li><u>🥗 Mediterranean Chicken Bowl</u><br>Grilled, marinated chicken served over a bed of greens with cucumber, tomato, olives, and tahini dressing. Servied with side of matzo crackers.</li><li><u>🍠 Sweet Potato Latkes</u><br>Crispy sweet potato pancakes served with a side of applesauce or sour cream. Gluten-free and super satisfying!</li><li><u>🥩 Kosher Brisket Plate</u><br>Tender slow-cooked kosher brisket with roasted carrots and potatoes. Served with matzo.</li></ul><br><b>Snack Stands & Quick Service Dining</b> - Various Locations<ul><li><u>🍫 \
	Chocolate-Dipped Coconut Macaroons</u><br>A sweet, kosher-for-Passover treat available here and at various snack stands throughout the park.</li><li><u>🍓 Fresh Fruit & Matzo Crumble Cups</u><br>A light, refreshing dessert using seasonal fruit topped with a cinnamon-matzo streusel.</li><li><u>🍫Matzo Chocolate-Almond Bark</u><br>Matzo covered in a layer of caramel and smothered in smooth dark chocolate topped with slivered almonds</li></ul><h3>Additional Dining Tips for Passover Celebrating Guests</h3><ul><li><b>Kosher-certified options</b>: While many of our meals are Passover-friendly, our in-park full-service restaurants offer kosher-certified meat dishes. Ask a cast member for assistanct.</li><li><b>Allergen-conscious menus</b>: Many Passover dishes are naturally gluten-free, but please notify cast members of specific allergies or sensitivities.</li><li><b>Bring your own items</b>:We understand some guests may prefer to bring home-prepared food for religious observance. Year-round, we provide designated picnic areas for eating and lockers to keep your food safe while you have fun.</li></ul><img src='https://i.imgur.com/CjIBPtG.jpeg'><p><b>From our family to yours, Chag Sameach!</b><br>Whether you're here for the rides, the shows, or simply to soak in the sunshine, we’re honored to be part of your Passover celebration.</p>"
}


// MAY
iter += 1; blogData[iter] = {
	title: "A Look Back at the Opening Day of the Careaway Resort",
	info: "May 28 | 9 | ReyRey ManMon", tagsList: "history,behind,scenes",
	externalLink: shortLink+"look-back-opening-day"
}


// JUNE



// JULY



// AUGUST



// SEPTEMBER



// OCTOBER




// NOVEMBER



// DECEMBER

