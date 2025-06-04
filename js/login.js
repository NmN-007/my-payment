//************************************************************************************** button *       
document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault();
    //********************************************************************************** your number * 
    const yourNumber = document.getElementById('your-number').value;
    //********************************************************************************** your Pin *
    const yourPin = document.getElementById('your-Pin').value;
    //********************************************************************************** phone and pin caking *
    if (yourNumber === '7' && yourPin === '1234') {
        window.location.href = 'home.html'
    }
    else {
        alert('wrong')
    }
});
