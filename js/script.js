const dark_mode_button = document.getElementById("dark_mode_button");
dark_mode_button.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("nav").style.fontSize = "20px";
    document.getElementById("nav").style.padding = "15px 20px";
  } else {
    document.getElementById("nav").style.fontSize = "0px";
    document.getElementById("nav").style.padding = "0";
  }
}

setInterval(() => {
    const colors = [
        "#F6EB0C", // yellow
        "#F6890C", // yellow
        "#00BCD4", // Blue
        "#6FF60F", // Green
        "#3CD40B", // Green
        "#F6B02A", // yellow
        "#FFFFFF"  // White
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.color = randomColor;
}, 1000);

setInterval(countdown, 1000);
