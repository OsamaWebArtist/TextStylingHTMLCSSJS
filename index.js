let selectFonts = document.querySelector(".selectfullFont");
let modifyTheP = document.querySelector(".theModifyP");
let ButtonOfBold = document.querySelector(".BoldButton");
let sizeOfFont = document.querySelector(".Sizenum");
let upSize = document.querySelector(".upSize");
let downSize = document.querySelector(".downSize");
let reverseColor = document.querySelector(".InvertColor");


selectFonts.onchange = function () {
    modifyTheP.style.fontFamily = selectFonts.value
}

ButtonOfBold.onclick = function () {
    if (ButtonOfBold.style.fontWeight === "bold" && modifyTheP.style.fontWeight === "bold") {
        ButtonOfBold.style.fontWeight = "normal";
        modifyTheP.style.fontWeight = "normal";
        ButtonOfBold.style.color = "black";
    } else {
        ButtonOfBold.style.fontWeight = "bold";
        modifyTheP.style.fontWeight = "bold";
        ButtonOfBold.style.color = "green";
    }
    
}

upSize.onclick = function () {
modifyTheP.style.fontSize = `${++sizeOfFont.textContent}px`;
if ( +sizeOfFont.textContent >= 22) {
    modifyTheP.style.fontSize = "22px";
    sizeOfFont.textContent = "22";
    return;
    }
}

downSize.onclick = function () {
    modifyTheP.style.fontSize = `${--sizeOfFont.textContent}px`;

    
    if (+sizeOfFont.textContent <= 16) {
            modifyTheP.style.fontSize = "16px";
            sizeOfFont.textContent = "16";
        return;
        }
        
        
}
function ToLowOpacity() {

    if (+sizeOfFont.textContent === 22) {
        upSize.style.opacity = "0.3";
    };
    if (modifyTheP.style.fontSize === "16px") {
            downSize.style.opacity = "0.3";
        } else if(modifyTheP.style.fontSize !== "16px"){
            downSize.style.opacity = "1";
    };
ToLowOpacity()
}

reverseColor.onclick = function () {

    if (modifyTheP.style.color === modifyTheP.getAttribute("data-backColor")
        && modifyTheP.style.backgroundColor === modifyTheP.getAttribute("data-color")) {
    modifyTheP.style.color = modifyTheP.getAttribute("data-color");
        modifyTheP.style.backgroundColor = modifyTheP.getAttribute("data-backColor");   
        reverseColor.style.color = "black"
    }else {
        modifyTheP.style.color = modifyTheP.getAttribute("data-backColor");
        modifyTheP.style.backgroundColor = modifyTheP.getAttribute("data-color");
        reverseColor.style.color = "green"
    }
}