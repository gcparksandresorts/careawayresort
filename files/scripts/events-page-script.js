const eventsBin = document.getElementById('fullEventsList');

for(i=0; i<eventlistArray.length;i++){
    let temp = eventlistArray[i].split(' | ');

    let tempDescript = temp[5].split('/');
    if(tempDescript[0] != 'no'){
        let builtDiv = "<div><img src='"+temp[7]+"'><div><h3 style='margin-bottom:5px'>"+temp[1]+"</h3>"+tempDescript[1]+"<br><br><br></div><div class='subText'>"+eventAdmissionList[temp[6]]+"</div><div class='tab'>&#128205; "+eventLocationList[temp[3]]+"</div><a href='../"+temp[4]+"'>link</a></div>";
        eventsBin.innerHTML += builtDiv;
    }else{
        console.log('skipped ' + temp[1]);
    }
    
}