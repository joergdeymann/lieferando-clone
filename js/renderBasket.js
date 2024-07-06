let subtotal = 0;

function renderBasket() {
    subtotal = 0;
    let html = ``;
    html += renderBasketHeader();
    html += renderBasketEmpty();
    html += renderBasketItems();
    html += renderBasketTotal();
    document.getElementById("basket-right").innerHTML = html;
    saveBasket();
}

function openFrom() {
    let date = new Date;
    let dayOfWeek = date.getDay() - 1;
    if (dayOfWeek == -1) dayOfWeek = 6; // Start widh Monday

    let openFrom = company["openTimes"][dayOfWeek * 2];
    return openFrom;
}

function deliverFrom(time) {
    let t = time.split(":");
    let mins = +t[0] * 60 + (+t[1]) + 30
    let hh = Math.floor(mins / 60);
    let mm = mins % 60;
    return numberWithNull(hh) + ":" + numberWithNull(mm);
}

function renderBasketHeader() {
    let openTime = openFrom();
    let deliverTime = deliverFrom(openTime);

    let slider = "";
    if (basket["deliver"] ==0) slider="pushbutton-slide-right";

    let html =/*html*/`
        <div class="basket-top">
            <div class="basket-nav">
                <div></div>
                <img class="size24" src="./img/heart_white.svg">
                <a onclick="closeFreeBasket()" class="plus-button color-red">X</a>
            </div>
            <h2>Warenkorb</h2>
            <div class="pushbutton-container">
                <div class="pushbutton-slider ${slider}"></div>

                <div onclick="pushbuttonSlideLeft(this);basketSetDelivery(1);" class="pushbutton-content">
                    <img src="./img/bike.svg">
                    <div><b>Lieferung</b> ab ${deliverTime}</div>
                </div>

                <div onclick="pushbuttonSlideRight(this);basketSetDelivery(0);" class="pushbutton-content">
                    <img src="./img/bag.svg">
                    <div><b>Abholung</b> ab ${openTime}</div>
                </div>
            </div>
            <br><br>
        </div>
    `;
    return html;

}
function getEndprice() {
    let paypal = company["paypal"];
    let endprice = subtotal + paypal + getDeliverCost();
    return endprice;

}

function getDeliverCost() {
    if (basket["deliver"] == 0) return 0;
    return company["deliverCost"];
}

function isOrderable() {
    return subtotal >= company["minOrder"];
}

function rMinOrder() {
    let minOrderAmount = company["minOrder"];

    let info = "";
    if (subtotal < minOrderAmount) {
        info = `class="color-red"`;
    }

    let html=`
        <div ${info}>
            <div><i>Mindestbestellwert</i></div>
            <div><i>${currency(minOrderAmount)}</i></div>
        </div>
    `;
    return html;

}

function rDeliver() {
    if (basket["deliver"] == 0) return "";
    let deliverCost = getDeliverCost();
    let html= `
        <div>
            <div>Liefergebühr</div>
            <div>${currency(deliverCost)}</div>
        </div>    
    
    `;
    return html;
}

function rPayButton(endprice) {

    let html="";
    if (isOrderable()) {
        html=`
        <div class="pay" onclick="order()" >Bezahlen (${currency(endprice)})</div>
        `;
    } else {
        html=`
        <div class="pay dark">${currency(endprice)}</div>
        `;    
    }
    return html;
}

function renderBasketSummery() {
    if (subtotal == 0) return "";
    document.getElementById("basket-total").innerHTML=renderBasketTotalInner();
}

function renderBasketTotalInner() {
    let paypal = +company["paypal"];
    let endprice = 0;

    if (subtotal != 0) {
        endprice=subtotal + paypal + getDeliverCost();
    } 

    let html =`
        ${rMinOrder()}

        <div>
            <div>Zwischensumme</div>
            <div>${currency(subtotal)}</div>
        </div>

        <div>
            <div>Transaktionsgebühr</div>
            <div>${currency(paypal)}</div>
        </div>

        ${rDeliver()}

        <div>
            <div><b>Gesamt</b></div>
            <div><b>${currency(endprice)}</b></div>
        </div>


        ${rPayButton(endprice)}
    `;

    document.getElementById("bottom-button").innerHTML = rPayButton(endprice);

    return html;
}

function renderBasketTotal() {
    let html =/*html*/`
        <div id="basket-total" class="basket-bottom sum">
            ${renderBasketTotalInner()}
        </div>
    `;
    if (subtotal == 0) return "";
    return html;
}


function renderBasketEmpty() {
    if(!isBasketEmpty()) return "";  //Basket i
    let html=`
            <div class="itemOfBasket basket-info">
                <img class="size48" src="./img/basket.svg">

                <h2>Fülle Deinen Warenkorb</h2>
                <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle Dein Essen</p>
            </div>
    `;
    return html;
}