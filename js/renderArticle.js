function renderArticleList() {
    document.getElementById("article-list").innerHTML=renderArticleInner();
}

function renderArticleInner() {
    let innerhtml=renderArticleOrderByCategory();
    let html=renderArticleOuterHTML(innerhtml);
    return html;
}

function renderArticle() {
    let html=renderArticleInner();
    html = `<div id="article-list" class="article-list">${html}</div>`;
    return html;  
}

function renderArticleOrderByCategory() {
    let html=``;
    for (i=0;i<categoryList.length;i++) {   
        categorySet(i);
        
        let htmlHeadline = renderArticleCategoryHeadline();
        let htmlArticle = renderArticleCardByCategory();

        if (htmlArticle != "") {
            html += htmlHeadline + htmlArticle;
        }
    }
    html += renderCompanyImpressum();
    return html;
}

function renderArticleCategoryHeadline() {
    let img=category["img"];
    let headline=category["name"];
    if (img == null || img == "") return "";

    let html=/*html*/`
        <div class="article-spacer" id="choice${categoryId}"></div>
        <img class="article-image" src="${img}">
        <h2>${headline}</h2>

    `;

    return html;
}

function renderArticleCardByCategory() {
    let html=``;
    for (let c=0;c < category["articleIdList"].length;c++) {
        let id=category["articleIdList"][c];
        html += renderOneArticle(id);
    }
    return html;    
}

function renderArticleOuterHTML(innerhtml) {
    let html=/*html*/`
        <div class="content-article max-width">
            ${innerhtml}
        </div>
    `;
    return html;
}

function renderOneArticleImage(img) {
    let htmlImg="";
    if (img == null || img == "") return "";

    htmlImg=`
        <img alt="Article Image" src="${img}">
    `;
    return htmlImg;
}

function renderOneArticle(id) {
    let name=articleList[id]["name"];
    let text=articleList[id]["text"];
    let price=articleList[id]["price"];
    let img=articleList[id]["img"];
    let plus="+";
    let category="";
    if (!articleFilter(name,text)) return "";

    let html = /*html*/ `
    ${category}
    <article>
        <div class="inner-article">
            <div> 
                <h3>${name} <div class="i" onclick="openArticleDetail(${id})">i</div></h3>
                <div class="article-content">${text}</div>
                <h3>${currency(price)}</h3>
                <div id="article-plus${id}" class="plus" onClick="basketAddArticle(${id})">${plus}</div>
            </div>
            ${renderOneArticleImage(img)}
        </div> 
    </article>
    `
    return html;
} 

function articleFilter(name,text) {
    let node=document.getElementById("article-search");
    if (node == null) return true;
    
    let search=node.value;
    if (search=="") return true;
    if (name.indexOf(search) != -1) return true;
    if (text.indexOf(search) != -1) return true;
    return false;    
} 
