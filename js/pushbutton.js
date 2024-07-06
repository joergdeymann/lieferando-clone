function pushbuttonSlideRight(node) {
    let slider=node.parentNode.childNodes[1];
    
    if (!slider.classList.contains("pushbutton-slide-right")) {
        slider.classList.add("pushbutton-slide-right");
    }
}

function pushbuttonSlideLeft(node) {
    let slider=node.parentNode.childNodes[1];    
    if (slider.classList.contains("pushbutton-slide-right")) {
        slider.classList.remove("pushbutton-slide-right");
    }
}
