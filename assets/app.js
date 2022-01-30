const hand = document.querySelectorAll('.hand');

function moveHand(){
    const time = new Date();

    const secs = time.getSeconds();
    const secDeg = (secs/60) * 360 + 90;
    hand[0].style.transform = `rotate(${secDeg}deg)`;

    const mins = time.getMinutes();
    const minDeg = (mins / 60) * 360 + 90;
    hand[1].style.transform = `rotate(${minDeg}deg)`;

    const hr = time.getHours();
    const hrDeg = (hr/12) * 360 + 90;
    hand[2].style.transform = `rotate(${hrDeg}deg)`;

};

setInterval(moveHand, 1000);