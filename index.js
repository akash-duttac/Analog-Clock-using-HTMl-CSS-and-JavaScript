console.log("Welcome to analog clock!");
setInterval(() => {
    timeFromDate = new Date();
    hrs = timeFromDate.getHours();
    min = timeFromDate.getMinutes();
    sec = timeFromDate.getSeconds();

    hour_hand_rotation = 30 * hrs + min/2;
    minute_hand_rotation = 6 * min;
    second_hand_rotation = 6 * sec;

    hh.style.transform = `rotate(${hour_hand_rotation}deg)`;
    mm.style.transform = `rotate(${minute_hand_rotation}deg)`;
    ss.style.transform = `rotate(${second_hand_rotation}deg)`;
}, 1000);