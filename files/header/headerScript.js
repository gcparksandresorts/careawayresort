const header = document.getElementById("header");
const footer = document.getElementById("footer");

const pgHead = document.getElementById("pgHead");
const loader = document.getElementById("loader");

header.innerHTML = "<div id='headerBkg'></div><div id='headerBar'><div id='hbContent'><img id='headerLogo' onclick='"+'window.open("https://gcparksandresorts.github.io/careawayresort/","_self")'+"'src='https://gcparksandresorts.github.io/careawayresort/files/images/careawayresort-logo.png'> \
			 <div id='hbLinks'> <a class='bigMen'>&#11206; Things to Do</a> <a class='bigMen'>Places to Stay</a> <a class='bigMen'>Events</a> <a class='bigMen'>&#11206; Information</a> <a class='btn filled bigMen'>Tickets & Passes</a> \
				<a class='miniMen' onclick='openMinMen(0)'>☰</a> </div> </div></div> \
				<div id='hbSideMenu'> <a onclick='openMinMen(1)'>&#11206; Things to Do</a> <div id='hbIntd1'> <a>Destinations</a> <a>Attractions & Entertainment</a> <a>Restaurants and Dining</a> <a>Shopping</a> </div> \
				<a><span style='opacity:0'>&#11206;</span> Places to Stay</a> <a><span style='opacity:0'>&#11206;</span> Special Events</a> \
				<a onclick='openMinMen(2)'>&#11206; Information</a> <div id='hbIntd2'> <a>Operating Schedule</a> <a>GC VIP Admission</a> <a>Annual Passports</a> <a>Safety Guidelines</a> </div> \
				<a class='btn'>Tickets and Passes</a> </div>";


// FOOTER SETUP
footer.innerHTML = "<img id='footerLogo' src='https://gcparksandresorts.github.io/careawayresort/files/images/careawayresort-logo-white.png'>";

// PAGE SETUP
loader.innerHTML = "<img src='https://gcparksandresorts.github.io/careawayresort/files/header/webfavicon.ico'><h2>Loading Page</h2>";

pgHead.innerHTML += "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'> \
			<link rel='stylesheet' href='https://gcparksandresorts.github.io/careawayresort/files/header/headerStyle.css'> \
			 <link rel='stylesheet' href='https://gcparksandresorts.github.io/careawayresort/files/styleSheet.css'> \
			<link rel='icon' type='image/x-icon' href='https://gcparksandresorts.github.io/careawayresort/files/header/webfavicon.ico'>";

// Function to close the loader after the page is fully loaded
function finishLoad(){
	var opacVal = 1;
	let hdLd = setInterval(function(){opacVal -= 0.05; loader.style.opacity = opacVal; if(opacVal <= 0){clearInterval(hdLd); loader.style.display='none';}},10);
}

// Function for controlling the sub menues of the minimized screen side menu
function openMinMen(num){
        var tempDoc = 'Nan';
        switch(num){
		case 0:
			tempDoc = document.getElementById("hbSideMenu");  
		break;
            	case 1:
        		tempDoc = document.getElementById("hbIntd1");  
               	break;
            	case 2:
                	tempDoc = document.getElementById("hbIntd2");
                break;
            }// end of switch
	
        if(tempDoc.style.display == 'block'){
                  	tempDoc.style.display = 'none';
        }else{
               	tempDoc.style.display = 'block';
        }
}// end of function openMinMen
