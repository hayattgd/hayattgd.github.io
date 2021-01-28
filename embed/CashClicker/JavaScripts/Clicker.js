let clickCount = 0;
let clickMultipiler = 1;
var counter;

//Use This for Init HTML Tag and other something
window.onload = function () {
    if(localStorage.getItem("Cash") = "NaN") {
        DeleteData();
        render();
    }else {
    clickMultipiler = parseFloat(localStorage.getItem("Multipiler"));
    clickCount = parseFloat(localStorage.getItem("Cash"));
    counter = document.getElementById('Counter');
    counter.innerHTML = "Cash:" + clickCount;
    render();
    }
}

function OnClickCash() {
    clickCount += 1 * clickMultipiler;
    render();
}

function SaveData() {
    localStorage.setItem("Cash",clickCount);
    localStorage.setItem("Multipiler",clickMultipiler);
    render();
}

function DeleteData() {
    localStorage.setItem("Cash",0);
    localStorage.setItem("Multipiler",1);
    render();
}

function render() {
    var result;
    result = Math.round(clickCount);
    counter.innerHTML = "Cash:" + result;
}
