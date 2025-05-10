for(i=0; i<blogCategories.length; i++){
    document.getElementById('blogCategorySelect').innerHTML += '<option value="'+i+'">'+blogCategories[i]+'</option>';
}

var codePreview;
var notOpUpdate;

function buildPost(){
    const blogPreview = document.getElementById('blogPreview');
    const codeOutput = document.getElementById('codeOut');

    var authorName = document.getElementById('authorName').value;
    const categoryValue = document.getElementById('blogCategorySelect').value;
    const blogPostingDate = document.getElementById('blogPostingDate').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blogImg = document.getElementById('blogImg').value;
    const blogLink = document.getElementById('blogLink').value;
    const blogTags = document.getElementById('blogTags').value;
    const blogContents = document.getElementById('blogContents').value.replace(/(\r\n|\n|\r)/gm, "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
   
    if(categoryValue == '1'){
        notOpUpdate = false;
        authorName = "Resort Operations";
    }else{
        notOpUpdate = true;
    }

    codeOutput.innerHTML = "iter += 1; blogData[iter] = {";
    codeOutput.innerHTML += "<br> title: \"" + blogTitle + "\",\
        <br> info: \""+blogPostingDate+" | "+categoryValue+" | "+authorName + "\",\
        <br> blogLink: \""+blogLink+"\", tagsList: \"" + blogTags + "\",";

    if(notOpUpdate){
        codeOutput.innerHTML += "<br> headerImg: \"" + blogImg + "\",";
    }
    codeOutput.innerHTML += "<br> contents: \"" + blogContents + "\"<br>}";

    // Generate Preview:
    codePreview = {
        title: blogTitle,
        info: blogPostingDate + " | " + categoryValue + " | " + authorName,
        blogLink: blogLink, tagsList: blogTags,
        headerImg: blogImg,
        contents: blogContents
    }

    generatePreview();
}

function generatePreview(){
    const blogPreview = document.getElementById('blogPreview');

    if(notOpUpdate){ // regular blog

        const qInfo = codePreview.info.split(' | ');

        blogPreview.innerHTML = "<div id='blogPage'><div id='blogHeader'><img src='"+codePreview.headerImg+"'><h4>Resort Blog | "+blogCategories[qInfo[1]]+"</h4><h1>"+codePreview.title+"</h1> \
            <div class='spacer'></div> <div><h4>"+qInfo[2]+"</h4><h4>"+qInfo[0]+"</h4></div> </div>\
            <div id='blogContent'>"+document.getElementById('blogContents').value.replace(/(\r\n|\n|\r)/gm, "")+"</div></div>";
    }else{
        const qInfo = codePreview.info.split(' | ');
        blogPreview.innerHTML = "<div class='titleBar'><h1>Operations Update</h1></div><div class='titleBar silver'><h2>("+qInfo[0]+") "+codePreview.title+"</h2></div>\
        <div class='leftContainer' id='opsUpdateCont'>"+document.getElementById('blogContents').value.replace(/(\r\n|\n|\r)/gm, "")+"</div>";
    }
}

window.addEventListener("beforeunload", function (e) {
    //confirm('Are you sure you want to leave? Changes ARE NOT saved once this page is closed!');
    e.preventDefault();
  });