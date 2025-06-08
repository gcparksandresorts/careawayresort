eventData = [];
eventSiteLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/events/"; const blogLink = "https://gcparksandresorts.github.io/careawayresort/information/blog/post?n=";

eventLocationList = ['View All', 'Resort Wide Event', 'Careaway Park', 'Port of Adventure','Splashport Bay',"Shops&More District",'Sprucewood Lodge','World of Wonder Hotel','MCR Waves Resort']
                    //   0              1                   2                   3               4                       5                   6                   7               8

eventAdmissionList = ["Admission not required", "Included with park admission", "Seperate admission required"];
//                      0                           1                                   2

eventCategories = ["View All", 'Seasonal Event', 'Celebration', 'After-Dark Event', 'Limited Time Special', 'Family Fun Activity', 'Organized Meal' ];
//                  0                1               2               3                        4                   5                     6

eventSeasons = ['View All', 'Fall', 'Winter', 'Spring', 'Summer'];
//                   0          1        2       3          4

var iter = -1;

/*
AUTO FILL EVENT PAGE

iter+=1; eventData[iter] = {
    name: "eventName", codeName: "codeName", font: "titleFont",
    clickLink: "click_link", displayType: "smallORbigORnone", //leave clickLink as-is for no link
    info: "category | parkIndex1 | admissionType2 | season3",
    tags: "tag1,tag2,tag3",
    eventHours: "eventHours", bannerImg: "banner_img",
    synopsis: "synopsis",
    pageIntro: "pageIntro",
    longDescription: "longDescription",
    extraImg: "img1 | descriptionORnone || img2 | descriptionORnone" // delete if no extra images (must have at least 2)
}

EXTERNAL LINKED PAGE (like Scareaway Screams)

iter+=1; eventData[iter] = {
    name: "eventName", codeName: "codeName", titleFont: "titleFont",
    externalLink: eventSiteLink+"external_link", // or use blogLink for blog post
    info: "category | parkIndex1 | admissionType | season3", displayType: "smallORbigORnone",
    tags: "tag1,tag2,tag3",
    eventHours: "eventHours", bannerImg: "banner_img",
    synopsis: "synopsis"
}

*/iter=-1;

// FALL SEASON - HALLOWEEN ---------------------------------------------------------------------------------------------------------------------------------
iter+=1; eventData[iter] = {
    name: "Globe-City's Scareaway Screams", codeName: "scream", titleFont: "titleFont",
    externalLink: eventSiteLink+"scareaway-screams", displayType: "big",
    info: "3 | 3 | 2 | 1",
    tags: "halloween,scary,nighttime,after,dark,loud,spooky,october,november,ghost,monster,monsters,mazes",
    eventHours: "7:00 PM - 12:00 AM", bannerImg: "https://i.imgur.com/HpxBlFl.jpeg",
    synopsis: "Puertas Nuevas' largest Halloween event featuring terrifying mazes, scare-zones, and entertainment"
}

iter+=1; eventData[iter] = {
    name: "Halloween at the Careaway Resort", codeName: "hal", font: "titleFont",
    clickLink: "halloween", displayType: "small", //leave clickLink as-is for no link
    info: "1 | 1 | 0 | 1",
    tags: "spooky,october,november,fall,pumpkin",
    eventHours: "Seasonal Event", bannerImg: "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/banners/halloween02.png",
    synopsis: "Delight in colorful decorations throughout the resort, seasonal food offerings, and new entertainment. It's super spooky fun!",
    pageIntro: "This Halloween, delight in colorful decorations throughout the resort, seasonal food offerings, and new entertainment. It's super spooky fun!",
    longDescription: "longDescription",
    extraImg: "https://i0.wp.com/accidentaltravelwriter.com/wp-content/uploads/2020/10/HKDL_Halloween_Art-Craft_02.jpg?ssl=1 | Many activities, including Arts & Crafts for the whole family! || https://ziggyknowsdisney.com/wp-content/uploads/2019/12/disney-villains-after-hours-ursula.jpg | Meet villanous new characters emerging from the shadows || https://www.disneyfoodblog.com/wp-content/uploads/2021/09/Disneyland-Halloween-Food-Treats-2021-06-700x467.jpg | And of course, delight in new sweats and treats!" // delete if no extra images
}

iter+=1; eventData[iter] = {
    name: "Mr. Teddy's Hoot'n Halloween", codeName: "tedHal", font: "titleFont",
    clickLink: "teddys-halloween", displayType: "small", //leave clickLink as-is for no link
    info: "5 | 2 | 1 | 1",
    tags: "teddy,mr,kid,child,trick,treat,candy,trick-or-treat",
    eventHours: "6:00 PM - 10:00 PM", bannerImg: "https://i.imgur.com/DZC0tXN.png",
    synopsis: "Join Mr. Teddy and his fun friends on a trick-or-treat extravaganza through Careaway Park! Will it be treats, or tricks?",
    pageIntro: "pageIntro",
    longDescription: "longDescription"
    //extraImg: "img1 | img2" // delete if no extra images
}



// SPRING SEASON - SPRING BREAK, ETC ------------------------------------------------------------------------------------------------------------

iter+=1; eventData[iter] = {
    name: "Space Day", codeName: "spDy", titleFont: "Audiowide",
    externalLink: blogLink+"space-day", displayType: "small",
    info: "5 | 2 | 1 | 3",
    tags: "space,fun,star,wars,starwars,may,4,fourth,force,alien,interspace",
    eventHours: "11:00 AM - Closing", bannerImg: "https://i.imgur.com/HCfptzU.png",
    synopsis: "At Galaxy Center, May 4th is Space Day! Come and join the celebration as friendly creatures and galactic comodities visit, then come and party the night away once the moons rise."
}

iter+=1; eventData[iter] = {
    name: "Port Electricity", codeName: "portElectric", titleFont: "titleFont",
    externalLink: eventSiteLink+"port-electricity", // or use blogLink for blog post
    info: "3 | 3 | 2 | 3", displayType: "small",
    tags: "rave,dj,dance,party,wonder,studios,after,dark",
    eventHours: "7:00 PM to 1:00 AM", bannerImg: "https://i.imgur.com/6J54GQS.png",
    synopsis: "A unique event in which half of Port of Adventure is transformed into an electric dance festival"
}



// SUMMER SEASON - SUMMERFEST, 4TH OF JULY, ETC ------------------------------------------------------------------------------------------------------------

iter+=1; eventData[iter] = {
    name: "Summer Adventures at the Careaway Resort", codeName: "sAdv", titleFont: "titleFont",
    externalLink: eventSiteLink+"summer-adventures", displayType: "big",
    info: "1 | 1 | 1 | 4",
    tags: "tag1,tag2,tag3",
    eventHours: "Seasonal Event", bannerImg: "https://i.imgur.com/UG5uOpW.jpeg",
    synopsis: "This Summer, let fun and adventure soar with dozens of activities and more to fill the sunny days and cozy nights. One weekend just isn't enough!"
}

iter+=1; eventData[iter] = {
    name: "Stars & Splashes at Splashport Bay", codeName: "StrSpl", font: "titleFont",
    clickLink: "stars-and-splashes", displayType: "small", //leave clickLink as-is for no link
    info: "3 | 4 | 2 | 4",
    tags: "tag1,tag2,tag3",
    eventHours: "6:00 PM - 10:00 PM", bannerImg: "https://cpfoodblog.com/wp-content/uploads/2019/06/2019-Knotts-Summer-Nights-Smores.jpg",
    synopsis: "Swim under the stars in heated pools, roast marshmallows around campfires, and more!",
    pageIntro: "pageIntro",
    longDescription: "<h3>Tickets & Upgrades</h3>If you already have admission to Splashport Bay (including a valid annual passport) on the day of this event, then you can purchase access to this event for $10 per person (subject to availability). <p>Otherwise, tickets to this event are priced at <ul><li><b>$20 per adult (12+)</b></li><li><b>$10 per child</b></li></ul>"
}

iter+=1; eventData[iter] = {
    name: "Waves of Summer", codeName: "wveSum", font: "titleFont",
    clickLink: "waves-of-summer", displayType: "small", //leave clickLink as-is for no link
    info: "3 | 8 | 0 | 4",
    tags: "tag1,tag2,tag3",
    eventHours: "7:00 PM - 9:00 PM", bannerImg: "banner_img",
    synopsis: "A free evening dance party at the MCR Waves Resort. Featuring an electric dance-floor, DJs, free food, and more!",
    pageIntro: "pageIntro",
    longDescription: "longDescription",
    extraImg: "img1 | descriptionORnone || img2 | descriptionORnone" // delete if no extra images (must have at least 2)
}

iter+=1; eventData[iter] = {
    name: "Adventurous Nights of Pride", codeName: "nop", titleFont: "titleFont",
    externalLink: eventSiteLink+"adventurous-nights-of-pride", // or use blogLink for blog post
    info: "3 | 3 | 2 | 4", displayType: "small",
    tags: "gay,rainbow,june,party",
    eventHours: "7:00 PM - 12:00 AM", bannerImg: "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/nop.jpg",
    synopsis: "Celebrate your beautiful colors at this after dark event full of fun, dancing, drinks, drag, and rainbows!"
}

iter+=1; eventData[iter] = {
    name: "Pride Month", codeName: "pM", titleFont: "titleFont",
    externalLink: blogLink+"pride-month", // or use blogLink for blog post
    info: "1 | 1 | 1 | 4", displayType: "none",
    tags: "june,gay,proud,rainbow",
    eventHours: "Seasonal Event", bannerImg: "https://i.imgur.com/3PvobC9.png",
    synopsis: "synopsis"
}



// WINTER SEASON - HOLIDAYS ------------------------------------------------------------------------------------------------------------------------------

iter+=1; eventData[iter] = {
    name: "Careaway Holidays", codeName: "cHol", titleFont: "titleFont",
    externalLink: eventSiteLink+"careaway-holidays", displayType: "big",
    info: "1 | 1 | 0 | 2",
    tags: "holiday,christmas,celebration,season,light",
    eventHours: "Seasonal Event", bannerImg: "https://decider.com/wp-content/uploads/2022/12/disney-christmas-day-parade-1.jpg?quality=75&strip=all",
    synopsis: "Celebrate the magic of the holiday season as the Careaway Resort explodes with light and cheer. Festive activities, decor, and more!"
}

iter+=1; eventData[iter] = {
    name: "DeBasc Family Thanksgiving Feast", codeName: "thxGiv", font: "titleFont",
    clickLink: "thanksgiving-feast", displayType: "small", //leave clickLink as-is for no link
    info: "6 | 6 | 2 | 2",
    tags: "thanks,giving,dinner,turkey,holiday",
    eventHours: "6:00 PM - 9:00 PM", bannerImg: "https://www.getawaytoday.com/content/blog/images/DisneylandHotels/DisneylandHotelThanksgivingCDisneyBlog.jpg",
    synopsis: "Leave the cooking to us this Thanksgiving. Delight in a multi-course meal complete with live music, entertainment, and fun activities!",
    pageIntro: "This Thanksgiving, leave the cooking to us and the fun to you and your family! Join us at the Sprucewood Lodge for a multi-course dinner and dessert, plus plenty of fun activities to keep the kids occupied while the parents sip on yummy drinks.",
    longDescription: "Other than a three-course meal including dessert, there's also fun activities:<ul><li>Find the hidden Turkey's</li><li>Write thank you notes</li><li>Do the Gobble-Dance</li><li>Make your own hand-turkey</li><li>Free photo booth</li></ul>",
}

iter+=1; eventData[iter] = {
    name: "Painter Family Tree Lighting Ceramony", codeName: "PFTL", font: "titleFont",
    clickLink: "tree-lighting", displayType: "small", //leave clickLink as-is for no link
    info: "2 | 2 | 1 | 2",
    tags: "christmas,light,holiday,season,holidays",
    eventHours: "Begins at 8:00 PM", bannerImg: "https://i0.wp.com/thedisneyblog.com/wp-content/uploads/2022/11/hongkongdisney-xmas-concert3.jpg?resize=800%2C450&ssl=1",
    synopsis: "A festive Welcome to the holiday season. Live entertainment, fireworks, a gorgeous christmas tree, and more!",
    pageIntro: "pageIntro",
    longDescription: "longDescription"
}



// MISCELANEOUS (Birthdays, etc) ------------------------------------------------------------------------------------------------------------------------------

iter+=1; eventData[iter] = {
    name: "Leora's Birthday Celebration", codeName: "momBday", titleFont: "titleFont",
    externalLink: blogLink+"april-birthdays", displayType: "none",
    info: "2 | 2 | 1 | 3",
    tags: "birth,day,leora,party",
    eventHours: "12:00 PM - 5:00 PM", bannerImg: "https://i.imgur.com/rDQnaiQ.jpeg",
    synopsis: "synopsis"
}

iter+=1; eventData[iter] = {
    name: "Andrew's Birthday Celebration", codeName: "anBday", titleFont: "titleFont",
    externalLink: blogLink+"april-birthdays", displayType: "none",
    info: "2 | 2 | 1 | 3",
    tags: "birth,day,andrew,party,pookie",
    eventHours: "12:00 PM - 5:00 PM", bannerImg: "https://i.imgur.com/rDQnaiQ.jpeg",
    synopsis: "synopsis"
}

iter+=1; eventData[iter] = {
    name: "Founder's Day", codeName: "roovBday", titleFont: "titleFont",
    clickLink: "founders-day", displayType: "small",
    info: "2 | 2 | 1 | 3",
    tags: "birth,reuven,party,founder,founders",
    eventHours: "12:00 PM - 4:00 PM", bannerImg: "https://i.imgur.com/pa18xQe.jpeg",
    synopsis: "Come celebrate the birthday of Globe-City's Founder, the man responsible for the magic!",
    pageIntro: "Come celebrate the birthday of our founder, Reuven Reyman! Join in on the fun featuring yummy snacks, live music, festive decorations, and more!",
    longDescription: "Our magnificent omnipotent Founder, Reuven Sexy Reyman, is the man - the myth - the legend responsible for bringing the world Globe-City Entertainment. His vision and ingenuity lead to the birth of some of Minecraftia's most popular attractions.",
}

iter+=1; eventData[iter] = {
    name: "Grad Night", codeName: "grad", font: "titleFont",
    clickLink: "grad-night", displayType: "none", //leave clickLink as-is for no link
    info: "2 | 3 | 2 | 4",
    tags: "graduation,school",
    eventHours: "7:00 PM - 12:00 AM", bannerImg: "https://www.disneycampus.com/content/dam/dse-ic/blog/grad-nite-returns-to-disneyland-2025/Image3.png",
    synopsis: "An annual celebration for all the graduating high school seniors of Puertas Nuevas and neighboring territories",
    pageIntro: "<b>Celebrate Your Big Night with an Even Bigger Adventure!</b><p>Get ready, grads-Port of Adventure is throwing the ultimate graduation celebration just for you! As the sun sets, the park lights up for an exclusive after-hours event filled with thrills, music, and memories to last a lifetime.</p>",
    longDescription: "<p>🗓️ Date: Check with your school admin!</p><p>🕘 Time: 7:00 PM - 12:00 AM</p><p>🎟️ Who's Invited: High school seniors + chaperones</p><p>📍 Location: Globe-City's Port of Adventure in Oceanfield, Puertas Nuevas!</p><h2>Your Night Includes</h2><ul>\
    <li>🌟 Unlimited Access to Rides & Attractions - From heart-pounding rollercoasters to magical boat rides, the entire park is yours to explore.</li>\
    <li>🎧 Live DJ Dance Zones – Party all night in multiple music zones across the park.</li>   <li>🍕 Late-Night Eats – Special Grad Nite menus and exclusive treats!</li>    <li>📸 Photo Ops & Giveaways – Snap memories with your crew and take home free Grad Nite swag.</li>    <li>🎆 Epic Funtastic Finale – End the night with a dazzling water show celebrating YOU.</li></ul>"
}