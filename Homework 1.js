document.getElementById("img").addEventListener("mouseover", AlertMouseover);
document.getElementById("img").addEventListener("mouseout", AlertMouseout);
document.getElementById("img").addEventListener("click", AlertClick);
document.getElementById("img").addEventListener("contextmenu", AlertContextmenu);

document.getElementById("p1").addEventListener("mouseover", Changemouseov);
document.getElementById("p1").addEventListener("mouseout", Changemouseou);
document.getElementById("p1").addEventListener("click", Changeclk);
document.getElementById("p1").addEventListener("contextmenu", Changecontex);


function AlertMouseover() {
    window.alert ("Il mouse e' sopra l'immagine!");
}
function AlertMouseout() {
    window.alert ("Il mouse e' fuori dall'immagine!");
}
function AlertClick() {
    window.alert ("L'immagine e' stata clickata!");
}
function AlertContextmenu() {
    window.alert ("L'immagine e' stata clickata con il tasto destro!");
}

function Changemouseov() {
    p1.src="./Images/2.png";
}
function Changemouseou() {
    p1.src="./Images/3.png";
}
function Changeclk() {
    p1.src="./Images/4.png";
}
function Changecontex() {
    p1.src="./Images/5.png";
}

function Addparagraph() {
    var para = document.createElement("p");
    var node = document.createTextNode("Lorem ipsum. . .");
    para.appendChild(node);
    var element = document.getElementById("placeholderv1");
    element.appendChild(para);
}

function Hideshowparagraph() {
    var x = document.getElementById("placeholderv1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Showparagraph() {
    var x = document.getElementById("placeholderv2");
    x.style.display = "block";
}

function Hideparagraph() {
    var x = document.getElementById("placeholderv2");
    x.style.display = "none";
}

function endisablefieldset() {
    if ((document.getElementById("ch1").checked == false) && (document.getElementById("ch2").checked == false) && (document.getElementById("ch3").checked == false)) {
        document.getElementById("fieldset").disabled = true;
    } else {
        document.getElementById("fieldset").disabled = false;
    }
}