function renderEvaluation(animate=true) {
    let html=``;
    html += renderEvaluationStart();
    html += renderEvalationReviews();
    html += renderEvaluationEnd();

    document.getElementById("window").innerHTML=html;
  
    animateWindowSetAnimation(animate);
    animateWindowOpen();
    addAboutListener();
}

function evaluationSumOf(field) {
    let sum=0;
    for (i=0; i<evaluationGetReviewAmount();i++) {
        sum+=company["evaluationList"][i][field];
    }
    return sum;
}

function evaluationGetReviewQuality() {
    return evaluationSumOf("qualityReview");
}

function evaluationGetReviewTime() {
    return evaluationSumOf("timeReview");
}

function evaluationGetReviewAmount() {
    return company["evaluationList"].length;
}

function evaluationGetReview() {
    let q=evaluationGetReviewQuality();
    let t=evaluationGetReviewTime();
    return (q+t)/(evaluationGetReviewAmount()*2);
}

function evaluationGetStars(review) {
    let i=0;
    let html =``;
    while (i < Math.floor(review)) {
        html += `<img src="./img/star-full.svg" class="height24">`;
        i++;
    }
    while (i < 5) {
        html += `<img src="./img/star-empty.svg" class="height24">`;
        i++;
    }
    return html;
}

function renderEvaluationHeader() {
    let review = evaluationGetReview() ;
    let stars=evaluationGetStars(review);
    let companyName = company.address.name;
    let amount = evaluationGetReviewAmount();

    let html=/*html*/ `
        <div id="about-background" class="evaluation-header">
            <h2>Allgemeine Bewertungen</h2>
            <div>
                <div class="big">${review.toFixed(0)}</div>
                <div class="vertical-line"></div>
                <div>
                    ${stars}<br>
                    von ${amount} Bewertungen<br>
                    Alle Bewertungen stammen von Liefero Kunden, die bei ${companyName} bestellt haben. <a target="_blank" href="#">Mehr erfahren</a>
                </div>
            </div>

        </div>
    `;
    return html;
}

function renderEvaluationStart() {
    let header = renderEvaluationHeader();
    let html =/*html*/ `
        <div id="about" class="about">
            <div id="about-background" class="about-background">

                <h1 class="about-border">Über dieses Geschäft</h1>
                <div class="about-nav about-border">
                    <div class="gradient-underline">Bewertungen</div>
                    <a onclick="renderAbout(false)">Info</a>            
                </div>
            
                <div class="about-scroll gap32" id="about-scroll">
                    <div class="noborder">${header}</div>

    `;
    return html;
}

function renderEvaluationEnd()  {
    let html = `<a>Rechtlich Bedenken melden</a>
        </div> </div></div>`;
        return html;
}

function renderEvalationReviews() {
    html="";
    for(let i=0;i<evaluationGetReviewAmount();i++) {
        html +=renderEvalutionReview(i);
    }
    return html;
}

function renderEvalutionReview(x)  {
    let ev   = company["evaluationList"][x];
    let qr   = ev["qualityReview"];
    let tr   = ev["timeReview"];
    let date = ev["date"];
    let name = ev["name"];
    let text = ev["text"];
    let qrStars = evaluationGetStars(qr);
    let trStars = evaluationGetStars(tr);
        
    let html =`
        <div class="about-card">
            <h2>${name}</h2>
            <p>${date}</p>
            <div class="flex-space">
                <div>Qualität</div>
                <div>${qrStars}</div>
            </div>
            <div class="flex-space">
                <div>Lieferzeit</div>
                <div>${trStars}</div>
            </div>
            <p>${text}</p>
            <a href="#">Melden</a>
        </div>

    `;
    return html;
}
