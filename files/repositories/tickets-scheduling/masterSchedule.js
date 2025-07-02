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
    msPrkHours[5] = "11:00 AM - 9:00 PM | 11:00 AM - 7:00 PM | 10:00 AM - 7:00 PM + 7:00 PM - 12:00 AM";
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

// Lowest Ticket Prices ( resident | general | vip)
    msTikPrice = [];
    msTikPrice[0]= "49/39 | 59/40 | 89/79"; 
    msTikPrice[1]= "65/59 | 69/52 | 99/89"; 
    msTikPrice[2]= "75/69 | 89/69 | 175/159"; 
    msTikPrice[3]= "109/89 | 109/89 | 209/199"; 
    msTikPrice[4]= "112/95 | 112/99 | 245/229"; 


mastSchedule = []; //mastSchedule[NUM] = "MMM-DD | DayOfWeek1 | TikTier2 | PrkHr3 | SplshPrtHr4 | Evnt5 | Entrtnmnt6";

// Insert Schedule Values Below

mastSchedule[0] = 'JUL-2 | Wednesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[1] = 'JUL-3 | Thursday | 4 | 4 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[2] = 'JUL-4 | Friday | 4 | 4 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[3] = 'JUL-5 | Saturday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[4] = 'JUL-6 | Sunday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[5] = 'JUL-7 | Monday | 4 | 4 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[6] = 'JUL-8 | Tuesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[7] = 'JUL-9 | Wednesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[8] = 'JUL-10 | Thursday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[9] = 'JUL-11 | Friday | 4 | 4 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[10] = 'JUL-12 | Saturday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[11] = 'JUL-13 | Sunday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[12] = 'JUL-14 | Monday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[13] = 'JUL-15 | Tuesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[14] = 'JUL-16 | Wednesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[15] = 'JUL-17 | Thursday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[16] = 'JUL-18 | Friday | 4 | 4 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[17] = 'JUL-19 | Saturday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[18] = 'JUL-20 | Sunday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[19] = 'JUL-21 | Monday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[20] = 'JUL-22 | Tuesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[21] = 'JUL-23 | Wednesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[22] = 'JUL-24 | Thursday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[23] = 'JUL-25 | Friday | 4 | 4 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[24] = 'JUL-26 | Saturday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[25] = 'JUL-27 | Sunday | 5 | 4 | 3 | sAdv,wveSum,StrSpl | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[26] = 'JUL-28 | Monday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
mastSchedule[27] = 'JUL-29 | Tuesday | 3 | 3 | 2 | sAdv | gcmb,blvdBand,pgs,wick,das,aqm';
