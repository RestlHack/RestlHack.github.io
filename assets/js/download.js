/* ===== BUTTON DOWNLOAD ====== */
window.onload = function() {
    var timer_num = 12;
    document.getElementById('timer_num').innerHTML = timer_num;
    var timers = setInterval(function() {
        timer_num--;
        document.getElementById('timer_num').innerHTML = timer_num;
        if (timer_num == 0) {
            document.getElementById('timer_2').style.display = 'block';
            document.getElementById('timer_1').style.display = 'none';
            clearInterval(timers)
        }
    }, 1000)
}

/* ===== SELECT BLOCK ====== */
function noselect() {
    return !1
}
document.ondragstart = noselect, document.onselectstart = noselect, document.oncontextmenu = noselect;