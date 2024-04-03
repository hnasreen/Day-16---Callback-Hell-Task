var ele=document.createElement("div")
ele.className="counter"
ele.id="countdown"

document.body.append(ele)

function countdownAndCelebrate(count) {
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerText = "Countdown starting...";

    setTimeout(function() {
        countdownElement.innerText = "Counter: "+count;

        setTimeout(function() {
            count--;
            countdownElement.innerText = "Counter: "+count;

            setTimeout(function() {
                count--;
                countdownElement.innerText = "Counter: "+count;

                setTimeout(function() {
                    count--;
                    countdownElement.innerText = "Counter: "+count;

                    setTimeout(function() {
                        count--;
                        countdownElement.innerText = "Counter: "+count;

                        setTimeout(function() {
                            count--;
                            countdownElement.innerText = "Counter: "+count;

                            setTimeout(function() {
                                count--;
                                countdownElement.innerText = "Counter: "+count;

                                setTimeout(function() {
                                    count--;
                                    countdownElement.innerText = "Counter: "+count;

                                    setTimeout(function() {
                                        count--;
                                        countdownElement.innerText = "Counter: "+count;

                                        setTimeout(function() {
                                            count--;
                                            countdownElement.innerText = "Counter: "+count;

                                            setTimeout(function() {
                                                countdownElement.innerText = "Happy Independence Day!";
                                            }, 1000);

                                        }, 1000);

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);
}

// Start the countdown from 10
countdownAndCelebrate(10);