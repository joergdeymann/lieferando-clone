function renderShops(animate=true) {
    header="Ihre Shopwahl";
    info="Bite suchen Sie ihren Liebling aus!";
    content=`
        <div class="about-card m16">
            <a onclick="chooseShop(0)">Anatolia Grill</a><br>
            <a onclick="chooseShop(1)">Burger Schmiede</a><br>
        </div>
    `;

    renderOverlay(animate,header,info,content);
}