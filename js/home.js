document.getElementById('Add-Money-button').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById('input-Amount').value;
    const inputPin = document.getElementById('input-Pin').value;
    if (inputPin === '1234') {
        const AvailableBalance = document.getElementById('Available-Balance').innerText;
        const myManeBalance = parseFloat(AvailableBalance);
        const inputAmountBalance = parseFloat(inputAmount);
        const newBalance = myManeBalance + inputAmountBalance;
        document.getElementById('Available-Balance').innerText = newBalance;
    }
    else {
        alert('incaret info wrong');
    }
});
document.getElementById('Cash-Out-button').addEventListener('click', function (event) {
    event.preventDefault();
    const CashOutAmount = document.getElementById('Cash-Out-Amount').value;
    const CashOutPin = document.getElementById('Cash-Out-Pin').value;
    if (CashOutPin === '1234') {
        const AvailableBalanceCashOut = document.getElementById('Available-Balance').innerText;
        const myManeBalanceCashOut = parseFloat(AvailableBalanceCashOut);
        const CashOutAmountBalance = parseFloat(CashOutAmount)
        const newBalanceMinas = myManeBalanceCashOut - CashOutAmountBalance
        document.getElementById('Available-Balance').innerText = newBalanceMinas;
    }
    else {
        alert('incaret info wrong')
    }

})
