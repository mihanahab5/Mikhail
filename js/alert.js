const alert = document.querySelector('.alert');
const close = document.querySelector('.alert_close');

close.onclick = function() {
    alert.style.maxHeight = "0px"
}