months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
monthShort = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
monthsDays = [31,28,31,30,31,30,31,31,30,31,30,31];

weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Park Hours
    msPrkHours = [];  
    msPrkHours[0] = "closed | closed | closed";
    msPrkHours[1] = "11:00 AM - 9:00 PM | 11:00 AM - 7:00 PM | 10:00 AM - 7:00 PM";
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
mastSchedule[0] = 'JAN-9 | Friday | 2 | 2 | 0 | none | cmng,gcmb';
mastSchedule[1] = 'JAN-10 | Saturday | 3 | 3 | 0 | none | cmng,gcmb';
mastSchedule[2] = 'JAN-11 | Sunday | 3 | 3 | 0 | none | cmng,gcmb';
mastSchedule[3] = 'JAN-12 | Monday | 1 | 1 | 0 | none | cmng';
mastSchedule[4] = 'JAN-13 | Tuesday | 1 | 1 | 0 | none | cmng';
mastSchedule[5] = 'JAN-14 | Wednesday | 1 | 1 | 0 | none | cmng';
mastSchedule[6] = 'JAN-15 | Thursday | 2 | 2 | 0 | none | cmng,gcmb';
mastSchedule[7] = 'JAN-16 | Friday | 3 | 2 | 0 | none | cmng,gcmb';
mastSchedule[8] = 'JAN-17 | Saturday | 4 | 3 | 0 | none | cmng,gcmb';
mastSchedule[9] = 'JAN-18 | Sunday | 5 | 3 | 0 | none | cmng,gcmb';
mastSchedule[10] = 'JAN-19 | Monday | 4 | 3 | 0 | none | cmng,gcmb';
mastSchedule[11] = 'JAN-20 | Tuesday | 2 | 2 | 0 | none | cmng';
mastSchedule[12] = 'JAN-21 | Wednesday | 1 | 1 | 0 | none | cmng';
mastSchedule[13] = 'JAN-22 | Thursday | 1 | 1 | 0 | none | cmng';
mastSchedule[14] = 'JAN-23 | Friday | 2 | 2 | 0 | none | cmng,gcmb';
mastSchedule[15] = 'JAN-24 | Saturday | 3 | 3 | 0 | none | cmng,gcmb';
mastSchedule[16] = 'JAN-25 | Sunday | 3 | 3 | 0 | none | cmng,gcmb';
mastSchedule[17] = 'JAN-26 | Monday | 1 | 1 | 0 | none | cmng';
mastSchedule[18] = 'JAN-27 | Tuesday | 1 | 1 | 0 | none | cmng';
mastSchedule[19] = 'JAN-28 | Wednesday | 1 | 1 | 0 | none | cmng';
mastSchedule[20] = 'JAN-29 | Thursday | 2 | 2 | 0 | none | cmng,gcmb';
mastSchedule[21] = 'JAN-30 | Friday | 2 | 2 | 0 | none | cmng,gcmb';
mastSchedule[22] = 'JAN-31 | Saturday | 3 | 3 | 0 | none | cmng,gcmb';
mastSchedule[23] = 'FEB-1 | Sunday | 3 | 3 | 0 | none | cmng,gcmb';


