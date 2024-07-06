function articleListUse(list) {
    if (typeof list === "object") {
        articleList = list;
        articleId=null;
        article=null;
    }
    
    if (typeof list === "number") {
        articleList = company[list].articleList;
        articleId=null;
        article=null;
    }    
}

function articleNew() {
    let c = {
        "category": "",
        "name": "",
        "text":"",
        "price":0,
        "detail": "",
        "img": "",
    }

    articleList.push(c);
    article=articleList.at(-1);
    articleId=articleList.length;   
}

function articleAdd(category,name,text,price,detail,img) {
    articleNew();
    
    articleSetAny("category",category);
    articleSetAny("name",name);
    articleSetAny("text",text);
    articleSetAny("price",price);
    articleSetAny("detail",detail);
    articleSetAny("img",img);
    
}


function articleSet(id) {
    article=articleList[id];
    articleId=id;
}

function articleRemove(id) {
    articleList.splice(id,1);
    if (id == articleId) {
        articleId=null;
        article=null;
    } else
    if (id < articleId)  {
        articleSet(articleId-1);
    }
}

function articleSetAny(key,value) {
    if (value != null) {
        article[key] = value;
    }    
}
