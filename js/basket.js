function basketSetDelivery(id) {
    basket["deliver"]=id;
    saveBasket();
    renderBasketSummery();
}

function basketSetDeliveryAddress(address) {
    basket["deliveryAddress"]=address;    
}

function basketSetCustomer(id) {
    if (id != null) {
        customerId=id;
    }
    basket["customerId"]=customerId;
}

function basketSetCompany(id) {
    if (id != null) {
        companyId=id;
    }
    basket["companyId"]=companyId;
}

function getEmptyBasket() {
    let b = {
        "companyId": 0,
        "customerId": 0,
        "deliver": 1,  /* 1= Yes, 0= No */
        "deliveryAddress": {},
        "articleIdList": [],
        "articleAmountList": []
    };
    return b;
}

function basketAdd() {
    let pos=-1;

    if (basketList != null) {
        pos = indexOfCompany(companyId);
    } else {
        basketList = [];
        pos=-1;
    }

    if (pos === -1) {
        let b = getEmptyBasket();
        basketList.push(b);
        basketId=basketList.length-1;
        basket=basketList[basketId];
        
        basket["companyId"]=companyId;
        basket["customerId"]=customerId;

        return basketId;
    }
    return -1;
}

function indexOfCompany(id) {
    return basketList.map(function(e) { return e.companyId; }).indexOf(id);
}

function basketUse(id) {
    const pos = indexOfCompany(id) ;
    if (pos === -1) {
        return -1;
    }
    basketId=pos;
    basket=basketList[pos];
}

function basketAddArticle(id) {
    let i=basket["articleIdList"].indexOf(id);
    if (i  === -1) {
        basket["articleIdList"].push(id);
        basket["articleAmountList"].push(1);
        i=basket["articleAmountList"].length-1;
        
    }  else {
        basket["articleAmountList"][i]++;
    }
   qrArticleAmount(id,basket["articleAmountList"][i]);
   renderBasket();

}   

function basketSubArticle(id) {
   let i=basket["articleIdList"].indexOf(id);
    basket["articleAmountList"][i]--;

    let amount= basket["articleAmountList"][i];
    if (amount == 0) {
        basket["articleAmountList"].splice(i,1);
        basket["articleIdList"].splice(i,1);
        
    }

    qrArticleAmount(id,amount);
    renderBasket();
}   

function clearBasket() {
    basket = getEmptyBasket();
    basketList[basketId]=basket;
}