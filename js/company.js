function companyNew() {
    let c = {
        "address": {},
        "logo":"",
        "banner":"",
        "tel": "",
        "mail":"",
        "minOrder":0,
        "deliverCost": 0,
        "quality":0,
        "qualityCount":0,
        "openTimes": [],
        "articleList": [],
        "categoryList":[],
        "evaluationList":[],
        "paypal": 0.29,
        "likeList":[],
        "googleMap":"",
        "fax":"",
        "owner":""
    }

    companyList.push(c);
    company=companyList.at(-1);
    companyId=companyList.length;   
}

function companyAdd(name,street,city,tel,mail,logo,banner,minOrder,deliverCost,quality,qualityCount,openTimes,fax,owner,googleMap) {
    companyNew();
    companySetAddress(name, street, city);
    
    companySetAny("logo",logo);
    companySetAny("banner",banner);
    companySetAny("tel",tel);
    companySetAny("mail",mail);
    companySetAny("logo",logo);
    companySetAny("banner",banner);
    companySetAny("minOrder",minOrder);
    companySetAny("deliverCost",deliverCost);
    companySetAny("quality",quality);
    companySetAny("qualityCount",qualityCount);
    companySetAny("openTimes",openTimes);
    companySetAny("fax",fax);
    companySetAny("owner",owner);
    companySetAny("googleMap",googleMap);
}

function companySet(id) {
    company=companyList[id];
    companyId=id;
}

function companyRemove(id) {
    companyList.splice(id,1);
    if (id == companyId) {
        companyId=null;
        company=null;
    } else
    if (id < companyId)  {
        companySet(companyId-1);
    }
}

function companySetAddress(name, street, city) {
    if (name != null && street != null && city != null) {
        company["address"]=newAddress(name, street, city);
    }
}

function companySetAny(key,value) {
    if (value != null) {
        company[key] = value;
    }    
}

function companyUse(id) {
    companySet(id);
    articleListUse(company["articleList"]);
    categoryListUse(company["categoryList"]);
} 

function chooseShop(id) {
    companyUse(id);

    renderLeft();

    if (basketUse(id) == -1) {
        basketAdd();    
        basketUse(id);
    };  

    renderBasket();
    intro();
    closeImg()
}
