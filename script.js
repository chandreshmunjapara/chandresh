/* ====== EDIT THESE DETAILS ====== */
const CONFIG = {
  venue: "Kunkavav, Gujarat",
  venueCity: "Kunkavav",
  defaultLang: "gu",   // "en" = English first, "gu" = Gujarati first (guests can switch with the button)
  venueText: { en: "Kunkavav, Gujarat", gu: "કુંકાવાવ, ગુજરાત" },

  // ---- Celebrations: one block per event. Add or delete blocks freely. ----
  schedule: [
    {
      icon: "🌺", title: { en: "Mandap Muhurat", gu: "મંડપ મુહૂર્ત" },
      date: { en: "Monday<br>01 February 2027", gu: "સોમવાર<br>૦૧ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "8:00 AM", gu: "સવારે ૮:૦૦ કલાકે" },
      place: { en: "Sanali", gu: "સનાળી" },
      cal: { start: "20270201T080000", end: "20270201T110000" }
    },
    {
      icon: "🌼", title: { en: "Haldi Rasam", gu: "હલ્દી રસમ" },
      date: { en: "Monday<br>01 February 2027", gu: "સોમવાર<br>૦૧ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "4:00 PM", gu: "બપોરે ૪:૦૦ કલાકે" },
      place: { en: "Sanali", gu: "સનાળી" },
      cal: { start: "20270201T160000", end: "20270201T183000" }
    },
    {
      icon: "🎶", title: { en: "Sangeet Sandhya", gu: "સંગીત સંધ્યા" },
      date: { en: "Monday<br>01 February 2027", gu: "સોમવાર<br>૦૧ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "7:00 PM onwards", gu: "સાંજે ૭:૦૦ કલાકથી" },
      place: { en: "Sanali", gu: "સનાળી" },
      cal: { start: "20270201T190000", end: "20270201T230000", location: "Sanali, Gujarat" }
    },
    {
      icon: "🐎", title: { en: "Jan Aagman (Baraat arrival)", gu: "જાન આગમન" },
      date: { en: "Tuesday<br>02 February 2027", gu: "મંગળવાર<br>૦૨ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "9:30 AM", gu: "સવારે ૯:૩૦ કલાકે" },
      place: { en: "Kunkavav", gu: "કુંકાવાવ" },
      cal: { start: "20270202T093000", end: "20270202T110000" }
    },
    {
      icon: "🔔", title: { en: "Hast Melap (Wedding)", gu: "હસ્ત મેળાપ (શુભ લગ્ન)" },
      date: { en: "Tuesday<br>02 February 2027", gu: "મંગળવાર<br>૦૨ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "11:00 AM", gu: "સવારે ૧૧:૦૦ કલાકે" },
      place: { en: "Kunkavav", gu: "કુંકાવાવ" },
      cal: { start: "20270202T110000", end: "20270202T130000" }
    },
    {
      icon: "🍽️", title: { en: "Bhojan Samarambh (Lunch)", gu: "ભોજન સમારંભ" },
      date: { en: "Tuesday<br>02 February 2027", gu: "મંગળવાર<br>૦૨ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "1:00 PM", gu: "બપોરે ૧:૦૦ કલાકે" },
      place: { en: "Kunkavav", gu: "કુંકાવાવ" },
      cal: { start: "20270202T130000", end: "20270202T160000" }
    }
  ],

  // ---- Bonds of Love: hosts + Tahuko. A group shows only if it has lines. ----
  families: [
    {
      key: "hosts", title: { en: "Hosts of the occasion", gu: "અવસરના અભિલાષી" },
      names: [
        { en: "Mr. Dhirubhai Munjapara & Mrs. Rasilaben Munjapara", gu: "શ્રી ધીરુભાઈ મુંજપરા તથા સૌ. રસીલાબેન મુંજપરા" },
        { en: "Mr. Manubhai Desai & Mrs. Neetaben Desai", gu: "શ્રી મનુભાઈ દેસાઈ તથા સૌ. નીતાબેન દેસાઈ" }
      ]
    },
    {
      key: "tahuko", title: { en: "A Little Note from Us", gu: "ટહુકો" },
      names: [
        { en: "After endless dates and a million texts,", gu: "મીઠી યાદો ને મસ્તીનો સંગાથ લાવ્યા છીએ," },
        { en: "We’ve finally decided what comes next!", gu: "હવે જિંદગીનો નવો અધ્યાય લખવા જઈ રહ્યા છીએ!" },
        { en: "We’re getting married, so clear your schedule right away,", gu: "ઢોલ-નગારા ને ગરબાની રમઝટ જામશે ખાસ," },
        { en: "Come eat, drink, and celebrate our biggest day!", gu: "અમારા લગ્નમાં આવજો લઈને પ્રેમનો ઉલ્લાસ!" }
      ]
    }
  ],
  famNote: { en: "Jai Shree Krishna", gu: "જય શ્રી કૃષ્ણ" },   // closing line under the family names ("" to hide)
  music: "music.mp3",
  gods: [ // photos on the gate doors (in /images). To show a name under a photo add  name: "..."
    { src: "images/ganesh.jpg" },
    { src: "images/ambe.jpg" }
  ],
  form: {
    action: "https://docs.google.com/forms/d/e/1FAIpQLScBoiDj-FOqhCbqGb1vhIdwhlRYBPO6x1Nan4defZlh1NCtHQ/formResponse",
    fields: {
      name: "entry.1498135098",
      attend: "entry.877086558",
      query: "entry.2606285"
    }
  },
  bgVideo: "images/bgvideo.mp4",   // "" = no video
  planeBanner: "images/banner.jpeg", // banner photo attached to the paper plane
  weddingDate: "2027-02-02T11:00:00",
  whatsapp: "919825167545",        // country code + number, no + or spaces
  photos: [
    { src: "images/1.jpeg" }, { src: "images/2.jpeg" }, { src: "images/3.jpeg" },
    { src: "images/4.jpeg" }, { src: "images/5.jpeg" }, { src: "images/6.jpeg" },
    { src: "images/7.jpeg" }, { src: "images/8.jpeg" }, { src: "images/9.jpeg" },
    { src: "images/10.jpeg" }, { src: "images/11.jpeg" }, { src: "images/12.jpeg" },
    { src: "images/13.jpeg" }, { src: "images/14.jpeg" }
  ]
};

/* ===== Background video: starts at page load, plays on every page ===== */
const bgVid = document.getElementById("bg-vid");
if (bgVid && CONFIG.bgVideo && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  bgVid.muted = true; bgVid.loop = true; bgVid.playsInline = true; bgVid.preload = "auto";
  bgVid.addEventListener("playing", () => bgVid.classList.add("on"));
  bgVid.addEventListener("error", () => { bgVid.hidden = true; });
  bgVid.src = CONFIG.bgVideo;
  bgVid.hidden = false;
  const playVid = () => { if (bgVid.paused) bgVid.play().catch(() => { }); };
  playVid();
  document.addEventListener("touchstart", playVid, { once: true, passive: true });
  document.getElementById("open").addEventListener("click", playVid);
}

/* ===== Language helpers ===== */
let LANG = CONFIG.defaultLang || "en";
try { LANG = localStorage.getItem("lang") || LANG; } catch (e) { }
const tr = (en, gu) => (LANG === "gu" ? gu : en);
const L = o => (LANG === "gu" && o.gu ? o.gu : o.en);
const GUD = "૦૧૨૩૪૫૬૭૮૯";
const num = v => (LANG === "gu" ? String(v).replace(/\d/g, d => GUD[d]) : String(v));

/* ===== Falling petals ===== */
const petals = document.getElementById("petals");
for (let i = 0; i < (innerWidth < 700 ? 8 : 16); i++) {
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
function petalBurst() {
  for (let i = 0; i < 18; i++) {
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

/* ===== Gate: tap the diya (or the doors) to open ===== */
const gate = document.getElementById("gate"), stage = gate.querySelector(".stage");

// light scroll handler: toggles one class, once per frame
let ticking = false, wasScrolled = false;
addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const s = scrollY > innerHeight * 0.4;
    if (s !== wasScrolled) { wasScrolled = s; document.body.classList.toggle("scrolled", s); }
  });
}, { passive: true });

function openGate(scroll = true) {
  if (gate.classList.contains("open")) return;
  if (scroll === true) stage.scrollIntoView({ behavior: "smooth", block: "start" });
  gate.classList.add("open");
  petalBurst();
  setTimeout(() => gate.classList.add("done"), 2400);
}
document.getElementById("diya").addEventListener("click", () => openGate(true));
stage.querySelectorAll(".door").forEach(d => d.addEventListener("click", () => openGate(true)));

// Tap is the main way to open. Fallback if the guest only scrolls:
//  - gate fully in view for 3s without a tap -> open it (they have had time to see it)
//  - guest scrolls past more than half of the closed gate -> open it so it is not skipped
let autoTimer = null;
new IntersectionObserver(es => {
  const e = es[es.length - 1];
  if (!document.body.classList.contains("ready") || gate.classList.contains("open")) return;
  if (e.intersectionRatio >= 0.9) {
    if (!autoTimer) autoTimer = setTimeout(() => { autoTimer = null; openGate(false); }, 3000);
  } else {
    clearTimeout(autoTimer); autoTimer = null;
    if (e.intersectionRatio < 0.5 && e.boundingClientRect.top < 0) openGate(false);
  }
}, { threshold: [0, 0.5, 0.9, 1] }).observe(stage);

const heroScroll = document.querySelector("#hero .scroll");
if (heroScroll) {
  heroScroll.style.cursor = "pointer";
  heroScroll.addEventListener("click", () => gate.scrollIntoView({ behavior: "smooth" }));
}

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { setTimeout(() => e.target.classList.add("show"), [...document.querySelectorAll(".reveal")].indexOf(e.target) % 3 * 150); io.unobserve(e.target); }
}), { threshold: .2 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ===== Toran: photos hanging across the page ===== */
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

/* ===== Countdown ===== */
const count = document.getElementById("count");
const CD = { en: ["Days", "Hours", "Minutes", "Seconds"], gu: ["દિવસ", "કલાક", "મિનિટ", "સેકન્ડ"] };
setInterval(() => {
  if (document.body.classList.contains("scrolling") || document.hidden) return;
  let t = Math.max(0, new Date(CONFIG.weddingDate) - new Date());
  count.innerHTML = [864e5, 36e5, 6e4, 1e3].map((ms, i) => { const n = Math.floor(t / ms); t -= n * ms; return `<div><b>${num(n)}</b>${CD[LANG][i]}</div>`; }).join("");
}, 1000);

/* ===== Gods on the gate: photo only ===== */
CONFIG.gods.forEach((g, i) => {
  const d = document.querySelector(`.deity[data-g="${i}"]`);
  if (!d) return;
  const w = document.createElement("div");
  w.className = "dwrap";
  d.replaceWith(w);
  w.append(d);
  if (g.name) {
    const nm = document.createElement("p");
    nm.className = "dname";
    nm.textContent = g.name;
    w.append(nm);
  }
  const tries = [g.src];
  (function next(k) {
    if (k >= tries.length) return;
    const im = new Image();
    im.onload = () => { d.style.backgroundImage = `url(${tries[k]})`; d.style.setProperty("--ar", im.naturalWidth / im.naturalHeight); d.classList.add("has"); };
    im.onerror = () => next(k + 1);
    im.src = tries[k];
  })(0);
});

/* ===== Venue + RSVP ===== */
document.querySelectorAll(".dst").forEach(e => e.textContent = CONFIG.venueCity);
document.getElementById("dir").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.venue);
const rsvpForm = document.getElementById("rsvp-form"), rsvpMsg = document.getElementById("rsvp-msg"), sendBtn = document.getElementById("send");
document.getElementById("wa").href = "https://wa.me/" + CONFIG.whatsapp;
rsvpForm.addEventListener("submit", async e => {
  e.preventDefault();
  const f = CONFIG.form, el = rsvpForm.elements;
  const d = new FormData();
  d.append(f.fields.name, el.gname.value.trim());
  d.append(f.fields.attend, el.attend.value);
  d.append(f.fields.query, el.gquery.value.trim());
  sendBtn.disabled = true; sendBtn.textContent = tr("Sending…", "મોકલી રહ્યા છીએ…"); rsvpMsg.textContent = "";
  try {
    await fetch(f.action, { method: "POST", mode: "no-cors", body: d });
    rsvpMsg.textContent = tr("Thank you! Your Message has been received. 🙏", "આભાર! આપનો સંદેશ મળી ગયો છે. 🙏");
    rsvpForm.reset();
  } catch (err) {
    rsvpMsg.textContent = tr("Sorry, something went wrong. Please check your internet and try again.", "માફ કરશો, કંઈક ખોટું થયું. કૃપા કરીને ઇન્ટરનેટ તપાસીને ફરી પ્રયાસ કરો.");
  }
  sendBtn.disabled = false; sendBtn.innerHTML = LANG === "gu" ? sendBtn.dataset.gu : sendBtn.dataset.en;
});

/* ===== Opening screen + letter -> paper plane -> flower blast + music ===== */
history.scrollRestoration = "manual"; scrollTo(0, 0);
document.documentElement.classList.add("lock");
document.body.classList.add("lock");
const intro = document.getElementById("intro"), snd = document.getElementById("snd");

const au = new Audio();
au.src = CONFIG.music; au.loop = true; au.volume = 0.6; au.preload = "auto";
let started = false, userPaused = false, pausedByHide = false;

const setIcon = () => { snd.textContent = au.paused ? "🔇" : "🔊"; };
function playMusic() {
  const p = au.play();
  if (p && p.then) p.then(setIcon).catch(setIcon); else setIcon();
}

const openBtn = document.getElementById("open");
const planeStage = document.getElementById("plane-stage");
let isOpening = false;

function revealMainPage() {
  intro.classList.add("gone");
  document.documentElement.classList.remove("lock");
  document.body.classList.remove("lock");
  document.body.classList.add("ready");
  setTimeout(() => intro.remove(), 1200);
}

function blastFlowers(x, y) {
  const isMobile = innerWidth < 700;
  const count = isMobile ? 28 : 42;
  const flowers = ["🌸", "🌺", "🌼", "🪷", "🌹", "🏵️", "✨"];
  const maxR = Math.min(innerWidth, innerHeight) * (isMobile ? 0.44 : 0.38);

  const ring = document.createElement("div");
  ring.className = "blast-ring";
  ring.style.left = x + "px";
  ring.style.top = y + "px";
  planeStage.appendChild(ring);
  ring.animate([
    { transform: "scale(0.5)", opacity: 1 },
    { transform: "scale(5.5)", opacity: 0 }
  ], { duration: 520, easing: "cubic-bezier(.15,.85,.35,1)", fill: "forwards" })
    .onfinish = () => ring.remove();

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "blast-flw";
    el.textContent = flowers[i % flowers.length];
    el.style.fontSize = (isMobile ? 16 : 20) + Math.random() * 14 + "px";

    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
    const dist = 36 + Math.random() * maxR;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    const fallY = ty + 70 + Math.random() * 90;
    const rot = (Math.random() > 0.5 ? 1 : -1) * (120 + Math.random() * 240);
    const dur = 1150 + Math.random() * 550;

    planeStage.appendChild(el);
    el.animate([
      { transform: `translate3d(${x}px, ${y}px, 0) scale(0.2) rotate(0deg)`, opacity: 1 },
      { transform: `translate3d(${x + tx}px, ${y + ty}px, 0) scale(1.15) rotate(${rot * 0.55}deg)`, opacity: 1, offset: 0.4 },
      { transform: `translate3d(${x + tx * 1.15}px, ${y + fallY}px, 0) scale(0.75) rotate(${rot}deg)`, opacity: 0 }
    ], { duration: dur, easing: "cubic-bezier(.16,.84,.44,1)", fill: "forwards" })
      .onfinish = () => el.remove();
  }
}

openBtn.onclick = () => {
  if (isOpening) return;
  isOpening = true;

  // Start audio immediately inside user tap (required for mobile browsers)
  started = true;
  snd.hidden = false;
  playMusic();

  // Respect reduced-motion accessibility setting
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealMainPage();
    return;
  }

  // Step 1: Fold the letter
  const rect = openBtn.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;
  openBtn.classList.add("folding");

  // Step 2: Spawn paper plane + attached banner photo
  setTimeout(() => {
    const rig = document.createElement("div");
    rig.className = "plane-rig";
    rig.style.transformOrigin = "50% 50%";

    const bannerSrc = CONFIG.planeBanner || (CONFIG.photos[0] && CONFIG.photos[0].src) || "";
    const fallbackSrc = (CONFIG.photos[0] && CONFIG.photos[0].src) || "";

    rig.innerHTML = `
      <div class="plane-banner">
        <img src="${bannerSrc}" alt="Wedding banner" onerror="this.onerror=null;if('${fallbackSrc}')this.src='${fallbackSrc}';">
      </div>
      <svg class="plane-tether" viewBox="0 0 30 48" aria-hidden="true">
        <path d="M0 10 Q15 16 30 24 M0 38 Q15 32 30 24" fill="none" stroke="#d9a441" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg class="plane-svg" viewBox="0 0 96 64" aria-hidden="true">
        <polygon points="4,22 94,32 22,40" fill="#fffaf0" stroke="#c9962f" stroke-width="2" stroke-linejoin="round"/>
        <polygon points="22,40 94,32 32,58" fill="#ebd09a" stroke="#c9962f" stroke-width="2" stroke-linejoin="round"/>
        <polygon points="22,40 32,58 44,44" fill="#d3a85b" stroke="#b98322" stroke-width="1.5" stroke-linejoin="round"/>
        <polygon points="4,22 94,32 36,10" fill="#fffdf7" stroke="#c9962f" stroke-width="2" stroke-linejoin="round"/>
        <path d="M18 28 L76 32" stroke="#b3202f" stroke-width="1.6" stroke-dasharray="4 3" opacity=".75"/>
      </svg>`;

    planeStage.appendChild(rig);

    const bannerImg = rig.querySelector(".plane-banner img");
    const rigRect = rig.getBoundingClientRect();
    const halfW = rigRect.width / 2;
    const halfH = rigRect.height / 2;
    const W = innerWidth, H = innerHeight;
    const padX = Math.min(Math.max(W * 0.14, 52), 130);

    // Full-screen S-loop waypoints: Envelope -> Right turn -> Full left glide -> Left turn -> Upper-center blast
    const pts = [
      { x: startX, y: startY },
      { x: W - padX, y: Math.min(H * 0.68, startY - H * 0.05) },
      { x: W - padX * 0.72, y: H * 0.45 },
      { x: W * 0.50, y: H * 0.50 },
      { x: padX * 0.72, y: H * 0.42 },
      { x: padX, y: H * 0.24 },
      { x: W * 0.52, y: H * 0.24 }
    ];

    // Smooth Catmull-Rom spline sampler
    function sampleSpline(u) {
      const segs = pts.length - 1;
      const scaled = Math.max(0, Math.min(segs - 1e-6, u * segs));
      const i = Math.floor(scaled);
      const t = scaled - i;
      const p0 = pts[Math.max(0, i - 1)];
      const p1 = pts[i];
      const p2 = pts[Math.min(segs, i + 1)];
      const p3 = pts[Math.min(segs, i + 2)];
      const t2 = t * t, t3 = t2 * t;

      const x = 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
      const y = 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
      const vx = 0.5 * ((-p0.x + p2.x) + 2 * (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t + 3 * (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t2);
      const vy = 0.5 * ((-p0.y + p2.y) + 2 * (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t + 3 * (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t2);
      return { x, y, vx, vy };
    }

    // Step 3: Reveal the second page smoothly right after takeoff
    setTimeout(revealMainPage, 320);

    const DURATION = 5500;
    const t0 = performance.now();
    let mirrored = false;

    function frame(now) {
      const raw = Math.min(1, (now - t0) / DURATION);
      // Gentle ease-in at takeoff, steady readable cruise across the screen
      const u = raw < 0.12 ? (raw * raw) / 0.12 : raw;
      const { x, y, vx, vy } = sampleSpline(u);

      const speed = Math.hypot(vx, vy) || 1;
      const dirX = vx / speed;
      // Smooth 3D bank through 0 at each side turn, stays ~1 on straight legs
      const bankX = Math.tanh(dirX * 2.8);
      const flipSign = bankX < 0 ? -1 : 1;
      const sx = flipSign * Math.max(0.06, Math.abs(bankX));

      // Counter-flip banner photo right when edge-on so it stays upright & readable
      if ((sx < 0) !== mirrored) {
        mirrored = sx < 0;
        bannerImg.style.transform = mirrored ? "scaleX(-1)" : "";
      }

      // Natural pitch tilt up/down (works cleanly in both left and right directions)
      const tilt = Math.max(-24, Math.min(24, Math.atan2(vy, Math.abs(vx) + 80) * (180 / Math.PI)));
      const grow = raw < 0.14 ? 0.45 + 0.55 * (raw / 0.14) : 1;

      rig.style.opacity = raw < 0.10 ? 0.35 + 0.65 * (raw / 0.10) : 1;
      rig.style.transform = `translate3d(${x - halfW}px, ${y - halfH}px, 0) scale(${grow * sx}, ${grow}) rotate(${tilt}deg)`;

      if (raw < 1) {
        requestAnimationFrame(frame);
      } else {
        // Step 4: Blast plane into flowers at the nose position
        rig.remove();
        blastFlowers(x + halfW * 0.55, y);
        setTimeout(() => { planeStage.innerHTML = ""; }, 2200);
      }
    }

    requestAnimationFrame(frame);
  }, 340);
};

["touchend", "click"].forEach(ev =>
  document.addEventListener(ev, e => {
    if (e.target.closest && e.target.closest("#snd")) return;
    if (started && !userPaused && au.paused && !document.hidden) playMusic();
  }, { passive: true }));

snd.onclick = () => {
  if (au.paused) { userPaused = false; playMusic(); }
  else { userPaused = true; au.pause(); setIcon(); }
};

function pauseAll() {
  if (!au.paused) pausedByHide = true;
  au.pause(); setIcon();
  if (bgVid) bgVid.pause();
}
function resumeAll() {
  if (pausedByHide && !userPaused) playMusic();
  pausedByHide = false;
  if (bgVid && bgVid.getAttribute("src") && !bgVid.hidden) bgVid.play().catch(() => { });
}
document.addEventListener("visibilitychange", () => document.hidden ? pauseAll() : resumeAll());
addEventListener("pagehide", pauseAll);
addEventListener("pageshow", e => { if (e.persisted) resumeAll(); });

/* ===== Language switch, celebrations list, family names ===== */
const langBtn = document.getElementById("lang");
const sched = document.getElementById("sched"), famSec = document.getElementById("fam"), famBody = document.getElementById("famBody");
const calUrl = e => "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(e.title.en + " - Chandresh & Janvi") + "&dates=" + e.cal.start + "/" + e.cal.end + "&location=" + encodeURIComponent(e.cal.location || CONFIG.venue);
function renderDynamic() {
  sched.innerHTML = CONFIG.schedule.map(e =>
    `<article class="ev"><div class="ico">${e.icon}</div><div><h3>${L(e.title)}</h3><p>${L(e.date)}</p><p>${L(e.time)}</p><p>${L(e.place)}</p>` +
    (e.cal ? `<a class="cal" target="_blank" rel="noopener" href="${calUrl(e)}">${tr("Add to calendar", "કૅલેન્ડરમાં ઉમેરો")}</a>` : "") + `</div></article>`).join("");
  sched.querySelectorAll(".ev").forEach((el, i) => { el.classList.add("reveal"); el.style.transitionDelay = (i % 3) * 0.12 + "s"; io.observe(el); });
  document.getElementById("venue-name").textContent = L(CONFIG.venueText);
  const groups = CONFIG.families.filter(g => g.names && g.names.length);
  famSec.hidden = !groups.length;
  const fn = document.getElementById("famNote"), note = CONFIG.famNote ? L(CONFIG.famNote) : "";
  fn.textContent = note; fn.hidden = !note;
  famBody.innerHTML = groups.map(g => `<div class="fg fg-${g.key}"><h3>${L(g.title)}</h3>${g.names.map(n => `<p>${L(n)}</p>`).join("")}</div>`).join("");
}
function applyLang() {
  document.documentElement.lang = LANG === "gu" ? "gu" : "en";
  document.body.classList.toggle("gu", LANG === "gu");
  document.querySelectorAll("[data-gu]").forEach(el => {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    el.innerHTML = LANG === "gu" ? el.dataset.gu : el.dataset.en;
  });
  document.querySelectorAll("[data-gu-ph]").forEach(el => {
    if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder;
    el.placeholder = LANG === "gu" ? el.dataset.guPh : el.dataset.enPh;
  });
  renderDynamic();
  langBtn.textContent = LANG === "gu" ? "English" : "ગુજરાતી";
}
langBtn.onclick = () => { LANG = LANG === "gu" ? "en" : "gu"; try { localStorage.setItem("lang", LANG); } catch (e) { } applyLang(); };
document.getElementById("venue-map").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.venue);
applyLang();

/* ===== Smoothness: pause heavy animations when off-screen or while scrolling ===== */
let scrollTimer, isScrolling = false;
const visible = new Set();
const laneSvgs = [...document.querySelectorAll(".lane svg")];
function syncSmil() {
  laneSvgs.forEach(s => {
    const run = visible.has(s.closest(".lane")) && !isScrolling;
    run ? s.unpauseAnimations() : s.pauseAnimations();
  });
}
const animIO = new IntersectionObserver(es => {
  es.forEach(e => {
    e.target.classList.toggle("paused", !e.isIntersecting);
    e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
  });
  syncSmil();
}, { rootMargin: "120px" });
document.querySelectorAll("#hero, .bgphera, .lane").forEach(el => animIO.observe(el));
addEventListener("scroll", () => {
  if (!isScrolling) { isScrolling = true; document.body.classList.add("scrolling"); syncSmil(); }
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    isScrolling = false; document.body.classList.remove("scrolling"); syncSmil();
  }, 160);
}, { passive: true });
