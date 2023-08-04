const text = document.getElementById("text");
const btn = document.getElementById("btn");
const total = document.getElementById("result");


function calc() {
    const txt = text.value.split("\n").join(" ").split(" ");
    const numbers = txt.map(item => Number(item)).filter(item => item);
    const count = numbers.reduce((total, num) => total + num);

    total.innerText = count;
}


btn.addEventListener('click', calc);