// Date Tier File holds all information for the Resort Operations Schedule


// TICKET TIERS AND HOURS
	// tier[NUM] = "ticketTier0 | careawayHrs1,spEventHrs | portAdventHrs2,spEventHrs | shopsNMoreHrs3";
	// if closed: write "closed", no special event: "none"
	tier[0] = "ticketTier0 | careawayHrs1,spEventHrs | portAdventHrs2,spEventHrs | shopsNMoreHrs3 | splashportHrs4";

	// ticketTier[NUM] = "tierNum0 | PtoP_upgrade1| resident2 | standard3 | vipBronze4 | vipSilver5 | vipDeluxe6 | vipPlatinum7 | splashPortStandard8 | splashPortPlatinum9 | splashPortPassholder10";
	ticketTier[0] = "AUTO (1 or 2) Depending on Day of Week";
	// Special events only


	// SPECIAL EVENT TICKETS
	// eventTier[NUM] = "eventName0 | ticketTypeName1 | tier1Price_2 | tier2Price_3 | tier3Price_4 | tier4Price_5 | tier5Price_6 | passHolderDis_7 | imgLink8";

	eventTier[0] = "Scareaway Screams | General Admission | 50 | 65 | tier3Price_4 | tier4Price_5 | tier5Price_6 | 7 | imgLink8";
	eventTier[1] = "Scareaway Screams | GCVIP Admission | 99 | 175 | tier3Price_4 | tier4Price_5 | tier5Price_6 | 0 | imgLink8";

// RESORT SCHEDULE
var iter = -1;

	// iter+=1;dateTier[iter] = "dayWeek | MMM DD | tier2 | specialEventList3 | entertainmentList4 | pageBanner5";
