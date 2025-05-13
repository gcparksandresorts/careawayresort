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

// Lowest Ticket Prices
    msTikPrice = [];
    msTikPrice[0]= "60 / 49 | 65 / 59 | 89 / 79";
    msTikPrice[1]= "65 / 59 | 75 / 69 | 99 / 89";
    msTikPrice[2]= "75 / 69 | 99 / 89 | 199 / 190";
    msTikPrice[3]= "99 / 89 | 109 / 99 | 209 / 199";
    msTikPrice[4]= "109 / 95 | 129 / 119 | 245 / 229";


mastSchedule = []; //mastSchedule[NUM] = "MMM-DD | DayOfWeek1 | TikTier2 | PrkHr3 | SplshPrtHr4 | Evnt5 | Entrtnmnt6";

// Insert Schedule Values Below

mastSchedule[0] = 'MAY-12 | Monday | 2 | 1 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[1] = 'MAY-13 | Tuesday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[2] = 'MAY-14 | Wednesday | 2 | 1 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[3] = 'MAY-15 | Thursday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[4] = 'MAY-16 | Friday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[5] = 'MAY-17 | Saturday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[6] = 'MAY-18 | Sunday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[7] = 'MAY-19 | Monday | 2 | 1 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[8] = 'MAY-20 | Tuesday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[9] = 'MAY-21 | Wednesday | 2 | 1 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[10] = 'MAY-22 | Thursday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[11] = 'MAY-23 | Friday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[12] = 'MAY-24 | Saturday | 4 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[13] = 'MAY-25 | Sunday | 3 | 3 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[14] = 'MAY-26 | Monday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[15] = 'MAY-27 | Tuesday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[16] = 'MAY-28 | Wednesday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[17] = 'MAY-29 | Thursday | 2 | 2 | 0 | none | cmng,gcmb,blvdBand';
mastSchedule[18] = 'MAY-30 | Friday | 4 | 3 | 2 | roovBday | cmng,gcmb,blvdBand';
mastSchedule[19] = 'MAY-31 | Saturday | 5 | 4 | 2 | sAdv | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[20] = 'JUN-1 | Sunday | 4 | 4 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[21] = 'JUN-2 | Monday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[22] = 'JUN-3 | Tuesday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[23] = 'JUN-4 | Wednesday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[24] = 'JUN-5 | Thursday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[25] = 'JUN-6 | Friday | 4 | 3 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[26] = 'JUN-7 | Saturday | 5 | 4 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[27] = 'JUN-8 | Sunday | 4 | 4 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[28] = 'JUN-9 | Monday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[29] = 'JUN-10 | Tuesday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[30] = 'JUN-11 | Wednesday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[31] = 'JUN-12 | Thursday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[32] = 'JUN-13 | Friday | 4 | 4 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[33] = 'JUN-14 | Saturday | 5 | 4 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[34] = 'JUN-15 | Sunday | 5 | 4 | 2 | sAdv,pM,wveSum | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[35] = 'JUN-16 | Monday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[36] = 'JUN-17 | Tuesday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[37] = 'JUN-18 | Wednesday | 3 | 7 | 1 | sAdv,pM,nop | cmng,gcmb,blvdBand,aqm,nopEnt';
mastSchedule[38] = 'JUN-19 | Thursday | 3 | 6 | 1 | sAdv,pM,nop | cmng,gcmb,blvdBand,aqm,nopEnt';
mastSchedule[39] = 'JUN-20 | Friday | 4 | 4 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[40] = 'JUN-21 | Saturday | 5 | 4 | 2 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[41] = 'JUN-22 | Sunday | 5 | 4 | 2 | sAdv,pM,wveSum | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[42] = 'JUN-23 | Monday | 4 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[43] = 'JUN-24 | Tuesday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[44] = 'JUN-25 | Wednesday | 3 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[45] = 'JUN-26 | Thursday | 4 | 4 | 1 | sAdv,pM | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[46] = 'JUN-27 | Friday | 4 | 4 | 3 | sAdv,pM,StrSpl | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[47] = 'JUN-28 | Saturday | 5 | 4 | 3 | sAdv,pM,StrSpl | cmng,gcmb,blvdBand,wick,das,aqm';
mastSchedule[48] = 'JUN-29 | Sunday | 5 | 4 | 2 | sAdv,pM,wveSum | cmng,gcmb,blvdBand,wick,das,aqm';