const eventsBin = document.getElementById('fullEventsList');
const bigEventsBin = document.getElementById('bigEventDisp');

// UI elements
const categorySearch = document.getElementById('categorySearch');
const seasonSearch = document.getElementById('seasonSearch');
const locationSearch = document.getElementById('locationSearch');
const includePriced = document.getElementById('paidEvent');

for(i=0; i<eventCategories.length;i++){
    categorySearch.innerHTML += '<option value="'+i+'">'+eventCategories[i]+"</option>";
}

for(i=0; i<eventSeasons.length;i++){
    seasonSearch.innerHTML += '<option value="'+i+'">'+eventSeasons[i]+"</option>";
}

for(i=0; i<eventLocationList.length;i++){
    locationSearch.innerHTML += '<option value="'+i+'">'+eventLocationList[i]+"</option>";
}

// <div><img src=''> <div><h3>title</h3>text<br><br><br></div> <div class='subText'>subtext</div> <div class='tab'>tabText</div><a href=''></a></div>

const urlParams = new URLSearchParams(window.location.search);

var searchTerm = 'none';
if(urlParams.has('search')){
    searchTerm = urlParams.get('search').split('+');
}

for(i=0; i<eventData.length;i++){
    let temp = eventData[i];
        let qInfo = temp.info.split(' | ');
        
    let locationVal = eventLocationList[qInfo[1]];
    let subText = eventAdmissionList[qInfo[2]];

    if(temp.displayType != 'none'){
        if(temp.displayType != 'big'){
            var hyperlink = '';
            if(temp.hasOwnProperty('externalLink')){
                hyperlink = "<a href='"+temp.externalLink+"'></a>";
            }else if(temp.clickLink != 'click_link'){
                hyperlink = "<a href='events/page?n="+temp.clickLink+"'></a>";
            }
    
            let builtDiv = "<div><img src='"+temp.bannerImg+"'> <div><h3>"+temp.name+"</h3>"+temp.synopsis+"<br><br><br></div>\
                <div class='subText'>"+subText+"</div><div class='tab'>&#128205; "+locationVal+"</div>" + hyperlink + "</div>";
            
            eventsBin.innerHTML += builtDiv;
    
        }else{
            var hyperlink = '';
            if(temp.hasOwnProperty('externalLink')){
                hyperlink = "<a class='btn noLeft' href='"+temp.externalLink+"'>View Event</a>";
            }else if(temp.clickLink != 'click_link'){
                hyperlink = "<a class='btn noLeft' href='events/page?n="+temp.clickLink+"'>View Event</a>";
            }
    
            let buildDiv = "<div class='leftContainer filled' style='background:#efefef;'><div class='columnContainer dImg'><img src='"+temp.bannerImg+"'>\
                <div><h2>"+temp.name+"</h2>"+temp.synopsis+"<div class='spacer'></div><p class='tagContainer'><a>&#128205; "+locationVal+"</a> <a>"+eventSeasons[qInfo[3]]+" season</a> <a>"+eventAdmissionList[qInfo[2]]+"</a></p><div class='spacer'></div><p>"+hyperlink+"</p></div> </div>";
    
            bigEventsBin.innerHTML += buildDiv;
        }
    }// end of if(temp.displayType != 'none')
    
}// end of for(i=0; i<eventData.length;i++)

function showConfirm(){
    document.getElementById('applyFilter').style.display='block';
}

function applyFilter(){
    if(searchBar.value == ''){
        var goLink = "?category="+categorySearch.value + "&season=" + seasonSearch.value + "&location=" + locationSearch.value;

        if(includePriced.checked){
            goLink += "&includePriced=true";
        }else{
            goLink += "&includePriced=false";
        }
    }else{
        
    }

    window.open(goLink,"_self");
}