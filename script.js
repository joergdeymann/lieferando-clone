let userid=0;
let companyid=0;
let basketid=0;

let article = null;
let articleList = [];
let articleId =0;

let basket = {}
let basketList=[];
let basketId=null;

let company = null;
let companyList = [];
let companyId =0;

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
    companyList = loadCompany();
    if (companyList == null) {
        companyList=[];
        addAllCompany();  
        evaluationInit(); 
        addAllArticle();  
        addAllCategory();
    }
    
}

function initBasket() {
    companyUse(0);   
    customerUse(0); 
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