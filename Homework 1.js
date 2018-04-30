document.getElementById("img").addEventListener("mouseover", AlertMouseover);
document.getElementById("img").addEventListener("mouseout", AlertMouseout);
document.getElementById("img").addEventListener("click", AlertClick);
document.getElementById("img").addEventListener("contextmenu", AlertContextmenu);

document.getElementById("p1").addEventListener("mouseover",mouseov);
document.getElementById("p1").addEventListener("mouseout",mouseou);
document.getElementById("p1").addEventListener("click",clk);
document.getElementById("p1").addEventListener("contextmenu",contex);


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

function mouseov() {
    p1.src="./Images/2.png";
}
function mouseou() {
    p1.src="./Images/3.png";
}
function clk() {
    p1.src="./Images/4.png";
}
function contex() {
    p1.src="./Images/5.png";
}