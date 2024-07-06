function order() {
    renderOrder();

    clearBasket();
    saveBasket();
    
    subtotal=0;
    document.getElementById("bottom-button").innerHTML = rPayButton(0);
    
    renderBasket();
    renderArticleList();
    closeFreeBasket();
}