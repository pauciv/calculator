let clearKey = document.querySelector("#clear-key");
clearKey.addEventListener("click", clearPressed);

let equalKey = document.querySelector("#equal-key");
equalKey.addEventListener("click", equalPressed);

let plusMinusKey = document.querySelector("#plus-minus-key");
plusMinusKey.addEventListener("click", plusMinusPressed);

let numberKeys = document.querySelectorAll(".number-key");
for (let numberKey of numberKeys) {
    numberKey.addEventListener("click", numberPressed);
}

let signKeys = document.querySelectorAll(".sign-key");
for (let signKey of signKeys) {
    signKey.addEventListener("click", signPressed);
}

let operation = document.querySelector(".operation");
let result = document.querySelector(".result");

function clearPressed() {
    result.innerHTML = "";
    operation.innerHTML = "";
    result.style.fontSize = "80px";
}

function equalPressed() {
    operation.innerHTML = result.innerHTML + event.target.value;
    result.innerHTML = eval(result.innerHTML);
  
    reduceFontSize();
    // if (result.innerHTML.length > 14) {
    //     result.innerHTML = result.innerHTML.substr(0,14);
    //     result.style.fontSize = "38px";
    // }
}

function numberPressed() {
    reduceFontSize();
    if (result.innerHTML === "0") {
        result.innerHTML = event.target.value;
        event.style.color = "red";
    } else {
        result.innerHTML += event.target.value;
    }
}

function signPressed() {
    reduceFontSize();
    let lastCharacter = result.innerHTML[result.innerHTML.length - 1];
    if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/" || lastCharacter === "%" || lastCharacter === ".") {
        return result.innerHTML; // result.innerHTML = result.innerHTML; 
    } else {
        result.innerHTML += event.target.value;
    }
}

function plusMinusPressed() { 
    if (result.innerHTML.charAt(0) !== "-") {
        result.innerHTML = `-${result.innerHTML}`;
    } else if (result.innerHTML.charAt(0) === "-") {
        result.innerHTML = result.innerHTML.substr(1,result.innerHTML.length);
    }
}

// WE NEED TO IMPROVE THIS FUNCTION
function reduceFontSize() {
    if (result.innerHTML.length > 6) {
        result.style.fontSize = "70px";
    } 
    if (result.innerHTML.length > 7) {
        result.style.fontSize = "62px";
    }
    if (result.innerHTML.length > 8) {
        result.style.fontSize = "56px";
    }
    if (result.innerHTML.length > 9) {
        result.style.fontSize = "51px";
    }
    if (result.innerHTML.length > 10) {
        result.style.fontSize = "47px";
    }
    if (result.innerHTML.length > 11) {
        result.style.fontSize = "43px";
    }
    if (result.innerHTML.length > 12) {
        result.style.fontSize = "40px";
    }
    if (result.innerHTML.length > 13) {
        result.innerHTML = result.innerHTML.substr(0,14);
        result.style.fontSize = "38px";
    }
}

// toFixed(2) para limitar decimales

/* DARK MODE ------------------------------------------------------------- */
let whiteDarkModeContainer = document.querySelector(".white-dark-mode-container");
whiteDarkModeContainer.addEventListener("click", whiteDarkModePressed);

function whiteDarkModePressed() {
    document.body.classList.toggle("dark");
  
    if (whiteDarkModeContainer.style.justifyContent !== "flex-end") {
        whiteDarkModeContainer.style.justifyContent = "flex-end";
    } else if (whiteDarkModeContainer.style.justifyContent = "flex-end") {
        whiteDarkModeContainer.style.justifyContent = "flex-start";
    }
}