function generateTicket(type,date,numDays,name){
	// type : # - index value of the type of ticket
	// date : MM-DD - dual-integer value of month and day of first visit
	// numDays : ### - number of days the ticket is valid for following the first visit
	// name: ABCDEFG - letter value of the first name, no spaces

	// Final code: MMDDTTGCnametotextAOaddons

	var outputCode = "";

	let temp = date.split("-");
	outputCode = temp[0] + "" + temp[1];

	if(type < 10){
		outputCode += "0" + type;
	}else{
		outputCode += type;
	}

	let result = "GC"; // Initialize an empty string to store the result
	name = name.toUpperCase().replace(/\s/g, '-');
	
    	for (let i = 0; i < name.length; i++) {
		if(name.charCodeAt(i) != 32){
		        let charCode = name.charCodeAt(i) - 64; // Get the ASCII code of each character
		        result += charCode.toString().padStart(2, '0'); // Append the character code to the result string
		}else{ result += "-";}
    	}

	outputCode += result.toString();
	
	// Convert Name to Integer Values
	

	outputCode += "AO";

	console.log("Generated Code: " + outputCode);

	return outputCode;
}// end of function generateTicket(type,date,numDays,name)
