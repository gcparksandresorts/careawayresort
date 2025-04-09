eventlistArray = []; eventSiteLink = "https://gcparksandresorts.github.io/careawayresort/";

eventLocationList = ['Resort Wide Event', 'Careaway Park', 'Port of Adventure','Splashport Bay',"Shops&More District",'Sprucewood Lodge','World of Wonder Hotel','MCR Waves Resort']
                    //   0                      1               2                   3               4                       5                   6                   7

eventAdmissionList = ["Admission not required", "Included with park admission", "Seperate admission required"];

/*
iter+=1; eventlistArray[iter] = "eventCode0 | eventName1 | eventHours2 | eventLocation3 | clickLink4 | show/description5 | admission6 | eventImg7";
*/

// clickLink -> put 'none' of no link
// show-description5 -> "show" = yes/no -> whether or not this event displays on the events page (put no for special events that get their own section like scareaway screams)

var iter = -1;

// HALLOWEEN SEASON
iter+=1; eventlistArray[iter] = "halloween | Halloween at the Careaway Resort | Seasonal Event | 0 | clickLink4 | yes/Delight in colorful decorations throughout the resort, seasonal food offerings, and new entertainment. It's super spooky fun! | 0 | eventImg7";
iter+=1; eventlistArray[iter] = "scream | Scareaway Screams | 7:00 PM - 12:00 AM | 2 | things-to-do/events/scareaway-screams | no/description5 | 2 | https://i.imgur.com/HpxBlFl.jpeg";
iter+=1; eventlistArray[iter] = "tedHal | Mr. Teddy's Hoot'n Halloween | 6:00 PM - 10:00 PM | 1 | things-to-do/events/hootn-halloween | yes/Join Mr. Teddy and his fun friends on a trick-or-treat extravaganza through Careaway Park! Will it be treats, or tricks? | 1 | eventImg6";



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



// BIRFDAY CELEBRATIONS
iter+=1; eventlistArray[iter] = "andrewBday | Pookie's Birthday Celebration | 12:00 PM - 5:00 PM | 1 | information/blog/blog-post?index=8 | no/description5 | 1 | https://i.imgur.com/rDQnaiQ.jpeg";
iter+=1; eventlistArray[iter] = "mommyBday | Mommy's Birthday Celebration! | 12:00 PM - 5:00 PM | 1 | information/blog/blog-post?index=8 | yes/description5 | 1 | https://i.imgur.com/rDQnaiQ.jpeg";
iter+=1; eventlistArray[iter] = "roovBday | Founder's Day - Reuven's Birthday! | eventHours2 | 1 | clickLink4 | yes/description5 | 1 | eventImg7";


