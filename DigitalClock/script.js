const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("amOrpm");

function updateClock() {
    let currTime = new Date();

    let hours = currTime.getHours();
    let formattedHours = hours < 10 ? '0' + hours : hours; 

    let minutes = currTime.getMinutes();
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes; 

    let amOrPm = hours < 12 ? 'AM' : 'PM';

    hour.innerText = formattedHours;
    minute.innerText = formattedMinutes;
    second.innerText = currTime.getSeconds();
    ampm.innerText = amOrPm;

}

setInterval(updateClock, 1000);
