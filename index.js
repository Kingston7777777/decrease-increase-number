let count = 0;
let dButton = document.getElementById("decreaseBtn");
let iButton = document.getElementById("increaseBtn");
let rButton = document.getElementById("resetBtn");
let countL = document.getElementById("countLabel");

dButton.addEventListener("click", decrease);
iButton.addEventListener("click", increase);
rButton.addEventListener("click", reset);

function decrease(){
    count-=1;
    countL.innerHTML = count;
};
function increase(){
    count+=1;
    countL.innerHTML = count;
};
function reset(){
    count=0;
    countL.innerHTML = count;
};