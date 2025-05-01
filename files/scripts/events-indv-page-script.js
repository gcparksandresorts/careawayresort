const pgTitle = document.getElementById('pgTitle');
const bannerSection = document.getElementById('bannerSection');

const bottomTags = document.getElementById('bottomTags');

const urlParams = new URLSearchParams(window.location.search);

// for photo gallery
var indLength; var currentOn = 0;
const gallery = document.getElementById("galleryContainer");

if(urlParams.has('n')){

    const eLink = urlParams.get('n');

    for(i=0; i<eventData.length; i++){
        let temp = eventData[i];

        if(temp.hasOwnProperty('clickLink') && temp.clickLink == eLink){
            let qInfo = temp.info.split(' | ');
            pgTitle.innerHTML = temp.name + " | Events | Globe-City's Careaway Resort";

            bannerSection.innerHTML = "<img src='"+temp.bannerImg+"'><div style='color:white'><h1 style='margin-bottom:5px'>"+temp.name+"</h1><em><a href='../events?category="+qInfo[0]+"'>"+eventCategories[qInfo[0]]+"</a> located in &#128205;<a href='../events?location="+qInfo[1]+"'> "+eventLocationList[qInfo[1]]+"</a></em><p>"+temp.pageIntro+"</p><p class='tagContainer'><a href='../events?season="+qInfo[3]+"'>"+eventSeasons[qInfo[3]]+" Season</a> <a>&#127915; "+eventAdmissionList[qInfo[2]]+"</a></p></div>";

            let tagList = temp.tags.split(','); bottomTags.innerHTML = "";
                for(k=0; k<tagList.length; k++){
                    bottomTags.innerHTML += "<a>"+tagList[k]+"</a>";
                }

            document.getElementById('mainContent').innerHTML = temp.longDescription;

            if(temp.hasOwnProperty('extraImg') && temp.extraImg.includes(' | ')){
                const imgList = temp.extraImg.split(' | ');
                document.getElementById('mainContent').innerHTML += "<div class='container' style='padding-bottom:15px;'><div id='galleryContainer' style='max-width:700px; margin-left:auto; margin-right:auto;'></div></div>";

                setInterval(setupGallery(i),0);
            }
        }
    }

}else{
    window.open('page-unavailable','_self');
}


function setupGallery(index){
    let temp = eventData[index];
    const imgList = temp.extraImg.split(' | ');
    const  galleryIndex = []; iVald = -1;

    for(p=0; p<imgList.length; p++){
       galleryIndex[p] = imgList[p] + " | none";
    }

    indLength = galleryIndex.length-1

    const gallery = document.getElementById("galleryContainer");

    for (let i = 0; i < galleryIndex.length; i++) {
                let tempVal = galleryIndex[i].split(" | ");
                if(tempVal[1] != 'none'){
                    let iT = i + 1;
                    gallery.innerHTML += "<div id='gallery-"+i+"'> <img src='"+tempVal[0]+"'> <div><span style='color:silver'>"+iT+" of "+galleryIndex.length+": </span> "+tempVal[1]+"</div></div>";
                }else{
                    let iT = i + 1;
                    gallery.innerHTML += "<div id='gallery-"+i+"'> <img src='"+tempVal[0]+"'> <div><span style='color:silver'>"+iT+" of "+galleryIndex.length+"</span></div></div>";
                }
                if(i == 0){
                    document.getElementById("gallery-0").classList.add("isOn");
                }
    }

    gallery.innerHTML += "<button id='gBack' onclick='galleryBack()'><</button> <button id='gForward' onclick='galleryForward()'>></button>";

}

function galleryForward(){
    if(currentOn < indLength){
        document.getElementById("gallery-" + currentOn).classList.remove("isOn");
        let tempVar = currentOn + 1;
        document.getElementById("gallery-" + tempVar).classList.add("isOn");
        currentOn += 1;
    }else{
        document.getElementById("gallery-0").classList.add("isOn");
        document.getElementById("gallery-" + currentOn).classList.remove("isOn");
        currentOn = 0;
    }
    
}

function galleryBack(){
    if(currentOn > 0){
        document.getElementById("gallery-" + currentOn).classList.remove("isOn");
        let tempVar = currentOn - 1;
        document.getElementById("gallery-" + tempVar).classList.add("isOn");
        currentOn -= 1;
    }else{
        document.getElementById("gallery-0").classList.remove("isOn");
        currentOn = indLength;
        document.getElementById("gallery-" + currentOn).classList.add("isOn");

    }
}