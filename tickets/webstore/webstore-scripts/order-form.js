// Webstore HTML Elements
const ticketFormContainer = document.getElementById("ticketFormContainer");

// Script-level Variables
var formType; // the type of form (day-ticket, annual-passport, ...)
var tikType; // the specific index of a ticket (I.E. Oras nou resident park-to-park)
const tikCategories = []; // stores the various categories of tickets for a form (will populate during intializeWebstore)

var dateSelected; // when user selects date on calendar, value stored here

// Ticket Information
var tikArray;
var tikName;
var tikPrices;
var tikDays;

// For calendar
var calendarRow; // current row of calendar
var calendarRowItem; // index of item in row
var calendarItemIndex = 0; // the total number of items in the calendar (will be used to index each individual element)
var calendarCurrentIndex = 0; // the total number of items since last month change
var calendarMonth; // current month index (jan = 0, feb = 1,...)
var calendarDate; // day of the month
var maxIndex; // see setupCalendar for details

// Ultimate End Values
var chosenDateID = 'none'; // the ID of the date the user chooses from the calendar section
var numDaysSelected;
var numAdults = 1;
var numChilds = 0;
var dayTierSelected; // tier of the day selected
var tikPriceFinal; // The final price of the ticket based on date selected ["adultPrice", "childPrice"]
var addOnList; // list of chosen addOns

// Saved Windows
var saveCalendarWin; // saves the content of the calendar window 
var saveNumGuestWin;
var saveAddOnSelect;

// Setup the webstore based on ?form=ticket-type 
function initializeWebstore(){

    // Search Parameters
    const searchParams = new URLSearchParams(window.location.search);

        if(searchParams.has("form")){

            formType = searchParams.get("form");
            
            if(searchParams.has("tikType")){ // ticket type has already been specified -> go straight to choosing a date
                runLoad("Preparing Order Form, Loading Ticket Data",3000);
                tikType = searchParams.get("tikType");
                    tikArray = TikTypeArray[tikType].split(" | ");
                    tikName = tikArray[2];
                    tikPrices = tikArray[3].split(",");
                    tikDays = tikArray[4];
                setupDateSelect();
                
            }else{ // user needs to select ticket type based on form (day-ticket, annual-passport,...)
                runLoad("Loading Tickets and Passes",2000);
                ticketFormContainer.innerHTML = "<h2>Select Ticket Type</h2>";

                // Setup the selection of tickets based on the form type
                for(i=0; i < TikTypeArray.length; i++){
                    let temp = TikTypeArray[i].split(" | "); // get ticket array element and seperate

                        if(temp[0] == formType){ // check if this ticket is designated for the current order form

                            // Get the lowest price for "starting at... text"
                            let temp_a = temp[3].split(",");
                                temp_a = temp_a[0].split("/");

                            let createdTicketVal = "<div><img src='"+temp[8]+"'><h3>"+temp[2]+"</h3><h4>Starting at $"+temp_a[0]+" / $"+temp_a[1]+"</h4>"+temp[7]+"<a href='?form="+formType+"&tikType="+i+"'></a></div>";

                            if(tikCategories.includes(temp[1])){ // check if this ticket's category has already been specified earlier
                                let destCont = document.getElementById(temp[1]);
                                destCont.innerHTML += createdTicketVal;
                            }else{
                                tikCategories[tikCategories.length] = temp[1]; // add this category to list of specified categories
                                ticketFormContainer.innerHTML += "<div class='leftContainer'><h3>"+temp[1]+"</h3><div class='miniTileContainer dImg' id='"+temp[1]+"'></div></div>"; // create the container to hold these types of tickets

                                let destCont = document.getElementById(temp[1]);
                                destCont.innerHTML += createdTicketVal;
                            }

                        }else{
                            console.log("Skipped Ticket: " + temp[2]);
                        }
                }

            }
            
        }else{
            runLoad("400 - Bad Request. Form Type not specified. Please try again.","infinite");
        }// end of if(searchParams.has("form"))

}// end of function initializeWebstore()

function setupDateSelect(){ // Choose date of first visit and number of days
    ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2></div> <h2>Select Date of Visit</h2> \
                                        <div id='calendarContainer'><table id='calendarElement'><tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr></table><p><button onclick='addCalendarDays()'>Load More</button></div> \
                                        <div class='container'><label for='numDaySelect'>Select Number of Days: </label><select id='numDaySelect'></select> - Day tickets expire 30 days after first use regardless of number of days</div> \
                                        <div class='spacer'></div><div class='container' style='padding-top:10px;'><a class='btn noLeft' onclick='history.back()'>Back</a> <a class='btn filled' onclick='setupNumTickets()'>Continue</a></div>";

    if(tikDays != 'select'){ // ticket has specified number of days
        document.getElementById("numDaySelect").innerHTML = "<option value='"+tikDays+"'>"+tikDays+" days</option>";
    }else{ // user must select number of days
        for(i=1; i<=5; i++){
            document.getElementById("numDaySelect").innerHTML += "<option value='"+i+"'>"+i+" days</option>";
        }
    }

    // Setup calendar:
    maxIndex = mastSchedule.length; // set to 365 for debug, should be set to length of masterSchedule array. 
    let todayDate = new Date();
        calendarMonth = todayDate.getMonth(); // current month
        calendarDate = todayDate.getDate(); // day of month
        calendarRowItem = todayDate.getDay(); // day of week
        console.log("Month "+calendarMonth+" - Day "+calendarDate+" - DOW "+calendarRowItem);

    calendarRow = 0; document.getElementById("calendarElement").innerHTML += "<tr id='row-"+calendarRow+"'></tr>"; // create first row

    if(calendarRowItem > 0){ // if today is not sunday, blank out the first few cells of the calendar until todays day of week is reached
        let tcri = calendarRowItem + 1;
        for(i=1; i < tcri; i++){ 
            document.getElementById("row-"+calendarRow).innerHTML += "<td class='noClick'></td>";
        }
    }
    
    
    addCalendarDays();
}
    
    function addCalendarDays(){ // add more days to the calendar
        for(i=0; i<=34; i++){
            if(calendarItemIndex < maxIndex){
                calendarRowItem += 1;
                if(calendarRowItem > 7){ // move to new week
                    calendarRow += 1; calendarRowItem = 1;
                    document.getElementById("calendarElement").innerHTML += "<tr id='row-"+calendarRow+"'></tr>";
                }

                let newDate = calendarDate + calendarCurrentIndex; // day of month

                    if(newDate > monthsDays[calendarMonth]){ // move to new month
                        calendarMonth += 1; calendarDate = 1; calendarCurrentIndex = 0;
                        if(calendarMonth > 11){ // new year (back to january)
                            calendarMonth = 0;
                        }
                        newDate = calendarDate + calendarCurrentIndex;
                    }

                var thisITier;
                // Get TICKET TIER for this item's date (1-5)
                    // (1) Find the correct date
                    for(p=0; p < mastSchedule.length; p++){
                        let pTemp = mastSchedule[p].split(" | ");
                            // Formate Date
                            let dTemp = monthShort[calendarMonth] + "-" + newDate;
                        if(pTemp[0] == dTemp){ // ccheck if MMM-DD matches
                            thisITier = pTemp[2]; // set tier
                        }
                    }

                let cItemId = "index-"+calendarItemIndex+"-month-"+calendarMonth+"-date-"+newDate+"-tier-"+thisITier; // create ID for new calendar item 

                let tPriceHolder = tikPrices[thisITier-1].split("/");
                document.getElementById("row-"+calendarRow).innerHTML += "<td id='"+cItemId+"' onclick='selectCalendarDay("+'"'+cItemId+'"'+")'>"+monthShort[calendarMonth]+" "+newDate+"<br><span style='color:gray;'>$"+tPriceHolder[0]+" | $"+tPriceHolder[1]+"</span></td>";
                if(calendarRowItem == 1 || calendarRowItem == 7){ // item is weekend
                    document.getElementById(cItemId).classList.add("wknd");
                }
                if(newDate == 1){ // item is start of new month
                    document.getElementById(cItemId).classList.add("newMonth");
                }
                calendarItemIndex += 1; calendarCurrentIndex += 1;
                console.log("Calendar Row " + calendarRowItem + "Date " + monthShort[calendarMonth] + " " + newDate);

                // if this is the first item created
                if(chosenDateID == 'none'){
                    selectCalendarDay(cItemId);
                }
            }
        }
    }

    function selectCalendarDay(elementID){ // when a user clicks on a date to select it
        if(chosenDateID != elementID){ // ensure element is not already selected
            if(chosenDateID != 'none'){
                document.getElementById(chosenDateID).classList.remove("isSelected");
            }
            document.getElementById(elementID).classList.add("isSelected");
            chosenDateID = elementID; 
            let thisITier = elementID.split("-"); dayTierSelected = thisITier[7];
            tikPriceFinal = tikPrices[dayTierSelected-1].split("/");
            console.log("Selected Item " + elementID);
        }   
    }

function setupNumTickets(){ // users will select how many people they are buying tix for
    runLoad("Loading...",400); numDaysSelected = document.getElementById("numDaySelect").value;
    saveCalendarWin = ticketFormContainer.innerHTML;

    // Get date of visit
    let tmp = chosenDateID.split("-");
        let mnthVis = months[tmp[3]];
        let dtVis = tmp[5];

    ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2><p>First visit on <b>"+mnthVis+" "+dtVis+"</b> (Tier "+dayTierSelected+") for <b>"+numDaysSelected+" days</b> </div> <h2>Number of Guests</h2> \
                                     <table style='width:auto;margin:auto;'><tr><th style='text-align:center;'>Adult (12+) - $"+tikPriceFinal[0]+"</th><th style='text-align:center;'>Child (1-11) - $"+tikPriceFinal[1]+"</th></tr><tr><td><div class='ngst'><button onclick='numGuestFunc(1)'>-</button><p id='numGuestAdultText'>1</p><button onclick='numGuestFunc(2)'>+</button></div></td><td><div class='ngst'><button onclick='numGuestFunc(3)'>-</button><p id='numGuestChildText'>1</p><button onclick='numGuestFunc(4)'>+</button></div></td></tr></table>   \
                                     <p style='font-size:12px'>Children under 12 must be accompanied by an adult 12 years of age or older</p> \
                                    <div class='spacer'></div><div class='container' style='padding-top:10px;'><a class='btn noLeft' onclick='reopenCalendar()'>Back</a> <a class='btn filled' onclick='setupAddOns()'>Continue</a></div>";

    document.getElementById('numGuestAdultText').innerHTML = numAdults;
    document.getElementById('numGuestChildText').innerHTML = numChilds;
}

    function reopenCalendar(){
        ticketFormContainer.innerHTML = saveCalendarWin;
        window.scrollTo(0, 0); // scroll to top of page
    }
    function numGuestFunc(num){
        switch(num){
            case 1:
                if(numAdults > 1){
                    numAdults -= 1;
                    document.getElementById('numGuestAdultText').innerHTML = numAdults;
                }
                break;
            case 2:
                if(numAdults + numChilds < 9){
                    numAdults += 1;
                    document.getElementById('numGuestAdultText').innerHTML = numAdults;
                }
                break;
            case 3:
                if(numChilds > 0){
                    numChilds -= 1;
                    document.getElementById('numGuestChildText').innerHTML = numChilds;
                }
                break;
            case 4:
                if(numAdults + numChilds < 9){
                    numChilds += 1;
                    document.getElementById('numGuestChildText').innerHTML = numChilds;
                }
                break;

        }
    }

function setupAddOns(){
    runLoad("Loading Ticket AddOns",2000);

    // Get date of visit
    let tmp = chosenDateID.split("-");
        let mnthVis = months[tmp[3]];
        let dtVis = tmp[5];

    saveNumGuestWin = ticketFormContainer.innerHTML;

    ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2><p>First visit on <b>"+mnthVis+" "+dtVis+"</b> (Tier "+dayTierSelected+") for <b>"+numDaysSelected+" days</b></p><p><b>"+numAdults+" Adults</b> & <b>"+numChilds+" Children</b></p> </div> <h2>Ticket AddOns</h2> \
    <p>This module is currently unavailable. Please press continue.</p>\
    <div class='spacer'></div><div class='container' style='padding-top:10px;'><a class='btn noLeft' onclick='reopenNumGuest()'>Back</a> <a class='btn filled' onclick='runReviewOrder()'>Review Order</a></div>";

}
    function reopenNumGuest(){
        ticketFormContainer.innerHTML = saveNumGuestWin;
        window.scrollTo(0, 0); // scroll to top of page

    }

function runReviewOrder(){
    runLoad("Preparing review...",1000);
    saveAddOnSelect = ticketFormContainer.innerHTML;

    // Get date of visit
    let tmp = chosenDateID.split("-");
        let mnthVis = months[tmp[3]];
        let dtVis = tmp[5];

    ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2></div> <h1>Review Order</h1> Please check that all information is correct before proceeding \
    ";
}