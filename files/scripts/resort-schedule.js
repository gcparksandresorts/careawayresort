// HTML elements
const parkTilesDisplay = document.getElementById("parkTilesDisplay");
const entContainer = document.getElementById("entContainer");
const eventContainer = document.getElementById("eventContainer");
const dateDisplay = document.getElementById("dateDisplay");

// Inputs
const dateSelect = document.getElementById("dateSelect");


// Important variables
const urlParams = new URLSearchParams(window.location.search);
var indexOfToday; var tDate; var tSchedule;

function setupParkHours(){

    // Get date in MMM-DD format
    if(urlParams.has("date")){
        tDate = urlParams.get("date");
    }else{
        tDate = new Date();
        tDate = monthShort[tDate.getMonth()] + "-" + tDate.getDate();
    }

    // Find master schedule index using MMM-DD
    for(i=0; i<mastSchedule.length; i++){
        let temp = mastSchedule[i].split(" | ");
        if(temp[0] == tDate){
            tSchedule = temp;
            indexOfToday = i;
        }
    }

        // populate date select dropdown
        for(i=indexOfToday; i<mastSchedule.length; i++){
            let temp = mastSchedule[i].split(" | ");
            let tempDate = temp[0].split('-');
            dateSelect.innerHTML += "<option value='"+temp[0]+"'>"+temp[1]+", "+ months[monthShort.indexOf(tempDate[0])] + " " + tempDate[1] +"</option>";
        }

    // Populate date display
    let splitDate = tDate.split("-");
    dateDisplay.innerHTML = tSchedule[1] + ", " + months[monthShort.indexOf(splitDate[0])] + " " + splitDate[1];

    // Populate park hours
    let tParkHours = msPrkHours[tSchedule[3]].split(" | ");
        var careawayParkHours; var portAdventureHours; var shopsDistrictHours; var splashportHours;
        if(tParkHours[1].includes(' + ')){
            let temp = tParkHours[1].split(' + ');
            careawayParkHours = "<div style='text-align:center;' id='cpHr'><img src='https://i.imgur.com/KJdoVlE.jpeg'><b>Careaway Park Hours</b><br>" + temp[0] + "<p><b>Special Event Hours</b><br>" + temp[1] + "</p><a href='../destinations/careaway-park'></a></div>";
        }else{
            careawayParkHours = "<div style='text-align:center;' id='cpHr'><img src='https://i.imgur.com/KJdoVlE.jpeg'><b>Careaway Park Hours</b><br>" + tParkHours[1] + "<a href='../destinations/careaway-park'></a></div>";
        }
        if(tParkHours[2].includes(' + ')){
            let temp = tParkHours[2].split(' + ');
            portAdventureHours = "<div style='text-align:center;' id='poaHr'><img src='https://i.imgur.com/7GahjP1.jpeg'><b>Port of Adventure Hours</b><br>" + temp[0] + "<p><b>Special Event Hours</b><br>" + temp[1] + "</p><a href='../destinations/port-of-adventure'></a></div>";
        }else{
            portAdventureHours = "<div style='text-align:center;' id='poaHr'><img src='https://i.imgur.com/7GahjP1.jpeg'><b>Port of Adventure Hours</b><br>" + tParkHours[2] + "<a href='../destinations/port-of-adventure'></a></div>";
        }
        if(tParkHours[0].includes(' + ')){
            let temp = tParkHours[0].split(' + ');
            shopsDistrictHours = "<div style='text-align:center;' id='shpsHr'><img src='https://i.imgur.com/7qV4F2N.jpeg'><b>Shops & More District Hours</b><br>" + temp[0] + "<p><b>Special Event Hours</b><br>" + temp[1] + "</p><a href='../destinations/shops-and-more-district'></a></div>";
        }else{
            shopsDistrictHours = "<div style='text-align:center;' id='shpsHr'><img src='https://i.imgur.com/7qV4F2N.jpeg'><b>Shops & More District Hours</b><br>" + tParkHours[0] + "<a href='../destinations/shops-and-more-district'></a></div>";
        }

        if(tSchedule[4] != '0'){
            if(msSplshHrs[tSchedule[4]].includes(' + ')){
                let temp = msSplshHrs[tSchedule[4]].split(' + ');
                shopsDistrictHours = "<div style='text-align:center;' id='shpsHr'><img src='https://i.imgur.com/cUXRXTp.jpeg'><b>Splashport Bay Hours</b><br>" + temp[0] + "<p><b>Special Event Hours</b><br>" + temp[1] + "</p><a href='../destinations/splashport-bay'></a></div>";
            }else{
                splashportHours = "<div style='text-align:center;' id='splshHr'><img src='https://i.imgur.com/cUXRXTp.jpeg'><b>Splashport Bay Hours</b><br>"+msSplshHrs[tSchedule[4]]+"<a href='../destinations/splashport-bay'></a></div>";  
            }
        }else{
            splashportHours = "<div style='text-align:center;' id='splshHr'><img src='https://i.imgur.com/cUXRXTp.jpeg'><b>Splashport Bay Hours</b><br><span style='color:red'>Closed Today</span><a href='../destinations/splashport-bay'></a></div>";
        }
        
        parkTilesDisplay.innerHTML = careawayParkHours + portAdventureHours + splashportHours + shopsDistrictHours;
}

function setupEntertainment(){
    var entertainmentSchedule;
    if(tSchedule[6] != 'none'){
        if(tSchedule[6].includes(',')){
            entertainmentSchedule = tSchedule[6].split(',');
        }else{
            entertainmentSchedule = [tSchedule[6]];
        }

        entContainer.innerHTML = "<div class='thingContainer' id='entUl'></div>";
    
        // populate entertainment section
        for(i=0; i<entertainmentSchedule.length;i++){
            //var indexOfEntTemp;
            for(j=0; j<entertainmentList.length; j++){ //find index of current entertainment item
                let temp = entertainmentList[j].split(' | ');
                if(temp[0] == entertainmentSchedule[i]){
                    //indexOfEntTemp = j;
                    var madeDiv;
                    if(temp[8] != 'clickLink8' && temp[8].includes('entIndex=')){
                        let tempIndex = temp[8].split('=');
                        let setclick = "../things-to-do/entertainment/pages?index=" + tempIndex[1];
                        madeDiv = "<div class='linked' onclick='window.open(\""+setclick+"\")'><b>"+temp[1]+"</b><p>"+entertainmentLocation[temp[5]]+"</p><em>"+temp[4]+"</em></div>";
                    }else if(temp[8] != 'clickLink8'){
                        madeDiv = "<div class='linked' onclick='window.open(\""+temp[8]+"\")'><b>"+temp[1]+"</b><p>"+entertainmentLocation[temp[5]]+"</p><em>"+temp[4]+"</em></div>"; 
                    }else{
                        madeDiv = "<div><b>"+temp[1]+"</b><p>"+entertainmentLocation[temp[5]]+"</p><em>"+temp[4]+"</em></div>";
                    }

                    document.getElementById('entUl').innerHTML += madeDiv;
                }
            }
             
        }
    }else{
        entContainer.innerHTML = "<p style='text-align:center'>No entertainment today</p>";
    }

    var eventsSchedule;
    if(tSchedule[5] != 'none'){
        if(tSchedule[5].includes(',')){
            eventsSchedule = tSchedule[5].split(',');
        }else{
            eventsSchedule = [tSchedule[5]];
        }

        eventContainer.innerHTML = "<div class='thingContainer' id='eventUL'></div>";

        // eventlistArray
        for(i=0; i<eventsSchedule.length; i++){
            for(j=0; j<eventData.length; j++){
                let temp = eventData[j];
                    let qInfo = temp.info.split(' | ')
                if(temp.codeName == eventsSchedule[i]){
                    var madeDiv; var goLink;
                    if(temp.hasOwnProperty('externalLink')){
                        goLink = temp.externalLink;
                        madeDiv = "<div class='linked' onclick='window.open(\""+goLink+"\")'><b>"+temp.name+"</b><p>"+eventLocationList[qInfo[1]]+"</p><em>"+temp.eventHours+"</em></div>";
                    }else if(temp.clickLink != 'click_link'){
                        goLink = eventSiteLink+'page?n='+temp.clickLink;
                        madeDiv = "<div class='linked' onclick='window.open(\""+goLink+"\")'><b>"+temp.name+"</b><p>"+eventLocationList[qInfo[1]]+"</p><em>"+temp.eventHours+"</em></div>";
                    }else{
                        madeDiv = "<div class=''><b>"+temp.name+"</b><p>"+eventLocationList[qInfo[1]]+"</p><em>"+temp.eventHours+"</em></div>";
                    }
                    document.getElementById('eventUL').innerHTML += madeDiv;
                }
            }
        }
    }else{
        eventContainer.innerHTML = "<p style='text-align:center'>No events today</p>";
    }
   
}

// Call functions
setupParkHours();
setupEntertainment();

function viewSchedule(){
    window.open("?date=" + dateSelect.value, "empty");
}