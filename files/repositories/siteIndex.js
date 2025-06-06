websiteIndex = [];
/*

WEBSITE INDEX - used for webpage search results
-> Used local links: information/accessibility
-> For external links: [external] https://website.com/page
-> you do not need to index events, attractions, and dining that are found 
   in the automated lists. These are searched automatically

iter+=1; websiteIndex[iter] = {title: "pageTitle", 
    description: "pageDescription", 
    tagsList: "tag1,tag2,tag3",
    link: "pageLink"
    };

*/

var iter = -1;

iter+=1; websiteIndex[iter] = {title: "Globe-City's Careaway Park", 
    description: "Explore the original theme park property of the Careaway Resort featuring family friendly fun and thrilling rides", 
    tagsList: "themepark,rides,destination,destinations,parks",
    link: "destinations/careaway-park"
    };

iter+=1; websiteIndex[iter] = {title: "Globe-City's Port of Adventure", 
    description: "Discover four magical and wonderful lands full of heartpounding rides and immersive entertainment", 
    tagsList: "themepark,rides,destination,park,parks",
    link: "destinations/port-of-adventure"
    };

iter+=1; websiteIndex[iter] = {title: "Globe-City's Splashport Bay", 
    description: "Find your fun at Puertas Nuevas's most attended and most immersive water park!", 
    tagsList: "waterpark,pool,summer",
    link: "destinations/splashport-bay"
    };

iter+=1; websiteIndex[iter] = {title: "Shops & More District", 
    description: "Stroll a mile of shops, restaurants, and more! The shops district is the ultimate vacation getaway for shopping and dining fun", 
    tagsList: "store,free,mall,shop,eat,food,merchandise,merch",
    link: "destinations/shops-and-more-district"
    };

iter+=1; websiteIndex[iter] = {title: "Resort Monthly Calendar", 
    description: "View information about operating hours, ticket pricing, annual passport validity, events, and entertainment on a large scale", 
    tagsList: "tier,ticketing,schedule,blackout,dates",
    link: "information/resort-calendar"
    };

iter+=1; websiteIndex[iter] = {title: "Accessibility and Guests with Allergies", 
    description: "Information on accomodations for guests with disabilities and food allergies", 
    tagsList: "mda,blind,hearing,ramp,wheelchair,allergy,allergens,severe,food,service,animal,support,accessible,ada,disabled,handicap,aid",
    link: "information/accessibility"
    };

iter+=1; websiteIndex[iter] = {title: "Wheelchair / Stroller Rentals and Lockers", 
    description: "Information about renting wheelchairs, strollers, and daily lockers for storing personal belongings in the parks", 
    tagsList: "wheelchairs,strollers,lockers,rentals,rental,locker,rent,renting,stuff,storage,store,parcel,bag,belongings,personal",
    link: "information/services/rentals"
    };

iter+=1; websiteIndex[iter] = {title: "Restaurants and Dining", 
    description: "Explore places to eat at the Careaway Resort", 
    tagsList: "food,restaurant",
    link: "things-to-do/dining"
    };

iter+=1; websiteIndex[iter] = {title: "Order Theme Park Tickets", 
    description: "Order tickets to Globe-City's Careaway Park, Port of Adventure, or Splashport Bay", 
    tagsList: "ticket,themepark,theme-park,admission,park,entry,webstore,store",
    link: "tickets"
    };

iter+=1; websiteIndex[iter] = {title: "Annual Passports",
    description: "Explore annual passports to Globe-City's Careaway Park and Port of Adventure, or Splashport Bay",
    tagsList: "annual,pass,passport,annual-pass,webstore,store,tickets,admission,year",
    link: "tickets/annual-passports"
    };

iter+=1; websiteIndex[iter] = {title: "Seasonal Events and Celebrations", 
    description: "Information about seasonal events and celebrations at the Careaway Resort happening throughout the year", 
    tagsList: "event,season,celebration,party,pride,holiday,celebrate,halloween,scary,scareaway,spooky,food,special,specials,holidays",
    link: "things-to-do/events"
    };

iter+=1; websiteIndex[iter] = {title: "Rides & Attractions", 
    description: "View information on the amazing rides and attractions at the resort from thrilling rollercoasters with sky-high adrenaline to immersive dark rides transporting you to mystical realms", 
    tagsList: "ride,fun,attraction,thrill,adventure,rollercoaster,dark,darkride,immersive,interactive,experience,experiences,things,to,do,things-to-do,amusement,park,theme,themed,transport",
    link: "things-to-do/attractions"
    };

iter+=1; websiteIndex[iter] = {title: "GCVIP Admission", 
    description: "Information about deluxe admission including exclusive access to priority queuing, indoor lounges, and other perks", 
    tagsList: "vip,tickets,ticket,park,themepark,admission,gc-vip,priority,queuing,queue,fast,fastpass,fast-pass,line,skip,skip-the-line",
    link: "tickets/gc-vip"
    };

iter+=1; websiteIndex[iter] = {title: "Places to Stay / Hotels", 
    description: "Information about hotels and lodging at the Careaway Resort including The Sprucewood Lodge, the RW, World of Wonder, MCR WAVES Resort, and MCR Port of Palms resort", 
    tagsList: "hotel,bed,accomodations,resort,stay,lodging,rooms,room,stay,overnight,overnight-stay,check,check-in,check-out",
    link: "hotels/home"
    };

iter+=1; websiteIndex[iter] = {title: "Safety Guidelines", 
    description: "Rules and information about safety and security at the resort including ride safety, park rules, and security", 
    tagsList: "safe,rule,information,info,severe,weather,regulation,legal,rides",
    link: "information/safety-guidelines"
    };

iter+=1; websiteIndex[iter] = {title: "Corporate Partners", 
    description: "Learn about our sponsors and the companies who help keep the Careaway Resort running", 
    tagsList: "business,sponsor,company,partner,partnership,advertise,advertising,advertisement",
    link: "business/corporate-partners"
    }; 

iter+=1; websiteIndex[iter] = {title: "Resort Blog & Operations Updates", 
    description: "View all the current news and updates from the resort including blog posts, operating updates, and more", 
    tagsList: "operation,news,media,update,article,articles,post,social",
    link: "information/blog"
    }; 

iter+=1; websiteIndex[iter] = {title: "Online Store", 
    description: "Shop for exclusive Careaway Resort merchandise and souvenirs online", 
    tagsList: "gift,merch,retail,order,shopping,gifts",
    link: "store/home"
    }; 

iter+=1; websiteIndex[iter] = {title: "Park Hours and Daily Entertainment & Events Schedule", 
    description: "View the operating hours for Careaway Park, Port of Adventre, Splashport Bay, and the Shops & More District as well as a schedule of today's entertainment and events. Also look ahead to view this information for other dates", 
    tagsList: "hour,operations,schedule,entertainment,show,shows,events,calendar,calender,seasonal,time,weather,parking,tier,day,days,price,ticket,cost,info,information",
    link: "information/resort-schedule"
    }; 

iter+=1; websiteIndex[iter] = {title: "Shows & Entertainment", 
    description: "View all our entertainment offerings available during various seasons and events throughout the year", 
    tagsList: "show,performance,theater,play,music,musical,character,things,activity,activities",
    link: "things-to-do/entertainment"
    };

iter+=1; websiteIndex[iter] = {title: "Information about Ticket Tiers", 
    description: "Learn about how the price of theme park admission is determined and how to know when your annual passport may be invalid", 
    tagsList: "ticket,tier,price,valid,passport",
    link: "tickets/ticketing-tiers"
    };


    



