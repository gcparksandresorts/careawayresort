eventData = [];
eventlistArray = []; eventSiteLink = "https://gcparksandresorts.github.io/careawayresort/things-to-do/events/"; const blogLink = "https://gcparksandresorts.github.io/careawayresort/information/blog/post?n=";

eventLocationList = ['View All', 'Resort Wide Event', 'Careaway Park', 'Port of Adventure','Splashport Bay',"Shops&More District",'Sprucewood Lodge','World of Wonder Hotel','MCR Waves Resort']
                    //   0              1                   2                   3               4                       5                   6                   7               8

eventAdmissionList = ["Admission not required", "Included with park admission", "Seperate admission required"];
//                      0                           1                                   2

eventCategories = ["View All", 'Seasonal Event', 'Celebration', 'After-Dark Event', 'Limited Time Special', 'Family Fun Activity' ];
//                  0                1               2               3                        4                   5

eventSeasons = ['View All', 'Fall', 'Winter', 'Spring', 'Summer'];
//                   0          1        2       3          4

var iter = -1;


// CAREAWAY HOLIDAYS
iter+=1; eventlistArray[iter] = "holidays | Careaway Holidays | Seasonal Event | 0 | things-to-do/events/careaway-holidays | yes/description5 | 0 | eventImg6";
iter+=1; eventlistArray[iter] = "tgfeast | Annual DeBasc Family Thanksgiving Feast | 5:00 PM - 9:00 PM | 5 | things-to-do/events/debasc-family-feast | yes/description5 | 2 | eventImg6";
iter+=1; eventlistArray[iter] = "pFtL | Painter Family Tree Lighting Ceramony | 6:00 PM - 8:00 PM | 1 | information/blog/painter-tree-lighting | yes/description5 | 1 | eventImg6";



// SPRING SEASON
iter+=1; eventlistArray[iter] = "sprngBrk | Spring Break | Seasonal Event | 0 | clickLink4 | yes/description5 | 0 | imgLink7";



// SUMMER SEASON
iter+=1; eventlistArray[iter] = "stars | Stars & Splashes at Splashport Bay | eventHours2 | 3 | clickLink4 | yes/description5 | admission6 | eventImg7";
iter+=1; eventlistArray[iter] = "wos | Waves of Summer | 6:00 PM - 9:00 PM | 7 | clickLink4 | yes/Enjoy the summer evenings under the stars at the lawn of the MCR WAVES Resort. Stop by for chill 80s summer night jams, refreshing beverages and cocktails, savory snacks, and an ambient-lit dance floor | 0 | eventImg7";
iter+=1; eventlistArray[iter] = "eventCode0 | eventName1 | eventHours2 | eventLocation3 | clickLink4 | yes/description5 | admission6 | eventImg7";


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
    extraImg: "img1 | img2" // delete if no extra images (must have at least 2)
}

EXTERNAL LINKED PAGE (like Scareaway Screams)

iter+=1; eventData[iter] = {
    name: "eventName", codeName: "codeName", titleFont: "titleFont",
    externalLink: eventSiteLink+"external_link", displayType: "smallORbigORnone",
    info: "category | parkIndex1 | admissionType | season3",
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
    extraImg: "https://i0.wp.com/accidentaltravelwriter.com/wp-content/uploads/2020/10/HKDL_Halloween_Art-Craft_02.jpg?ssl=1 | https://ziggyknowsdisney.com/wp-content/uploads/2019/12/disney-villains-after-hours-ursula.jpg | https://www.disneyfoodblog.com/wp-content/uploads/2021/09/Disneyland-Halloween-Food-Treats-2021-06-700x467.jpg" // delete if no extra images
}

iter+=1; eventData[iter] = {
    name: "Mr. Teddy's Hoot'n Halloween", codeName: "tedHal", font: "titleFont",
    clickLink: "teddys-halloween", displayType: "small", //leave clickLink as-is for no link
    info: "5 | 2 | 1 | 1",
    tags: "teddy,mr,kid,child,trick,treat,candy,trick-or-treat",
    eventHours: "6:00 PM - 10:00 PM", bannerImg: "banner_img",
    synopsis: "Join Mr. Teddy and his fun friends on a trick-or-treat extravaganza through Careaway Park! Will it be treats, or tricks?",
    pageIntro: "pageIntro",
    longDescription: "longDescription",
    extraImg: "img1 | img2" // delete if no extra images
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



// SUMMER SEASON - SUMMERFEST, 4TH OF JULY, ETC ------------------------------------------------------------------------------------------------------------

iter+=1; eventData[iter] = {
    name: "Summer Adventures at the Careaway Resort", codeName: "sAdv", titleFont: "titleFont",
    externalLink: eventSiteLink+"summer-adventures", displayType: "big",
    info: "1 | 1 | 1 | 4",
    tags: "tag1,tag2,tag3",
    eventHours: "Seasonal Event", bannerImg: "https://i.imgur.com/UG5uOpW.jpeg",
    synopsis: "This Summer, let fun and adventure soar with dozens of activities and more to fill the sunny days and cozy nights. One weekend just isn't enough!"
}



// WINTER SEASON - HOLIDAYS ------------------------------------------------------------------------------------------------------------------------------





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