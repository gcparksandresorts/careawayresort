/*
        type: day-tickets, annual-passports, special-event, scareaway-scream, ... etc.
        category: if multiple categories IE. General Admission, GC VIP Admission, etc. 
        numDays: for multi-day tickets, otherwise put none (will ask user to select num days)
        tier: put none if ticket is unavailable for that tier
        dateRestrict: none or restrict ticket to only specific dates -> put an event code (or comma seperated list) -> software will check dateTier events for selected date
        seasonRestrict: restrict ticket dates to certain months comma seperated list (IE. splashport bay tickets)
        description: will be printed on PDF ticket
        pictureLink: for ticket select page

        1. ../webstore?form=TYPE -> each form is prewritten in HTML, and will be shown depending on FORM value
        2. ../webstore?form=TYPE&tikTyoe=NUM -> NUM associates to index of ticket as seen in ticket[NUM], this carries for the rest of the form

        dateTier: 
         -> ticket price tiers 5
         -> hours tiers -> 7 (but the extra two are priced as 1 or 2)

*/

ticket = [];

formType = ["day-tickets", "annual-passports", "special-event", "scareaway-scream"];

ticket[0] = "formType0 | category1 | ticketName2 | numDays3 | tier1Price,tier2Price,tier3Price,tier4Price,tier5Price | dateRestrict6 | seasonRestrict7 | description8 | imgLink9";

