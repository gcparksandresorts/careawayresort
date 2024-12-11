const header = document.getElementById("header");
const footer = document.getElementById("footer");

const pgHead = document.getElementById("pgHead");
const loader = document.getElementById("loader");

header.innerHTML = "<div id='headerBkg'></div><div id='headerBar'><div id='hbContent'><img id='headerLogo' onclick='"+'window.open("https://gcparksandresorts.github.io/careawayresort/","_self")'+"'src='https://gcparksandresorts.github.io/careawayresort/files/images/careawayresort-logo.png'> \
			 <div id='hbLinks'> <a class='bigMen'>Home</a> <a class='bigMen'>Things to Do</a> <a class='bigMen'>Places to Stay</a> <a class='bigMen'>Information</a> <a class='btn filled bigMen'>Tickets & Passes</a> \
				<a class='miniMen'></a> </div> </div></div>";

			// FOR SMALLER SCREENS: <a>☰</a>


// FOOTER SETUP
footer.innerHTML = "<img id='footerLogo' src='https://gcparksandresorts.github.io/careawayresort/files/images/careawayresort-logo-white.png'>";

// PAGE SETUP
loader.innerHTML = "<img src='https://gcparksandresorts.github.io/careawayresort/files/header/webfavicon.ico'><h2>Loading Page</h2>";

pgHead.innerHTML += "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'> \
			<link rel='stylesheet' href='https://gcparksandresorts.github.io/careawayresort/files/header/headerStyle.css'> \
			 <link rel='stylesheet' href='https://gcparksandresorts.github.io/careawayresort/files/styleSheet.css'> \
			<link rel='icon' type='image/x-icon' href='https://gcparksandresorts.github.io/careawayresort/files/header/webfavicon.ico'>";

function finishLoad(){
	var opacVal = 1;
	let hdLd = setInterval(function(){opacVal -= 0.05; loader.style.opacity = opacVal; if(opacVal <= 0){clearInterval(hdLd); loader.style.display='none';}},10);
}
