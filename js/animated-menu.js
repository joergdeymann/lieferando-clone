function fixStatus2() {
    menubar.classList.add("invisible");
    menubar.classList.remove("hide-menu");
    searchbar.classList.remove("show-menu");
}

function fixStatus1() {
    searchbar.classList.add("invisible");    
    searchbar.classList.remove("hide-menu");
    menubar.classList.remove("show-menu");
}

function categoryToggleBar() {
    searchbar = document.getElementById("searchbar");
    menubar  = document.getElementById("menubar");
    t=480;

    if (menubar.classList.contains("invisible")) {
        searchbar.classList.add("hide-menu");        
        menubar.classList.add("show-menu");
        menubar.classList.remove("invisible");
        setTimeout(fixStatus1,t);
    } else {
        menubar.classList.add("hide-menu");
        searchbar.classList.add("show-menu");
        searchbar.classList.remove("invisible");
        setTimeout(fixStatus2,t);
    }
}
