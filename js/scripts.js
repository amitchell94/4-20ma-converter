/*!
* Start Bootstrap - Heroic Features v5.0.2 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let maValInput = document.getElementById("rawVal")
maValInput.addEventListener("change",convertMaToSig)

let sigValInput = document.getElementById("sigVal")
sigValInput.addEventListener("change",convertSigToMa)

let maMinInput = document.getElementById("maMin")
maMinInput.addEventListener("change",convertMaToSig)
let maMaxInput = document.getElementById("maMax")
maMaxInput.addEventListener("change",convertMaToSig)

let sigMinInput = document.getElementById("sigMin")
sigMinInput.addEventListener("change",convertMaToSig)

let sigMaxInput = document.getElementById("sigMax")
sigMaxInput.addEventListener("change",convertMaToSig)

function convertSigToMa(){
    let maHigh = parseFloat(maMaxInput.value);
    let maLow = parseFloat(maMinInput.value);
    let sigHigh = parseFloat(sigMaxInput.value);
    let sigLow = parseFloat(sigMinInput.value);
    let sigValue = parseFloat(sigValInput.value);

    maValInput.value = ((maHigh - maLow) / (sigHigh - sigLow)) * (sigValue - sigLow) + maLow;
}

function convertMaToSig(){
    let sigHigh = parseFloat(sigMaxInput.value);
    let sigLow = parseFloat(sigMinInput.value);
    let maHigh = parseFloat(maMaxInput.value);
    let maLow = parseFloat(maMinInput.value);
    let maValue = parseFloat(maValInput.value);

    sigValInput.value = ((sigHigh - sigLow) / (maHigh - maLow)) * (maValue - maLow) + sigLow;
}