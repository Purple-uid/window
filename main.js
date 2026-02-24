window.addEventListener('load', function() {
    const element = document.getElementById('delayedMessage');
    const btnClosd = document.getElementById('btn');
    const btnYes = document.getElementById('pro-Btn');

    setTimeout(function() {
        element.classList.add('focus');
    }, 4000);

    function closed() {
        element.classList.remove('focus');
    }

    [btnClosd, btnYes].forEach(btn =>{
        btn.addEventListener('click', closed);
    }
});
