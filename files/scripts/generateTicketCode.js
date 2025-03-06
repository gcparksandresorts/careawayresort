function generateTicket(type,date,numDays,name,addOn){
	// type : # - index value of the type of ticket
	// date : MM-DD - dual-integer value of month and day of first visit
	// numDays : ### - number of days the ticket is valid for following the first visit
	// name: ABCDEFG - letter value of the first name, no spaces

	// Final code: MMDDTTGCnametotextAOaddonsDnumDays

	var outputCode = "";

	let temp1= date.split("-");
	outputCode = temp1[0] + "" + temp1[1];

	if(type < 10){
		outputCode += "0" + type;
	}else{
		outputCode += type;
	}

	let result = "GC"; // Initialize an empty string to store the result
	name = name.toUpperCase(); //.replace(/\s/g, '-')
	
    	for (let j= 0; j< name.length; j++) {
		if(name.charCodeAt(j) != '32'){
		        let charCode = name.charCodeAt(j) - 64; // Get the ASCIjcode of each character
		        result += charCode.toString().padStart(2, '0'); // Append the character code to the result string
		}else{ result += "00";} // Replace SPACE with 00
    	}

	outputCode += result.toString();
	
	// Convert Name to Integer Values
	

	outputCode += "AO" + addOn;

	outputCode += "D" + numDays;

	console.log("Generated Code: " + outputCode);

	return outputCode;
}// end of function generateTicket(type,date,numDays,name,addOn)

function readTicket(ticketID){ 
	// Final code: MMDDTTGCnametotextAOaddonsDnumDays
	
	// Split barcode at the GC
	let temp1= ticketID.split("GC");
		let temp2 = temp1[1].split("AO"); // seperate name and addOns sections
		let nameCode = temp2[0]; // name
			temp2 = temp2[1].split("D"); // seperate addOns and number of days
		let addOnCode = temp2[0]; // add on
		let numDays = temp2[1]; // number of days
	

	// Get Ticket Type TT
	let tikType = temp1[0].substring(4,6);

	// Get visit date (MM-DD)
	let visDate = temp1[0].substring(0,2) + "-" + temp1[0].substring(2,4);
	
	// Decode Name
	let nameVal = "";
	for (let j= 0; j< nameCode.length; j+= 2) {
		let numStr = nameCode.substring(j, j+ 2); // get two digits at a time
		if(numStr != '00'){
			let charCode = parseInt(numStr) + 64; // Convert number back to ASCII code
			nameVal += String.fromCharCode(charCode); // Convert ASCII code to letter
		}else{nameVal += " ";}
	}

	const resultsVal = [nameVal, tikType, visDate, numDays, addOnCode];

	return resultsVal;
}// end of function readTicket(ticketID)

/*
	console.clear;
	console.log(generateTicket(1,"03-15",1,"Reuven Reyman","0"));
*/
