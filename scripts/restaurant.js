function calculateGrandTotal(total, tip, tax) {
    return total + tip + tax
}

function calculateTip(total, rate) {
    return total * (rate/100)
}

function calculateTax(total, taxRate) {
    return total * (taxRate/100)
}

function onButtonPress() {
    const total = Number(document.querySelector('#total-field').value)
    console.log('Total: ' + total)
    const rate = Number(document.querySelector('#rate-field').value)
    console.log('Rate: ' + rate)
   
    const tip = calculateTip(total, rate);
    const tax = calculateTax(total, taxRate);
    const grandTotal = calculateGrandTotal(total, tip, tax);

    document.querySelector('#tip-amount').innerHTML = `$${tip.toFixed(2)}`
    document.querySelector('#tax-amount').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#grand-total').innerHTML = `$${grandTotal.toFixed(2)}`
}


const taxRate = 5.5

document.querySelector('#btn-calculate').addEventListener('click', onButtonPress)
