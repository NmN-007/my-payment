document.getElementById('Add-Money-button').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-Amount').value;
    const inputPin = document.getElementById('input-Pin').value;
    console.log(inputAmount, inputPin);
})
