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

mastSchedule[0] = 'NOV-14 | Friday | 3 | 3 | 0 | cHol | pxp,fol';
mastSchedule[1] = 'NOV-15 | Saturday | 4 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[2] = 'NOV-16 | Sunday | 3 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[3] = 'NOV-17 | Monday | 3 | 2 | 0 | cHol | pxp,fol';
mastSchedule[4] = 'NOV-18 | Tuesday | 2 | 2 | 0 | cHol | pxp,fol';
mastSchedule[5] = 'NOV-19 | Wednesday | 2 | 2 | 0 | cHol | pxp,fol';
mastSchedule[6] = 'NOV-20 | Thursday | 2 | 2 | 0 | cHol | pxp,fol';
mastSchedule[7] = 'NOV-21 | Friday | 4 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[8] = 'NOV-22 | Saturday | 5 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[9] = 'NOV-23 | Sunday | 3 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[10] = 'NOV-24 | Monday | 4 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[11] = 'NOV-25 | Tuesday | 4 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[12] = 'NOV-26 | Wednesday | 5 | 4 | 0 | cHol,thxGiv | pxp,fol,gsm';
mastSchedule[13] = 'NOV-27 | Thursday | 4 | 3 | 0 | cHol,thxGiv | pxp,fol';
mastSchedule[14] = 'NOV-28 | Friday | 5 | 4 | 0 | cHol | pxp,fol,gsm';
mastSchedule[15] = 'NOV-29 | Saturday | 5 | 4 | 0 | cHol | pxp,fol,gsm';
mastSchedule[16] = 'NOV-30 | Sunday | 5 | 4 | 0 | cHol | pxp,fol,gsm';
mastSchedule[17] = 'DEC-1 | Monday | 3 | 2 | 0 | cHol | pxp,fol';
mastSchedule[18] = 'DEC-2 | Tuesday | 2 | 2 | 0 | cHol | pxp,fol';
mastSchedule[19] = 'DEC-3 | Wednesday | 2 | 2 | 0 | cHol | pxp,fol';
mastSchedule[20] = 'DEC-4 | Thursday | 2 | 2 | 0 | cHol | pxp,fol';
mastSchedule[21] = 'DEC-5 | Friday | 4 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[22] = 'DEC-6 | Saturday | 4 | 3 | 0 | cHol | pxp,fol,gsm';
mastSchedule[23] = 'DEC-7 | Sunday | 3 | 3 | 0 | cHol | pxp,fol,gsm';


