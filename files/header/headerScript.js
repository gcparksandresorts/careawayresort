const header = document.getElementById("header");
const footer = document.getElementById("footer");
const loader = document.getElementById("loader");

header.innerHTML = "<div id='headerBkg'></div><div id='headerBar'><div id='hbContent'><img id='headerLogo' src='https://gcparksandresorts.github.io/careawayresort/files/images/careawayresort-logo.png'></div></div>";

footer.innerHTML = "<img id='footerLogo' src='https://gcparksandresorts.github.io/careawayresort/files/images/careawayresort-logo-white.png'>";

loader.innerHTML = "<img src='https://gcparksandresorts.github.io/careawayresort/files/header/webfavicon.ico'><h2>Loading Page</h2>";

function finishLoad(){
	var opacVal = 1;
	let hdLd = setInterval(function(){opacVal -= 0.05; loader.style.opacity = opacVal; if(opacVal <= 0){clearInterval(hdLd);}},5);
}
