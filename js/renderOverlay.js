function renderOverlay(animate=true,header,info,content) {
    let html=``;
    html += renderOverlayHeader(header,info);
    html += content;

    document.getElementById("window").innerHTML=renderOverlayContent(html);
    animateWindowSetAnimation(animate);
    animateWindowOpen();
    addAboutListener();
}

function renderOverlayContent(content) {
    let html =/*html*/ `
        <div id="about" class="about">
            <div id="about-background" class="about-background clear-height">
                ${content}
            </div>
        </div>
    `;
    return html;
}

function renderOverlayHeader(header,info) {
    let html=/*html*/ `
        <div class="evaluation-header border-radius-top shop-header">
            <h2>${header}</h2>
            <div>
                ${info}
            </div>
        </div>
    `;
    return html;
}
