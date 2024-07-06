function renderCompany() {
    let logo = company["logo"];
    let banner = company["banner"];
    let name = company["address"]["name"];
    let street = company["address"]["street"];
    let city = company["address"]["city"];
    let quality = company["quality"];
    let qualityCount = company["qualityCount"];
    let liked = hasLikedCompany() ? "heart-red" : "";

    let html =/*html*/`
        <img alt="Company Image" class="company-image" src="${banner}">

        <div class="company-logo-container">
            <img id="company-logo" alt="Company Logo" class="hide company-logo circle-image" src="${logo}">
        </div>

        <div class="company-container">
            <div class="content-company max-width">

                <div class="space">
                    <h1>${name}</h1>
                    <div class="flex-row gap16">
                        <div class="back-round size48" onclick="renderAbout()">
                            <div  class="text">i</div>
                        </div>
                        <div onClick="toggleLikeCompany()" class="back-round size48"><img id="company-like" class="size32 ${liked}" src="./img/heart_white.svg"></div>
                    </div>
                </div>

                <div>
                    <p class="flex-center-left gap8"><img class="height16" src="./img/star-full.svg"> <a onclick="renderEvaluation()"
                            class="reverse-link"><b>${quality}</b> (${qualityCount})</a></p>
                    <p class="flex-center-left gap8"><img class="height16" src="./img/landmark.svg">${street}, ${city}</p>
                </div>
            </div>
        </div>
        `;

    return html;

}
