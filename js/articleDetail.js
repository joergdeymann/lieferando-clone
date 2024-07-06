function openArticleDetail(id) {
    let html=``;

    html += renderArticleDetailEnvelope(id);
    document.getElementById("window").innerHTML=html;

    animateWindowSetAnimation(true);
    animateWindowOpen();
    addAboutListener();
}

function renderArticleDetailEnvelope(id) {
    let content = renderArticleDeatilContent(id);
    let fixed = renderArticleDeatilFixed();
    

    let html =/*html*/ `
        <div id="about" class="about">
            <div id="about-background" class="about-background p16">
                <h1>Weitere Produktinformationen</h1>
                ${content}
                ${fixed}
            </div> 
        </div>
    `;
    return html;
}

function renderArticleDeatilFixed() {
    let html=`
        <a href="#" class="inverse">Rechtliche Bedenken melden</a>
        <p>
            Wir stellen dir stets relevante Informationen zur Verfügung, die wir von unseren Partnern über 
            deren Produkte erhalten. In einigen Fällen können die angezeigten Informationen jedoch 
            unvollständig, automatisch generiert und/oder noch nicht von Antalya Grill validiert worden sein. 
            Bitte wende dich über dieses <a href="#" class="inverse">Formular</a> an unseren Kundenservice, wenn du Allergien, 
            Unverträglichkeiten oder Fragen zu bestimmten Artikeln hast.
        </p>
    `;
    return html;
}

function renderArticleDeatilContent(id) {
    let html=`
        <p>
            ${articleList[id]["detail"]}
        </p>
    `;
    return html;
}
