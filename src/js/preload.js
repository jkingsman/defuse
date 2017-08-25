console.log("If this isn't detecting your device as offline when it is, paste 'cheat()' (sans quotes) and hit enter");

if (!navigator.onLine) {
    // already offline; delay for DOM then go
    setTimeout(function() {
        window.dispatchEvent(new Event('offline'));
    }, 1000);
}

window.addEventListener('offline', function() {
    startShow();
});
