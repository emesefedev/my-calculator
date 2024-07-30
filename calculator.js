window.addEventListener("load", () => {
    console.log("load")

    operationText = document.querySelector("#operation-text")
    clearText(operationText)

    const numberButtons = document.querySelectorAll(".number-button")
    for (const button of numberButtons) {
        button.addEventListener("click", () => selectDigit(button.textContent))
    }

    const addButton = document.querySelector("#add-button")
    const subtractButton = document.querySelector("#subract-button")
    const multiplyButton = document.querySelector("#multiply-button")
    const divideButton = document.querySelector("#divide-button")
    const equalButton = document.querySelector("#equal-button")

    const clearButton = document.querySelector("#clear-button")

    addButton.addEventListener("click", () => {
        selectOperation(OPERATION.addition)
    })
    subtractButton.addEventListener("click", () => {
        selectSubtractOperation()
    })
    multiplyButton.addEventListener("click", () => {
        selectOperation(OPERATION.multiplication)
    })
    divideButton.addEventListener("click", () => {
        selectOperation(OPERATION.division)
    })
    equalButton.addEventListener("click", () => {
        getResult()
    })

    clearButton.addEventListener("click", () => clear())
})

const OPERATION = {
    addition: "+",
    subraction: "-",
    multiplication: "*",
    division: "/",
}

let operationText = null
let operation = null
let resultShowed = false

function getResult() {
    const input = operationText.textContent.split(" ")
    
    if (!isValidInput(input)) {
        displayError()
        return
    }

    const [operand1, operation, operand2] = input
    const result = operate(+operand1, +operand2, operation)
    if (result == null) {
        displayError()
        return
    }

    displayResult(result)
}

function clear() {
    operation = null
    clearText()
}

function isNotEmpty(str) {
    return str !== ""
}

function displayError() {
    clearText()
    updateText("ERROR")
    resultShowed = true
}

function displayResult(result) {
    clearText()
    updateText(result.toString())
    resultShowed = true
}

function isValidInput(input) {
    const values = input
    return values.length === 3 && values.every(isNotEmpty)
}

function selectDigit(digit) {
    updateText(digit)
}

function selectOperation(symbol) {    
    updateText(` ${symbol} `)
}

function selectSubtractOperation() {
    if (operation != null) {
        updateText(OPERATION.subraction)
        return
    }
    
    if (operationText.textContent === "") {
        updateText(OPERATION.subraction)
        return 
    }
    
    selectOperation(OPERATION.subraction)
}

function clearText() {
    operationText.textContent = ""
}

function updateText(newText) {
    if (resultShowed) {
        resultShowed = false
        clearText()
    }

    operationText.textContent += newText
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) return Infinity
    return a / b
}

function operate(a, b, operation) {
    let result = null
    switch (operation) {
        case OPERATION.addition:
            result = add(a, b)
            break
        case OPERATION.subraction:
            result = subtract(a, b)
            break
        case OPERATION.multiplication:
            result = multiply(a, b)
            break
        case OPERATION.division:
            result = divide(a, b)
            break
        default:
            break
    }
    return result
}