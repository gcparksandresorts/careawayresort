// Misc
monthShort = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

// Important Variables

    // Tickets
    var costTickets; // total cost of tickets (numTickets*numDays*costPerTicket);
    var tikType;
    var numAdults; var numChilds;
    var tikArrayValues; // contains all the values from TikTypeArray[NUM]

    // Date Selected
    var chosenDate; var numDays;
    var chosenTier; 

    // Add-Ons
   var addOnsList; // array containing all selected add ons (or "none")
    var costAddOns;



function setupCheckout(){
    runLoad("Preparing Checkout...", 2000);

    // collect information from url parameters (or throw errors)
    var urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('dateID') && urlParams.has('numDays') && urlParams.has('tikType') && urlParams.has('numAdults') && urlParams.has('numChilds') && urlParams.has('tikCost') && urlParams.has('costAddOns')){
        // Setup Date
        let temp = urlParams.get('dateID').split("-");
            chosenTier = temp[7];
            if(temp[5] < 10){temp[5] = "0" + temp[5];}
            chosenDate = monthShort[temp[3]] + "-" + temp[5];

        numDays = parseInt(urlParams.get('numDays'));

        // tickets
        tikType = urlParams.get('tikType'); tikArrayValues = TikTypeArray[parseInt(tikType)].split(" | ");
        numAdults = parseInt(urlParams.get('numAdults'));
        numChilds = parseInt(urlParams.get('numChilds'));

        // add-ons
        addOnsList = urlParams.get('addOns');
        if(addOnsList != "none"){
            if(addOnsList.includes(",")){
                addOnsList = addOnsList.split(",");
            }else{
                addOnsList = [addOnsList];
            }
        }

        // costs
        costAddOns = parseFloat(urlParams.get('costAddOns'));
        costTickets = parseFloat(urlParams.get('tikCost'));

        // run checkout
        document.getElementById("checkoutContainer").innerHTML = "<div class='leftContainer' id='orderSummaryCont'><h2>Order Summary</h2><p style='margin-top:0'>Ticket Information: <b>"+tikArrayValues[2]+"</b> - First visit on <b>"+chosenDate+"</b> valid for "+numDays+" days</p><table><tr><th>Tickets</th><th>Add Ons</th></tr><tr><td>Number of Adults: "+numAdults+"<p>Number of Children: "+numChilds+"</p></td><td id='addOnListCell'></td></tr><tr><td><b>Cost of tickets: $"+costTickets.toFixed(2)+"</b></td><td><b>Cost of AddOns: $"+costAddOns.toFixed(2)+"</b></td></tr></table></div>";
        
        // Print out add ons
        if(addOnsList != "none"){
            document.getElementById("addOnListCell").innerHTML += "<ul id='addOnListCont'></ul>";
            for(i=0;i<addOnsList.length;i++){
                let temp = TikAddOnArray[parseInt(addOnsList[i])].split(" | ");
                var additionToVar = "";
                    if(temp[1] == 'yes'){
                        additionToVar = "per ticket";
                    }
                    if(temp[2] == 'yes'){
                        additionToVar += " per day";
                    }
                document.getElementById("addOnListCont").innerHTML += "<li>"+temp[0]+" - $"+parseFloat(temp[5].split(",")[chosenTier]).toFixed(2)+" "+additionToVar+"</li>";
            }
            //document.getElementById("orderSummaryCont").innerHTML += "<h4 style='color:midnightblue'>Total Cost of Add-Ons: $"+costAddOns.toFixed(2)+"</h4>";
        }else{
            document.getElementById("addOnListCell").innerHTML += "<p>No Add-Ons Selected</p>";
        }

        // Price Includes Section
        document.getElementById("orderSummaryCont").innerHTML += "<div style='margin-top:12px; color:dimgray;'>Puertas Nuevas Transparent Costs Act: The price of your ticket includes $"+Number(costTickets*(.08+.03+.02) + 1.25).toFixed(2)+" in fees: <ul style='margin-top:5px;'><li>PN Sales Tax (8%): $"+Number(costTickets*0.08).toFixed(2)+"</li><li>PN Tourism Fee (3%): $"+Number(costTickets*0.03).toFixed(2)+"</li><li>PN Conservation Fee: $1.25</li><li>Webstore Service Fee (2%): $"+Number(costTickets*0.02).toFixed(2)+"</li></ul></div>";

        // Order total
        document.getElementById("orderSummaryCont").innerHTML += "<br><br><div class='spacer'></div><p>Order Subtotal: $"+(costTickets+costAddOns).toFixed(2)+"</p><p>Taxes and Fees: Included in price</p><h3 style='color:midnightblue'>Order Total: $"+(costTickets+costAddOns).toFixed(2)+"</h3>";

        // Guest Information 
        document.getElementById("checkoutContainer").innerHTML += "<div class='container'><h3>Guest Information</h3>To prevent ticket fraud, please enter the information for all guests in your party. This information will be verified at the gate. <p>Letters only, no numbers or special characters.</p><div id='guestNameInputs'></div>";

            const guestNameInputs = document.getElementById('guestNameInputs');
            for(i=0;i<numAdults; i++){
                guestNameInputs.innerHTML += "<p><label for='adult-"+i+"'>Adult "+Number(i+1)+": </label><input type='text' id='adult-"+i+"' name='adult-"+i+"' required></p>";
            }
            for(i=0;i<numChilds; i++){
                guestNameInputs.innerHTML += "<p><label for='child-"+i+"'>Child "+Number(i+1)+": </label><input type='text' id='child-"+i+"' name='child-"+i+"' required></p>";
            }
        
        // contact info
        document.getElementById("checkoutContainer").innerHTML += "<div class='container'><h3>Contact Information</h3><p><label for='email'>Email: </label><input type='email' id='email' name='email' required><br><span style='font-size:10px;'>Will be used for digitial tickets and reciept</span></p><p><input type='checkbox' id='termCondCheck'>Checking this box means you have read the webservice <a href='../../information/legal'>Terms and conditions</a> and agree to them for this purchase (required)</input></p><p><input type='checkbox' checked>Checking this box means I grant access to my email address for Globe-City Marketing and Promotional messages</input></p></div>";

        // Checkout Section
        document.getElementById("checkoutContainer").innerHTML += "<div class='container' id='paymentContainer'><h2>Checkout</h2><p>Click below to select payment type</p><button class='btn' onclick='submitOrder();'>Begin Payment Process</button></div>";
   
    }else{
        document.getElementById("checkoutContainer").innerHTML = "<div class='container'><h1>Invalid URL</h1><p>There was an error with the URL you used to access this page. Please go back and try again.</p><p><a class='btn' onclick='history.back()'>Go back</a></div>";
    }
}

function incorrectValue(ID){
    document.getElementById(ID).classList.add("incorrectVal");
}

function submitOrder(){
    var isError = false;

    // Before check, remove red borders
    const taggedElements = document.getElementsByClassName("incorrectVal");
    if(taggedElements != null){
        for (let i = 0; i < taggedElements.length; i++) {
            taggedElements[i].classList.remove("incorrectVal");
        }
    }   

    // Now check all inputs for errors

        // First check name inputs
        for(i=0;i<numAdults; i++){
            let tempId = "adult-"+i;
            let temp = document.getElementById(tempId);
            if(temp.value == ''){
                incorrectValue(tempId);
                isError = true;
            }else if(/^[a-zA-Z\s]*$/.test(temp.value) == false){
                incorrectValue(tempId);
                isError = true;
            }
        }
        if(numChilds != 0){
            for(i=0;i<numChilds; i++){
                let tempId = "child-"+i;
                let temp = document.getElementById(tempId);
                if(temp.value == ''){
                    incorrectValue(tempId);
                    isError = true;
                }else if(/^[a-zA-Z\s]*$/.test(temp.value) == false){
                    incorrectValue(tempId);
                    isError = true;
                }
            }
        }

        // Contact Info
        if(document.getElementById('termCondCheck').checked != true){
            incorrectValue('termCondCheck'); isError = true;
        }
        if(document.getElementById('email').value == '' || document.getElementById('email').value.includes('@') == false){
            incorrectValue('email'); isError = true;
        }

    // last step
    if(isError == false){
        document.getElementById("paymentContainer").innerHTML = "<h2>Select Payment Type</h2></div>";
    }else{
        alert("Please correct all errors before continuing");
    }
}

function sendOrder(){
    // Generate ticket IDs
    for(i=0; i<numAdults; i++){

    }
    if(numChilds != 0){
        for(i=0; i<numChilds; i++){

        }
    }
}

