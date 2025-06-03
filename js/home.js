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
})
