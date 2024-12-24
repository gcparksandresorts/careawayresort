const gallery = document.getElementById("galleryContainer");

var currentOn = 0;

const indLength = galleryIndex.length-1;

for (let i = 0; i < galleryIndex.length; i++) {
			let tempVal = galleryIndex[i].split(" | ");
			if(tempVal[1] != 'none'){
  				gallery.innerHTML += "<div id='gallery-"+i+"'> <img src='"+tempVal[0]+"'> <div>"+tempVal[1]+"</div></div>";
			}else{
				gallery.innerHTML += "<div id='gallery-"+i+"'> <img src='"+tempVal[0]+"'></div>";
			}
			if(i == 0){
				document.getElementById("gallery-0").classList.add("isOn");
			}
}

gallery.innerHTML += "<button id='gBack' onclick='galleryBack()'><</button> <button id='gForward' onclick='galleryForward()'>></button>";

console.log("Image gallery count: " + galleryIndex.length + " Max index: " + indLength);

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
