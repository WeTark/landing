let yesBar = document.querySelector('.yes-bar');
let noBar = document.querySelector('.no-bar');
let yesVal = document.querySelector('.bold-word-copy');    
let noVal = document.querySelector('.bold-word-no-copy');   
setInterval(oneSecondFunction, 500);
function oneSecondFunction() {
    var yesLen = 10*(yesBar.clientWidth)/(yesBar.clientWidth + noBar.clientWidth);
    var yesLenInPoint = addZeroes(Math.round(yesLen*2)/2)
    yesVal.innerHTML = `₹${yesLenInPoint}`
    noVal.innerHTML = `₹${addZeroes(10-yesLenInPoint)}`
}

function addZeroes(num) {
    return Number(num).toFixed(1)
}