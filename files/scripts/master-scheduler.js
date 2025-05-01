const mainContaner = document.getElementById('main-container');
const mainTable = document.getElementById('mainContainerTable');

// main variables
var rowCount = 0;
var rowCountInitial = 0;

const masterList = []; // this array holds all the values for each row of the table. It is basically equivalent to the master schedule. but the user can change it. 
    // masterList[NUM] = "MMM-DD | DayOfWeek1 | TikTier2 | PrkHr3 | SplshPrtHr4 | Evnt5 | Entrtnmnt6";

function isOdd(num) {
    return num % 2 !== 0;
}

function setupMain(num){
    document.body.classList.add('loading'); // set cursor to loading
    // Setup Entertainment and Events List
    let entDisp = document.getElementById("eventEntDisplay");
    entDisp.innerHTML = "<em>Click to copy</em><h2>Events</h2>";
        for(i=0; i<eventData.length; i++){
            let temp = eventData[i];
            entDisp.innerHTML += "<p style='margin-top:0; font-size:12px; cursor:pointer;' onclick='navigator.clipboard.writeText("+'"'+temp.codeName+'"'+"); this.classList.toggle(\"clicked\");'>"+temp.codeName+" - " + temp.name + "</p>";
        }
    entDisp.innerHTML += "<h2>Entertainment</h2>";
        for(i=0; i<entertainmentList.length; i++){
            let temp = entertainmentList[i].split(" | ");
            entDisp.innerHTML += "<p style='margin-top:0; font-size:12px; cursor:pointer;' onclick='navigator.clipboard.writeText("+'"'+temp[0]+'"'+"); this.classList.toggle(\"clicked\");'>"+temp[0]+" - " + temp[1] + "</p>";
        }

    mainContaner.style.display = "block";
    document.getElementById('step1').style.display = "none";

    
    // Start new or use masterList
    if(num == 0){ // start fresh
        // Get todays date
        let tDate = new Date();
        masterList[0] = monthShort[tDate.getMonth()] + "-" + tDate.getDate() + " | "+weekDays[tDate.getDay()]+" | 0 | 0 | 0 | none | none";
        rowCount = 1;
    }else{
        // use masterSchedule
        for(i=0; i<mastSchedule.length; i++){
            masterList[i] = mastSchedule[i];
        }
        rowCount = masterList.length;
    }

    // setup the rows
    for(i=0; i<masterList.length; i++){
        let temp = masterList[i].split(" | ");
        mainTable.innerHTML += "<tr id='row-"+i+"'><td>"+i+"</td></tr>"; // create the row
            let thisRow = document.getElementById("row-"+i);
                thisRow.innerHTML += "<td id='row-"+i+"-date'>"+temp[0]+"</td><td><input id='row-"+i+"-weekday' onchange='saveRowValues("+i+")' style='width:100px;' type='text' value='"+temp[1]+"'></td>"; // add the date and weekday
                thisRow.innerHTML += "<td><p>Tier</p><select id='row-"+i+"-tier' onchange='saveRowValues("+i+"); setTierColor(this.id);'></select></td>"; // add tier selector
                thisRow.innerHTML += "<td><p>Park Hours (Shops District, Careaway, Port Adventure)</p><select id='row-"+i+"-parkHours' onchange='saveRowValues("+i+")'></select></td>"; // park hours selector
                thisRow.innerHTML += "<td><p>Splashport Bay Hours</p><select id='row-"+i+"-splashHours' onchange='saveRowValues("+i+")'></select></td>"; // splashport hours
                thisRow.innerHTML += "<td><p>Events</p><input type='text' id='row-"+i+"-events' onchange='saveRowValues("+i+")'></input></td>"; // events list
                thisRow.innerHTML += "<td><p>Entertainment</p><input type='text' id='row-"+i+"-entertainment' onchange='saveRowValues("+i+")'></input></td>"; // entertainment list
           
                // Fill selects with options
                let tierSelect = document.getElementById("row-"+i+"-tier");
                for(j=0; j<=5; j++){
                    tierSelect.innerHTML += "<option value='"+j+"'>"+j+"</option>";
                }

                let parkHourSelect = document.getElementById("row-"+i+"-parkHours");
                for(j=0; j<msPrkHours.length;j++){
                    parkHourSelect.innerHTML += "<option value='"+j+"'>"+msPrkHours[j]+"</option>";
                }

                let splashHoursSelect = document.getElementById("row-"+i+"-splashHours");
                for(j=0; j<msSplshHrs.length;j++){
                    splashHoursSelect.innerHTML += "<option value='"+j+"'>"+msSplshHrs[j]+"</option>";
                }

                if(isOdd(i)){
                    thisRow.style.backgroundColor = 'white';
                }
    }// end of for(i=0; i<masterList.length,i++)
    document.body.classList.remove('loading'); // set cursor to loading
    repopulateSelects();
}// end of function setupMain()

function setTierColor(id){
    let tierVal = document.getElementById(id);

    switch(tierVal.value){
        case "1":
            tierVal.style.backgroundColor = "rgb(255,255,250)";
            break;
        case "2":
            tierVal.style.backgroundColor = "rgb(232, 254, 138)";
            break;
        case "3":
            tierVal.style.backgroundColor = "rgb(255, 235, 148)";
            break;
        case "4":
            tierVal.style.backgroundColor = "rgb(255, 191, 127)";
            break;
        case "5":
            tierVal.style.backgroundColor = "rgb(255, 149, 125)";
            break;
        case "0":
            tierVal.style.backgroundColor = "rgb(255,0,0)";
            break;
    }

    console.log("setTierColor("+id+") -> "+tierVal.value);
} // end of function setTierColor(id)


function repopulateSelects(){ // since the selects reset, populates them with correct values
    document.body.classList.add('loading'); // set cursor to loading
    for(i=0;i<masterList.length;i++){
        let temp = masterList[i].split(" | ");

        document.getElementById('row-'+i+'-weekday').value = temp[1];
        document.getElementById('row-'+i+'-tier').value = temp[2]; setTierColor('row-'+i+'-tier');
        document.getElementById('row-'+i+'-parkHours').value = temp[3];
        document.getElementById('row-'+i+'-splashHours').value = temp[4];
        document.getElementById('row-'+i+'-events').value = temp[5];
        document.getElementById('row-'+i+'-entertainment').value = temp[6];
    }
    document.body.classList.remove('loading'); // set cursor to loading
}

function saveRowValues(num){
    document.body.classList.add('loading'); // set cursor to loading
    let rDate = document.getElementById('row-'+num+'-date').innerText;
    let rWeekday = document.getElementById('row-'+num+'-weekday').value;
    let rTier = document.getElementById('row-'+num+'-tier').value;
    let rParkHours = document.getElementById('row-'+num+'-parkHours').value;
    let rSplashHours = document.getElementById('row-'+num+'-splashHours').value;
    let rEvent = document.getElementById('row-'+num+'-events').value;
    let rEnt = document.getElementById('row-'+num+'-entertainment').value;

    masterList[num] = rDate + " | " + rWeekday + " | " + rTier + " | " + rParkHours + " | " + rSplashHours + " | " + rEvent + " | " + rEnt;
    console.log("Row " + num + " value saved: " + masterList[num]);
    document.body.classList.remove('loading'); // set cursor to loading
}

function addRow(type){
    document.body.classList.add('loading'); // set cursor to loading
    for(k=0; k<numToCopy.value;k++){
        let i = rowCount; rowCount += 1; 

    // dates
    let temp = [];
    let previousDate = document.getElementById("row-"+Number(i-1)+"-date").innerText.split("-"); // [MMM, DD]
        previousDate[1] = parseInt(previousDate[1]);
    let previousWeekday = document.getElementById("row-"+Number(i-1)+"-weekday").value; // Monday

    // check if new month
    if(previousDate[0] == 'FEB' && previousDate[1] == '28' && document.getElementById('isLeapYear').checked){ // is leap year
        temp[0] = previousDate[0]+"-"+Number(previousDate[1]+1);
    }else if(monthsDays[monthShort.indexOf(previousDate[0])] < Number(previousDate[1]+1)){ // is new month
        if(previousDate[0]+1 == 12){previousDate[0] = 0;} // reset to january
        temp[0] = monthShort[monthShort.indexOf(previousDate[0])+1] + "-1";
    }else{ // is not new month
        temp[0] = previousDate[0]+"-"+Number(previousDate[1]+1);
    }

    // day of week
    if(previousWeekday != "Saturday"){
        temp[1] = weekDays[weekDays.indexOf(previousWeekday)+1];
    }else{
        temp[1] = weekDays[0];
    }

    mainTable.innerHTML += "<tr id='row-"+i+"'><td>"+i+"</td></tr>"; // create the row
    let thisRow = document.getElementById("row-"+i);
        thisRow.innerHTML += "<td id='row-"+i+"-date'>"+temp[0]+"</td><td><input id='row-"+i+"-weekday' onchange='saveRowValues("+i+")' style='width:100px;' type='text' value='"+temp[1]+"'></td>"; // add the date and weekday
        thisRow.innerHTML += "<td><p>Tier</p><select id='row-"+i+"-tier' onchange='saveRowValues("+i+"); setTierColor(this.id);'></select></td>"; // add tier selector
        thisRow.innerHTML += "<td><p>Park Hours (Shops District, Careaway, Port Adventure)</p><select id='row-"+i+"-parkHours' onchange='saveRowValues("+i+")'></select></td>"; // park hours selector
        thisRow.innerHTML += "<td><p>Splashport Bay Hours</p><select id='row-"+i+"-splashHours' onchange='saveRowValues("+i+")'></select></td>"; // splashport hours
        thisRow.innerHTML += "<td><p>Events</p><input type='text' id='row-"+i+"-events' onchange='saveRowValues("+i+")'></input></td>"; // events list
        thisRow.innerHTML += "<td><p>Entertainment</p><input type='text' id='row-"+i+"-entertainment' onchange='saveRowValues("+i+")'></input></td>"; // entertainment list
   
        // Fill selects with options
        let tierSelect = document.getElementById("row-"+i+"-tier");
        for(j=0; j<=5; j++){
            tierSelect.innerHTML += "<option value='"+j+"'>"+j+"</option>";
        }

        let parkHourSelect = document.getElementById("row-"+i+"-parkHours");
        for(j=0; j<msPrkHours.length;j++){
            parkHourSelect.innerHTML += "<option value='"+j+"'>"+msPrkHours[j]+"</option>";
        }

        let splashHoursSelect = document.getElementById("row-"+i+"-splashHours");
        for(j=0; j<msSplshHrs.length;j++){
            splashHoursSelect.innerHTML += "<option value='"+j+"'>"+msSplshHrs[j]+"</option>";
        }

        if(isOdd(i)){
            thisRow.style.backgroundColor = 'white';
        }

        if(type == 'copy'){
            let tempList = masterList[i-1].split(" | ");
            masterList[i] = temp[0]+" | "+temp[1]+" | "+tempList[2]+" | "+tempList[3]+" | "+tempList[4]+" | "+tempList[5]+" | "+tempList[6];
        }else{
            masterList[i] = temp[0]+" | "+temp[1]+" | 0 | 0 | 0 | none | none";
        } 

    }// end of for
    document.body.classList.remove('loading'); // set cursor to loading
    repopulateSelects();

}// end of function addRow();

function genSchedule(){
    const resultBin = document.getElementById("resultBin");
    resultBin.innerHTML = "";
    for(i=0; i<masterList.length; i++){
        resultBin.innerHTML += "<br>mastSchedule["+i+"] = '"+masterList[i]+"';";
    }
}
