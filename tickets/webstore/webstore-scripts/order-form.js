// Webstore HTML Elements
const ticketFormContainer = document.getElementById("ticketFormContainer");

// Script-level Variables
var formType; // the type of form (day-ticket, annual-passport, ...)
var tikType; // the specific index of a ticket (I.E. Oras nou resident park-to-park)
const tikCategories = []; // stores the various categories of tickets for a form (will populate during intializeWebstore)
const loadMultiplier = 1; // multiplier for load times (IE: 0 = no load, 1 = 1 hard coded time)

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
var addOnList = []; // list of chosen addOns
var totalCostTickets = 0; // total cost of tickets
var totalCostAddOns = 0; // total cost of add-ons

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
                runLoad("Preparing Order Form, Loading Ticket Data",loadMultiplier*4000);
                tikType = searchParams.get("tikType");
                    tikArray = TikTypeArray[tikType].split(" | "); console.log(tikArray);
                    tikName = tikArray[2];
                    tikPrices = tikArray[3].split(",");
                    tikDays = tikArray[4];
                setupDateSelect();
                
            }else{ // user needs to select ticket type based on form (day-ticket, annual-passport,...)
                runLoad("Loading Tickets and Passes",loadMultiplier*2000);
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

                var thisITier; var pVal;
                // Get TICKET TIER for this item's date (1-5)
                    // (1) Find the correct date
                    for(p=0; p < mastSchedule.length; p++){
                        let pTemp = mastSchedule[p].split(" | ");
                            // Formate Date
                            let dTemp = monthShort[calendarMonth] + "-" + newDate;
                        if(pTemp[0] == dTemp){ // ccheck if MMM-DD matches
                            thisITier = pTemp[2]; // set tier
                            pVal = p+1; // set calendarItemIndex (number items in calendar) to the current index of the masterList (prevent counting previous dates before today in master count)
                        }
                    }

                let cItemId = "index-"+calendarItemIndex+"-month-"+calendarMonth+"-date-"+newDate+"-tier-"+thisITier; // create ID for new calendar item 


                var dateIsValid;
                // run if statement to check if this ticket is valid for this date
                if(tikArray[5] == 'none' && tikArray[6] == 'none' && thisITier != '0'){
                    dateIsValid = true; // no date restriction
                }else{
                    // date restriction in place
                    var eventListFound;
                    var splashportHours;
                    for(k=0; k<mastSchedule.length; k++){
                        let kTemp = mastSchedule[k].split(" | ");
                        let kSearchVal = monthShort[calendarMonth] + "-" + newDate; //console.log("Searching for " + kSearchVal);
                        if(kTemp[0] == kSearchVal){ // check if date matches
                            if(kTemp[5].includes(",")){
                                eventListFound = kTemp[5].split(",");
                            }else{
                                eventListFound = [kTemp[5]];
                            }
                            splashportHours = kTemp[4];
                            //console.log("Found Event List: " + eventListFound);
                            break;
                        }
                    }
                    if(eventListFound[0] != 'none' && eventListFound.includes(tikArray[5])){
                        if(tikArray[6] == 'yes' && splashportHours == '0'){
                            dateIsValid = false; // ticket is not valid for this date
                        }else{
                            dateIsValid = true; // ticket is valid for this date
                        }
                    }else if(tikArray[6] == 'yes' && splashportHours != '0' && tikArray[5] == 'none'){
                        dateIsValid = true; // ticket is valid for this date
                    }
                    else{
                        dateIsValid = false; // ticket not valid for this date
                    }
                }

                if(dateIsValid == true){ // if the date is valid, select it
                    // no date restriction
                    let tPriceHolder = tikPrices[thisITier-1].split("/");
                    document.getElementById("row-"+calendarRow).innerHTML += "<td id='"+cItemId+"' onclick='selectCalendarDay("+'"'+cItemId+'"'+")'>"+monthShort[calendarMonth]+" "+newDate+"<p style='margin:2px 0px 2px 0px; font-size:9px'>Tier "+thisITier+"</p><span style='color:gray;'>$"+tPriceHolder[0]+" | $"+tPriceHolder[1]+"</span></td>";
                    if(calendarRowItem == 1 || calendarRowItem == 7){ // item is weekend
                        document.getElementById(cItemId).classList.add("wknd");
                    }
                    if(newDate == 1){ // item is start of new month
                        document.getElementById(cItemId).classList.add("newMonth");
                    }
                    calendarItemIndex += 1; calendarCurrentIndex += 1;
                    //console.log("Calendar Row " + calendarRowItem + "Date " + monthShort[calendarMonth] + " " + newDate);
                }else{
                    // ticket not valid for this date
                    document.getElementById("row-"+calendarRow).innerHTML += "<td id='"+cItemId+"' class='noClick'>"+monthShort[calendarMonth]+" "+newDate+"<br><br></td>";
                    if(calendarRowItem == 1 || calendarRowItem == 7){ // item is weekend
                        document.getElementById(cItemId).classList.add("wknd");
                    }
                    if(newDate == 1){ // item is start of new month
                        document.getElementById(cItemId).classList.add("newMonth");
                    }
                    calendarItemIndex += 1; calendarCurrentIndex += 1;
                    //console.log("Calendar Row " + calendarRowItem + "Date " + monthShort[calendarMonth] + " " + newDate + " - Not Valid");
                }
                

                // if this is the first item created, choose todays date (unless there are special restrictions on when the ticket is valid)
                if(chosenDateID == 'none' && tikArray[5] == 'none' && tikArray[6] == 'none'){
                    selectCalendarDay(cItemId); calendarItemIndex = pVal;
                }
            }// end of if(calendarItemIndex < maxIndex)
        }// end of master for loop (i=0; i<=34; i++)
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
    if(chosenDateID != 'none'){
        runLoad("Loading...",loadMultiplier*400); numDaysSelected = document.getElementById("numDaySelect").value;
        saveCalendarWin = ticketFormContainer.innerHTML;

        // If multi-day ticket, calculate cost total (cost per day * num days) -> does not apply to preset tickets
        if(tikDays == 'select'){ // user must select number of days
            tikPriceFinal = tikPrices[dayTierSelected-1].split("/");
            tikPriceFinal[0] = parseInt(tikPriceFinal[0]) * parseInt(numDaysSelected);
            tikPriceFinal[1] = parseInt(tikPriceFinal[1]) * parseInt(numDaysSelected);
        }

        // Get date of visit
        let tmp = chosenDateID.split("-");
            let mnthVis = months[tmp[3]];
            let dtVis = tmp[5];

        ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2><p>First visit on <b>"+mnthVis+" "+dtVis+"</b> (Tier "+dayTierSelected+") for <b>"+numDaysSelected+" days</b> </div> <h2>Number of Guests</h2> \
                                        <table style='width:auto;margin:auto;'><tr><th style='text-align:center;'>Adult (12+) - $"+tikPriceFinal[0]+"</th><th style='text-align:center;'>Child (1-11) - $"+tikPriceFinal[1]+"</th></tr><tr><td><div class='ngst'><button onclick='numGuestFunc(1)'>-</button><p id='numGuestAdultText'>1</p><button onclick='numGuestFunc(2)'>+</button></div></td><td><div class='ngst'><button onclick='numGuestFunc(3)'>-</button><p id='numGuestChildText'>1</p><button onclick='numGuestFunc(4)'>+</button></div></td></tr></table>   \
                                        <p style='font-size:12px'>Children under 12 must be accompanied by an adult 12 years of age or older</p> \
                                        <p style='font-size:12px'>Price shown is total cost of each ticket including all days</p> \
                                        <div class='spacer'></div><div class='container' style='padding-top:10px;'><a class='btn noLeft' onclick='reopenCalendar()'>Back</a> <a class='btn filled' onclick='setupAddOns()'>Continue</a></div>";

        document.getElementById('numGuestAdultText').innerHTML = numAdults;
        document.getElementById('numGuestChildText').innerHTML = numChilds;
    }else{
        alert("Please select a date first");
    }
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
    runLoad("Loading Ticket AddOns",loadMultiplier*2000);

    // Get date of visit
    let tmp = chosenDateID.split("-");
        let mnthVis = months[tmp[3]];
        let dtVis = tmp[5];

    saveNumGuestWin = ticketFormContainer.innerHTML;

    ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2><p>First visit on <b>"+mnthVis+" "+dtVis+"</b> (Tier "+dayTierSelected+") for <b>"+numDaysSelected+" days</b></p><p><b>"+numAdults+" Adults</b> & <b>"+numChilds+" Children</b></p> </div> <h2>Ticket AddOns</h2> \
    <div class='leftContainer'><table id='addOnMasterDisplay'></table></div> <h4 id='totCostAddOnDisp' style='color:midnightblue'></h4> \
    <div class='spacer'></div><div class='container' style='padding-top:10px;'><a class='btn noLeft' onclick='reopenNumGuest()'>Back</a> <a class='btn filled' onclick='runReviewOrder()'>Review Order</a></div>";

    // Setup AddOns
    const addOnMasterDisplay = document.getElementById("addOnMasterDisplay");
    addOnList = []; // reset add-on list

    for(i=0; i < TikAddOnArray.length; i++){
        let temp = TikAddOnArray[i].split(" | "); // get ticket array element and seperate

            if(temp[3] == 'none' || temp[3].split(',').includes(formType)){ // check if this add-on is designated for the current order form
                if(temp[4] == 'none' || temp[4] == tikArray[1]){ // check if this add-on is designated for the current ticket category
                    let tempPrices = temp[5].split(",");
                    let tempPrice = tempPrices[dayTierSelected-1];

                    // Check if this add-on is per ticket, per day, or both
                    var perTikPerDay = "";
                    if(temp[1] == 'yes'){
                        perTikPerDay = "per ticket";
                        if(temp[2] == 'yes'){
                            perTikPerDay += " per day";
                        }
                    }else if(temp[2] == 'yes'){
                        perTikPerDay = "per day";
                    }

                    // Add this add-on to the list
                    addOnMasterDisplay.innerHTML += "<tr><td id='addOnRow-"+i+"'><h3>"+temp[0]+"</h3><h4 style='color:midnightblue;'>$"+tempPrice+" "+perTikPerDay+"</h4><p>"+temp[6]+"</p><button id='tikAddOnButton-"+i+"' onclick='addOnSelect("+i+")'>Add to order</button></div></td></tr>";
                }
            }
    }
}
    function reopenNumGuest(){
        ticketFormContainer.innerHTML = saveNumGuestWin;
        window.scrollTo(0, 0); // scroll to top of page
    }

    function addOnSelect(i){ // when a user selects an add-on
        let temp = TikAddOnArray[i].split(" | "); // get ticket array element and seperate
        if(addOnList.includes(i)){ // addOn has been deselected
            document.getElementById("tikAddOnButton-"+i).innerHTML = "Add to order";
            document.getElementById("addOnRow-"+i).classList.remove("isSelected");
            addOnList.splice(addOnList.indexOf(i),1); // remove from list
        }else{ // add on is selected
            document.getElementById("tikAddOnButton-"+i).innerHTML = "Remove from order";
            document.getElementById("addOnRow-"+i).classList.add("isSelected");
            addOnList.push(i); // add to list
        }

        // Calculate total cost of add-ons
        totalCostAddOns = 0; // reset total cost of add-ons
        for(i=0; i < addOnList.length; i++){
            let temp2 = TikAddOnArray[addOnList[i]].split(" | "); // get ticket array element and seperate
            let tempPrices = temp2[5].split(","); 
            let tempPrice = tempPrices[dayTierSelected-1];
            var tempPriceTotal = tempPrice; // set add on total price to its original value price (OVP) based on date tier

            if(temp2[1] == 'yes'){ // add-on is per ticket -> set price of addon to OVP * numTickets
                tempPriceTotal = parseInt(tempPrice) * (parseInt(numAdults) + parseInt(numChilds));
            }
            if(temp2[2] == 'yes'){ // add-on is per day -> set price of addon to price set above * numDays
                tempPriceTotal = parseInt(tempPriceTotal) * parseInt(numDaysSelected);
            }

            totalCostAddOns += tempPriceTotal;
        }

        // Display total cost of add-ons
        document.getElementById("totCostAddOnDisp").innerHTML = "Total Add-On Cost: $"+totalCostAddOns;
        console.log(addOnList);
    }

function runReviewOrder(){
    runLoad("Preparing review...",loadMultiplier*1000);
    saveAddOnSelect = ticketFormContainer.innerHTML;

    // Get date of visit
    let tmp = chosenDateID.split("-");
        let mnthVis = months[tmp[3]];
        let dtVis = tmp[5];

    // Get total cost of tickets
    totalCostTickets = (tikPriceFinal[0]*numAdults) + (tikPriceFinal[1]*numChilds);

    ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2></div> <h1>Review Order</h1> Please check that all information is correct before proceeding \
    <div class='container' id='tikReviewDisp'> First visit on <b>"+mnthVis+" "+dtVis+"</b> (Tier "+dayTierSelected+")<br>Visiting for <b>"+numDaysSelected+" days</b><br><br><h4>Tickets & Guests</h4> <p>"+numAdults+" Adults @ $"+tikPriceFinal[0]+" each</p> <p>"+numChilds+" Children @ $"+tikPriceFinal[1]+" each</p> <p style='color:midnightblue; font-weight:bold'>Cost of tickets: $"+totalCostTickets+"</p> \
                            <br><h4>Ticket AddOns</h4>";

                            if(addOnList.length > 0){
                                document.getElementById('tikReviewDisp').innerHTML += "<ul>";
                                for(i=0; i < addOnList.length; i++){
                                    let temp2 = TikAddOnArray[addOnList[i]].split(" | "); // get ticket array element and seperate
                                    let tempPrices = temp2[5].split(","); 
                                    let tempPrice = tempPrices[dayTierSelected-1];
                                    var tempPriceTotal = tempPrice; // set add on total price to its original value price (OVP) based on date tier

                                    if(temp2[1] == 'yes'){ // add-on is per ticket -> set price of addon to OVP * numTickets
                                        tempPriceTotal = parseInt(tempPrice) * (parseInt(numAdults) + parseInt(numChilds));
                                    }
                                    if(temp2[2] == 'yes'){ // add-on is per day -> set price of addon to price set above * numDays
                                        tempPriceTotal = parseInt(tempPriceTotal) * parseInt(numDaysSelected);
                                    }

                                    document.getElementById('tikReviewDisp').innerHTML += "<li>"+temp2[0]+" - $"+tempPriceTotal+"</li>";
                                }
                                document.getElementById('tikReviewDisp').innerHTML += "</ul>";
                            }else{
                                totalCostAddOns = 0;
                                document.getElementById('tikReviewDisp').innerHTML += "<p style='color:gray;'>No add-ons selected</p>";
                            }
                            document.getElementById('tikReviewDisp').innerHTML += "<p style='color:midnightblue; font-weight:bold'>Cost of add-ons: $"+totalCostAddOns+"</p><br><h4>Order Subtotal: $"+(totalCostTickets + totalCostAddOns)+"</h4>";

    ticketFormContainer.innerHTML += "<div class='spacer'></div><div class='container' style='padding-top:10px;'><a class='btn noLeft' onclick='reopenAddOns()'>Back</a> <a class='btn filled' onclick='checkOrder()'>Proceed to Checkout</a></div>";

}

    function reopenAddOns(){
        ticketFormContainer.innerHTML = saveAddOnSelect;
        window.scrollTo(0, 0); // scroll to top of page
    }

    function checkOrder(){
        document.getElementById("finalAlert").style.display = "flex";
    }

    function startFormOver(){
        window.open("?form="+formType, "_self");
    }

// FINAL STEP COMPLETED ON THIS PAGE
function proceedToCheckout(){
        let goToLink = "webstore/secure-checkout.html?tikType="+tikType+"&tikCost="+totalCostTickets+"&dateID="+chosenDateID+"&numDays="+numDaysSelected+"&numAdults="+numAdults+"&numChilds="+numChilds;
        if(addOnList.length > 0){
            goToLink += "&addOns="+addOnList + "&costAddOns=" + totalCostAddOns; //&addOns=1 or &addOns=1,2,3,...
        }else{
            goToLink += "&addOns=none&costAddOns=0";
        }

        window.open(goToLink, "_self");
}
       /* ticketFormContainer.innerHTML = "<div class='titleBar silver'><h2>"+tikName+"</h2></div> <h1>Checkout</h1> \
                                        <p style='color:midnightblue;'>Please complete the form below to finalize your order</p> \
                                        <form id='orderForm' onsubmit='return false;'> \
                                        <input type='text' name='fName' id='fName' placeholder='First Name' required> \
                                        <input type='text' name='lName' id='lName' placeholder='Last Name' required> \
                                        <input type='email' name='email' id='email' placeholder='Email Address (for e-tickets)' required> \
                                        <input type='tel' name='phoneNum' id='phoneNum' placeholder='Phone Number (for e-tickets)' required> \
                                        <input type='text' name='add1' id='add1' placeholder='Address Line 1 (Street Address)' required> \
                                        <input type='text' name='add2' id='add2' placeholder='Address Line 2 (Apartment, Suite, etc...)'> \
                                        <input type='text' name='city' id='city' placeholder='City/Town/Village/Etc...' required> \
                                        <select name='stateSelect' id='stateSelect'></select> \
                                        <input type='number' name='zipCode' id='zipCode' placeholder='Zip Code (5 digits)' pattern='\d{5}' required> \
                                        </form> \
                                        <div class='spacer'></div><div class='container' style='padding-top:10px;'><a class='btn noLeft' onclick='history.back()'>Back</a> <a class='btn filled' onclick='submitOrder()'>Submit Order</a></div>";
    } */
