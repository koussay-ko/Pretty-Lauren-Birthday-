// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Elements
    const btnLetter = document.getElementById("btn__letter");
    const boxMail = document.querySelector(".boxMail");
    const closeBox = document.querySelector(".boxMail .fa-xmark");
    const audio = document.getElementById("birthdayAudio");

    // Open letter box
    btnLetter.addEventListener("click", () => {
        boxMail.classList.add("active");
        audio.play(); // play audio when box opens
    });

    // Close letter box
    closeBox.addEventListener("click", () => {
        boxMail.classList.remove("active");
        audio.pause(); // pause audio when closed
    });

    // Optional: click outside box to close
    boxMail.addEventListener("click", (e) => {
        if (e.target === boxMail) {
            boxMail.classList.remove("active");
            audio.pause();
        }
    });
});
$(document).ready(function () {
    // When Lauren clicks the button
    $("#btn__letter").on("click", function () {
        // Show the hidden letter box
        $(".boxMail").fadeIn(600);

        // Play the birthday song
        let audio = document.getElementById("birthdayAudio");
        audio.play();

        // Add a cute animation (confetti)
        launchConfetti();
    });

    // Close button (the X mark)
    $(".boxMail .fa-xmark").on("click", function () {
        $(".boxMail").fadeOut(400);
    });
});
// Confetti animation
function launchConfetti() {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
