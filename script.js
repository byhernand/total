const text = document.getElementById("text");
const countBtn = document.getElementById("countButton");
const clearBtn = document.getElementById("clearButton");
const result = document.getElementById("result");


function count() {
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


function clear() {
    text.value = "";
    result.innerText = "";
}


countBtn.addEventListener("click", count);

clearBtn.addEventListener("click", clear);