var timing = {
    "text1Time": 4000,
    "text2Time": 48000, // 12000 * 4 beaths
    "text3Time": 9000,
    "transitionTime": 3000,
    "addOnTimeout": 3050
};

function startShow() {
    var goOfflineMessage = document.getElementById('goOfflineMessage');
    var textContainer = document.getElementById('textContainer');


    var text1 = '<h1>Ahhhh...</h1><p>Isn\'t that better?</p><p>Enjoy the silence.<br />Take a deep breath.<br />Feel gravity holding you down.<br /><br /><span style="font-style: italic">You\'re free.</span></p>';
    var text2 = '<p>Breathe deeply into your stomach<br />in time with the circle.</p><p>We\'ll do 4 breaths.</p><div id="outerCircle"><div id="innerCircle"></div></div>';
    var text3 = '<p>Keep breathing deeply and close your eyes.</p><p>Feel the tide of your breath expanding your chest.</p><p>Notice the weight of your body parts and try to let go of tension in your body.</p><p>Spend as long as you\'d like with your eyes closed.</p>';
    var text4 = '<p>The world will burn you out.</p><p>Take time from your day to relax and recenter yourself -- just leave the world outside; your soul will thank you.</p><p><a class="shareLink" href="#" onclick="showBreathing();">Show the breath orb again</a></p><h1>♡</h1><p>Made with love by <a target="_blank" href="http://jacksbrain.com">JWK</a></p>';
    var fbShare = '<div class="centered"><a class="shareLink" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//defuse.xyz">Share</a>';
    var timeout = 0;

    // dim offline div
    dimDiv(goOfflineMessage);
    timeout += timing.addOnTimeout;

    // load and brighten text1
    setTimeout(function(container) {
        textContainer.innerHTML = text1;
        brightenDiv(container);
    }, timeout, textContainer);

    // dim text1
    timeout += timing.addOnTimeout + timing.text1Time;
    setTimeout(function(container) {
        dimDiv(container);
    }, timeout, textContainer);

    // load and brighten text2/breathing
    timeout += timing.addOnTimeout;
    setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);
    }, timeout, textContainer, text2);

    // play breathing
    timeout += timing.addOnTimeout;
    setTimeout(function() {
        document.getElementById('innerCircle').style.animationPlayState = "running";
    }, timeout);

    // wait for breaths and dim breathing
    timeout += timing.text2Time;
    setTimeout(function(container) {
        document.getElementById('innerCircle').style.animationPlayState = "paused";
        dimDiv(container);
    }, timeout, textContainer);

    // load and brighten text3
    timeout += timing.addOnTimeout;
    setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);
    }, timeout, textContainer, text3);

    // dim text3
    timeout += timing.addOnTimeout + timing.text3Time;
    setTimeout(function(container) {
        dimDiv(container);
    }, timeout, textContainer);

    // load and brighten text4
    timeout += timing.addOnTimeout + timing.transitionTime;
    setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);

        // set cookie for having done it to display button
        document.cookie = "visited=true";
    }, timeout, textContainer, text4 + fbShare);
}

function showBreathing() {
    var goOfflineMessage = document.getElementById('goOfflineMessage');
    var textContainer = document.getElementById('textContainer');
    var breathingHTML = '<div id="outerCircle"><div id="innerCircle"></div></div>';

    dimDiv(goOfflineMessage);
    dimDiv(textContainer);

    setTimeout(function(container, text) {
        container.innerHTML = text;
        // reinitialize FB button
        brightenDiv(container);
        document.getElementById('innerCircle').style.animationPlayState = "running";
    }, timing.transitionTime, textContainer, breathingHTML);
}
