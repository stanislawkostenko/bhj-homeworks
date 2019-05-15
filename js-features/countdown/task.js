const timer = function() {
    const time = document.getElementById('timer');
    time.textContent -= 1;
    if (time.textContent == 0 - 1) {
        alert('Вы победили в конкурсе!');
        clearInterval(timer);
    }
}

setInterval(timer, 100);
clearInterval(timer);

// не понимаю почему не работает clearInterval
