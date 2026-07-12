const form = document.querySelector('form')

form.onsubmit = handleCalculation
form.minus.onclick = decrease
form.plus.onclick = increase

function handleCalculation() {
    const quantity = form.count.value
}

function decrease() {
    const output = form.count

    if (output.value <= 0) return alert('The number cannot be negative!')

    output.value = Number(output.value) - 1
}

function increase() {
    const output = form.count

    output.value = Number(output.value) + 1
}