function startShow() {
    var goOfflineMessage = document.getElementById('goOfflineMessage');
    var textContainer = document.getElementById('textContainer');


    var text1 = '<h1>Ahhhh...</h1><p>Isn\'t that better?</p><p>Enjoy the silence.<br />Take a deep breath.<br />Feel gravity holding you down.<br /><br /><span style="font-style: italic">You\'re free.</span></p>';
    var text2 = '<p>Breathe deeply into your stomach<br />in time with the circle.</p><p>We\'ll do 4 breaths.</p><div id="outerCircle"><div id="innerCircle"></div></div>';
    var text3 = '<p>Keep breathing deeply and close your eyes.</p><p>Feel the tide of your breath expanding your chest.</p><p>Notice the weight of your body parts and try to let go of tension in your body.</p><p>Spend as long as you\'d like with your eyes closed.</p>';
    var text4 = '<p>The world will burn you out.</p><p>Take time from your day to relax and recenter yourself -- just leave the world outside; your soul will thank you.</p><h1>♡</h1><p>Made with love by <a target="_blank" href="http://jacksbrain.com">JWK</a></p>';
    var timeout = 0;
    var addOnTimeout = 3050;
    var breathTime = 12000;

    // dim offline div
    dimDiv(goOfflineMessage);
    timeout += addOnTimeout;

    // load and brighten text1
    setTimeout(function(container) {
        textContainer.innerHTML = text1;
        brightenDiv(container);
    }, timeout, textContainer);

    // dim text1
    timeout += addOnTimeout + 4000;
    setTimeout(function(container) {
        dimDiv(container);
    }, timeout, textContainer);

    // load and brighten text2
    timeout += addOnTimeout;
    setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);
    }, timeout, textContainer, text2);

    // play breathing
    timeout += addOnTimeout;
    setTimeout(function() {
        document.getElementById('innerCircle').style.animationPlayState = "running";
    }, timeout);

    // wait for breaths and dim breathing
    timeout += (breathTime * 4);
    setTimeout(function(container) {
        document.getElementById('innerCircle').style.animationPlayState = "paused";
        dimDiv(container);
    }, timeout, textContainer);

    // load and brighten text3
    timeout += addOnTimeout;
    setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);
    }, timeout, textContainer, text3);

    // dim text3
    timeout += addOnTimeout + 9000;
    setTimeout(function(container) {
        dimDiv(container);
    }, timeout, textContainer);

    // load and brighten text4
    timeout += addOnTimeout + 3000;
    setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);
    }, timeout, textContainer, text4);
}
