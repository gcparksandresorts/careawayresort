productCategories = ["none", "Men & Womens Apparel", "Accessories", "Theme Park & Resort Gifts", "Toys & Collectibles"];

productList=[];
productImg = [];
productDescription = [];

var iter = 10;

// COLOR LIST
// List the hex codes IE #efefef,#990990, etc.
// Only list one color if necessary
// If color choice not available -> none

// SIZE LIST -> yes / no
// List sizes: Small, Medium, Large, XLarge, XXLarge
// Other options for size: List Quantities

// Product Categories:
// All-0   Apparel-1	Accessories-2	Themepark Gifts-3	Toys/Collectibles-4

/*

iter += 1; productList[iter]="productName0 | category1 | price2 | colorList3,colorList | sizeList4,sizeList";
	productImg[iter] = "imgLink";
	productDescription[iter] = "shortDescription | longerDescription";
*/

productList[0]="Mr. Teddy's Cafe Crewneck Sweatshirt | 1 | 59.99 | #2E6F40,#d6b588,#422701 | Small, Medium, Large, XLarge";
	productImg[0] = "https://i.imgur.com/RTTXXNw.jpeg";
	productDescription[0] = "Stay warm with this cozy cotton crewneck and always be reminded of your favorite furry Barista, Mr. Teddy! | Deluxe extra wash protection vynl logo with printed Mr. Teddy image for a unique and long-lasting design.";

productList[1]="Careaway Resort Crewneck Sweatshirt | 1 | 59.99 | #000080,#82c8e5 | Small, Medium, Large, XLarge, XXLarge";
	productImg[1] = "https://i.imgur.com/9LQCTqY.png";
	productDescription[1] = "The official Careaway Resort sweatshirt. Formal on the front, party on the back. | Embroidered Careaway C logo on front left section. Special extra thick heat transfered vynl logo on upper back shoulders.";

productList[2]="Sprucewood Forest Scented Candle | 3 | 19.99 | none | Standard Wick";
	productImg[2] = "https://i.imgur.com/FaR25oS.jpeg";
	productDescription[2] = "Hand-poured soy wax candle | Bring the magic of the Sprucewood Lodge home with you.";

productList[10]="Careaway Drive Novelty Road Sign | 3 | 40.00 | #0000CD | 6x30 inches";
	productImg[10] = "https://i.imgur.com/Aiac3fm.jpeg";
	productDescription[10] = "Real high-quality all-weather metal sign with reflective coating | Serving as the first 'sign' that you've arrived at the Careaway Resort. Take home that feeling of excitement upon turning onto the official Careaway Drive, you've made it!";

productList[4]="Splashport Bay Men's Swim / Board Shorts | 1 | 35.00 | #000080,#2E8B57,#FF4500 | Youth Medium,Youth Large,Adult Small,Adult Medium,Adult Large,Adult XLarge";
	productImg[4] = "https://i.imgur.com/nK3x3Mr.jpeg";
	productDescription[4] = "High-quality above-knee swim trunks (board shorts) with printed design. | Get ready to splash with these awesome board shorts. The design is printed into the material meaning it won't fade away or deterioriate, even under the wettest conditions!";

productList[5]="Careaway C Adjustable Structured Hat | 1 | 29.99 | #000000,#F0FFFF | Standard";
	productImg[5] = "https://i.imgur.com/RvYJZvQ.png";
	productDescription[5] = "Embroidered structured brim hat snap adjustable | Stay cool in the shade or hide a messy hair day with this sleek hat. The famous Careaway C is a semi-incognido method of sporting your favorite resort's merch without being too loud about it.";

productList[6]="Splashport Bay Adjustable Structured Hat | 1 | 29.99 | #000000,#F0FFFF | Standard";
	productImg[6] = "https://i.imgur.com/SGwImBn.png";
	productDescription[6] = "Embroidered structured brim hat snap adjustable | Don't let the kracken see you! Hide your face without hiding your love for Puertas Nuevas's favorite water park, oh and protect your face from the sun too or whatever.";

productList[7]="Adbenture Finder | 4 | 69.00 | #00FFFF,#9932CC,#B22222,#000000 | 9 inches, 12 inches, massive dragon 2 footer, kraken tentacle 4 footer";
	productImg[7] = "https://i.imgur.com/mo5Cfrx.jpeg";
	productDescription[7] = "Fun tool for finding your inner Adbenture | Find the sense of Adventure located deep inside of you with this unique tool. Crafted from only the best materials, this tool is all you will need for a fun and thrilling ride. BTW, Adventure was purposely spelled incorrectly to prevent this item from appearing in search results.</p>";

productList[3]="MCR WAVES Resort Mixtape Vinyl Record | 3 | 45.00 | none | none";
	productImg[3] = "https://i.imgur.com/rLxkw2F.jpeg";
	productDescription[3] = "Take the retro magic of WAVES Resort home with you on vinyl! | This exclusive WAVES: Ultimate 80s Hits record features all the iconic disco beats, synth-pop anthems, and beachy grooves that set the vibe of your unforgettable stay. From dance floor classics to smooth seaside jams, this limited-edition vinyl is the perfect way to keep the party going—long after the sun sets! <h4>Best hits include</h4><div class='halfContainer'><div><ul><li>Boogie Oogie Oogie</li><li>Shining Star</li><li>Back on 74</li></ul></div><div><ul><li>Fantasy</li><li>Night Fever</li><li>Boogie Wonderland</li></ul></div></div>And more!<p>🙅‍♂️ Record-player not included 🙅‍♂️</p>";

productList[9]="Adventure Boulevard Novelty Road Sign | 3 | 40.00 | #0000CD | 6x30 inches";
	productImg[9] = "https://i.imgur.com/ZcPJMzT.jpeg";
	productDescription[9] = "Real high-quality all-weather metal sign with reflective coating | The street named after our best-selling product: Adventure! For you, your mom -- for everyone!";

productList[8]="Globe-City Careaway C Keychain | 2 | 7.99 | none | none";
	productImg[8] = "https://i.imgur.com/6gARoUP.jpeg";
	productDescription[8] = "Jingle Jingle (that's the sound keys make i think) | Keys-- the connector between the world outside and the magic that waits behind a door. A door-- a portal to something new, an experience, a place, a being. Keychains-- a loud dangly bit that attaches to your keys to forever remind you of the magic you found behind that door. Keys not included.";

iter += 1; productList[iter]="Globe-City Careaway Resort Postcard Keychain | 2 | 9.99 | none | none";
	productImg[iter] = "https://i.imgur.com/Ijb0evL.jpeg";
	productDescription[iter] = "Postcard image printed on durability treated alluminum | Metal keychain with acrylic painted postcard image. Protected by a clear-coat layer, the image is safe from knicks and scratches. Keys not included.";

iter += 1; productList[iter]="Sipping Adventure Careaway Resort 22oz Tumbler | 2 | 31.99 | #F0FFFF,#000080 | 22oz";
	productImg[iter] = "https://i.imgur.com/NX07kDP.jpeg";
	productDescription[iter] = "Vacuum sealed insulated tumbler for hot or cold drinks | <h4>Special Offer</h4>Bring your Careaway Resort tumbler to any dining location for 5% off your drinks! <p>Stay hydrated, and caffinated, with this sleek tumbler. The single-color laser-engraved design will ensure you stay classy while recounting your favorite adventure-filled memories.</p>";

iter += 1; productList[iter]="Careaway Resort Interior Logistics Medium Box Truck | 4 | 35420.69 | #FFFFFF | 26' length by 13' height";
	productImg[iter] = "https://i.imgur.com/Sx2gJmo.jpeg";
	productDescription[iter] = "Get around town in style. Little Reuven not included. | How do we stock our stores? Who ensures that your favorite restaurants have the food they need to serve you? The Globe-City Resort Interior Logistics Team! From the minute the park closes to the second it opens, our IL team is bouncing around the resort stocking shelves and delivering goods. Its like our very own in-house delivery service.<p>This is not a toy!</p>";

iter += 1; productList[iter]="Mr. Teddy's Coffee Corner 16 oz. Grande Coffee Cup | 2 | 9.99 | #104943,#014b78,#adadad | 16oz";
	productImg[iter] = "https://i.imgur.com/6lgSUTl.jpeg";
	productDescription[iter] = "Double-walled reusable coffee cup for hot or iced drinks | <h4>✨ Special Offer Available ✨</h4> Drink in style, and save the planet! This adorable Mr. Teddys coffee cup features natural tones and earthy specks, a stylish result of the reclaimed wheat stalk material that makes up 51% of this cup. The matching twist-on lid helps prevent spills and keeps beverages at temperature longer.";

iter += 1; productList[iter]="Adventure Redefined - Port of Adventure Carheart Midweight Pullover Hoodie | 1 | 65.50 | #000080,#000000 | Youth Large, Small, Medium, Large, XLarge, XXLarge";
	productImg[iter] = "https://i.imgur.com/NFd31iG.jpeg";
	productDescription[iter] = "Unisex premium pullover hooded sweatshirt | From the opening day merch sale for <a href='../destinations/port-of-adventure'>Globe-City's Port of Adventure</a> park. Heat-transfer vynl print with extra-wash protection for long lasting design. Carheart branded hoodie with premium design and comfort.";

iter += 1; productList[iter]="Seek Adventure - LuLuLemon Fabric Keychain | 2 | 22.00 | #000000,#2F4F4F,#FF69B4 | One Size";
	productImg[iter] = "https://i.imgur.com/GnA5ECu.jpeg";
	productDescription[iter] = "Keep your keys close at hand by clipping them to your favourite bag | For those who chronically lose their keys, never suffer again with this massive fabric strap that can probably be seen from space (unconfirmed measure). And of course, always remember to seek adventure!";

iter += 1; productList[iter]="Seek Adventure - LuLuLemon Clippable Nano Pouch | 2 | 29.99 | #000000,#6B8E23 | One Size";
	productImg[iter] = "https://i.imgur.com/QdLHTqH.jpeg";
	productDescription[iter] = "Card holder pouch with embroidered design | Small bag, big goals. Store your cards, hand sanitizer, or your favourite lip balm in this nano pouch. Complete with an exterior card holder, zippered main compartment, and 100% polyester waterproof material.";

iter += 1; productList[iter]='Seek Adventure - LuLuLemon Zeroed In Linerless Short 7" | 1 | 68.00 | #232124,#b4b4b4 | XSmall,Small,Medium,Large,XLarge';
	productImg[iter] = "https://i.imgur.com/dUffV8L.jpeg";
	productDescription[iter] = "Low profile high-performance 100% synthetic shorts | Some adventures are far away. When things are far away, some may be inclined to <em>run</em> to them. Be prepared for it all with these sexy LuLuLemon brand casual shorts made from breathable and lightweight materials. Even better, there's a knuckle-size pocket for your msot prized jewels.";

iter += 1; productList[iter]="Seek Adventure - LuLuLemon Steady State Pullover Hoodie | 1 | 89.00 | #24312a,#334463,#512028 | XSmall,Small,Medium,Large,XLarge";
	productImg[iter] = "https://i.imgur.com/TnWQZFP.jpeg";
	productDescription[iter] = "Inkprinted premium fleece pullover hoodie | Enjoy deluxe comfort in this fleece slim-fit pullover chunk of fabric. With the LuLuLemon stamp of luxury, this hoodie is for those rich folks looking for some adventure.";

iter += 1; productList[iter]="Seek Adventure - LuLuLemon Back to Life Sport Bottle 24oz | 2 | 45.00 | #2f3b35,#252525,#252525 | 24oz";
	productImg[iter] = "https://i.imgur.com/eFiSqLz.jpeg";
	productDescription[iter] = "Insulated waterbottle with twist-on lid | For all y'all thirsty hos. This insulated water bottle features a leak-proof lid and slip-free texture, so no matter how adventurous the adventure gets, your drink is safe.";

iter += 1; productList[iter]="Seek Adventure - LuLuLemon ABC Classic-Fit Men's Casual Pants | 1 | 130 | #000000,#394458,#a0b698 | 28,29,30,31,32,34,38,40";
	productImg[iter] = "https://i.imgur.com/oUNBlCT.jpeg";
	productDescription[iter] = "Deluxe men's casual pants with stretchy, wrinkle-resistant fabric | Take great strides towards looking fabulous with these comfortable, breathable, but casual men's pants. It's like going commando but without the wierd looks from grandma-- what, never seen a buldge before g'ma?";

iter += 1; productList[iter]="Port of Adventure Est. 2027 Adult Spirit Jersey® | 1 | 75.00 | #000000,#00BFFF | XSmall,Small,Medium,Large,XLarge";
	productImg[iter] = "https://i.imgur.com/Oh2Q8WK.jpeg";
	productDescription[iter] = "Heavyweight cotton jersey with screen-printed artwork and puff paint details | Show your love for the Port of Adventure with this Classic-style Spirit Jersey®. Timeless, bold, and iconic, it’s perfect for representing the heart of all things fun and thrilling. This is an official Spirit Jersey® featuring the trademarked garment design: Dropped shoulders, long cuffed sleeves, banded neckline, and a curved hem. Flag label at side.";

iter += 1; productList[iter]="Careaway Resort Est. 2025 Adult Spirit Jersey® | 1 | 75.00 | #000000,#00BFFF | XSmall,Small,Medium,Large,XLarge";
	productImg[iter] = "https://i.imgur.com/anQm5v3.jpeg";
	productDescription[iter] = "Heavyweight cotton jersey with screen-printed artwork and puff paint details | Show your love for the Careaway Resort with this Classic-style Spirit Jersey®. Timeless, bold, and iconic, it’s perfect for representing the heart of all things fun and thrilling. This is an official Spirit Jersey® featuring the trademarked garment design: Dropped shoulders, long cuffed sleeves, banded neckline, and a curved hem. Flag label at side.";

iter += 1; productList[iter]="Port of Adventure Est. 2027 Children's Spirit Jersey® | 1 | 58.00 | #00BFFF,#000000 | Youth Small, Youth Medium, Youth Large";
	productImg[iter] = "https://i.imgur.com/BaCWvG5.jpeg";
	productDescription[iter] = "Heavyweight cotton jersey with screen-printed artwork and puff paint details | Show your love for the Port of Adventure with this Classic-style Spirit Jersey®. Timeless, bold, and iconic, it’s perfect for representing the heart of all things fun and thrilling. This is an official Spirit Jersey® featuring the trademarked garment design: Dropped shoulders, long cuffed sleeves, banded neckline, and a curved hem. Flag label at side.";

iter += 1; productList[iter]="Careaway Resort Est. 2025 Children's Spirit Jersey® | 1 | 58.00 | #00BFFF,#000000 | Youth Small, Youth Medium, Youth Large";
	productImg[iter] = "https://i.imgur.com/C1VBnkZ.jpeg";
	productDescription[iter] = "Heavyweight cotton jersey with screen-printed artwork and puff paint details | Show your love for the Careaway Resort with this Classic-style Spirit Jersey®. Timeless, bold, and iconic, it’s perfect for representing the heart of all things fun and thrilling. This is an official Spirit Jersey® featuring the trademarked garment design: Dropped shoulders, long cuffed sleeves, banded neckline, and a curved hem. Flag label at side.";

iter += 1; productList[iter]="Careaway Resort Pride Women's T-shirt | 1 | 25.99 | #FFFFFF,#000000,#00BFFF | XSmall,Small,Medium,Large,XLarge";
	productImg[iter] = "https://i.imgur.com/ByRoZz7.jpeg";
	productDescription[iter] = "100% cotton comfort-fit t-shirt with rainbow vinyl logo | For the girls who like girls or the girls supporting girls who like girls. A beautifully simple yet bold statement on pride and the love of love!";

iter += 1; productList[iter]="Careaway Resort Pride Gymshark Cropped Hoodie | 1 | 32.00 | #FFFFFF,#000000,#00BFFF | XSmall,Small,Medium,Large";
	productImg[iter] = "https://i.imgur.com/YDZzeX6.jpeg";
	productDescription[iter] = "Cosy, soft brushed back fleece interior hoodie with adjustable drawcord hood | For the girls and the gays, show your pride-- and your bellybutton-- to the world!";


iter += 1; productList[iter]="Careaway Resort Pride Men's Cotton T-shirt | 1 | 25.99 | #FFFFFF,#000000 | XSmall,Small,Medium,Large,XLarge";
	productImg[iter] = "https://i.imgur.com/ZEmLc5K.jpeg";
	productDescription[iter] = "Every Wear Short Sleeve T-Shirt, Lightweight cotton-blend fabric provides all-day comfort | For the guys and the gays!";
