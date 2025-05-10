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
mastSchedule[0] = 'MAY-9 | Friday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[1] = 'MAY-10 | Saturday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[2] = 'MAY-11 | Sunday | 4 | 4 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[3] = 'MAY-12 | Monday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[4] = 'MAY-13 | Tuesday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[5] = 'MAY-14 | Wednesday | 2 | 1 | 0 | none | cmng,blvdBand';
mastSchedule[6] = 'MAY-15 | Thursday | 2 | 2 | 0 | none | cmng,blvdBand';
mastSchedule[7] = 'MAY-16 | Friday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[8] = 'MAY-17 | Saturday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[9] = 'MAY-18 | Sunday | 4 | 4 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[10] = 'MAY-19 | Monday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[11] = 'MAY-20 | Tuesday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[12] = 'MAY-21 | Wednesday | 2 | 1 | 0 | none | cmng,blvdBand';
mastSchedule[13] = 'MAY-22 | Thursday | 2 | 2 | 0 | none | cmng,blvdBand';
mastSchedule[14] = 'MAY-23 | Friday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[15] = 'MAY-24 | Saturday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[16] = 'MAY-25 | Sunday | 4 | 4 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[17] = 'MAY-26 | Monday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[18] = 'MAY-27 | Tuesday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[19] = 'MAY-28 | Wednesday | 2 | 1 | 0 | none | cmng,blvdBand';
mastSchedule[20] = 'MAY-29 | Thursday | 2 | 2 | 0 | none | cmng,blvdBand';
mastSchedule[21] = 'MAY-30 | Friday | 4 | 4 | 1 | sAdv,roovBday | gcmb,blvdBand,wick';
mastSchedule[22] = 'MAY-31 | Saturday | 5 | 4 | 2 | sAdv | gcmb,blvdBand,wick';
mastSchedule[23] = 'JUN-1 | Sunday | 5 | 4 | 2 | sAdv,pM | gcmb,blvdBand,wick';
mastSchedule[24] = 'JUN-2 | Monday | 3 | 3 | 1 | sAdv,pM | cmng,gcmb,blvdBand';
mastSchedule[25] = 'JUN-3 | Tuesday | 3 | 3 | 1 | sAdv,pM | cmng,gcmb,blvdBand';
mastSchedule[26] = 'JUN-4 | Wednesday | 3 | 3 | 1 | sAdv,pM | cmng,gcmb,blvdBand';
mastSchedule[27] = 'JUN-5 | Thursday | 3 | 3 | 1 | sAdv,pM | cmng,gcmb,blvdBand';
mastSchedule[28] = 'JUN-6 | Friday | 3 | 3 | 1 | sAdv,pM | gcmb,blvdBand,wick';
mastSchedule[29] = 'JUN-7 | Saturday | 5 | 4 | 2 | sAdv | gcmb,blvdBand,wick';
mastSchedule[30] = 'JUN-8 | Sunday | 5 | 4 | 2 | sAdv,pM | gcmb,blvdBand,wick';
mastSchedule[31] = 'JUN-9 | Monday | 3 | 3 | 1 | sAdv,pM | cmng,gcmb,blvdBand';
mastSchedule[32] = 'JUN-10 | Tuesday | 3 | 3 | 1 | sAdv,pM | cmng,gcmb,blvdBand';
mastSchedule[33] = 'JUN-11 | Wednesday | 3 | 6 | 1 | sAdv,pM,nop | gcmb,blvdBand,nopEnt';
mastSchedule[34] = 'JUN-12 | Thursday | 3 | 6 | 1 | sAdv,pM,nop | gcmb,blvdBand,nopEnt';
mastSchedule[35] = 'JUN-13 | Friday | 3 | 3 | 1 | sAdv,pM | gcmb,blvdBand,wick';