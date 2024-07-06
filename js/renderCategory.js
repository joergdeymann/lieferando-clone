function renderCategoryRow(i, text, choosen) {
    let html=`<a ${choosen} href="#choice${i}">${text}</a>`;
    return html;
}

function renderCategoryInnerHTML() {
    let beloved = `Beliebt <img src="./img/heart_red.svg">`;
    let innerhtml = renderCategoryRow(0,beloved,`class="choosen"`);
    for (let i=1;i<categoryList.length;i++) {
        let choosen="";
        innerhtml += renderCategoryRow(i,categoryList[i]["name"],choosen);
    }
    return innerhtml;
}


function renderCategory() {
    let innerhtml=renderCategoryInnerHTML();

    let html=/*html*/ `
    <div class="menubar-container">

        <div id="searchbar"  class="invisible searchbar-container">
            <article class="searchbar">
                <img class="size24" src="./img/search.svg">
                <input type="text" placeholder="Suche nach Gerichten, usw." oninput="renderArticleList()" id="article-search">
                <div class="i" onClick="categoryToggleBar()">X</div>    
            </article>
        </div>
        
        <div id="menubar" class="menu-choice-container max-width">
            
            <div class="back-round size32" onClick="categoryToggleBar()"><img class="size24" src="./img/search.svg"></div>
            <div onClick="menuSelectorSlide(-10)" class="back-round size32"><span class="fs24">&lt</span></div>
            <div id="menu-selector" class="menu-choice-section flex-row">
                ${innerhtml}
            </div>
            <div  onClick="menuSelectorSlide(10)" class="back-round size32"><span class="fs24">&gt</span></div>
            <div class="back-round size32"><img class="size24" src="./img/list.svg"></div>
        
        </div>
    </div>

    `;
    return html;
}
