function renderCompanyImpressum() {
    let owner=company["owner"];
    let fax = company["fax"];
    let mail = company["mail"];
    let street = company["address"]["street"];
    let city = company["address"]["city"];
    let companyName = company["address"]["name"];
    

    let html = /*html*/ `
        <h3>Impressum</h3>
        <div class="company-impressum">
            ${owner} handelt im Namen von ${companyName}<br>
            ${street}<br>
            ${city}<br>
            <a class="invert" href="mailto:${mail}">Sende uns eine E-Mail</a><br>
            Fax: ${fax}<br>
            Plattform der EU-Kommission zur Online-Streitbeilegung: <a  target="_blank"
                href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>
            <hr>
            Wir sind ein professioneller Anbieter. Erfahre mehr darüber, wie wir gemeinsam mit Liefero.de die
            Verbraucherverantwortung übernehmen. <br>

            <br>
        </div>
    `;
    return html;
}