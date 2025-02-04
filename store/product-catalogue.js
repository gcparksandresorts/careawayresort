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

productList[7]="Sipping Adventure Careaway Resort 22oz Tumbler | 2 | 31.99 | #F0FFFF,#000080 | 22oz";
	productImg[7] = "https://i.imgur.com/NX07kDP.jpeg";
	productDescription[7] = "Vacuum sealed insulated tumbler for hot or cold drinks | <h4>Special Offer</h4>Bring your Careaway Resort tumbler to any dining location for 5% off your drinks! <p>Stay hydrated, and caffinated, with this sleek tumbler. The single-color laser-engraved design will ensure you stay classy while recounting your favorite adventure-filled memories.</p>";

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
