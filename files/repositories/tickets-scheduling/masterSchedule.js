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

mastSchedule[0] = 'SEP-7 | Sunday | 3 | 3 | 1 | sAdv | none';
mastSchedule[1] = 'SEP-8 | Monday | 2 | 2 | 1 | sAdv | none';
mastSchedule[2] = 'SEP-9 | Tuesday | 1 | 1 | 1 | sAdv | none';
mastSchedule[3] = 'SEP-10 | Wednesday | 1 | 1 | 1 | sAdv | none';
mastSchedule[4] = 'SEP-11 | Thursday | 1 | 1 | 1 | sAdv | none';
mastSchedule[5] = 'SEP-12 | Friday | 2 | 2 | 1 | sAdv | none';
mastSchedule[6] = 'SEP-13 | Saturday | 3 | 3 | 1 | sAdv | none';
mastSchedule[7] = 'SEP-14 | Sunday | 2 | 3 | 1 | sAdv | none';
mastSchedule[8] = 'SEP-15 | Monday | 1 | 1 | 1 | none | none';
mastSchedule[9] = 'SEP-16 | Tuesday | 1 | 1 | 1 | none | none';
mastSchedule[10] = 'SEP-17 | Wednesday | 1 | 1 | 1 | none | none';
mastSchedule[11] = 'SEP-18 | Thursday | 1 | 1 | 1 | none | none';
mastSchedule[12] = 'SEP-19 | Friday | 2 | 2 | 1 | none | cmng,gcmb';
mastSchedule[13] = 'SEP-20 | Saturday | 3 | 2 | 1 | none | cmng,gcmb';
mastSchedule[14] = 'SEP-21 | Sunday | 2 | 2 | 1 | none | cmng,gcmb';
mastSchedule[15] = 'SEP-22 | Monday | 1 | 1 | 1 | hal | none';
mastSchedule[16] = 'SEP-23 | Tuesday | 1 | 1 | 1 | hal | none';
mastSchedule[17] = 'SEP-24 | Wednesday | 1 | 1 | 1 | hal | none';
mastSchedule[18] = 'SEP-25 | Thursday | 2 | 5 | 1 | hal,scream | koda,haho';
mastSchedule[19] = 'SEP-26 | Friday | 2 | 5 | 1 | hal,scream | cmng,gcmb,koda,haho';
mastSchedule[20] = 'SEP-27 | Saturday | 3 | 5 | 1 | hal,scream | cmng,gcmb,koda,haho';
mastSchedule[21] = 'SEP-28 | Sunday | 2 | 2 | 1 | hal | cmng,gcmb';
mastSchedule[22] = 'SEP-29 | Monday | 1 | 1 | 0 | hal | none';
mastSchedule[23] = 'SEP-30 | Tuesday | 1 | 1 | 0 | hal | none';
mastSchedule[24] = 'OCT-1 | Wednesday | 1 | 1 | 0 | hal | none';
mastSchedule[25] = 'OCT-2 | Thursday | 2 | 5 | 0 | hal,scream | koda,haho';
mastSchedule[26] = 'OCT-3 | Friday | 2 | 5 | 0 | hal,scream | cmng,gcmb,koda,haho';
mastSchedule[27] = 'OCT-4 | Saturday | 3 | 5 | 0 | hal,scream | cmng,gcmb,koda,haho';
mastSchedule[28] = 'OCT-5 | Sunday | 2 | 2 | 0 | hal | cmng,gcmb';
mastSchedule[29] = 'OCT-6 | Monday | 1 | 1 | 0 | hal | none';
mastSchedule[30] = 'OCT-7 | Tuesday | 1 | 1 | 0 | hal | none';
mastSchedule[31] = 'OCT-8 | Wednesday | 1 | 1 | 0 | hal | none';
mastSchedule[32] = 'OCT-9 | Thursday | 2 | 5 | 0 | hal,scream | koda,haho';
mastSchedule[33] = 'OCT-10 | Friday | 2 | 5 | 0 | hal,scream | cmng,gcmb,koda,haho';
mastSchedule[34] = 'OCT-11 | Saturday | 3 | 5 | 0 | hal,scream | cmng,gcmb,koda,haho';
mastSchedule[35] = 'OCT-12 | Sunday | 2 | 2 | 0 | hal | cmng,gcmb';


