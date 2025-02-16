blogHeadings = []; // For all blogs and operational updates, used to populate the blog page
operationContents = []; // Operational updates dont have their own pages, this div contains the contents of those updates to populate the operation-update page
blogImg = [];
blogContents = []; // For auto-populated blog / news report pages

blogCategories = ["none", "Operations Updates", "Attractions", "Restaurants and Dining", "Vacation Inspiration & Advice", "Business Operations"];
//		    0		1			2		3			4				5

var iter = 0;
const shortLink = "https://gcparksandresorts.github.io/careawayresort/information/blog/";

// 
/*
OPERATIONS UPDATE (clickLink = auto) -> auto will take the integer value of iter

iter += 1; blogHeadings[iter] = "blogTitle0 | postDate1 | 1 | author3 | auto";
	operationContents[iter] = "operationsText";

 BLOG POST (clickLink = auto)

 iter += 1; blogHeadings[iter] = "blogTitle0 | postDate1 | category2 | author3 | clickLink";
	blogImg[iter] = "flashImage";
 	blogContents[iter] = "blogContents";
 */
	
iter += 1; blogHeadings[iter] = "Limited dining, retail, and facility operations due to budget and staffing constraints | February 7 | 1 | Resort Operations | auto";
	operationContents[iter] = "As the off-season moves forward, guests may notice some dining and retail locations within Globe-City's Careaway Park and Port of Adventure are closed on some visits. Due to staffing limitations and tighter budget restrictions, the Resort Operations team has planned to limit the number of locations open to better service guests in our open restaurants and stores.<p>Additionally, some restroom facilities may be closed during low-attendance days so that our limited park services team can ensure guest facilities are kept to our highest standards.";

 iter += 1; blogHeadings[iter] = "Mr. Teddy becomes the official Mascot of Globe-City's Careaway Park! | February 15 | 0 | Andrew Sanchez | auto";
	blogImg[iter] = "https://i.imgur.com/VTR44Rt.jpeg";
	blogContents[iter] = "Globe-City’s Careaway Park has always been a place of magic, adventure, and heartwarming stories, but now, it has a new face representing the five wonderous lands of the park. Mr. Teddy, the lovable barista from Creature’s Cove, has officially become the theme park’s beloved mascot!<h3>A Cup of Kindness</h3>Mr. Teddy’s journey began in the cozy corner of Creature’s Cove, a land known for its whimsical, cartoonish creatures and inviting atmosphere. As the friendly barista at the Cove’s most popular café, he wasn’t just serving up delicious cups of coffee and sweet treats—he was pouring out warmth, encouragement, and positivity with every order. Visitors and park-goers found themselves uplifted by his cheerful attitude, heartfelt conversations, and signature catchphrase: 'Good Vibes & Good Coffee'<img src='https://i.imgur.com/0gC5CaG.jpeg'><h3>Spreading Warmth Across Careaway Park</h3>Word of Mr. Teddy’s kindness quickly spread beyond Creature’s Cove, reaching all five lands of Careaway Park. In the snowy wonderland of the Enchanted Kingdom, he braved the cold to deliver hot cocoa to shivering explorers. In Isles of Adventure, he helped guide lost adventurers back to their paths with a warm smile. Among the twinkling stars of Tomorrow’s frontier in Galaxy Center, he encouraged dreamers to reach for the impossible. In the Palace Gardens, the heart of the park, he danced and laughed with visitors, making memories that would last a lifetime. <p>Seeing the joy he brought to every corner of the park, the people of Careaway Park knew they had to give back to the bear who had given them so much. As a grand gesture of appreciation, the park officially named Mr. Teddy its mascot, a symbol of warmth, happiness, and community.</p><img src='https://i.imgur.com/UYxQT2p.jpeg'><h3>A Celebration Worth Visiting!</h3>During a spectacular ceremony at the Creature's Cove Town Hall, park officials unveiled a brand-new statue of Mr. Teddy, marking his place in Careaway Park history. Fans cheered as the lovable bear, now dressed in his signature barista apron and a special golden badge, waved to the crowd, promising to continue spreading joy for years to come.<h3>A Future Full of Smiles</h4>As the official face of Careaway Park, Mr. Teddy will now greet guests at the park entrance, star in parades and shows, and, of course, continue to remind everyone that a little kindness can make the world a brighter place. Whether you’re sipping on a warm latte in Creature’s Cove or exploring the many lands of Careaway Park, you’re sure to feel the comforting presence of everyone’s favorite teddy bear. So next time you visit Careaway Park, be sure to stop by and give Mr. Teddy a big bear hug—after all, he’s here to make your day just a little sweeter!";

iter += 1; blogHeadings[iter] = "M.Wesley Family Enterprises Becomes Official Food & Beverage Distributor of the Globe-City Resorts | January 19 | 5 | Meuven Vaqueyman and ChatGPT | auto";
	blogImg[iter] = "https://i.imgur.com/QuTkj0o.jpeg";
 	blogContents[iter] = "Following the liquidation of R&R Industry's food & beverage distribution division, restaurants and dining locations in the large family of companies under R&R have been scrambling to secure new contracts with other distributors. Out of the chaos that ensued following executive board member David Reyman's announcement of this action, a new hero emerged. This hero doesn’t wear capes or drive epic Batmobiles; however, he does come with big trucks full of food!<p>Hurrah! M.Wesley Family Enterprises, a food distributor with a strong connection to the Minecraftian restaurant economy, arrives on the scene!</p><img src='https://i.imgur.com/8bED69l.jpeg'><p class='imgCaption'>Mr. Michael M. Wesley, President of M.Wesley Family Enterprises, saying his famous 'Let them eat' phrase whilst proudly watching as the first distribution truck arrives at Globe-City's Careaway Resort, probably full of Mr. Teddy-shaped cupcakes or something.</p><p>With a reputation for reliability, quality, and a dash of gentlemanity, M.Wesley Family Enterprises has been selected as the sole provider of food and beverage for not only the Globe-City’s Careaway Resort, but for all the food service divisions under R&R Industries and Concept Cafe LLC. Pertianing to Globe-City's parks and resorts, the announcement marks a new era for dining experiences across our resorts, ensuring that guests will continue to enjoy high-quality meals and treats without disruption.</p><p>Mr. Wesley, known for his charismatic leadership and commitment to excellence, expressed his enthusiasm for the partnership. 'Careaway Resort is a place of magic, adventure, and wonderful memories,' he said during the official signing ceremony. 'We’re honored to bring our expertise in food distribution to such a beloved destination. Our goal is simple: to keep guests well-fed and delighted, one meal at a time.'</p><p>The transition is expected to roll out smoothly, with new distribution logistics already in place. Careaway Resort’s beloved restaurants and snack kiosks will continue serving fan-favorite menu items while introducing a few surprises along the way. Guests can expect innovative new dishes, locally sourced ingredients, and a commitment to sustainability in line with the resort’s mission to provide top-tier experiences. With M.Wesley Family Enterprises now at the helm of food and beverage distribution, Careaway Resort enters a new chapter of delicious adventures. Let the feasting begin!</p>";

// index = 4
iter += 1; blogHeadings[iter] = "Romantic Inspiration for an Adventerous Valentine's Day at the Careaway Resort | February 1 | 4 | Fruit Valentine | auto";
	blogImg[iter] = "https://i.imgur.com/oSHVWEH.jpeg";
 	blogContents[iter] = "Valentine's day is nearing and you know what that means: Depression for the singles and a whole lot of stressful planning and expectant SO's for the cuffed. But fret not my friends and lovers, for I have compiled this guide to assist you with the planning, whether you will be visiting alone or with the one you call yours (or yours with 'conditions') -- or even yours in certain 'situations'.";

 iter += 1; blogHeadings[iter] = "A Look Back to Opening Day of Globe-City's Careaway Resort | May 28, 2025 | category2 | author3 | "+shortLink+"look-back-opening-day";
