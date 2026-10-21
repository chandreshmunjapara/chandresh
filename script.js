/* ====== EDIT THESE DETAILS ====== */
const CONFIG = {
  venue: "Kunkavav, Gujarat",
  venueCity: "Kunkavav",
  music: "music.mp3", // optional: put a song named music.mp3 next to index.html
  events: [
    { name: "Sangeet", start: "20270201T190000", end: "20270201T230000" },
    { name: "Wedding", start: "20270202T110000", end: "20270202T150000" }
  ],
  gods: [ // put these photos in /images (any size). Edit names as you like.
    { src: "images/ganesh.jpg", sym: "ॐ", name: "શ્રી ગણેશાય નમઃ" },
    { src: "images/ambe.jpg", sym: "શ્રી", name: "જય અંબે માઁ" }
  ],
  weddingDate: "2027-02-02T11:00:00",
  whatsapp: "919825167545", // country code + number, no + or spaces
  message: "Hi! I will attend Chandresh & Janvi's wedding.",
  photos: [ // put your pictures in the /images folder and list them here
    { src: "images/1.jpeg" },
    { src: "images/2.jpeg" },
    { src: "images/3.jpeg" },
    { src: "images/4.jpeg" },
    { src: "images/5.jpeg" },
    { src: "images/6.jpeg" },
    { src: "images/7.jpeg" },
    { src: "images/8.jpeg" },
    { src: "images/9.jpeg" },
    { src: "images/10.jpeg" },
    { src: "images/11.jpeg" },
    { src: "images/12.jpeg" },
    { src: "images/13.jpeg" },
    { src: "images/14.jpeg" }

  ]
};

/* Falling petals */
const petals = document.getElementById("petals");
for (let i = 0; i < 22; i++) {
  const p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
  p.style.animationDuration = 8 + Math.random() * 10 + "s";
  p.style.animationDelay = -Math.random() * 12 + "s";
  p.style.background = Math.random() > .5 ? "#d9a441" : "#ff8fa3";
  petals.appendChild(p);
}

/* Petal shower when the gate opens */
let burst = false;
function petalBurst() {
  for (let i = 0; i < 45; i++) {
    const e = document.createElement("div");
    e.className = "petal";
    e.style.left = Math.random() * 100 + "vw";
    e.style.setProperty("--dx", Math.random() * 240 - 120 + "px");
    e.style.animationDuration = 3 + Math.random() * 3 + "s";
    e.style.animationIterationCount = "1";
    e.style.background = Math.random() > .5 ? "#ff9d00" : "#ff8fa3";
    petals.appendChild(e);
    setTimeout(() => e.remove(), 7000);
  }
}
/* Gate opens with scroll */
const gate = document.getElementById("gate"), stage = gate.querySelector(".stage");
function onScroll() {
  const range = gate.offsetHeight - innerHeight;
  const p = Math.min(1, Math.max(0, (scrollY - gate.offsetTop) / (range * 0.75)));
  stage.style.setProperty("--p", p);
  if (p > 0.92 && !burst) { burst = true; petalBurst(); } else if (p < 0.5) burst = false;
  stage.style.setProperty("--s", 0.8 + p * 0.2);
  stage.style.setProperty("--fo", Math.max(0, 1 - Math.max(0, p - 0.75) * 4));
  stage.style.setProperty("--o", 0.2 + p * 0.8);
  document.body.classList.toggle("scrolled", scrollY > innerHeight * 0.4);
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { setTimeout(() => e.target.classList.add("show"), [...document.querySelectorAll(".reveal")].indexOf(e.target) % 3 * 150); io.unobserve(e.target); }
}), { threshold: .2 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Toran: photos hanging across the whole page */
const colors = ["#b3202f,#d9a441", "#5a0f1c,#ff8fa3", "#d9a441,#7a1626", "#7a1626,#fff4dc"];
const track = document.getElementById("track"), lb = document.getElementById("lb");
const n = CONFIG.photos.length;
const reps = Math.max(1, Math.ceil(innerWidth / (n * 120)) + 1);
const one = CONFIG.photos.map((p, i) =>
  `<figure class="hang" style="--d:${-(i % 3) * 1.1}s"><i class="str"></i><div class="frame" style="background-image:url(${p.src}),linear-gradient(135deg,${colors[i % 4]})"></div><b>🌼</b></figure>`).join("");
const half = one.repeat(reps);
track.innerHTML = half + half;
track.style.setProperty("--t", reps * n * 5 + "s");
track.addEventListener("click", e => {
  const f = e.target.closest(".frame");
  if (!f) return;
  lb.style.backgroundImage = f.style.backgroundImage;
  lb.classList.add("on");
});
lb.onclick = () => lb.classList.remove("on");

/* Countdown */
const count = document.getElementById("count");
setInterval(() => {
  let t = Math.max(0, new Date(CONFIG.weddingDate) - new Date());
  const v = [["Days", 864e5], ["Hours", 36e5], ["Minutes", 6e4], ["Seconds", 1e3]];
  count.innerHTML = v.map(([l, ms]) => { const n = Math.floor(t / ms); t -= n * ms; return `<div><b>${n}</b>${l}</div>`; }).join("");
}, 1000);

/* RSVP link */


/* Mandala behind the invitation */
let m = "";
for (let i = 0; i < 12; i++) m += `<ellipse cx="0" cy="-62" rx="11" ry="30" transform="rotate(${i * 30})"/><circle cx="0" cy="-92" r="4" transform="rotate(${i * 30 + 15})"/>`;
document.getElementById("mandala").innerHTML = m + '<circle r="24"/><circle r="38"/>';

/* Gods on the gate: photo if the file exists, otherwise a symbol */
CONFIG.gods.forEach((g, i) => {
  const d = document.querySelector(`.deity[data-g="${i}"]`);
  if (!d) return;
  d.querySelector("span").textContent = g.sym;
  d.querySelector("small").textContent = g.name;
  const im = new Image();
  im.onload = () => { d.style.backgroundImage = `url(${g.src})`; d.classList.add("has"); };
  im.src = g.src;
});


/* Venue + calendar + RSVP */
document.querySelectorAll(".dst").forEach(e => e.textContent = CONFIG.venueCity);
document.getElementById("dir").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.venue);
document.querySelectorAll(".cal").forEach(a => {
  const ev = CONFIG.events[a.dataset.i];
  a.href = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(ev.name + " - Chandresh & Janvi") + "&dates=" + ev.start + "/" + ev.end + "&location=" + encodeURIComponent(CONFIG.venue);
  a.target = "_blank"; a.rel = "noopener";
});
const gname = document.getElementById("gname"), wa = document.getElementById("wa");
function setWa() {
  const who = gname.value.trim() || "A guest";
  const msg = `Hi! This is ${who}. I will attend Chandresh & Janvi's wedding.`;
  wa.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}
gname.addEventListener("input", setWa); setWa();

/* Opening screen + music */
history.scrollRestoration = "manual"; scrollTo(0, 0);
document.body.classList.add("lock");
const intro = document.getElementById("intro"), snd = document.getElementById("snd");
let au = null;
document.getElementById("open").onclick = () => {
  intro.classList.add("gone");
  document.body.classList.remove("lock");
  document.body.classList.add("ready");
  setTimeout(() => intro.remove(), 1300);
  au = new Audio(CONFIG.music); au.loop = true; au.volume = 0.6;
  au.play().then(() => { snd.hidden = false; }).catch(() => {});
};
snd.onclick = () => { if (au.paused) { au.play(); snd.textContent = "🔊"; } else { au.pause(); snd.textContent = "🔇"; } };
