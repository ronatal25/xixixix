// ================= ALERT =================
function showLove() {
    alert("Aku sayang kamu… tapi kita temenan dulu PLISS JANGAN SAMA YANG LAIN DULU 😭💕");
}

// ================= MUSIC AUTO =================
const music = document.getElementById("bgMusic");

if (music) {
    music.volume = 0.4;

    window.addEventListener("load", () => {
        music.play().catch(() => {
            // fallback jika autoplay diblok browser
            document.addEventListener("click", () => {
                music.play().catch(() => {});
            }, { once: true });
        });
    });
}

// ================= HATI BETERBANGAN =================
function createHeartFloat() {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 4 + 4) + "s";
    heart.style.fontSize = (Math.random() * 10 + 14) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeartFloat, 900);