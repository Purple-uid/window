window.addEventListener('load', function() {
    const element = document.getElementById('delayedMessage');
    const btnClosd = document.getElementById('btn');
    const btnYes = document.getElementById('pro-Btn');

    setTimeout(function() {
        element.classList.add('focus');
    }, 4000);

    btnClosd.addEventListener('click', function() {
        element.classList.remove('focus');
    });

    btnYes.addEventListener('click', function() {
        element.classList.remove('focus');
    });
});