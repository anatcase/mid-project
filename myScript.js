var i = 2;
var slideCount = 3;
function showSlides() {
    if (i > slideCount) {
        i = 1;
    }
    document.getElementById("carousel").src = "images/banner" + i + ".jpg";
    i++;
}

var myVar = setInterval(showSlides, 5000);