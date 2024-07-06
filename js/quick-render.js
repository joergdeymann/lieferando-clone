function qrArticleAmount(id, value) {
    node=document.getElementById(`article-plus${id}`);
    if (value == 0) {
        value="+";
        node.classList.remove("black-number");
    } else {
        if (!node.classList.contains("black-number")) node.classList.add("black-number");
    }
    node.innerText=value;
}