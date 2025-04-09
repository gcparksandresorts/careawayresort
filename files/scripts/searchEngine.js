const searchText = document.getElementById("searchText");
const searchResults = document.getElementById("searchResultsContainer");

const urlParams = new URLSearchParams(window.location.search);

var searchQuery;

var resultsCount = 0; // number of results found

if(urlParams.has("query")){ // search query already inputted
    searchQuery = urlParams.get("query").replace(/\+/g, ' ');
    searchText.innerHTML = "Search results for: \"" + searchQuery + '"<br><button onclick="resetSearchBar()">New Search</button>';
    populateSearch();
}else{ // user still needs to search for something
    searchText.innerHTML = "Search the entire website:<br><input type=\"text\" id=\"searchQuery\" placeholder=\"Search...\" onchange='runSearch(this.value, \"int\");' />";
}

// Populate Search Results
function populateSearch(){
    searchResults.innerHTML = "<p id='resultsCountDisplay' style='text-align:center''>No results found</p>"; // clear search results

    // break up search query into individual words
    const searchWords = searchQuery.split(" ");
    const itemsList = [];

    for(i=0; i<searchWords.length; i++){
        const srchWrd = searchWords[i].toLowerCase(); // the word we're searching for in the site index

        // Search Website Index
        for(k=0; k<websiteIndex.length; k++){
            const itemTitleArray = websiteIndex[k].title.toLowerCase().split(' '); // the title of the current item in the index
            const itemDescArray = websiteIndex[k].description.toLowerCase().split(' '); // the description of the current item in the index
            const itemTagsArray = websiteIndex[k].tagsList.toLowerCase().split(','); // the tags of the current item in the index

            // check if the search word is in the title, description, or tags of the current item in the index
            if(itemTitleArray.includes(srchWrd) || itemDescArray.includes(srchWrd) || itemTagsArray.includes(srchWrd)){
                // create a new div for the search result
                
                if(itemsList.includes(k) == false){ // if the item is not already in the list of items to display

                    if(websiteIndex[k].link.includes('[external]')){
                        websiteIndex[k].link = websiteIndex[k].link.replace('[external]', ''); // remove the [external] tag from the link
                    }

                    searchResults.innerHTML += "<div id='siteIndex-"+k+"'><h3 style='margin-bottom:5px;'><a href='"+websiteIndex[k].link+"'>"+websiteIndex[k].title+"</a></h3>"+websiteIndex[k].description+"<p style='margin-top:5px; color:dimgray;'>"+itemTagsArray+"</p></div>";
                    itemsList.push(k); // add the item to the list of items to display
                    resultsCount += 1;
                }
            }
        }

        itemsList.length = 0; // clear the list of items displayed

        // Search Events
        for(k=0; k<eventlistArray.length; k++){
            if(itemsList.includes(k) == false){ // if the item is not already in the list of items to display
                let temp = eventlistArray[k].split('|'); // split the event into its components
                const eventName = temp[1].toLowerCase().split(' '); // the name of the event
                var eventDescription;
                if(temp[5].includes('no/') == false){ // if the event is not showing, ignore description
                    eventDescription = temp[5].replace('yes/', '').toLowerCase().split(' '); // the description of the event
                }else{
                    eventDescription = ['No Description'];
                }

                // check if the search word is in the event name or description
                if(eventName.includes(srchWrd) || eventDescription.includes(srchWrd)){
                    // create a new div for the search result
                    if(temp[4].includes('none') == false){ // if the event has a link
                        searchResults.innerHTML += "<div id='event-"+k+"'><h3 style='margin-bottom:5px;'><a href='"+temp[4]+"'>"+temp[1]+"</a></h3>"+temp[5].replace('yes/', '')+"</div>";
                        resultsCount += 1;
                        itemsList.push(k); // add the item to the list of items to display
                    }else{
                        searchResults.innerHTML += "<div id='event-"+k+"'><h3 style='margin-bottom:5px;'>"+temp[1]+"</h3>"+eventDescription+"</div>";
                        resultsCount += 1;
                        itemsList.push(k); // add the item to the list of items to display
                    }
                }
            }
        }

        itemsList.length = 0; // clear the list of items displayed

        // Search Restaurants
        for(k=0; k<diningArray.length; k++){
            if(itemsList.includes(k) == false){ // if the item is not already in the list of items to display
                let temp = diningArray[k].split(' | '); // split the event into its components
                const diningName = temp[0].toLowerCase().split(' '); // the name of the restaurant
                var diningDescription = temp[5].toLowerCase().split(' '); // the description of the restaurant;

                // check if the search word is in the event name or description
                if(diningName.includes(srchWrd) || diningDescription.includes(srchWrd)){
                    // create a new div for the search result
                    searchResults.innerHTML += "<div id='dining-"+k+"'><h3 style='margin-bottom:5px;'><a href='things-to-do/dining/page?name="+temp[1]+"'>"+temp[0]+"</a></h3>"+temp[5]+"</div>";
                    resultsCount += 1;
                    itemsList.push(k); // add the item to the list of items to display
                }
            }
        }

    }

    document.getElementById("resultsCountDisplay").innerHTML = "Showing <b>" + resultsCount + "</b> results";
} // end of populateSearch()

function resetSearchBar(){
    searchText.innerHTML = "Search the entire website:<br><input type=\"text\" id=\"searchQuery\" placeholder=\"Search...\" onchange='runSearch(this.value, \"int\");' />";
}

