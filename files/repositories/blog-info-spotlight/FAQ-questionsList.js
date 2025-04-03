questionList = [];
answerList = [];

categoryList = ["none", "General", "Theme Parks", "Resort Hotels", "Annual Passports", "GC VIP", "Accessibility", "Transportation", "Restaurants and Dining", "Merchandise & Online Store"];
//                0        1            2              3                4                 5          6                  7                        8

/*
iter+=1;  questionList[iter] = "category | question";
    answerList[iter] = "answer";
*/
var iter = -1;

// General - 1




// Theme Parks - 2
    iter+=1;  questionList[iter] = "2 | Are the theme parks and water parks open year-round?";
        answerList[iter] = "Globe-City's Careaway Park and Port of Adventure are both open year-round (though severe weather may affect operating hours). Splashport Bay is only open during spring and summer seasons when the weather is warm. <p>See the <a href='resort-schedule'>Resort Operating Hours</a> page for details.</p>";

    iter+=1;  questionList[iter] = "2 | Are pets allowed in the theme parks or water park?";
        answerList[iter] = "Generally no. Service animals (dogs or miniature horses) with verified MCSA identification are permitted. Service Animals generally cannot acompany guests on rides, a kennel will be provided.";
    
    iter+=1;  questionList[iter] = "2 | How does theme park admission work? Can I access both parks?";
        answerList[iter] = "For Globe-City's Careaway Park and Port of Adventure, there are two types of tickets: <ul><li>Single-Park: access to only one park per day (whichever park you enter first), you won't be able to use this ticket at the other park on that day</li><li>Park-to-park: Access to both parks for the whole day.</li></ul>Splashport Bay requires seperate admission.";  




// Resort Hotels - 3
    iter+=1;  questionList[iter] = "3 | What time is check-in / check-out";
        answerList[iter] = "Generally, check-in is anytime after 3PM and guests must check-out of their room before 11AM.";




// Annual Passports - 4




// GC VIP - 5
    iter+=1;  questionList[iter] = "5 | If I upgrade my admission to GC VIP, can I upgrade again to a higher tier later?";
        answerList[iter] = "Yes, all admission tiers are eligible to upgrade to a higher tier of GCVIP privileges. However, certain tiers may be sold-out during your visit. Consult Guest Services or any in-park information booths for details.";

    iter+=1;  questionList[iter] = "5 | If I am visiting with an Annual Passport, can I still upgrade to GC VIP Privileges?";
        answerList[iter] = "Yup! You can purchase for-the-day GC VIP privileges at Will Call, Guest Services, or any in-park information booths. You can also upgrade your annual passport to the Platinum VIP Passport at Guest Services for 12 months of VIP privileges.";

    iter+=1;  questionList[iter] = "5 | How do I know how much time is left on my cool-down period after using my GC VIP priority queue access?";
        answerList[iter] = "Currently, the only way to check if your pass is valid is to visit any priority queue entrance. Once your ticket is scanned, the screen will display how much time you have remaining on your cool-down period.";

    iter+=1;  questionList[iter] = "5 | What if I lose my GC VIP paper ticket?";
        answerList[iter] = "Once your ticket is printed, we encourage you to download the GC RESORT mobile app and link your tickets right away! This way you will always have a digital version of your ticket. If you lose your paper ticket, they can be reprinted at any in-park information booth, guest services, or Will Call. Either your paper ticket or your digital ticket are requried to enter the prirority queues and lounges.";
    
    iter += 1; questionList[iter] = "5 | How do I redeem the complimentary GC PhotoPass"; 
        answerList[iter] = "GC VIP Deluxe and Platinum admission and upgrades include complimentary GC PhotoPass for unlimited downloads of all your ride photos and in-park photos. To access this feature, download the GC RESORT mobile app, press 'Link Tickets' then scan the barcode on the back of your admission tickets. Once linked, visit the GC PhotoPass module to link ride photos, linking your ticket should automatically unlock access to this feature.";
  



// Accessibility - 6




// Transportation - 7
    iter+=1;  questionList[iter] = "7 | What / where is preffered parking?";
        answerList[iter] = "Preffered parking costs more than general parking but it usually allows you to park much closer to the resort and is more convenient. Preffered parking is NOT the same as accessible parking which is always located near elevators or ramps. The location of preffered parking varries based on the parking lot, though guests wishing to get preffered parking will still enter the parking lot via the general entrance.<p>For the Adventure Parking structure, preffered parking is located on the first floor closest to the Shops&More District entrance (west). For metered parking (Shops District Parking), the preffered parking is located nearest to the roundabout where guests will enter the district.";

    iter+=1;  questionList[iter] = "7 | How do I know which parking lot to park in when I visit the resort?";
        answerList[iter] = "There are three main parking areas of the resort:<ul><li><b>Adventure Parking Structures</b><br>Located south of Carewaway Park, pay one price for the whole day (opening to 1hr past close)<br><em>Enter off Resort Dr.</em></li><li><b>Shops District Parking</b><br> Located southwest of the MCR Waves Resort. Park here to pay-per-hour. This is the only parking area which accepts validation from select restaurants or stores in the Shops&More District.<br><em>Located off Splashport Dr.</em></li><li><b>East Resort Parking Lot</b><br>Overflow for Adventure Parking lots and designated parking for Busses, RVs, and other oversize vehicles. Located East of Careaway Park ~1.5 miles from the Esplenade. Complimentary shuttle services are provided.<br><em>Enter off Careaway Dr.</em></ul>";

    iter+=1;  questionList[iter] = "7 | Are the Careaway-Express Shuttles free?";
        answerList[iter] = "Careaway Express shuttle services around the resort, including to and from affiliate hotels, is complimentary. The only exception is shuttle service to and from the Puertas Nuevas International Airport (PNI) which is $25 per person.";
    
    iter+=1;  questionList[iter] = "7 | Can I use public transportation to get to the resort?";
        answerList[iter] = "Yes! Our resort is accessible via the Puertas Nuevas MTA RESORT LINE train from Downtown, Puerta Azul. The transit center also services multiple buslines and we offer a paid service too and from the airport.";


// Restaurants and Dining - 8
    iter+=1;  questionList[iter] = "8 | Is outside food allowed in the resort or theme parks?";
        answerList[iter] = "Generally yes, as long as it is in a sealed container or ziploc bag. There are multiple picnic spots throughout our parks. Open plates of food are not allowed through security or into the parks. <b>Alcohol and illicit drugs are not permitted to be brought into the resort</b>";

    iter+=1;  questionList[iter] = "8 | Are there vegetarian, vegan, or gluten-free meal options?";
        answerList[iter] = "Of course! Most of our restaurants provide alternative options for those with dietary restrictions. Guests with severe food allergies should visit the <a href='accessibility'>accessibility</a> page for further details.";

    /*iter+=1;  questionList[iter] = "8 | question";
        answerList[iter] = "answer";

    iter+=1;  questionList[iter] = "8 | question";
        answerList[iter] = "answer";*/

// Merch and Online Stoor - 9
    iter+=1;  questionList[iter] = "9 | Can I order merchandise to be delivered to my hotel room?";
        answerList[iter] = "Sort of. You can order your merchandise for 'pick-up' and select from a range of locations including the Sprucewood Lodge, The RW Hotel, and the World of Wonder hotel Luggage Services desks. Currently, these are the only hotels availabe for merchandise delivery. Merchandise will not be delivered directly to your room.";

    iter+=1;  questionList[iter] = "9 | What is the best way to return items I purchased online?";
        answerList[iter] = "This applies for items eligible for standard return only. To avoid paying shipping fees, you can return items ordered online to any Globe-City Store (City-Shop Highland, Shops&More District). Alternatively, you can return items to our affiliate stores: LAB-Stores, RMember Clubhouses, R&R Logistics Centers.<p>If you can't visit in person, you can start an online return by sending an email to the customer service account shown on your order's digital reciept.</p>";

    iter+=1;  questionList[iter] = "9 | I got the wrong size - what do I do?";
        answerList[iter] = "Within 30 days of recieving your online order, you can bring in your items and the reciept for the order to any Globe-City Store location to perform an exchange, assuming that store has the items in stock. If the store does not have the items, they will instead give you store credit equal to the value of your item (before tax).";






