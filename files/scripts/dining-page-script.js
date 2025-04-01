const title = document.getElementById('pgTitle');
const menuContainer = document.getElementById('menu-container');
const bannerContainer = document.getElementById('banner-container');

// Script Variables
var restaurantScriptTitle;
parkLocations = ["none", "Careaway Park", "Port of Adventure", "Shops & More District", "Resort Hotels"];

// set up initial page
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('name')){
    restaurantScriptTitle = urlParams.get('name');

    //Bring in the restaurant script
    const restaurantScript = document.createElement('script');
    restaurantScript.src = "../../files/repositories/events-dining/dining-menus/" + restaurantScriptTitle + ".js";
    document.head.appendChild(restaurantScript);

    console.log(restaurantScript);
}else{
    //window.open('page-unavailable','_self');
}

function populatePage(){
    title.innerHTML = restaurantInfo[0] + " | Restaurants and Dining | Globe-City's Careaway Resort";

    let tempLocation = restaurantInfo[4].split(', ');
        tempLocation[1] = parkLocations[tempLocation[1]];
    bannerContainer.innerHTML = "<div class='columnContainer cBanner'><img src='"+restaurantInfo[2]+"'><div><h1 style='margin-bottom:5px;'>"+restaurantInfo[0]+"</h1><em>Dining located in "+tempLocation[0]+", "+tempLocation[1]+"</em><p>"+restaurantInfo[1]+"</p><div class='tagContainer silver' id='bannerTags'></div></div></div>";
    
    // Tags
    let tagContainerDiv = document.getElementById('bannerTags');
        let tagList = restaurantInfo[3].split(',');
        for(i=0; i<tagList.length; i++){
            tagContainerDiv.innerHTML += "<a>"+tagList[i]+"</a>";
        }
    
    // Populate menu
    menuContainer.innerHTML = "<label for='menuSelector'>Select Menu:</label> <select id='menuSelector' onchange='changeMenu(this.value)'><option value='null'>Single Menu Only</option></select>";

        // Breakfast
        if(restaurantBreakfast[0] != 'empty'){
            menuContainer.innerHTML += "<div id='breakfastMenu' class='menuMainContainer' style='display:block'><h2>Breakfast Menu</h2></div>";
            document.getElementById('menuSelector').innerHTML = "<option value='breakfastMenu'>Breakfast Menu (opening - 12PM)</option>";

            let tempContainer = document.getElementById('breakfastMenu');
            var currentSection; var curItem;
            for(i=0; i<restaurantBreakfast.length; i++){
                let temp = restaurantBreakfast[i].split(' | ');

                if(temp[0] == 'new'){ // new category
                    if(temp[2] == 'description'){temp[2] = ' ';}
                    currentSection = temp[1];
                    tempContainer.innerHTML += "<br><br><div class='spacer' style='max-width:900px;'></div><br><br><h3 style='margin-bottom:5px'>"+temp[1]+"</h3><p style='margin-top:0'>" + temp[2] + "</p><div class='menuItemContainer' id='"+currentSection+"'></div>";
                }else{
                    if(temp[2] == 'description2'){temp[2] = ' ';}else{temp[2] = "<br>" + temp[2];}
                    var allergy = '';
                    if(temp[3] != 'allergen'){
                        if(temp[3].includes('v')){allergy = " <span class='vegan'>V</span>";}
                        if(temp[3].includes('gf')){allergy += " <span class='gf'>GF</span>";}
                    }
                    document.getElementById(currentSection).innerHTML += "<div><b>"+temp[0]+" - $"+temp[1]+" " + allergy + "</b>"+temp[2]+"</div>";
                }
            }
        }

        // Lunch and Dinner
        if(restaurantDinner[0] != 'empty'){
            menuContainer.innerHTML += "<div id='dinnerMenu' class='menuMainContainer'><h2>Lunch and Dinner Menu</h2></div>";
            document.getElementById('menuSelector').innerHTML += "<option value='dinnerMenu'>Lunch and Dinner (12PM - closing)</option>";

            let tempContainer = document.getElementById('dinnerMenu');
            for(i=0; i<restaurantDinner.length; i++){
                let temp = restaurantDinner[i].split(' | ');

                if(temp[0] == 'new'){ // new category
                    if(temp[2] == 'description'){temp[2] = ' ';}
                    currentSection = temp[1];
                    tempContainer.innerHTML += "<br><br><div class='spacer' style='max-width:900px;'></div><br><br><h3 style='margin-bottom:5px'>"+temp[1]+"</h3><p style='margin-top:0'>" + temp[2] + "</p><div class='menuItemContainer' id='"+currentSection+"'></div>";
                }else{
                    if(temp[2] == 'description2'){temp[2] = ' ';}else{temp[2] = "<br>" + temp[2];}
                    document.getElementById(currentSection).innerHTML += "<div><b>"+temp[0]+" - $"+temp[1]+"</b>"+temp[2]+"</div>";
                }
            }

            // If no breakfast, show lunch menu
            if(restaurantBreakfast[0] == 'empty'){
                document.getElementById('dinnerMenu').style.display = 'block';
            }else{
                document.getElementById('dinnerMenu').style.display = 'none';
            }
        }

        // Always Menu
        if(restaurantCMen[0] != 'empty'){
            menuContainer.innerHTML += "<div id='alwaysMenu' class='menuMainContainer'></div>";
            let tempContainer = document.getElementById('alwaysMenu');
            for(i=0; i<restaurantCMen.length; i++){
                let temp = restaurantCMen[i].split(' | ');

                if(temp[0] == 'new'){ // new category
                    if(temp[2] == 'description'){temp[2] = ' ';}
                    currentSection = temp[1];
                    tempContainer.innerHTML += "<br><br><div class='spacer' style='max-width:900px;'></div><br><br><h3 style='margin-bottom:5px'>"+temp[1]+"</h3><p style='margin-top:0'>" + temp[2] + "</p><div class='menuItemContainer' id='"+currentSection+"'></div>";
                }else{
                    if(temp[2] == 'description2'){temp[2] = ' ';}else{temp[2] = "<br>" + temp[2];}
                    document.getElementById(currentSection).innerHTML += "<div><b>"+temp[0]+" - $"+temp[1]+"</b>"+temp[2]+"</div>";
                }
            }

        }
}

function changeMenu(selectValue){
    if(selectValue != 'null'){
        var menuDivList = document.getElementsByClassName('menuMainContainer');
        for(i=0; i<menuDivList.length; i++){
            menuDivList[i].style.display = 'none';
        }

        document.getElementById(selectValue).style.display = 'block';
        document.getElementById('alwaysMenu').style.display = 'block';
    }   
}