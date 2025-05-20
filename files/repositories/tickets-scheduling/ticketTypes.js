TikTypeArray = [];
TikAddOnArray = [];

// iter+=1;TikTypeArray[iter] = "Type0 | Category1 | Name2 | t1Price/child,t2Price/child,t3Price/child,t4Price/child,t5Price/child | numDays4 | chkEvnt5 | chkSPHr6 | Description7 | ImgLink8";
    // type -> day-ticket, annual-passport, special-event, scareaway-screams, ...
    // numDays -> select (user will select) OR set number of days (multi-day tix) [PRICE IS FOR ENTIRE PACKAGE, NOT PER-DAY]
    // chkEvnt -> Name event that must be happening on date of ticket purchase or none
    // chlSPHr -> Check if Splashport Bay is open yes/none
var iter = -1;
// Tickets
    iter+=1;TikTypeArray[iter] = "day-ticket | General Admission | Puertas Nuevas Resident Admission Single-Park | 49/39,65/59,75/69,109/89,112/95 | select | none | none | For eligibile PN Residents Only. Admission to ONE theme park per day (excluding Splashport Bay) | https://i.imgur.com/9gS8Xri.jpeg";
    iter+=1;TikTypeArray[iter] = "day-ticket | General Admission | Puertas Nuevas Resident Admission Park-to-park | 69/59,79/69,109/99,159/149,199/189 | select | none | none | For eligibile PN Residents Only. Admission to BOTH theme parks per day (excluding Splashport Bay) | https://i.imgur.com/LjFg1mN.jpeg";
    iter+=1;TikTypeArray[iter] = "day-ticket | General Admission | General Admission Single-Park | 59/40,69/52,89/69,109/89,112/99 | select | none | none | Admission to ONE theme park per day (excluding Splashport Bay) | https://i.imgur.com/9gS8Xri.jpeg";
    iter+=1;TikTypeArray[iter] = "day-ticket | General Admission | General Admission Park-to-park | 89/79,99/89,129/109,169/159,199/189 | select | none | none | Admission to BOTH theme parks per day (excluding Splashport Bay) | https://i.imgur.com/LjFg1mN.jpeg";

    iter+=1;TikTypeArray[iter] = "day-ticket | GCVIP Admission | Priority Bronze Single-Park | 89/79,99/89,175/159,199/189,209/199 | select | none | none | One-time use priority queue access per ride. Admission to ONE theme park per day (excluding Splashport Bay)  | https://aztechadmit.github.io/client-ticketingservice/globecityresorthighland/clientImages/ticketing3.jpg";
    iter+=1;TikTypeArray[iter] = "day-ticket | GCVIP Admission | Priority Silver Single-Park | 99/89,149/139,199/190,209/199,245/229 | select | none | none | Unlimited access (after 3PM) to priority queues at applicable attractions. Admission to ONE theme park per day (excluding Splashport Bay)  | https://aztechadmit.github.io/client-ticketingservice/globecityresorthighland/clientImages/ticketing4.jpg";
    iter+=1;TikTypeArray[iter] = "day-ticket | GCVIP Admission | GC VIP Deluxe Single-Park | 99/89,149/139,199/190,215/209,299/289 | select | none | none | Priority Queue Access for two uses per ride. Access to VIP lounges and priority seating. Admission to ONE theme park per day (excluding Splashport Bay)  | https://aztechadmit.github.io/client-ticketingservice/globecityresorthighland/clientImages/ticketing5.jpg";
    iter+=1;TikTypeArray[iter] = "day-ticket | GCVIP Admission | GC VIP Platinum Single-Park | 109/89,159/149,209/199,289/273,319/309 | select | none | none | Unlimited access to priority queues at applicable attractions. Access to VIP lounges and priority seating. Admission to ONE theme park per day (excluding Splashport Bay)  | https://aztechadmit.github.io/client-ticketingservice/globecityresorthighland/clientImages/ticketing6.jpg";

    iter+=1;TikTypeArray[iter] = "day-ticket | Multi-Day Tickets | Puertas Nuevas Resident - Three-Day Single-Park Package | 119/99,129/109,149/139,179/159,199/189 | 3 | none | none | For eligible PN residents only. General admission for three days (within 30 days of first use). Tickets valid at only one park per day | https://i.imgur.com/9gS8Xri.jpeg";
    iter+=1;TikTypeArray[iter] = "day-ticket | Multi-Day Tickets | Two-day Single-Park Package | 99/95,109/99,150/139,179/169,199/189 | 2 | none | none | General admission for two days (within 30 days of first use). Tickets valid at only one park per day | https://i.imgur.com/9gS8Xri.jpeg";

    iter+=1;TikTypeArray[iter] = "annual-passport | General Admission (Excluding Splashport Bay) | Local Resident Passport | 229/229,229/229,229/229,229/229,229/229 | 365 | none | none | Park-to-park admission* on all Tier 1 and Tier 2 dates | https://i.imgur.com/XgqnCs4.png";
    iter+=1;TikTypeArray[iter] = "annual-passport | General Admission (Excluding Splashport Bay) | Grand Adventure Passport | 419/419,419/419,419/419,419/419,419/419 | 365 | none | none | Park-to-park admission* on all dates listed as Tier 4 or below | https://i.imgur.com/q6W4Gjt.png";
    iter+=1;TikTypeArray[iter] = "annual-passport | General Admission (Excluding Splashport Bay) | Premier Passport | 599/599,599/599,599/599,599/599,599/599 | 365 | none | none | Park-to-park admission* 365 days of the year | https://i.imgur.com/o4JRgG9.png";
    iter+=1;TikTypeArray[iter] = "annual-passport | GCVIP Admission (Excluding Splashport Bay) | GC VIP Platinum Passport | 899/899,899/899,899/899,899/899,899/899 | 365 | none | none | Park-to-park admission* 365 days of the year. Includes 1-time-use per ride Priority Queue Access before 3PM and unlimited access after 3PM. See site for more details | https://i.imgur.com/tdz8GHn.png";

    iter+=1;TikTypeArray[iter] = "annual-passport | Splashport Bay Admission | Splashport Annual Passport | 109/89,109/89,109/89,109/89,109/89 | 182 | none | yes | Unlimited access to Splashport Bay during spring and summer seasons including movie-nights and certain nighttime events | https://i.imgur.com/JIEFq8C.png";

    //iter+=1;TikTypeArray[iter] = "special-event | Special Event | Name2 | t1Price/child,t2Price/child,t3Price/child,t4Price/child,t5Price/child | numDays4 | chkEvnt5 | none | Description7 | ImgLink8";

    iter+=1;TikTypeArray[iter] = "splashport-ticket | General Admission | Splashport Bay Puertas Nuevas Resident Admission | 19/9,29/15,35/20,45/29,55/39 | select | none | yes | Admission to Splashport bay. For eligibile PN Residents Only. Does not include other parks. | https://gcparksandresorts.github.io/careawayresort/files/images/logos/splashport-bay-logo.png";
    iter+=1;TikTypeArray[iter] = "splashport-ticket | General Admission | Splashport Bay General Admission | 30/23,35/20,45/29,55/39,59/49 | select | none | yes | Admission to Splashport bay. Does not include other parks. | https://gcparksandresorts.github.io/careawayresort/files/images/logos/splashport-bay-logo.png";
    iter+=1;TikTypeArray[iter] = "splashport-ticket | Special Event Admission | Stars & Splashes Nighttime Event | 20/10,20/10,20/10,20/10,20/10 | 1 | StrSpl | yes | Access to nighttime event. <b>Do not purchase if you already have admission for date of event</b>. See site for details | https://cpfoodblog.com/wp-content/uploads/2019/06/2019-Knotts-Summer-Nights-Smores.jpg";

// Ticket Add-Ons
// iter+=1;TikAddOnArray[iter] = "Name0 | PerTicket1 | PerDay2 | restrictType3,all | restrictCategory4,all | t1Price,t2Price,t3Price,t4Price,t5Price | Description6 | ImgLink7";
    // PerTicket -> yes = add-on is per ticket, no = add-on is per order
    // PerDay -> yes = add-on is per day, no = add-on is per order
    // restrictType -> none = no restrictions, otherwise type ticket type (IE: "day-ticket") to restrict to only that type
    // restrictCategory -> none = no restrictions, otherwise type category name (IE: "General Admission") to restrict to only that category
    // t1Price -> price for tier 1, t2Price -> price for tier 2, etc...
iter = -1;
    // General Day Ticket Add-Ons
    iter+=1;TikAddOnArray[iter] = "Park-to-Park GCVIP Upgrade | yes | yes | day-ticket,all | GCVIP Admission | 40,59,69,89,109 | Upgrade your GCVIP ticket to allow park-to-park access. Price shown is per-ticket per-day. | https://i.imgur.com/LjFg1mN.jpeg";
    iter+=1;TikAddOnArray[iter] = "Daily Theme-Park Parking | no | yes | day-ticket,splashport-ticket,all | none | 24,24,29,29,29 | $30 value. Includes parking at theme-park parking lots for one vehicle for one operating day. Parking is valid for one day only. Does not include valet or preffered parking. | https://i.imgur.com/z8dFKDp.png";
    iter+=1;TikAddOnArray[iter] = "Unlimited Digital PhotoPass | yes | no | day-ticket,scareaway-screams,all | none | 29,29,29,29,29 | Includes unlimited digital downloads of all photos taken by PhotoPass photographers and on-ride photos. Vaid for duration of ticket period. | https://aztechadmit.github.io/client-ticketingservice/globecityresorthighland/clientImages/ticketing1.jpg";
    iter+=1;TikAddOnArray[iter] = "Daiy Locker Rental - Large | no | yes | day-ticket,splashport-ticket,all | none | 15,15,15,15,15 | Includes a large locker rental for one operating day. Locker is valid for one day only, guests with multiple-days wil need to clear out their locker at the end of each day. | imgLink";
    iter+=1;TikAddOnArray[iter] = "Oink Oink Dining Package | yes | yes | day-ticket,all | none | 40,40,40,40,40 | Once-per-day, recieve a full-service meal at Careaway Proper (Careaway Park) or Portlantic Grill (Port of Adventure) including select entrees with sides and one non-alcoholic beverage. After your meal, enjoy a complimentary snack or sweet treat at any quick-service dining location. | imgLink";

    // Annual Passport Add-Ons
    iter+=1;TikAddOnArray[iter] = "Unlimited Digital PhotoPass | yes | no | annual-passport,all | none | 45,45,45,45,45 | Includes unlimited digital downloads of all photos taken by PhotoPass photographers and on-ride photos. Vaid for duration of passport period. | https://aztechadmit.github.io/client-ticketingservice/globecityresorthighland/clientImages/ticketing1.jpg";
    iter+=1;TikAddOnArray[iter] = "Theme-Park Parking - Annual | yes | no | annual-passport,all | none | 89,89,89,89,89 | Great value! Includes parking at theme-park parking lots for one vehicle for entire passport term (not including renewal). Parking is valid for one year only. Does not include valet or preffered parking. Overnight parking is not allowed. Parking access is attached directly to annual passport ID. | https://i.imgur.com/z8dFKDp.png";

    // Splashport Bay Add-Ons
    iter+=1;TikAddOnArray[iter] = "Cabana Day Rental | no | yes | splashport-ticket,all | none | 50,50,50,50,50 | Includes a private cabana rental for one operating day. Cabana is valid for one day only, guests with multiple-days wil need to rent a new cabana for each day. | imgLink";

    // iter+=1;TikAddOnArray[iter] = "Scareaway Screams Parking | no | yes | scareaway-screams,all | none | 40,40,40,40,40 | $45 value. Includes parking at theme-park parking lots for one vehicle for one operating day. Parking is valid for one day only. Does not include valet or preffered parking. | https://i.imgur.com/z8dFKDp.png";
