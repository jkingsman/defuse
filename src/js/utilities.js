function cheat() {
    window.dispatchEvent(new Event('offline'));
}

function dimDiv(element) {
    element.classList.add("fadeOut");
    setTimeout(function() {
        element.classList.add("hidden");
        element.classList.remove("fadeOut");
    }, 3000);
}

function brightenDiv(element) {
    element.classList.add("fadeIn");
    element.classList.remove("hidden");
    setTimeout(function() {
        element.classList.remove("fadeIn");
    }, 3000);
}
