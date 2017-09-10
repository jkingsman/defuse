var timing = {
    "text1Time": 4000,
    "text2Time": 64000, // 16000 * 4 beaths
    "text3Time": 9000,
    "transitionTime": 3000,
    "addOnTimeout": 3050
};

// array of timers to stop everything
var timers = [];

function startShow() {
    var goOfflineMessage = document.getElementById('goOfflineMessage');
    var textContainer = document.getElementById('textContainer');


    var text1 = '<h1>Ahhhh...</h1><p>Isn\'t that better?</p><p><span style="font-style: italic">You\'re free.</span></p><p>Enjoy this silence.<br />Take a deep breath.<br />Feel gravity steadying your body.<br /></br></p><p>We\'re going to try something...</p>';
    var text2 = '<p>Breathe deeply into your stomach<br />in time with the circle.</p><p>We\'ll do 4 breaths.</p><div id="outerCircle"><div id="innerCircle"></div></div>';
    var text3 = '<p>Keep breathing deeply.</p><p>Feel the tide of your breath expanding your chest.</p><p>Notice the weight of your arms and legs; try to exhale some of the tension in your body with each breath.</p><p>Close your eyes and keep breathing deeply for as long as you\'d like.</p>';
    var text4 = '<p>The world will burn you out.</p><p>Remember to take a few moments to recenter yourself -- just leave the world outside; your soul will thank you.</p><p><a class="shareLink" href="#" onclick="showBreathing();">Show the breath orb again</a></p><h1>♡</h1><p>Made with love by <a target="_blank" href="http://jacksbrain.com">JWK</a></p>';
    var fbShare = '<div class="centered"><a class="shareLink" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//defuse.xyz">Share</a>';
    var timeout = 0;

    // dim offline div
    dimDiv(goOfflineMessage);
    timeout += timing.addOnTimeout;

    // load and brighten text1
    timers.push(setTimeout(function(container) {
        textContainer.innerHTML = text1;
        brightenDiv(container);
    }, timeout, textContainer));

    // dim text1
    timeout += timing.addOnTimeout + timing.text1Time;
    timers.push(setTimeout(function(container) {
        dimDiv(container);
    }, timeout, textContainer));

    // load and brighten text2/breathing
    timeout += timing.addOnTimeout;
    timers.push(setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);
    }, timeout, textContainer, text2));

    // play breathing
    timeout += timing.addOnTimeout;
    timers.push(setTimeout(function() {
        document.getElementById('innerCircle').style.animationPlayState = "running";
    }, timeout));

    // wait for breaths and dim breathing
    timeout += timing.text2Time;
    timers.push(setTimeout(function(container) {
        document.getElementById('innerCircle').style.animationPlayState = "paused";
        dimDiv(container);
    }, timeout, textContainer));

    // load and brighten text3
    timeout += timing.addOnTimeout;
    timers.push(setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);
    }, timeout, textContainer, text3));

    // dim text3
    timeout += timing.addOnTimeout + timing.text3Time;
    timers.push(setTimeout(function(container) {
        dimDiv(container);
    }, timeout, textContainer));

    // load and brighten text4
    timeout += timing.addOnTimeout + timing.transitionTime;
    timers.push(setTimeout(function(container, text) {
        container.innerHTML = text;
        brightenDiv(container);

        // set cookie for having done it to display button
        document.cookie = "visited=true";
    }, timeout, textContainer, text4 + fbShare));
}

function showBreathing() {
    stopTimers(); // preempt standard playthrough
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

function stopTimers(){
    timers.forEach(function(timerID){
        clearInterval(timerID);
    });

    console.log("All timers auto-stopped.");
}
