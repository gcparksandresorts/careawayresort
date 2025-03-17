TikTypeArray = [];

// TikTypeArray[NUM] = "Type0 | Category1 | Name2 | t1Price/child,t2Price/child,t3Price/child,t4Price/child,t5Price/child | numDays4 | chkEvnt5 | chkSPHr6 | Description7 | ImgLink8";
    // type -> day-ticket, annual-passport, special-event, scareaway-screams, ...
    // numDays -> select (user will select) OR set number of days (multi-day tix) [PRICE IS FOR ENTIRE PACKAGE, NOT PER-DAY]
    // chkEvnt -> Name event that must be happening on date of ticket purchase or none
    // chlSPHr -> Check if Splashport Bay is open yes/none

// Day Tickets
    TikTypeArray[0] = "day-ticket | General Admission | Puertas Nuevas Resident Admission Single-Park | 60/49,65/59,75/69,99/89,99/95 | select | none | none | For eligibile PN Residents Only. Admission to ONE theme park per day (excluding Splashport Bay) | https://i.imgur.com/9gS8Xri.jpeg";
    TikTypeArray[1] = "day-ticket | General Admission | Puertas Nuevas Resident Admission Park-to-park | 79/69,89/79,109/99,145/129,179/162 | select | none | none | For eligibile PN Residents Only. Admission to BOTH theme parks per day (excluding Splashport Bay) | https://i.imgur.com/LjFg1mN.jpeg";
    TikTypeArray[2] = "day-ticket | General Admission | General Admission Single-Park | 65/59,75/69,89/79,109/99,109/99 | select | none | none | Admission to ONE theme park per day (excluding Splashport Bay) | https://i.imgur.com/9gS8Xri.jpeg";
    TikTypeArray[3] = "day-ticket | General Admission | General Admission Park-to-park | 89/79,99/89,129/109,169/159,199/189 | select | none | none | Admission to BOTH theme parks per day (excluding Splashport Bay) | https://i.imgur.com/LjFg1mN.jpeg";

    TikTypeArray[4] = "day-ticket | GCVIP Admission | Name2 | t1Price/child,t2Price/child,t3Price/child,t4Price/child,t5Price/child | select | none | none | Description4 | ImgLink5";

    TikTypeArray[5] = "day-ticket | Multi-Day Tickets | Two-day One-park-per-day Package | 99/child,109/child,150/child,179/child,199/child | 2 | none | none | General admission for two days (within 30 days of eachother). Tickets valid at only one park per day | https://i.imgur.com/9gS8Xri.jpeg";

    TikTypeArray[6] = "annual-passport | General Admission (Excluding Splashport Bay) | Local Resident Passport | 299/child,299/child,299/child,299/child,299/child | 365 | none | none | Park-to-park admission* on all Tier 1 and Tier 2 dates | https://i.imgur.com/XgqnCs4.png";
    TikTypeArray[7] = "annual-passport | General Admission (Excluding Splashport Bay) | Grand Adventure Passport | 425/child,425/child,425/child,425/child,425/child | 365 | none | none | Park-to-park admission* on all dates listed as Tier 4 or below | https://i.imgur.com/q6W4Gjt.png";
    TikTypeArray[8] = "annual-passport | General Admission (Excluding Splashport Bay) | Premier Passport | 599/child,599/child,599/child,599/child,599/child | 365 | none | none | Park-to-park admission* 365 days of the year | https://i.imgur.com/o4JRgG9.png";
    TikTypeArray[9] = "annual-passport | GCVIP Admission (Excluding Splashport Bay) | GC VIP Platinum Passport | 899/child,899/child,899/child,899/child,899/child | 365 | none | none | Park-to-park admission* 365 days of the year. Includes 1-time-use per ride Priority Queue Access before 3PM or unlimited after 3PM. See site for more details | https://i.imgur.com/tdz8GHn.png";

    TikTypeArray[10] = "annual-passport | Splashport Bay Admission | Splashport Annual Passport | 150/child,150/child,150/child,150/child,150/child | 182 | none | yes | Unlimited access to Splashport Bay during spring and summer seasons including movie-nights and certain nighttime events | https://i.imgur.com/JIEFq8C.png";