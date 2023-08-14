const text = document.getElementById("text");
const btn = document.getElementById("btn");
const result = document.getElementById("result");


function calc() {
    const cleanText = text.value.split("\n").join(" ").split(" ");
    const filterNumbers = cleanText.map(item => Number(item)).filter(item => item);
    const calcTotal = filterNumbers.reduce((total, num) => total + num);
    const calcDigits = String(calcTotal).split('').reverse();

    let countedCommas = 0;
    let finalCalc = [];

    calcDigits.forEach(digit => {
        if (countedCommas === 3) {
            finalCalc.unshift(`${digit},`);
            countedCommas = 1;
        } else {
            finalCalc.unshift(digit);
            countedCommas++;
        }
    })

    result.innerText = finalCalc.join('');
}


btn.addEventListener("click", calc);