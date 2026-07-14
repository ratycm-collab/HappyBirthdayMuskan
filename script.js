/* ==========================================
        MuskanOS v24.0
        Developed by Raty ❤️
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Boot Screen
    ========================= */

    const boot = document.getElementById("boot-screen");

    setTimeout(() => {
        boot.style.opacity = "0";
        boot.style.transition = "1.5s";

        setTimeout(() => {
            boot.style.display = "none";
        }, 1500);

    }, 6000);

    /* =========================
       Music
    ========================= */

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    let playing = false;

    musicBtn.addEventListener("click", () => {

        if (!playing) {
            music.play();
            musicBtn.innerHTML = "⏸️";
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵";
        }

        playing = !playing;

    });

    /* =========================
       Start Button
    ========================= */

    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", () => {

        document.getElementById("story").scrollIntoView({
            behavior: "smooth"
        });

    });

    /* =========================
        Scroll Reveal
    ========================= */

    const fades = document.querySelectorAll(".fade");

    function reveal() {

        fades.forEach((item) => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {

                item.classList.add("visible");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* =========================
      Story Cards
    ========================= */

    const cards = document.querySelectorAll("#story .glass");

    function revealCards() {

        cards.forEach(card => {

            const top = card.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {

                card.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", revealCards);

    revealCards();

    /* =========================
       Floating Hearts
    ========================= */

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.bottom = "-50px";

        heart.style.fontSize = (18 + Math.random() * 30) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 8000);

    }, 900);

    /* =========================
       Gallery Lightbox
    ========================= */

    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";

    const lightImg = document.createElement("img");

    lightbox.appendChild(lightImg);

    document.body.appendChild(lightbox);

    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    /* =========================
       Proposal Button
    ========================= */

    const proposal = document.getElementById("proposal");

    proposal.addEventListener("click", () => {

        alert(
`❤️

Happy Birthday Musu ❤️

No matter how many birthdays come...

I still want to be the person who annoys you,
makes you laugh,
takes you for coffee,
feeds you sushi,
travels the world with you,
and grows old beside you.

Will you keep choosing me forever?

Love,
Raty ❤️`
        );

        launchConfetti();

    });

    /* =========================
      Easter Egg
    ========================= */

    document.addEventListener("keydown", (e) => {

        if (e.key.toLowerCase() === "m") {

            console.log("❤️ Muskan was always the best thing that happened to Raty.");

        }

    });

});

/* ==========================================
       Simple Confetti
========================================== */

function launchConfetti() {

    for (let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.width = "10px";

        piece.style.height = "10px";

        piece.style.borderRadius = "50%";

        piece.style.pointerEvents = "none";

        piece.style.zIndex = "99999";

        const colors = [
            "#60a5fa",
            "#3b82f6",
            "#ec4899",
            "#ffffff",
            "#38bdf8"
        ];

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(piece);

        const duration = 3000 + Math.random() * 2000;

        piece.animate([
            {
                transform: `translateY(0px) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight + 100}px)
                            translateX(${(Math.random() - 0.5) * 300}px)
                            rotate(${720 + Math.random() * 720}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "ease-out"
        });

        setTimeout(() => {
            piece.remove();
        }, duration);

    }

}
/* ==========================================
      Timeline Animation
========================================== */

const timelineItems=document.querySelectorAll(".timeline-item");

function showTimeline(){

timelineItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",showTimeline);

showTimeline();
