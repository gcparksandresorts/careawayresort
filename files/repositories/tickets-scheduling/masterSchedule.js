months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
monthShort = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
monthsDays = [31,28,31,30,31,30,31,31,30,31,30,31];

weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Park Hours
    msPrkHours = [];  
    msPrkHours[0] = "closed | closed | closed";
    msPrkHours[1] = "11:00 AM - 8:00 PM | 11:00 AM - 7:00 PM | 10:00 AM - 6:00 PM";
    msPrkHours[2] = "11:00 AM - 9:00 PM | 10:00 AM - 8:00 PM | 10:00 AM - 7:00 PM";
    msPrkHours[3] = "11:00 AM - 11:00 PM | 10:00 AM - 10:00 PM | 10:00 AM - 9:00 PM";
    msPrkHours[4] = "11:00 AM - 12:00 AM | 9:00 AM - 11:00 PM | 10:00 AM - 11:00 PM";
    // Special Event Hours
    msPrkHours[5] = "11:00 AM - 9:00 PM | 11:00 AM - 7:00 PM | 10:00 AM - 6:00 PM + 6:00 PM - 12:00 AM";
    msPrkHours[6] = "11:00 AM - 11:00 PM | 10:00 AM - 10:00 PM | 10:00 AM - 7:00 PM + 7:00 PM - 12:00 AM";
    msPrkHours[7] = "11:00 AM - 12:00 AM | 10:00 AM - 11:00 PM | 10:00 AM - 7:00 PM + 7:00 PM - 12:00 AM";
    
    // msPrkHours[NUM] = "shopsDistrict | careawayPark | portAdventure";
    // if closed: closed
    // special event hrs: hours + specialEventHrs

// Splash Port Bay Hours
    msSplshHrs = []; 
    msSplshHrs[0] = "closed";
    msSplshHrs[1] = "11:00 AM - 5:00 PM";
    msSplshHrs[2] = "10:00 AM - 6:00 PM";
    msSplshHrs[3] = "10:00 AM - 9:00 PM + 6:00 PM - 11:00 PM"; // Stars and Splashes
    // if closed: closed



mastSchedule = []; //mastSchedule[NUM] = "MMM-DD | DayOfWeek1 | TikTier2 | PrkHr3 | SplshPrtHr4 | Evnt5 | Entrtnmnt6";

// Insert Schedule Values Below
mastSchedule[0] = 'MAR-21 | Friday | 3 | 3 | 0 | sprngBrk | none';
mastSchedule[1] = 'MAR-22 | Saturday | 4 | 4 | 0 | sprngBrk | none';
mastSchedule[2] = 'MAR-23 | Sunday | 4 | 4 | 0 | sprngBrk | gcmb';
mastSchedule[3] = 'MAR-24 | Monday | 3 | 3 | 0 | sprngBrk | gcmb';
mastSchedule[4] = 'MAR-25 | Tuesday | 2 | 5 | 0 | sprngBrk | gcmb';
mastSchedule[5] = 'MAR-26 | Wednesday | 2 | 2 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[6] = 'MAR-27 | Thursday | 2 | 2 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[7] = 'MAR-28 | Friday | 3 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[8] = 'MAR-29 | Saturday | 4 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[9] = 'MAR-30 | Sunday | 5 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[10] = 'MAR-31 | Monday | 3 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[11] = 'APR-1 | Tuesday | 2 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[12] = 'APR-2 | Wednesday | 2 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[13] = 'APR-3 | Thursday | 2 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[14] = 'APR-4 | Friday | 3 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[15] = 'APR-5 | Saturday | 5 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[16] = 'APR-6 | Sunday | 5 | 3 | 0 | sprngBrk | gcmb,aqm';
mastSchedule[17] = 'APR-7 | Monday | 1 | 2 | 0 | none | none';
mastSchedule[18] = 'APR-8 | Tuesday | 1 | 1 | 0 | none | none';
mastSchedule[19] = 'APR-9 | Wednesday | 1 | 1 | 0 | none | none';
mastSchedule[20] = 'APR-10 | Thursday | 1 | 1 | 0 | none | none';
mastSchedule[21] = 'APR-11 | Friday | 1 | 1 | 0 | none | none';
mastSchedule[22] = 'APR-12 | Saturday | 3 | 2 | 0 | none | gcmb';
mastSchedule[23] = 'APR-13 | Sunday | 3 | 2 | 0 | none | gcmb';
mastSchedule[24] = 'APR-14 | Monday | 1 | 1 | 0 | none | none';
mastSchedule[25] = 'APR-15 | Tuesday | 1 | 1 | 0 | none | none';
mastSchedule[26] = 'APR-16 | Wednesday | 1 | 1 | 0 | none | none';
mastSchedule[27] = 'APR-17 | Thursday | 1 | 1 | 0 | none | none';
mastSchedule[28] = 'APR-18 | Friday | 2 | 2 | 0 | none | none';
mastSchedule[29] = 'APR-19 | Saturday | 3 | 2 | 0 | none | none';
mastSchedule[30] = 'APR-20 | Sunday | 3 | 2 | 0 | none | none';
mastSchedule[31] = 'APR-21 | Monday | 1 | 1 | 0 | none | none';
mastSchedule[32] = 'APR-22 | Tuesday | 1 | 1 | 0 | none | none';
mastSchedule[33] = 'APR-23 | Wednesday | 1 | 1 | 0 | none | none';
mastSchedule[34] = 'APR-24 | Thursday | 1 | 1 | 0 | none | none';
mastSchedule[35] = 'APR-25 | Friday | 2 | 2 | 0 | none | none';
mastSchedule[36] = 'APR-26 | Saturday | 3 | 2 | 0 | mommyBday | none';
mastSchedule[37] = 'APR-27 | Sunday | 3 | 2 | 0 | andrewBday | none';
mastSchedule[38] = 'APR-28 | Monday | 2 | 2 | 0 | none | none';
mastSchedule[39] = 'APR-29 | Tuesday | 1 | 1 | 0 | none | none';
mastSchedule[40] = 'APR-30 | Wednesday | 1 | 1 | 0 | none | none';
mastSchedule[41] = 'MAY-1 | Thursday | 1 | 1 | 0 | none | none';
mastSchedule[42] = 'MAY-2 | Friday | 2 | 2 | 1 | none | none';
mastSchedule[43] = 'MAY-3 | Saturday | 3 | 2 | 1 | none | none';
mastSchedule[44] = 'MAY-4 | Sunday | 3 | 2 | 1 | none | none';
mastSchedule[45] = 'MAY-5 | Monday | 1 | 1 | 1 | none | none';
mastSchedule[46] = 'MAY-6 | Tuesday | 1 | 1 | 1 | none | none';
mastSchedule[47] = 'MAY-7 | Wednesday | 1 | 1 | 1 | none | none';
mastSchedule[48] = 'MAY-8 | Thursday | 1 | 1 | 1 | none | none';
mastSchedule[49] = 'MAY-9 | Friday | 2 | 1 | 1 | none | none';