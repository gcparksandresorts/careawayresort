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

iter+=1; websiteIndex[iter] = {title: "Accessibility and Guests with Allergies", 
    description: "Information on accomodations for guests with disabilities and food allergies", 
    tagsList: "mda,blind,hearing,ramp,wheelchair,allergy,allergens,severe,food,service,animal",
    link: "information/accessibility"
    };

iter+=1; websiteIndex[iter] = {title: "Wheelchair / Stroller Rentals and Lockers", 
    description: "Information about renting wheelchairs, strollers, and daily lockers for storing personal belongings in the parks", 
    tagsList: "wheelchairs,strollers,lockers,rentals,rental,locker,rent,renting",
    link: "information/rentals"
    };

iter+=1; websiteIndex[iter] = {title: "Order Theme Park Tickets", 
    description: "Order tickets to Globe-City's Careaway Park and Port of Adventure, does not include splashport bay admission", 
    tagsList: "ticket,themepark,theme-park,admission,park,entry,webstore,store",
    link: "tickets/webstore?form=day-ticket"
    };

iter+=1; websiteIndex[iter] = {title: "Order Splashport Bay Tickets", 
    description: "Order tickets to Globe-City's Splashport Bay. Does not include annual passports", 
    tagsList: "splashport,ticket,admission,waterpark,water,park,entry",
    link: "tickets/webstore?form=splashport-ticket"
    };

iter+=1; websiteIndex[iter] = {title: "Annual Passports",
    description: "Explore annual passports to Globe-City's Careaway Park and Port of Adventure, or Splashport Bay",
    tagsList: "annual,pass,passport,annual-pass,webstore,store,tickets,admission,year",
    link: "tickets/annual-passports"
    };



