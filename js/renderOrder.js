function renderOrder(animate=true) {
    let html=``;
    html += renderOrderHeader();
    html += renderOrderContent();
    document.getElementById("window").innerHTML=renderOrderDone(html);
    animateWindowSetAnimation(animate);
    animateWindowOpen();
    addAboutListener();
}

function renderOrderDone(content) {
    let html =/*html*/ `
        <div id="about" class="about">
            <div id="about-background" class="about-background clear-height">
                ${content}
            </div>
        </div>
    `;
    return html;
}

function renderOrderHeader() {
    let html=/*html*/ `
        <div class="evaluation-header border-radius-top">
            <h2>Ihre Bestellung</h2>
            <div>
                Vielen Dank für Ihre Bestellung!
            </div>
        </div>
    `;
    return html;
}

function renderOrderDeliver() {
    return `
        <div class="about-card m16">
            Herzlichen Glückwunsch !<br>
            Die Zahlung ist bestätigt !<br>
            <br>
            Ihre Lieferung wird in Kürze bei Ihen ankommen.<br>
            In der Regel brauchen wir 30min bis 60min bis wir bei Ihnen eintreffen.<br>
            <br>
            Wir freuen uns über Ihre Bewertung in unserem Shop,<br> also nehmen Sie sich Zeit, wenn Sie mögen!<br>
        </div>
    
    `;
}

function renderOrderSelf() {
    return `
        <div class="about-card m16">
            Herzlichen Glückwunsch !<br>
            Die Zahlung ist bestätigt !<br>
            <br>
            Ihre Essen steht in 20min bei uns bereit.<br>
            <br>
            Wir freuen uns über Ihre Bewertung in unserem Shop,<br> also nehmen Sie sich Zeit, wenn Sie mögen!<br>
        </div>
    `;
}

function renderOrderContent()  {
    let html = "";
    if (basket.deliver > 0) {        
        html = renderOrderDeliver();
    } else {
        html = renderOrderSelf();
    }
    return html;
}
