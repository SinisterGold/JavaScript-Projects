const resultField = document.getElementById('result');

function appendToResult(input) {
    resultField.value += input;
}

function clearResult() {
    resultField.value = '';
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}