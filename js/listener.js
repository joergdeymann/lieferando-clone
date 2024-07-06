function addAboutListener() {
    document.getElementById("about").addEventListener("click",closeImg);
    document.getElementById("about-background").addEventListener("click",doNothing); 
    document.getElementsByTagName("body")[0].style.overflow="hidden";
}

function doNothing(e) {
    e.stopPropagation();
}
