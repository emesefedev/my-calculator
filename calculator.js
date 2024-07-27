const OPERATION = {
    addition: "+",
    subraction: "-",
    multiplication: "*",
    division: "/",
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

function reset() {

}

function operate(a, b, operation) {
    switch (operation) {
        case OPERATION.addition:
            add(a, b)
            break
        case OPERATION.subraction:
            subtract(a, b)
            break
        case OPERATION.multiplication:
            multiply(a, b)
            break
        case OPERATION.division:
            divide(a, b)
            break
        default:
            reset()
            break
    }
}