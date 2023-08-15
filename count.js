let count = 0;
function clickMe(){
    const element = document.getElementById("count");
    count++;
    element.innerText= count;
}
let count1 = 0;
function hitMe(){
    const countMinas = document.getElementById("count");
    count1--;
    countMinas.innerText= count1;
}