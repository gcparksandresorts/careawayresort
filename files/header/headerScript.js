const header = document.getElementById("header");
const footer = document.getElementById("footer");

const pgHead = document.getElementById("pgHead");
const loader = document.getElementById("loader");

const siteLink = "https://gcparksandresorts.github.io/careawayresort/"; //   "+siteLink+"   //

setTimeout(function(){if(loader.style.display != 'none'){ console.error("Load timeout - page is not finished loading"); finishLoad();}else{console.log("Page fully loaded")}}, 8000); // Clear the loader prematurly if load is taking too long

header.innerHTML = "<div id='headerBkg'></div><div id='headerBar'><div id='hbContent'><img id='headerLogo' onclick='"+'window.open("https://gcparksandresorts.github.io/careawayresort/","_self")'+"'src='https://gcparksandresorts.github.io/careawayresort/files/images/logos/careawayresort-logo.png'> \
			 <div id='hbLinks'> <a class='bigMen' id='ttdOpen' onclick='toggleBarMenu(1)'>&#11206; Things to Do</a> <a class='bigMen' href='"+siteLink+"hotels/home'>Places to Stay</a> <a class='bigMen' id='moreInfoBtn' onclick='toggleBarMenu(2)'>&#11206; Information</a> <a class='bigMen' href='"+siteLink+"store/home'>Online Shop</a> <a class='btn filled bigMen' href=' "+siteLink+"tickets'>Tickets & Passes</a> \
				<a class='miniMen' onclick='openSideMenu()'>☰</a> </div> </div></div> \
			<div id='hbSideMenu' class=''><a class='btn' href='"+siteLink+"tickets'>Tickets and Passes</a> \
				<a onclick='document.getElementById("+'"hbIntd1"'+").classList.toggle("+'"open"'+");'>&#11206; Things to Do</a> <div id='hbIntd1' class='hbSMsubMen'> <a href='"+siteLink+"#destinationSection'>Destinations</a> <a href='"+siteLink+"things-to-do/attractions'>Rides & Attractions</a> <a href='"+siteLink+"things-to-do/entertainment'>Entertainment</a> <a href='"+siteLink+"things-to-do/dining'>Restaurants and Dining</a> <a>Shopping</a> <a>Recreation</a></div> \
				<a href='"+siteLink+"hotels/home'><span style='opacity:0'>&#11206;</span> Places to Stay</a> \
				<a onclick='document.getElementById("+'"hbIntd2"'+").classList.toggle("+'"open"'+");'>&#11206; Information</a> <div id='hbIntd2' class='hbSMsubMen'> <a href='"+siteLink+"information/resort-schedule'>Operating Schedule</a> <a>GC VIP Admission</a> <a>Annual Passports</a> <a href='"+siteLink+"information/safety-guidelines'>Safety Guidelines</a> \
				</div> <a href='"+siteLink+"store/home'><span style='opacity:0'>&#11206;</span> Online Shop</a> </div> \
			<div id='hbSideMenuCloser' onclick='openSideMenu()'></div> \
			<div id='ttdbarMenu' class='barMenu'> \
				<div id='leftSection'> \
                			<h4>Destinations</h4> <a href='"+siteLink+"destinations/careaway-park'>Globe-City's Careaway Park</a><a href='"+siteLink+"destinations/port-of-adventure'>Globe-City Port of Adventure</a><a href='"+siteLink+"destinations/splashport-bay'>Globe-City Splashport Bay</a> <a href='"+siteLink+"destinations/shops-and-more-district'>Shops & More District</a> <a href='"+siteLink+"hotels/home'>Hotels & Resorts</a> \
                		</div> <div id='rightSection'> \
					<div> <img class='rsBackground' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts3.jpg'> <div class='rsHider'></div> <img class='rsIcon' src='https://aztechadmit.github.io/visitpn/files/images/menuIcons/menuIcon.png'> <h4>Attractions</h4> <a href='"+siteLink+"things-to-do/attractions'></a> </div> \
					<div> <img class='rsBackground' src='https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/attractions/cinderella-castle/MK17-HappilyEverAfter0507-263_1-16x9.jpg?2022-03-10T19:31:46+00:00'> <div class='rsHider'></div> <img class='rsIcon' src='https://aztechadmit.github.io/visitpn/files/images/menuIcons/menuIcon(3).png'> <h4>Entertainment</h4> <a href='"+siteLink+"things-to-do/entertainment'></a> </div> \
					<div> <img class='rsBackground' src='https://www.militarydisneytips.com/wp-content/uploads/2019/12/Flame-Tree-Barbeque-Salad.jpg'> <div class='rsHider'></div> <img class='rsIcon' src='https://aztechadmit.github.io/visitpn/files/images/menuIcons/menuIcon(1).png'> <h4>Restaurants & Dining</h4> <a href='"+siteLink+"things-to-do/dining'></a> </div> \
					<div> <img class='rsBackground' src='https://gcparksandresorts.github.io/gcresorthighland/webresources/images/vipBanner1.jpg'> <div class='rsHider'></div> <img class='rsIcon' src='https://aztechadmit.github.io/visitpn/files/images/menuIcons/menuIcon(8).png'> <h4>Shopping</h4> <a></a> </div> \
					<div> <img class='rsBackground' src='https://www.azcentral.com/gcdn/presto/2019/04/17/PPHX/2d57cc62-07ed-4659-8bc6-7f18cebc7a1b-Oogie_Boogie_Bash_Hero_Image.jpg?crop=2699,1518,x1,y207&width=1600&height=800&format=pjpg&auto=webp'> <div class='rsHider'></div> <img class='rsIcon' src='https://aztechadmit.github.io/visitpn/files/images/menuIcons/menuIcon(10).png'> <h4>Seasonal Events</h4> <a></a> </div> \
				</div> </div> \
			<div id='infobarMenu' class='barMenu'> \
					<div class='evenSection'> <h4>Plan Your Visit</h4> <a href='"+siteLink+"information/resort-schedule'>Operating Hours and Resort Schedule</a> <a>Resort Maps</a> <a>Parking & Transportation</a> <a>Mobile App</a></div> \
					<div class='evenSection'> <h4>Resort Services</h4> <a>Lockers & Rentals</a> <a>Meetings & Event Spaces</a> <a>Security & Medical</a> <a>Accessibility</a></div> \
					<div class='evenSection'> <h4>Guest Connections</h4> <a>Contact Us</a> <a>Frequently Asked Questions</a> <a href='"+siteLink+"information/safety-guidelines'>Rules and Guidelines</a></div> \
					<div class='evenSection'> <h4>Upgraded Experiences</h4> <a>GC VIP</a> <a>Guided Tours</a> <a>Dining Reservations</a></div>\
			</div>";


// FOOTER SETUP
footer.innerHTML = "<div id='footerLinks'> \
				<div><img id='footerLogo' src='https://gcparksandresorts.github.io/careawayresort/files/images/logos/careawayresort-logo-white.png'></div> \
				<div><h4>Resorts & Destinations</h4><a href='"+siteLink+"destinations/careaway-park'>Globe-City's Careaway Park</a><a href='"+siteLink+"destinations/port-of-adventure'>Globe-City Port of Adventure</a><a href='"+siteLink+"destinations/splashport-bay'>Globe-City Splashport Bay</a> <a href='"+siteLink+"destinations/shops-and-more-district'>Shops & More District</a> <a href='"+siteLink+"hotels/sprucewood-lodge'>Globe-City's Sprucewood Lodge Resort</a><a href='"+siteLink+"hotels/world-of-wonder'>Globe-City World of Wonder</a><a>The RW Hotel</a><a>MCR Port of Palms Resort</a><a>MCR Splashport Hotel</a></div> \
				<div><h4>Tickets & Passes</h4> <a href='"+siteLink+"tickets'>Park Tickets</a> <a href='"+siteLink+"tickets/annual-passports'>Annual Passports</a> <a href='"+siteLink+"tickets/gcvip'>GC VIP Tickets</a> <a>Vacation Packages</a> <a>Group Admission</a> <a>Promotions & Discounts</a> <a href='"+siteLink+"tickets/gift-tickets'>Gift Tickets</a></div> \
				<div><h4>Events & Experiences</h4> <a>Seasonal Events</a> <a>Meetings & Events</a> <a>Youth Programs</a> <a>Travel Planning</a></div> \
				<div><h4>Information</h4> <a href='"+siteLink+"information/safety-guidelines'>Safety Guidelines</a> <a>Frequently Asked Questions</a> <a>Accessibility</a> <a>Resort Services & Rentals</a> <a href='"+siteLink+"business/corporate-partners'>Corporate Partners</a> <a href='"+siteLink+"information/blog'>Resort Blog & Updates</a> <a>Contact Us</a></div> \
			</div> <div class='container' style='color:white;margin-top:0px;margin-bottom:0px;'> <div class='spacer light'></div>  <p><b>Get in Touch</b><br>(311) 868 9000 | <a href='mailto:globecityparksandresorts@gmail.com'>guestservices.gccr@gcpr.net</a></p> <p>300 Adventure Blvd.<br>Oceanfields PN, 53000</p> \
				<div class='spacer light'></div> <p><span style='font-size:12px'>(C) 2025 Globe-City Entertainment LLC | Parks & Resorts</span><br><a href='"+siteLink+"business/legal#privacyPolicy'>Privacy Policy</a> | <a href='"+siteLink+"business/legal'>Legal Information</a> | <a href='"+siteLink+"business/mcbpo'>MCBPO</a> | <a>Careers</a></p>";

// PAGE SETUP
loader.innerHTML = "<img src='https://gcparksandresorts.github.io/careawayresort/files/header/webfavicon.ico'><h2>Loading Page</h2>";

pgHead.innerHTML += "<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'> \
			<link rel='stylesheet' href='https://gcparksandresorts.github.io/careawayresort/files/styleSheet.css'> \
			<link href='https://fonts.googleapis.com/css?family=Funnel+Sans|Lexend+Deca' rel='stylesheet'>\
			<link rel='icon' type='image/x-icon' href='https://gcparksandresorts.github.io/careawayresort/files/header/webfavicon.ico'>";

// Function to close the loader after the page is fully loaded
function finishLoad(){
	var opacVal = 1;
	let hdLd = setInterval(function(){opacVal -= 0.025; loader.style.opacity = opacVal; if(opacVal <= 0){clearInterval(hdLd); loader.style.display='none';}},10);
}

// Open or close the side menu by adding or removing the class that moves it to the right of the screen
function openSideMenu(){document.getElementById("hbSideMenu").classList.toggle("open"); document.getElementById("hbSideMenuCloser").classList.toggle("open");}

function toggleBarMenu(num){

	ttdButton = document.getElementById("ttdOpen");
	moreInfoButton = document.getElementById("moreInfoBtn");

	ttdbarMenu = document.getElementById("ttdbarMenu");
	infobarMenu = document.getElementById("infobarMenu");
	
	
	if(num==1){
		ttdButton.classList.toggle("isSelected");
		moreInfoButton.classList.remove("isSelected");
		ttdbarMenu.classList.toggle("open");
		infobarMenu.classList.remove("open");
	}else if(num==2){
		ttdButton.classList.remove("isSelected");
		moreInfoButton.classList.toggle("isSelected");
		ttdbarMenu.classList.remove("open");
		infobarMenu.classList.toggle("open");
	}else{
		ttdButton.classList.remove("isSelected");
		moreInfoButton.classList.remove("isSelected");
		ttdbarMenu.classList.remove("open");
		infobarMenu.classList.remove("open");
	}
}
