const timer = function() {
    const time = document.getElementById('timer');
    time.textContent -= 1;
    if (time.textContent < 0) {
        time.textContent = 0;
        alert('Вы победили в конкурсе!');
        clearInterval(timeinterval);
    }
}

let timeinterval = setInterval(timer, 1000);
timeinterval();
