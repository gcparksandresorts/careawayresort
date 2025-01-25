entertainmentItems = [];
entertainmentDescription = [];
entertainmentImages = [];

gcVipInfo = ["None", "Preffered Seating Available", "Early-Access Available", "VIP Seated Section Available"]
	//	0	1				2			3
accessibilityInfo = ["Guest may remain in wheelchair or ECV", "Guest must transfer from wheelchair", "Accessible seating section available"];
	//		0						1				2
/* NOTES - leave default value if you dont have someting (I.E. if no extra images, leave as extraImg - extraImg2 

      CATEGORY - make sure showCategory is a number that aligns with the categories in the entertainment repository:
                Live Entertainment - 1 ; Nighttime Show - 2 ; Parade - 3 ; Theater Show - 4 ; Interactive Improv - 5 ; Atmospheric - 6
                
      LOCATION - parkIndex should be replaced with a number corresponding with the following:
                Careaway Park - 1 ; Port of Adventure - 2; Splashport - 3; Shops&More - 4; Hotels - 5
                
      DEFAULT ACCESSIBILITY: 0
*/


/*
entertainmentItems[NUM] = "showName0 | showCategory1 | showLocation2,parkIndex | showDuration3 | gcVipInfo4 | accessibility5";
	entertainmentDescription[NUM] = "shortDescription0 | longDescription1";
	entertainmentImages[NUM] = "mainImg0 | extraImg - extraImg2";
*/

entertainmentItems[0] = "showName0 | showCategory1 | showLocation2,parkIndex | showDuration3 | gcVipInfo4 | accessibility5";
	entertainmentDescription[0] = "shortDescription0 | longDescription1";
	entertainmentImages[0] = "mainImg0 | extraImg - extraImg2";

entertainmentItems[1] = "Wicked! The Retelling | 4 | Wonder Reel Studios,2 | 45 Minutes | 2 | 2";
  entertainmentDescription[1] = "shortDescription0 | longDescription1";
  entertainmentImages[1] = "https://gcparksandresorts.github.io/careawayresort/files/images/shows/wickedMusical.webp | https://www.thehobbycenter.org/wp-content/uploads/2022/12/WickedLargeFeaturedNewsImage1200x650-scaled.jpg - https://wickedthemusical.com/wp-content/uploads/2024/08/0028-Homepage-Carousel-Assets.jpg";
