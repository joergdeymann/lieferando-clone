function closeFreeBasket() {
    document.getElementById("right").style.display="";
    document.getElementsByTagName("body")[0].style.overflow='';
}

function openFreeBasket() {
    document.getElementById("right").style.display='unset';
    document.getElementsByTagName("body")[0].style.overflow='hidden';
}
