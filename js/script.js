const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const dark_mode_button = document.getElementById("dark_mode_button");
dark_mode_button.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");
});

const newYears = "31 Dec 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

// Make Random Color for a word

setInterval(() => {
    const colors = [
        "#2196F3",
        "#32c787",
        "#00BCD4",
        "#ff5652",
        "#ffc107",
        "#ff85af",
        "#FF9800",
        "#39bbb0"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.color = randomColor;
}, 1000);


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
