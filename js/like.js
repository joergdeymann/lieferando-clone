function toggleLikeCompany() {
    let name=customer["addressList"][0]["name"];
    let id=company["likeList"].indexOf(name);
    let like= document.getElementById("company-like");
    if (id == -1) {
        company["likeList"].push(name); 
        if (!like.classList.contains("heart-red")) {
            like.classList.add("heart-red");
        } 
    } else {
        company["likeList"].splice(id,1); 
        like.classList.remove("heart-red");
    }
    saveCompany();
}

function quickRenderLikeCompany() {
    let name=customer["addressList"][0]["name"];
    let id=company["likeList"].indexOf(name);
    companySetLikeStatus();
}


function companySetLikeStatus() {
    let like= document.getElementById("company-like");
    if (hasLikedCompany()) {
        like.classList.add("heart-red");
    } else {
        if (!like.classList.contains("heart-red")) {
            like.classList.remove("heart-red");
        } 
    }
}

function hasLikedCompany() {
    let name=customer["addressList"][0]["name"];
    return company["likeList"].indexOf(name) != -1;
}
