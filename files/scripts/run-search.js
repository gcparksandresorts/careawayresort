function runSearch(value, type){
    value = value.replace(/\ /g, '+');

    if(type == 'int'){
        window.open("?query=" + value, "_self");
    }else{
        window.open("https://gcparksandresorts.github.io/careawayresort/search?query=" + value, "_self");
    }
}