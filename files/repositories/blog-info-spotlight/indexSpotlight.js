indexSpotlight = [];
var ind = -1;

const webLink = 'https://gcparksandresorts.github.io/careawayresort/';

/*
ind+=1; indexSpotlight[ind] = {
    title: "spotlightTitle",
    months: "monthS", // use full month name, use comma no-space to add extra months
    textContent: "textContent",
    imgLink: "imageLink",
    clickLink: webLink+"local_link" 
}
*/

// IMPORTANT (SHOULD BE ON FIRST PAGE)

ind+=1; indexSpotlight[ind] = {
    title: "Celebrating Passover: Passover-Friendly Meals for Family YUM",
    months: "April", 
    textContent: "This Passover, we're excited to offer a variety of Passover-friendly meal options throughout the park so that all of our guests can savor delicious food while observing the holiday.",
    imgLink: "https://i.imgur.com/ikKyxdg.png",
    clickLink: webLink+"information/blog/post?n=passover-meal-options" 
}
ind+=1; indexSpotlight[ind] = {
    title: "Birthday Celebrations are Happening &#129395;",
    months: "April", 
    textContent: "This month, we celebrate two birthdays for two amazing gals! Happy Birthday Andrew and Leora <3 Click for two fun mini celebrations at Careaway Park!",
    imgLink: "https://i.imgur.com/rDQnaiQ.jpeg",
    clickLink: webLink+"information/blog/post?n=april-birthdays" 
}

ind+=1; indexSpotlight[ind] = {
    title: "The holidays are here, it's time for cheer!",
    months: "November,December", // use full month name, use comma no-space to add extra months
    textContent: "It's time for snowfall over Careaway Dr, sparkling lights all around, and delightful sights! The holidays are here and there's more cheer every year!",
    imgLink: "https://i.imgur.com/f6pbLx8.png",
    clickLink: webLink+"things-to-do/events/careaway-holidays" 
}

ind+=1; indexSpotlight[ind] = {
    title: "June is Pride Month",
    months: "June", // use full month name, use comma no-space to add extra months
    textContent: "This month, we celebrate all our colors! Explore fun events, parties, and rainbows across the resort",
    imgLink: "https://i.imgur.com/3PvobC9.png",
    clickLink: webLink+"information/blog/post?n=pride-month" 
}

ind+=1; indexSpotlight[ind] = {
    title: "Give the Gift of Adventure",
    months: "October,November,December", // use full month name, use comma no-space to add extra months
    textContent: "Surprise your loved ones and good friends with the gift of grand adventures and wonderful memories. Choose from a flexible range of ticket options to match your budget.",
    imgLink: "https://i.imgur.com/H8OMRMS.jpeg",
    clickLink: webLink+"tickets/gift-ticket" 
}



// SLIGHTLY LESS IMPORTANT
ind+=1; indexSpotlight[ind] = {
    title: "☎️ Your wardrobe is calling - it wants an upgrade.",
    months: "May,July,August,September", // use full month name, use comma no-space to add extra months
    textContent: "Forget that summer bod, invest in that Summer Style. Click to explore our amazing catalogue of clothes and accessories!",
    imgLink: "https://www.universalstudioshollywood.com/tridiondata/ush/en/us/files/images/universal-citywalk-shopping-802x535.jpg",
    clickLink: webLink+"store/home" 
}

ind+=1; indexSpotlight[ind] = {
    title: "Wear your colors with PRIDE",
    months: "June", // use full month name, use comma no-space to add extra months
    textContent: "This Pride Month, show off your style with sleek and sexy new looks from our online store!",
    imgLink: "https://i.imgur.com/XedZgQ5.jpeg",
    clickLink: webLink+"store/home" 
}

ind+=1; indexSpotlight[ind] = {
    title: "A Weekend Just Won't Be Enough...",
    months: "June,July,August", // use full month name, use comma no-space to add extra months
    textContent: "This summer, there's so much happening at the Careaway Resort. Events, Celebrations, Parties, and More! There's so much to explore, you'll just have to come back.",
    imgLink: "https://cpfoodblog.com/wp-content/uploads/2019/06/2019-Knotts-Summer-Nights-Smores.jpg",
    clickLink: webLink+"events/summer-adventures" 
}

// LESS IMPORTANT (DOESEN'T HAVE TO BE ON FIRST PAGE)

ind+=1; indexSpotlight[ind] = {
    title: "Puertas Nuevas Residents: Save BIG on Theme-Park Tickets!",
    months: "February,March,April,May", 
    textContent: "Residents with valid PNID can access exclusive offers on tickets including 3-day, 1 park per day tickets as low as $53 per day",
    imgLink: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNno5endza3Nxdm53YWpjMWhydGtwcXFuZmh2dHNyMDRwbzdkd2x4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k5SZBJqzdOnF6Tdjj4/giphy.gif",
    clickLink: webLink+"tickets/webstore?form=day-ticket" 
}

ind+=1; indexSpotlight[ind] = {
    title: "Closed for refurbishment",
    months: "January,February,March,April,May", 
    textContent: "Know before you go: some attractions may be closed for refurbishment. Click here to view the referb calendar.",
    imgLink: "https://i.imgur.com/4Xlk2uz.jpeg",
    clickLink: webLink+"information/blog/operations-update?n=referb-calendar" 
}

ind+=1; indexSpotlight[ind] = {
    title: "Back to school ❌&#128581; Back to the parks! ✔️&#128153;",
    months: "August", // use full month name, use comma no-space to add extra months
    textContent: "Forget school, come back to the parks! Fun and Adventure await (aka things you won't find in a lame classroom)!",
    imgLink: "https://i.imgur.com/NCyozNl.jpeg",
    clickLink: webLink+"tickets" 
}


/* 
ind += 1; indexSpotlight[ind] = "months | heading | text_content | click_link | image_link";


// January
indexSpotlight[ind] = "January | A year's worth of adventure | Start the new year with Adventure by purchsing a Careaway Resort annual passport for 12 months of theme park fun! | "+webLink+"tickets/annual-passports | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts3.jpg";
ind += 1; indexSpotlight[ind] = "January | Clearence Sales starting now | As the holidays move past, visit some of your favorite stores around the resort for limited-time clearence sales and large discounts on merchandise and apparel | "+webLink+"destinations/shops-and-more-district | https://www.universalstudioshollywood.com/tridiondata/ush/en/us/files/images/universal-citywalk-shopping-802x535.jpg";
ind += 1; indexSpotlight[ind] = "January | Closed for refurbishment | Know before you go: some attractions may be closed for refurbishment. Click here to view the referb calendar. | "+webLink+"information/blog/operations-update?index=7 | https://i.imgur.com/4Xlk2uz.jpeg";

// February
ind += 1; indexSpotlight[ind] = "February | Puertas Nuevas residents: save up to $200 on tickets | Residents with valid PNID can access exclusive offers on tickets to resort theme parks including 3-day, 1 park per day tickets as low as $53 per day | "+webLink+"tickets/resident-admission | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts3.jpg";
ind += 1; indexSpotlight[ind] = "February | Affordable vacation made easy | During the off-season, enjoy exclusive vacation packages at competitive prices for up to 40% off standard pricing. Leave the planning to us, we'll leave the fun to you! | "+webLink+"hotels/vacation-packages | https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/places-to-stay/grand-californian/recreation/grand-californian-pool-family-16x9.jpg?1706116994236";
ind += 1; indexSpotlight[ind] = "February | Valentines & Galentines Celebrations | It's the season of love, for significant others and for our besties. Celebrate with a care-free couple's retreat to the home of adventure! Click to view our list of the top 10 most romantic spots to profess your love at the Careaway Resort! | "+webLink+"information/blog/blog-post?index=4 | https://i.imgur.com/oSHVWEH.jpeg";
ind += 1; indexSpotlight[ind] = "February | A year's worth of adventure | Feel unlimited. Purchase a Careaway Resort annual passport for 12 months of theme park fun! | "+webLink+"tickets/annual-passports | https://i.imgur.com/w6T6Ege.jpeg";
ind += 1; indexSpotlight[ind] = "February | Closed for refurbishment | Know before you go: some attractions may be closed for refurbishment. Click here to view the referb calendar. | "+webLink+"information/blog/operations-update?index=7 | https://i.imgur.com/4Xlk2uz.jpeg";

// March
ind += 1; indexSpotlight[ind] = "March | Puertas Nuevas residents: save up to $200 on tickets | Residents with valid PNID can access exclusive offers on tickets to resort theme parks including 3-day, 1 park per day tickets as low as $53 per day | "+webLink+"tickets/resident-admission | https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNno5endza3Nxdm53YWpjMWhydGtwcXFuZmh2dHNyMDRwbzdkd2x4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k5SZBJqzdOnF6Tdjj4/giphy.gif";
ind += 1; indexSpotlight[ind] = "March | Spring Break fun for everyone | As spring comes around, enjoy the sunshine with a day of fun. Explore special ticket pricing and more for an affordable vacation that's fun for everyone | "+webLink+"tickets | https://i.imgur.com/cZyXX0U.jpeg";
ind += 1; indexSpotlight[ind] = "March | LaLa's Guide to fun in the sun | Whether its fun with family or cute spring dates or just-because, view this guide to maximize your fun in the sun in and out of the parks | "+webLink+"information/blog/fun-in-the-sun | https://i.imgur.com/danB9Na.jpeg";
ind += 1; indexSpotlight[ind] = "March | A year's worth of adventure | Feel unlimited. Purchase a Careaway Resort annual passport for 12 months of theme park fun! | "+webLink+"tickets/annual-passports | https://i.imgur.com/w6T6Ege.jpeg";
ind += 1; indexSpotlight[ind] = "March | Closed for refurbishment | Know before you go: some attractions may be closed for refurbishment. Click here to view the referb calendar. | "+webLink+"information/blog/operations-update?index=7 | https://i.imgur.com/4Xlk2uz.jpeg";

// April


// May
ind += 1; indexSpotlight[ind] = "May | Celebrating Our Opening Day | Take a blast to the past and explore the hectic opening day of Globe-City's Careaway Resort | "+webLink+"information/blog/look-back-opening-day | https://i.imgur.com/pa18xQe.jpeg";


// June
ind += 1; indexSpotlight[ind] = "June | Loud, Proud, and full of Love! | Celebrate pride month at an all-night party commemorating you and all your colors. Adventerous Nights of Pride is back in Puertas Nuevas and we're ready to be louder and prouder than ever! | click_link | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/logos/nop.jpg";
ind += 1; indexSpotlight[ind] = "June | The Witches are back! | Welcome Elphaba and Galinda back to the Sasson Theater stage for a summer of defying gravity and beating up old wizards! See Wicked and more with special summer entertainment!  | "+webLink+"things-to-do/entertainment?category=0&location=0&season=4 | https://gcparksandresorts.github.io/careawayresort/files/images/shows/wickedMusical.webp";
ind += 1; indexSpotlight[ind] = "June | Celebrate Pride With Exclusive Merch | Power to the gays! Proudly display your queer-ness with hot designer merch fresh from our studio. The gays are really cookin' with these! | "+webLink+"store/catalogue?search=pride | https://i.imgur.com/8TeM4rs.jpeg";

*/
