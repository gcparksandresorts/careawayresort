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

        searchResults.innerHTML += "<div id='webpageResultsBin' style='display:none'><h2>Webpage Results</h2></div>";
        // Search Website Index
        for(k=0; k<websiteIndex.length; k++){
            const itemTitleArray = websiteIndex[k].title.toLowerCase().split(' '); // the title of the current item in the index
            const itemDescArray = websiteIndex[k].description.toLowerCase().split(' '); // the description of the current item in the index
            const itemTagsArray = websiteIndex[k].tagsList.toLowerCase().split(','); // the tags of the current item in the index

            // check if the search word is in the title, description, or tags of the current item in the index
            if(itemTitleArray.includes(srchWrd) || itemDescArray.includes(srchWrd) || itemTagsArray.includes(srchWrd)){
                // create a new div for the search result
                
                if(itemsList.includes('siteIndex-'+k) == false){ // if the item is not already in the list of items to display

                    if(websiteIndex[k].link.includes('[external]')){
                        websiteIndex[k].link = websiteIndex[k].link.replace('[external]', ''); // remove the [external] tag from the link
                    }

                    document.getElementById('webpageResultsBin').innerHTML += "<div id='siteIndex-"+k+"'><h3 style='margin-bottom:5px;color:midnightblue;'><a href='"+websiteIndex[k].link+"'>"+websiteIndex[k].title+"</a></h3>"+websiteIndex[k].description+"<p style='margin-top:5px; color:dimgray;'>"+itemTagsArray+"</p></div>";
                    itemsList.push('siteIndex-'+k); // add the item to the list of items to display
                    resultsCount += 1;

                    if(document.getElementById('webpageResultsBin').style.display == 'none'){
                        document.getElementById('webpageResultsBin').style.display = 'block'; // show the search results
                    }
                }
            }
        }

        //itemsList.length = 0; // clear the list of items displayed

        
        // Search Events
        searchResults.innerHTML += "<div id='eventResultsBin' style='display:none'><br><h2>Resort Events Results</h2></div>";
        for(k=0; k<eventlistArray.length; k++){
            if(itemsList.includes('event-'+k) == false){ // if the item is not already in the list of items to display
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
                        document.getElementById('eventResultsBin').innerHTML += "<div id='event-"+k+"'><h3 style='margin-bottom:5px;color:midnightblue;'><a href='"+temp[4]+"'>"+temp[1]+"</a></h3>"+temp[5].replace('yes/', '')+"</div>";
                        resultsCount += 1;
                        itemsList.push('event-'+k); // add the item to the list of items to display
                    }else{
                        document.getElementById('eventResultsBin').innerHTML += "<div id='event-"+k+"'><h3 style='margin-bottom:5px;color:midnightblue;'>"+temp[1]+"</h3>"+eventDescription+"</div>";
                        resultsCount += 1;
                        itemsList.push('event-'+k); // add the item to the list of items to display
                    }

                    if(document.getElementById('eventResultsBin').style.display =='none'){
                        document.getElementById('eventResultsBin').style.display = 'block'; // show the search results
                    }
                }
            }
        }

        //itemsList.length = 0; // clear the list of items displayed

        // Search Restaurants
        searchResults.innerHTML += "<div id='diningResultsBin' style='display:none'><br><h2>Restaurants & Dining</h2></div>";
        for(k=0; k<diningArray.length; k++){
            if(itemsList.includes('dining-'+k) == false){ // if the item is not already in the list of items to display
                let temp = diningArray[k].split(' | '); // split the event into its components
                const diningName = temp[0].toLowerCase().split(' '); // the name of the restaurant
                var diningDescription = temp[5].toLowerCase().split(' '); // the description of the restaurant;

                // check if the search word is in the event name or description
                if(diningName.includes(srchWrd) || diningDescription.includes(srchWrd)){
                    // create a new div for the search result
                    document.getElementById('diningResultsBin').innerHTML += "<div id='dining-"+k+"'><h3 style='margin-bottom:5px;color:midnightblue;'><a href='things-to-do/dining/page?name="+temp[1]+"'>"+temp[0]+"</a></h3>"+temp[5]+"</div>";
                    resultsCount += 1;
                    itemsList.push('dining-'+k); // add the item to the list of items to display

                    if(document.getElementById('diningResultsBin').style.display =='none'){
                        document.getElementById('diningResultsBin').style.display = 'block'; // show the search results
                    }
                }
            }
        }

        //itemsList.length = 0; // clear the list of items displayed


        // Search Blog Posts
        searchResults.innerHTML += "<div id='blogResultsBin' style='display:none'><br><h2>Blog Posts & Operations Updates</h2></div>";
        for(k=1; k<blogHeadings.length; k++){
            if(itemsList.includes('blog-'+k) == false){ // if the item is not already in the list of items to display
                let temp = blogHeadings[k].split(' | '); // split the event into its components
                const blogName = temp[0].toLowerCase().split(' '); // contents of blog heading / title
                const blogCategory = blogCategories[temp[2]].toLowerCase().split(' '); // the category of the blog post
                var blogAuthor = temp[3].toLowerCase().split(' '); // the author of the blog

                // check if the search word is in the event name or description
                if(blogName.includes(srchWrd) || blogCategory.includes(srchWrd) || blogAuthor.includes(srchWrd)){
                    // create a new div for the search result
                    document.getElementById('blogResultsBin').innerHTML += "<div id='blog-"+k+"'><h3 style='margin-bottom:5px; color:midnightblue;'><a href=''>Blog Post: "+temp[0]+"</a></h3>"+blogCategories[temp[2]]+" - " + temp[3] + "</div>";
                    resultsCount += 1;
                    itemsList.push('blog-'+k); // add the item to the list of items to display

                    if(document.getElementById('blogResultsBin').style.display =='none'){
                        document.getElementById('blogResultsBin').style.display = 'block'; // show the search results
                    }
                }
            }
        }
        
    }

    

    if(resultsCount == 0){
        document.getElementById("resultsCountDisplay").innerHTML = "No results found";
        searchResults.innerHTML = "<p>We could not find any pages containing the keywords. Consider searching for just 1 - 2 keywords, avoid using special characters or punctuation.</p>";
    }else{
        document.getElementById("resultsCountDisplay").innerHTML = "Showing <b>" + resultsCount + "</b> results";
    }
} // end of populateSearch()

function resetSearchBar(){
    searchText.innerHTML = "Search the entire website:<br><input type=\"text\" id=\"searchQuery\" placeholder=\"Search...\" onchange='runSearch(this.value, \"int\");' />";
}

