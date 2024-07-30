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
        selectOperation(OPERATION.subraction)
    })
    multiplyButton.addEventListener("click", () => {
        selectOperation(OPERATION.multiplication)
    })
    divideButton.addEventListener("click", () => {
        selectOperation(OPERATION.division)
    })
    equalButton.addEventListener("click", () => {
        getOperationValues()
        const result = operate(a, b, operation)

        if (result == null) {
            displayError()
        }
        else {
            displayResult(result)
        }
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

let a = null
let b = null
let operation = null

function clear() {
    a = null
    b = null
    operation = null
    clearText()
}

function displayError() {
    clearText()
    updateText("ERROR")
}

function displayResult(result) {
    clearText()
    updateText(result.toString())
}

function getOperationValues() {
    const operatorsRegex = /[\+\-\*\/]/;
    const values = operationText.textContent.split(operatorsRegex)

    console.log(values[0])

    if (values.length !== 2) {
        displayError()
    }
    else {
        a = +values[0]
        b = +values[1]
    }
}

function selectDigit(digit) {
    updateText(digit)
}

function selectOperation(selectedOperation) {    
    operation = selectedOperation
    updateText(operation)
}

function clearText() {
    operationText.textContent = ""
}

function updateText(newText) {
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