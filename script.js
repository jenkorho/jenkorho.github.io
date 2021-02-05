const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");
const menu = document.getElementById("menu");
hamburger.style.color = "black";
var menuopen = false;


function back() {
    window.history.back();

}


function hamburgerBtn() {

    navlinks.classList.toggle("show");
    menu.classList.toggle("show");

    //Jos menu ei ole jo auki 

    if (hamburger.style.color == "black") {
        hamburger.style.color = "tomato";
        menuopen = true;
    }

    else {

        //Jos menu auki

        hamburger.style.color = "black"
        menuopen = false;
    }
}

//Skrollausefekti

var prevScrollY = window.pageYOffset;
var menuHeight = menu.offsetHeight;
menu.style.top = "-" + menuHeight + "px";

function showMenu(bool) {

    var currentScrollY = window.pageYOffset;

    if (currentScrollY > prevScrollY && bool == false) {
        menu.style.top = "-" + menuHeight + "px";
    }
    else {
        menu.style.top = "0";
    }

    prevScrollY = currentScrollY;
}

const img_d = "Veritatis quisquam consectetur, fuga asperiores impedit itaque voluptates velit animi, suscipit rem" +
    "minus non ex a amet libero nulla.Soluta eveniet quo placeat rerum nisi enim, magni adipisci fuga " +
    "asperiores!";


var originaltext = "";


function imageBlur(image) {

    var id = setInterval(frame, 5);
    var px = 0;

    console.log(image);

    function frame() {
        if (px == 50) {
            clearInterval(id);
        }
        else {
            px++;
            image.style.filter = "blur(" + px + "px)";
        }
    }
}

function antiBlur(image) {

    var id = setInterval(frame, 5);
    var px = 50;

    console.log(image);

    function frame() {
        if (px == 0) {
            clearInterval(id);
        }
        else {
            px--;
            image.style.filter = "blur(" + px + "px)";
        }
    }
}

function infoText(element, id) {
    var img = document.getElementById(id);
    originaltext = element.innerHTML;
    element.innerHTML = img_d;
    element.style.fontSize = "1.3em";
    element.style.fontWeight = "300";
    imageBlur(img);
}

function textDisap(element, id) {
    var img = document.getElementById(id);
    element.innerHTML = originaltext;
    element.style.fontSize = "2.5em";
    element.style.fontWeight = "700";
    antiBlur(img);
}


//funktiokutsut oisoiden määrän mukaan
window.onscroll = function () {

    slideAnim("1", 400);
    slideAnim("2", 1000);
    slideAnim("3", 1700);
    showMenu(menuopen);

}


function slideAnim(name, height) {
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        var a = document.getElementsByClassName("section-" + name);

        for (var i = 0; i < a.length; i++) {
            if (a[i].classList.contains("slide") == false) {
                a[i].className = a[i].className + " slide";
            }
            else {
                continue;
            }
        }
    }
}

