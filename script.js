let company = companyList[0];
let companyId =0;

let articleList;

/*

let article = articleList[0];
let articleId =0;

let basket = basketList[0];
let basketList=[];
let basketId=null;


let customer = customerList[0];
let customerId =0;
*/
function renderLeft() {
    let html =``;
    html += renderCompany();
    html += renderCategory();
    html += renderArticle();
    
    document.getElementById("left").innerHTML=html;
}

function saveBasket() {
    save("DB-joergdeymann-Liefero-basket",basketList);
}

function loadBasket() {
    return load("DB-joergdeymann-Liefero-basket");
}

function saveCompany() {
    save("DB-joergdeymann-Liefero-company",companyList);
}

function loadCompany() {
    return load("DB-joergdeymann-Liefero-company");
}


function initData() {
    let c = loadCompany();
    if (c != null) {
        companyList=c;
    } else {
        categorySetAll();
    }
    customerUse(0); 
    companyUse(0);
}

function initBasket() {
    basketList = loadBasket();
    if (basketList == null) {
        basketList=[];
        basketAdd(); 
    }
    basketUse(0);  
}

function init() {
    initData();
    initBasket();

    renderLeft();
    renderBasket();

    intro();
    addScrollListener();
}