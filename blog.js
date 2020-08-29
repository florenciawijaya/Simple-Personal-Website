function showMore(id) {
    var moreTextId = "span" + id;
    var moreText = document.getElementById(moreTextId);
    var buttonText = document.getElementById(id);

    if(moreText.style.display === "inline") {
        buttonText.innerHTML = "Read more...";
        moreText.style.display = "none";
    }
    else {
        buttonText.innerHTML = "Read less...";
        moreText.style.display = "inline";
    }
}