let current = '';
let resetNext = false;
const display = document.getElementById('display');

function press(val) {
    if (resetNext) {
        current = '';
        resetNext = false;
    }
    if (current.length === 0 && val === '.') {
        current = '0.';
    } else {
        current += val;
    }
    display.textContent = current;
}

function clearDisplay() {
    current = '';
    display.textContent = '0';
}

function calculate() {
    try {
        let result = eval(current.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-'));
        if (result === undefined || isNaN(result)) {
            display.textContent = 'Erro';
        } else {
            display.textContent = result;
            current = result.toString();
        }
    } catch {
        display.textContent = 'Erro';
    }
    resetNext = true;
}
