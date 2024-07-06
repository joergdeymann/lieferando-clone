function renderAbout(animation=true) {
    let html=``;
    html += renderAboutStart();
    html += renderAboutTimes();
    html += renderAboutPayments();
    html += renderAboutImpressum();
    html += renderAboutEnd();

    document.getElementById("window").innerHTML=html;

    animateWindowSetAnimation(animation);
    animateWindowOpen();
    addAboutListener();
}

function renderAboutStart() {
    let googleMap=company["googleMap"];
    let html =/*html*/ `
        <div id="about" class="about">
            <div id="about-background" class="about-background">

                <h1 class="about-border">Über dieses Geschäft</h1>
                <div class="about-nav about-border">
                    <a onclick="renderEvaluation(false)" >Bewertunngen</a>
                    <div class="gradient-underline">Info</div>            
                </div>
            
                <div class="about-scroll" id="about-scroll">
                    <div class="noborder">
                    <iframe class="googlemaps" src="${googleMap}"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
    `;
    return html;
}

function renderAboutEnd()  {
    let html = `<a>Rechtlich Bedenken melden</a>
        </div> </div></div>`;
        return html;
}


function renderAboutTimes()  {
    let days=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];
    
    let html ='';
    html +=`<h2 class="about-border"><img alt="clock" src="./img/clock.svg">Lieferzeiten</h2>`;
    html +=`<div class="about-card">`;

    for(let i=0; i<7;i++) {
        let day=days[i];
        let time=company["openTimes"][i*2] + " - " + company["openTimes"][i*2+1];
        html +=`
        <div class="about-times">
            <div>${day}</div>
            <div>${time}</div>
        </div>
        `;
    }
    html += '</div>';
    return html;
}

function renderAboutImpressum() {
    let owner=company["owner"];
    let fax = company["fax"];
    let mail = company["mail"];
    let street = company["address"]["street"];
    let city = company["address"]["city"];
    let companyName = company["address"]["name"];

    let html = /*html*/ `
        <h2 class="about-border"><img alt="company" src="./img/company.png">Impressum</h2>
        <div class="about-card">
            ${owner} handelt im Namen von ${companyName}<br>
            ${street}<br>
            ${city}<br>
            <a class="invert" href="mailto:${mail}">Sende uns eine E-Mail</a><br>
            Fax: ${fax}<br>
            Plattform der EU-Kommission zur Online-Streitbeilegung: <a target="_blank"
                href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>
            <hr>
            <p>Wir sind ein professioneller Anbieter. Erfahre mehr darüber, wie wir gemeinsam mit Liefero.de die
            Verbraucherverantwortung übernehmen.</p> <br>

            <br>
        </div>
    `;
    return html;
}

function renderAboutPayments() {
    let html=/*html*/ `
        <h2 class="about-border"><img alt="cash" src="./img/cash.svg">Bezahlmethoden</h2>
        <div class="about-card pay-card">
        <a alt="Cash"      class="about-paycard"><img src="./img/cash.svg"></a>
        <a alt="Paypal"    class="about-paycard"><img src="./img/paypal.png"></a>
        <a alt="Card"      class="about-paycard"><img src="./img/mastercard.svg"></a>
        <a alt="Klarna"    class="about-paycard"><img src="./img/klarna.svg"></a>
        <a alt="Bitcoin"   class="about-paycard"><img src="./img/bitcoin.svg"></a>
        <a alt="Coupon"    class="about-paycard"><img src="./img/coupon.svg"></a>
        <a alt="Paycard"   class="about-paycard"><img src="./img/paycard.svg"></a>
        </div>
    `;
    return html;
}
