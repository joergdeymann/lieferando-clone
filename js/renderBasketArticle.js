function getArticleIdFromBasket(bItem) {
    return basket["articleIdList"][bItem];
}

function getArticleFromBasket(bItem) {
    aId=getArticleIdFromBasket(bItem)
    return articleList[aId];
}

function isBasketEmpty() {
    return basket["articleIdList"].length == 0;
}

function renderBasketItems() {
    subtotal=0;
    if(isBasketEmpty()) return "";  //Basket i
    let html=`<div class="basket-center">`;
    for (bItem=0;bItem<basket["articleIdList"].length;bItem++) {
        html += renderBasketItem(bItem);
    }

    html += `</div>`;

    return html;
}
    
function renderBasketItem(bItem) {
    let article=getArticleFromBasket(bItem);
    let aId=getArticleIdFromBasket(bItem);
    
    let amount=+basket["articleAmountList"][bItem];
    let price=+article["price"];
    let name=article["name"];
    
    let sum=amount * price;
    subtotal += sum;
    qrArticleAmount(aId, amount);

    let html =/*html*/`
        <div id="basketItem" class="itemOfBasket">
            <div>
                <div id="amount${aId}">${amount}</b></div>
                <div><b>${name}</b></div>
                <div id="summe${aId}">${currency(sum)}</div>
            </div>
            <div>
                <div>&nbsp;</div>
                <div><a href="#">Anmerkung hinzufügen</a></div>
                <div>
                    <div onClick="basketSubArticle(${aId})" class="plus-button">-</div>
                    <span id="amount-slelector${aId}">${amount}</span>
                    <div  onClick="basketAddArticle(${aId})" class="plus-button">+</div>
                </div>
            </div>

            <hr>

        </div>
    `;
    return html;
}

