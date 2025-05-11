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
    document.getElementById('searchQuery').select();
}

// Populate Search Results
function populateSearch(){
    searchResults.innerHTML = "<p id='resultsCountDisplay' style='text-align:center''>No results found</p>"; // clear search results

    // break up search query into individual words
    const searchWords = searchQuery.split(" ");
    const itemsList = []; // Will be the populated list of all items to be searched

    // FIRST - Convert Site Index, Entertainment, Attractions, etc. into objects to be searched
        var curIndex = 0; // the current value of itemsList being edited

        // Site Index First
        for(i=0; i<websiteIndex.length; i++){
            let temp = websiteIndex[i];
            // Generate Tag List
            let tempTagList = [
                ...temp.tagsList.split(/[ ,]+/),
                ...temp.title.split(' '),
                ...temp.description.split(/[ ,]+/)
            ].map(tag => tag.toLowerCase().trim()).filter(tag => tag !== '');

            // Add item to itemsList
            itemsList[curIndex] = {
                pageName: temp.title, pageDescription: temp.description,
                pageLink: temp.link, pageTags: tempTagList,
                pageType: 'webpage'
            }

            //console.log(itemsList[curIndex]);
            curIndex += 1; 
        }// end of webpages

        // Blog Posts Next
        for(i=0; i<blogData.length; i++){
            let temp = blogData[i];
            // Generate Tag List
            let tempTagList = [
                ...temp.tagsList.split(/[ ,]+/),
                ...temp.title.split(' '),
            ].map(tag => tag.toLowerCase().trim()).filter(tag => tag !== '');

            // Add item to itemsList
            itemsList[curIndex] = {
                pageName: temp.title,
                pageTags: tempTagList,
                pageType: 'blogPost'
            }

            //console.log(itemsList[curIndex]);
            curIndex += 1; 
        }// end of blog posts

        // Now search entertainment
        for(i=0; i<entertainmentList.length; i++){
            let temp = entertainmentList[i];
            // Generate Tag List
            let tempTagList = [
                ...temp.tagsList.split(/[ ,]+/),
                ...temp.name.split(' '),
                ...temp.description.split(/[ ,]+/)
            ].map(tag => tag.toLowerCase().trim()).filter(tag => tag !== '');

            // Add item to itemsList
            var tempLink;
            if(temp.hasOwnProperty('pageLink')){
                tempLink = 'things-to-do/entertainment/page?n=' + temp.pageLink;
            }
            itemsList[curIndex] = {
                pageName: temp.name, pageDescription: temp.description,
                pageTags: tempTagList, pageLink: tempLink,
                pageType: 'attraction'
            }

            //console.log(itemsList[curIndex]);
            curIndex += 1; 
        }// end of entertainment

        // Search Attractions
        for(i=0; i<attractionList.length; i++){
            let temp = attractionList[i].split(' | ');
            // Generate Tag List
            let tempTagList = [
                ...temp[0].split(/[ ,]+/),
                ...attractionCategories[temp[2]].split(' ')
            ].map(tag => tag.toLowerCase().trim()).filter(tag => tag !== '');

            // Add item to itemsList
            var tempLink;
            if(temp[4].includes('atIndex=')){
                let $temp4 = temp[4].split('=');
                tempLink = 'things-to-do/attractions/page?index=' + $temp4[1];
            }else{
                tempLink = temp[4];
            }
            let $name = temp[0].split(' - ');
            itemsList[curIndex] = {
                pageName: $name[0],
                pageTags: tempTagList, pageLink: tempLink,
                pageDescription: 'Attraction located at ' + attractionLocations[temp[1]],
                pageType: 'attraction'
            }

            //console.log(itemsList[curIndex]);
            curIndex += 1; 
        }// end of attractions

        // Last one: Search Events
        for(i=0; i<eventData.length; i++){
            let temp = eventData[i];
            // Generate Tag List
            let tempTagList = [
                ...temp.tags.split(/[ ,]+/),
                ...temp.name.split(' '),
                ...temp.synopsis.split(/[ ,]+/)
            ].map(tag => tag.toLowerCase().trim()).filter(tag => tag !== '');

            // Add item to itemsList
            var tempLink;
            if(temp.hasOwnProperty('clickLink')){
                tempLink = 'things-to-do/events/page?n=' + temp.clickLink;
            }else{
                tempLink = temp.externalLink;
            }
            itemsList[curIndex] = {
                pageName: temp.name, pageDescription: temp.synopsis,
                pageTags: tempTagList, pageLink: tempLink,
                pageType: 'event'
            }

            //console.log(itemsList[curIndex]);
            curIndex += 1; 
        }// end of events


    // SECOND - Prepare search page for results
        searchResults.innerHTML = "<p id='resultsCountDisp' style='text-align:center;'>Error</p>";
        searchResults.innerHTML += "<div id='webpageResults' class='leftContainer' style='display:none; padding-top:0;'></div> \
            <div id='blogResults' class='leftContainer' style='display:none;'><h2>Blog Posts & Operating Updates</h2></div>\
            <div id='attractionResults' class='leftContainer' style='display:none;'><h2>Attractions & Entertainment</h2></div>\
            <div id='eventResults' class='leftContainer' style='display:none;'><h2>Seasonal Events</h2></div>";
        const webpageResults = document.getElementById('webpageResults');
        const blogResults = document.getElementById('blogResults');
        const attractionResults = document.getElementById('attractionResults');
        const eventResults = document.getElementById('eventResults');

    // THIRD - Find items that contain keywords and populate search page
        for(i=0; i<searchWords.length; i++){
            let tempWord = searchWords[i].toLowerCase();
            for(k=0; k<itemsList.length; k++){
                let tempItem = itemsList[k];
                if (tempItem.pageTags.some(tag => tag === tempWord)){
                    resultsCount += 1;
                    switch(tempItem.pageType){
                        case 'webpage':
                            webpageResults.innerHTML += "<a class='pageLink' href='"+tempItem.pageLink+"'>"+tempItem.pageName+"</a>"+tempItem.pageDescription;
                            if(webpageResults.style.display != 'block'){webpageResults.style.display = 'block';}
                            break;
                        case 'blogPost':
                            blogResults.innerHTML += "<a class='pageLink' href='"+tempItem.pageLink+"'>"+tempItem.pageName+"</a>"+tempItem.pageTags;
                            if(blogResults.style.display != 'block'){blogResults.style.display = 'block';}
                            break;
                        case 'attraction':
                            attractionResults.innerHTML += "<a class='pageLink' href='"+tempItem.pageLink+"'>"+tempItem.pageName+"</a>"+tempItem.pageDescription;
                            if(attractionResults.style.display != 'block'){attractionResults.style.display = 'block';}
                            break;
                        case 'event':
                            eventResults.innerHTML += "<a class='pageLink' href='"+tempItem.pageLink+"'>"+tempItem.pageName+"</a>"+tempItem.pageDescription;
                            if(eventResults.style.display != 'block'){eventResults.style.display = 'block';}
                            break;
                    }
                    itemsList.splice(k, 1);
                }
            }
            console.log('Searched for word ' + tempWord);
        }

        // Update results counter
        if(resultsCount > 10){
            document.getElementById('resultsCountDisp').innerHTML = "<b>" + resultsCount + "</b> results found<br><span style='color:orange'>Seeing too many results? Search for keywords only. For example: <em>Rides and Shows</em> -> <em>Rides Shows</em></span>";
        }else{
             document.getElementById('resultsCountDisp').innerHTML = "<b>" + resultsCount + "</b> results found";
        }
}// end of function populateSearch()

function resetSearchBar(){
    searchText.innerHTML = "Search the entire website:<br><input type=\"text\" id=\"searchQuery\" placeholder=\"Search...\" onchange='runSearch(this.value, \"int\");' />";
    document.getElementById('searchQuery').select();
}