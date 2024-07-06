function animateWindowOpen(id="about") {
    node=document.getElementById(id).classList;
    if (!node.contains("about-animation")) {
        node.add("opacity-visible");
        node.remove("hide");
        return;
    }


    setTimeout(() => {
        if (!node.contains("opacity-visible")) {
            node.add("opacity-visible");
            setTimeout(() => {
                node.remove("hide");
            },250);
        
        }
    
    },200);
}


function closeImg(e) {
    let node=document.getElementById("about");
    node.classList.add("about-animation");
    node.classList.remove("opacity-visible");
    document.getElementsByTagName("body")[0].style.overflow='';

    setTimeout(() => {
        node.classList.add("hide");
    },600);


    if (e) {
       e.stopPropagation();
    }
}


function doNothing(e) {
    e.stopPropagation();
}


function animateWindowSetAnimation(animation) {
    let node=document.getElementById("about");

    if  (animation) {
        if (!node.classList.contains("about-animation")) {
            node.classList.add("about-animation");
        }
    } else {
        node.classList.remove("about-animation");
    }
}