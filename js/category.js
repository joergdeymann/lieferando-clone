let category = null;
let categoryList = [];
let categoryId =0;

function categoryListUse(list) {
    categoryList=list;
    categoryId=null;
    category=null;

}

function categoryNew() {
    let c = {
        "tag": "",
        "name": "",
        "img": "",
        "articleIdList": []
    }

    categoryList.push(c);
    category=categoryList.at(-1);
    categoryId=categoryList.length-1;   
}

function categoryAdd(tag,categoryName,img) {
    categoryNew();

    categorySetAny("tag",tag);
    categorySetAny("name",categoryName);
    categorySetAny("img",img);
    categorySetArticleList(tag);
}

function categorySetArticleList(c) {
    for (let i=0;i<articleList.length;i++) {
        if (articleList[i]["category"] == c) {
            category["articleIdList"].push(i);
        }
    }
}

function categorySetAll() {
    for (c = 0; c < companyList.length; c++) {
        companyUse(c);
    
        for (let i=0;i<articleList.length;i++) {
            let index = categoryList.findIndex(obj => obj.tag == articleList[i].category);
            if (index > -1) {
                categoryList[index].articleIdList.push(i);
            }
        }
    }
}

function categorySet(id) {
    category=categoryList[id];
    categoryId=id;
}

function categoryRemove(id) {
    categoryList.splice(id,1);
    if (id == categoryId) {
        categoryId=null;
        category=null;
    } else
    if (id < categoryId)  {
        categorySet(categoryId-1);
    }
}


function categorySetAny(key,value) {
    if (value != null) {
        category[key] = value;
    }    
}


function categoryUse(id) {
    categorySet(id);
    articleListUse(category["articleList"]);
} 

