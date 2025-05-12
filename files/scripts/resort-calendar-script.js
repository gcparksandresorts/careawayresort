const infoSelector = document.getElementById('infoSelector'); // holds the options for what info to display
const updateInfoSelectBtn = document.getElementById('updateInfoSelector'); // pressed when user wants to refresh calendar

const infoOptions = [ // Options for what info can be displayed
  "Operating Hours", // 0
  "Ticket Prices", // 1
  "Annual Passport Validity", // 2
  "Events Schedule", // 3
  "Entertainment Schedule" // 4
];

var infoOptionsChosen = []; // list of items selected to be displayed

const searchParams = new URLSearchParams(window.location.search);

if(searchParams.has('showInfo')){}
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
