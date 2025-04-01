const container = document.getElementById("attractionContainer");

		const categorySelect = document.getElementById("categorySelect");
		const locationSelect = document.getElementById("locationSelect");
		const mealSelect = document.getElementById("mealSelect");

		const searchParams = new URLSearchParams(window.location.search);

		container.innerHTML = "<p id='resultsCount' style='text-align:center;'>Showing <b>zero</b> results</p><br>";

		var resultCount = 0;

		var categoryVal = 0;
		var locationVal = 0;
		var ageVal = 0;

		// Setup Dropdowns

			// Categories
			for (i = 1; i < diningCategories.length; i++) {
				 categorySelect.innerHTML += "<option value='"+i+"'>"+diningCategories[i]+"</option>";
			}

			// location
			for (i = 1; i < diningLocations.length; i++) {
				 locationSelect.innerHTML += "<option value='"+i+"'>"+diningLocations[i]+"</option>";
			}

			// ages
			for (i = 1; i < mealStyle.length; i++) {
				 mealSelect.innerHTML += "<option value='"+i+"'>"+mealStyle[i]+"</option>";
			}

		// URL Parameters

		if(searchParams.has("category")){
			categoryVal = searchParams.get("category")
		}
		if(searchParams.has("location")){
			locationVal = searchParams.get("location")
		}
		if(searchParams.has("age")){
			ageVal = searchParams.get("age")
		}

		categorySelect.value = categoryVal;
		locationSelect.value = locationVal;
		mealSelect.value = ageVal;

		// If searching all categories, create individual div for each category of attraction
		if(categoryVal == 0){
			for(i = 1; i < diningCategories.length; i++){
				container.innerHTML += "<br><br><h2 style='color:midnightblue; display:none;' id='H2category-"+i+"'>"+diningCategories[i]+"</h2><div class='placeContainer' id='category-"+i+"' style='display:none;'></div>";
			}// end of for loop
		}else{
			container.innerHTML += "<div class='placeContainer' id='allContainer'></div>";
		}
		
		for (i = 0; i < diningArray.length; i++) {

			// Gather information from attraction array
			let temp = diningArray[i].split(" | ");

			var isApplicaple = false;
			if(categoryVal == 0 || categoryVal == temp[2]){
				if(locationVal == 0 || locationVal == temp[4]){
					if(ageVal != 0 && temp[3].includes(',')){
						if(temp[3].split(',').includes(ageVal)){
							isApplicaple = true;
						}
					}else if(temp[3] == ageVal){
						isApplicaple = true;
					}else if(ageVal == 0){
                        isApplicaple = true;
                    }else{
                        isApplicaple = false;
                    }
				}else{
                    isApplicaple = false;
                }
			}else{
                isApplicaple = false;
            }

            if(isApplicaple){
                let hyperLink = "dining/page?name=" + temp[1];

				// meal type(s)
				var mealTypes;
				if(temp[3].includes(',')){
					let tmel = temp[3].split(','); mealTypes = '';
					for(l=0; l<tmel.length; l++){
						mealTypes += mealStyle[tmel[l]] + ", ";
					}
				}else{mealTypes = mealStyle[temp[3]];}

                let divContent = "<div><img src='"+temp[6]+"'><div><h3 style='margin-bottom:5px'>"+temp[0]+"</h3>"+temp[5]+"<br><br><br></div><div class='subText'>"+mealTypes+"</div><div class='tab'>&#128205; "+diningLocations[temp[4]]+"</div><a href='"+hyperLink+"'>link</a></div>";
                if(categoryVal == 0){
                    if(document.getElementById("category-"+temp[2]).style.display == 'none'){document.getElementById("category-"+temp[2]).style.display = 'flex'; document.getElementById("H2category-"+temp[2]).style.display = 'block';}
                    document.getElementById("category-"+temp[2]).innerHTML += divContent;
                }else{
                    document.getElementById("allContainer").innerHTML += divContent; 
                }

                resultCount += 1;
            }
					
		}
		document.getElementById("resultsCount").innerHTML = "Showing <b>"+resultCount+"</b> results";

		function changeFilters(){
			let builtURL = "?category="+categorySelect.value+"&location="+locationSelect.value+"&age="+mealSelect.value;
			window.open(builtURL, "_self");
		}