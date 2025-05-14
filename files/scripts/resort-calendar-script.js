const infoSelector = document.getElementById('infoSelector'); // holds the options for what info to display
const updateInfoSelectBtn = document.getElementById('updateInfoSelector'); // pressed when user wants to refresh calendar

const infoOptions = [ // Options for what info can be displayed
  "Operating Hours", // 0
  "Lowest Ticket Prices", // 1
  "Ticketing Tier",
  "Annual Passport Validity", // 2
  "Events Schedule", // 3
  "Entertainment Schedule" // 4
];

var infoOptionsChosen = []; // list of items selected to be displayed

const searchParams = new URLSearchParams(window.location.search);

if(searchParams.has('showInfo')){
	let temp = searchParams.get('showInfo');
	if(temp.includes('-')){
		temp = temp.split('-');
	}else{
		temp = [temp];
	}

	for(t=0; t<temp.length; t++){
		infoOptionsChosen[t] = temp[t].replace(/\+/g, ' ');
	}
}
else{infoOptionsChosen = ['Operating Hours'];}

// populate infoSelector
infoSelector.innerHTML = "";
for(i=0; i<infoOptions.length; i++){
  infoSelector.innerHTML += "<a id='show-"+i+"' onclick='this.classList.toggle(\"isSelected\"); addInfoType();'>"+infoOptions[i]+"</a>";
  if(infoOptionsChosen.includes(infoOptions[i])){
      document.getElementById('show-'+i).classList.toggle("isSelected");
  }
}

function addInfoType(){
	infoOptionsChosen = []; // reset the array
	var tempIndex = 0;

	// Find which tags have been selected
	for(k=0; k<infoOptions.length; k++){
		let item = document.getElementById('show-'+k);
		if(item.classList.contains('isSelected')){
			infoOptionsChosen[tempIndex] = infoOptions[k];
			tempIndex += 1;
		}
	}

	// Generate the link to view the calendar with the updated preferences
	if(infoOptionsChosen.length > 0){
		  var finalLink = '?showInfo=';
		  for(d=0; d<infoOptionsChosen.length; d++){
			if(d>0){ finalLink += "-" + infoOptionsChosen[d].replace(/ /g, "+"); }
			  else{ finalLink += "" + infoOptionsChosen[d].replace(/ /g, "+"); }
		  }
		  updateInfoSelectBtn.innerHTML = "<a href='"+finalLink+"'>Update Preferences</a>";
	}
	else{updateInfoSelectBtn.innerHTML = '<em>Select at least one type of information</em>';}
	
}// end of addInfoType()


// POPULATE CALENDAR ------------------------------------------------------------------------------------------------

const tDate = new Date();
	var curMonth = tDate.getMonth();
	var curDay = tDate.getDate();
	var curWeekday = tDate.getDay();
	var curYear = tDate.getFullYear();

const calendarContainer = document.getElementById('calendarContainer'); calendarContainer.innerHTML = "";
	//calendarContainer.innerHTML = "<h2>"+months[curMonth]+" "+curYear+"</h2><div class='calendarWindow' id='month-"+curMonth+"'></div>";

for(d=0; d<mastSchedule.length; d++){

	// See if there is a container for this month, if not -> make one
	var tempDestination = document.getElementById('month-' + curMonth);
	if(tempDestination == null){
		calendarContainer.innerHTML += "<br><br><h2>"+months[curMonth]+" "+curYear+"</h2><div class='calendarWindow' id='month-"+curMonth+"'></div>";
		tempDestination = document.getElementById('month-' + curMonth);
	}

	let temp = mastSchedule[d].split(' | ');
	// mastSchedule[NUM] = "MMM-DD | DayOfWeek1 | TikTier2 | PrkHr3 | SplshPrtHr4 | Evnt5 | Entrtnmnt6";

	tempDestination.innerHTML += "<div onclick='window.open(\"resort-schedule?date="+temp[0]+"\")' id='item-"+d+"'><h3>"+temp[1]+", "+months[curMonth]+" " +curDay+ "</h3></div>";
	const madeDestination = document.getElementById('item-' + d);

	// Populate with content based on specified preferences in infoOptionsChosen
		if(infoOptionsChosen.includes('Operating Hours')){
			let $temp = msPrkHours[temp[3]].split(' | ').map(item => item.replace(/\+/g, "<br>Special Event:<br>"));
			madeDestination.innerHTML += "<p class='lItem'><b style='color:rgb(11, 0, 73);'>Careaway Park</b><br>"+$temp[1]+"</p>";
			madeDestination.innerHTML += "<p class='lItem'><b style='color:rgb(0, 74, 2);'>Port of Adventure</b><br>"+$temp[2]+"</p>";
			madeDestination.innerHTML += "<p class='lItem'><b style='color:rgb(80, 17, 0);'>Shops & More District</b><br>"+$temp[0]+"</p>";

			var $plashHr = msSplshHrs[temp[4]]; if(msSplshHrs[temp[4]].includes('+')){$plashHr = msSplshHrs[temp[4]].replace(/\+/g, "<br>Special Event:<br>");}
			madeDestination.innerHTML += "<p class='lItem'><b style='color:rgb(0, 76, 80);'>Splashport Bay</b><br>"+$plashHr+"</p>";
		}

		if(infoOptionsChosen.includes('Lowest Ticket Prices')){
			if(infoOptionsChosen.length > 1){madeDestination.innerHTML += "<div class='spacer'></div>";} // add line divider
			let $temp = msTikPrice[temp[2]-1].split(' | ');
			madeDestination.innerHTML += "<p class='lItem'>Resident SP: <b style='color:rgb(0, 81, 3);'>$"+$temp[0]+"</b></p>";
			madeDestination.innerHTML += "<p class='lItem'>General SP: <b style='color:rgb(0, 81, 3);'>$"+$temp[1]+"</b></p>";
			madeDestination.innerHTML += "<p class='lItem'>GCVIP SP: <b style='color:rgb(0, 81, 3);'>$"+$temp[2]+"</b></p>";
		}

		if(infoOptionsChosen.includes('Ticketing Tier')){
			switch(temp[2]){
				case '1':
					madeDestination.style.backgroundColor = 'rgb(188, 254, 138)';
					break;
				case '2':
					madeDestination.style.backgroundColor = 'rgb(232, 254, 138)';
					break;
				case '3':
					madeDestination.style.backgroundColor = 'rgb(254, 239, 138)';
					break;
				case '4':
					madeDestination.style.backgroundColor = 'rgb(254, 215, 138)';
					break;
				case '5':
					madeDestination.style.backgroundColor = 'rgb(254, 155, 138)';
					break;
			}
		}

		if(infoOptionsChosen.includes('Annual Passport Validity')){
			if(infoOptionsChosen.length > 1){madeDestination.innerHTML += "<div class='spacer'></div>";} // add line divider
			switch(temp[2]){
				case '1':
					madeDestination.innerHTML += "<p class='lItem'>&#9989;Resident Pass</p>\
						<p class='lItem'>&#9989;Grand Adventure Pass </p>\
						<p class='lItem'>&#9989;Platinum/VIP Pass </p>";
					break;
				case '2':
					madeDestination.innerHTML += "<p class='lItem'>&#9989;Resident Pass</p>\
						<p class='lItem'>&#9989;Grand Adventure Pass </p>\
						<p class='lItem'>&#9989;Platinum/VIP Pass </p>";
					break;
				case '3':
					madeDestination.innerHTML += "<p class='lItem'>&#10060;Resident Pass</p>\
						<p class='lItem'>&#9989;Grand Adventure Pass </p>\
						<p class='lItem'>&#9989;Platinum/VIP Pass </p>";
					break;
				case '4':
					madeDestination.innerHTML += "<p class='lItem'>&#10060;Resident Pass</p>\
						<p class='lItem'>&#10060;Grand Adventure Pass </p>\
						<p class='lItem'>&#9989;Platinum/VIP Pass </p>";
					break;
				case '5':
					madeDestination.innerHTML += "<p class='lItem'>&#10060;Resident Pass</p>\
						<p class='lItem'>&#10060;Grand Adventure Pass </p>\
						<p class='lItem'>&#9989;Platinum/VIP Pass </p>";
					break;
			}
		}

		if(infoOptionsChosen.includes('Events Schedule')){
			if(infoOptionsChosen.length > 1){madeDestination.innerHTML += "<div class='spacer'></div>";} // add line divider
			madeDestination.innerHTML += "<div id='eventsList-"+d+"'></div>";
			if(temp[5] != 'none'){
				var eventList; if(temp[5].includes(',')){eventList = temp[5].split(',');}else if(temp[5] != 'none'){eventList = [temp[5]];}

				for(pp=0; pp<eventList.length; pp++){
					let srchInd = eventList[pp];
					for(gg=0; gg<eventData.length; gg++){
						if(eventData[gg].codeName == srchInd){
							document.getElementById('eventsList-'+d).innerHTML += "<p class='lItem'>&#128197; "+eventData[gg].name+"</p>";
							break;
						}
					}
				}

			}else{
				document.getElementById('eventsList-'+d).innerHTML = 'No Events';
			}
		}

		if(infoOptionsChosen.includes('Entertainment Schedule')){
			if(infoOptionsChosen.length > 1){madeDestination.innerHTML += "<div class='spacer'></div>";} // add line divider
			madeDestination.innerHTML += "<div id='entertainmentsList-"+d+"'></div>";
			if(temp[6] != 'none'){
				var entList; if(temp[6].includes(',')){entList = temp[6].split(',');}else if(temp[6] != 'none'){entList = [temp[6]];}

				for(pp=0; pp<entList.length; pp++){
					let srchInd = entList[pp];
					for(gg=0; gg<entertainmentList.length; gg++){
						if(entertainmentList[gg].code == srchInd){
							document.getElementById('entertainmentsList-'+d).innerHTML += "<p class='lItem'>&#127926; "+entertainmentList[gg].name+"</p>";
							break;
						}
					}
				}

			}else{
				document.getElementById('eventsList-'+d).innerHTML = 'No Events';
			}
		}

	

	// Setup for next date
	curDay += 1;
	if(curDay > monthsDays[curMonth]){
		curDay = 1;
		curMonth += 1;
		if(curMonth > months.length){curMonth = 0; curYear += 1;}
	}

}// end of for(d=0; d<mastSchedule.length; d++)


