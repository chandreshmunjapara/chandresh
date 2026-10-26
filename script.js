/* ====== EDIT THESE DETAILS ====== */
const CONFIG = {
  venue: "Kunkavav, Gujarat",
  venueCity: "Kunkavav",
  defaultLang: "en",   // "en" = English first, "gu" = Gujarati first (guests can switch with the button)
  venueText: { en: "Kunkavav, Gujarat", gu: "કુંકાવાવ, ગુજરાત" },

  // ---- Celebrations: one block per event, English + Gujarati. Add or delete blocks freely. ----
  schedule: [
    // NOTE: Sangeet (1 Feb, 7 PM, Sanali) and Wedding (2 Feb, 11 AM) are your real details.
    // The other times below are SAMPLES - please correct them, or delete the blocks you do not need.
    {
      icon: "🌺", title: { en: "Mandap Muhurat", gu: "મંડપ મુહૂર્ત" },
      date: { en: "Monday<br>01 February 2027", gu: "સોમવાર<br>૦૧ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "9:00 AM", gu: "સવારે ૯:૦૦ કલાકે" },
      place: { en: "Kunkavav", gu: "કુંકાવાવ" },
      cal: { start: "20270201T090000", end: "20270201T110000" }
    },
    {
      icon: "🌼", title: { en: "Haldi Rasam", gu: "હલ્દી રસમ" },
      date: { en: "Monday<br>01 February 2027", gu: "સોમવાર<br>૦૧ ફેબ્રુઆરી ૨૦૨૭" },
      time: { en: "4:00 PM", gu: "બપોરે ૪:૦૦ કલાકે" },
      place: { en: "Kunkavav", gu: "કુંકાવાવ" },
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

  // ---- Family names (like "Sneh Bandhan" on the printed card). A group shows only if it has names. ----
  families: [
    {
      key: "hosts", title: { en: "Hosts of the occasion", gu: "અવસરના અભિલાષી" },
      names: [
        { en: "Mr. Dhirubhai Munjapara & Mrs. Rasilaben Munjapara", gu: "શ્રી ધીરુભાઈ મુંજપરા તથા સૌ. રસીલાબેન મુંજપરા" },
        { en: "Mr. Manubhai Desai & Mrs. Neetaben Desai", gu: "શ્રી મનુભાઈ દેસાઈ તથા સૌ. નીતાબેન દેસાઈ" }
      ]
    },
    // SAMPLE names below - replace "Name Surname" / "નામ અટક" with real names, add more lines, or delete a group.
    {
      key: "nephews", title: { en: "Dear nephews", gu: "વ્હાલા ભાણેજો" },
      names: [
        { en: "Mr. Name Surname - Town", gu: "શ્રી નામ અટક - ગામ" },
        { en: "Mr. Name Surname - Town", gu: "શ્રી નામ અટક - ગામ" }
      ]
    },
    {
      key: "mosal", title: { en: "Maternal family (Mosal)", gu: "મોસાળ પક્ષ" },
      names: [
        { en: "Mr. Name Surname", gu: "શ્રી નામ અટક" },
        { en: "Mr. Name Surname", gu: "શ્રી નામ અટક" }
      ]
    },
    {
      key: "love", title: { en: "With love", gu: "સ્નેહાધીન" },
      names: [
        { en: "Mr. Name Surname", gu: "શ્રી નામ અટક" },
        { en: "Mr. Name Surname", gu: "શ્રી નામ અટક" },
        { en: "Mr. Name Surname", gu: "શ્રી નામ અટક" }
      ]
    }
  ],
  // ---- Optional: keep the family names in a Google Sheet so you can add names any time, without touching code ----
  // Sheet columns: group | english | gujarati   (group = hosts, nephews, mosal, love, or any new heading you like)
  // File > Share > Publish to web > choose the sheet > "Comma-separated values (.csv)" > Publish > paste the link here:
  namesSheet: "",
  famNote: { en: "Jai Shree Krishna", gu: "જય શ્રી કૃષ્ણ" },   // closing line under the family names (leave "" to hide)
  music: "music.mp3", // optional: put a song named music.mp3 next to index.html
  bgVideo: "images/bgvideo.mp4", // Put your .mp4 video in the images folder
  gods: [ // put these photos in /images (any size). Edit names as you like.
    // { src: "images/ganesh.jpg", sym: "ॐ", name: "શ્રી ગણેશાય નમઃ" },
    // { src: "images/ambe.jpg", sym: "શ્રી", name: "આઈ શ્રી ખોડીયાર માતાજી" }
     { src: "images/ganesh.jpg",  },
    { src: "images/ambe.jpg",  }
  ],
  // ---- Google Form connection (already set up) ----
  form: {
    action: "https://docs.google.com/forms/d/e/1FAIpQLScBoiDj-FOqhCbqGb1vhIdwhlRYBPO6x1Nan4defZlh1NCtHQ/formResponse",
    fields: {
      name: "entry.1498135098",
      attend: "entry.877086558",
      query: "entry.2606285"
    }
  },
  weddingDate: "2027-02-02T11:00:00",
  whatsapp: "919825167545", // country code + number, no + or spaces
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

/* Language helpers */
let LANG = CONFIG.defaultLang || "en";
try { LANG = localStorage.getItem("lang") || LANG; } catch (e) { }
const tr = (en, gu) => (LANG === "gu" ? gu : en);
const L = o => (LANG === "gu" && o.gu ? o.gu : o.en);
const GUD = "૦૧૨૩૪૫૬૭૮૯";
const num = v => (LANG === "gu" ? String(v).replace(/\d/g, d => GUD[d]) : String(v));

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
  stage.style.setProperty("--o", Math.max(0, (p - 0.25) / 0.75));
  document.body.classList.toggle("scrolled", scrollY > innerHeight * 0.4);
  document.documentElement.style.setProperty("--sp2", Math.min(1, scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)));
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
const CD = { en: ["Days", "Hours", "Minutes", "Seconds"], gu: ["દિવસ", "કલાક", "મિનિટ", "સેકન્ડ"] };
setInterval(() => {
  let t = Math.max(0, new Date(CONFIG.weddingDate) - new Date());
  count.innerHTML = [864e5, 36e5, 6e4, 1e3].map((ms, i) => { const n = Math.floor(t / ms); t -= n * ms; return `<div><b>${num(n)}</b>${CD[LANG][i]}</div>`; }).join("");
}, 1000);

/* RSVP link */


/* Mandala behind the invitation */
let m = "";
for (let i = 0; i < 12; i++) m += `<ellipse cx="0" cy="-62" rx="11" ry="30" transform="rotate(${i * 30})"/><circle cx="0" cy="-92" r="4" transform="rotate(${i * 30 + 15})"/>`;
document.getElementById("mandala").innerHTML = m + '<circle r="24"/><circle r="38"/>';

/* Gods on the gate: photo only (tries .jpg, .jpeg, .png, .webp automatically) */
CONFIG.gods.forEach((g, i) => {
  const d = document.querySelector(`.deity[data-g="${i}"]`);
  if (!d) return;
  const w = document.createElement("div");   // frame + name below it
  w.className = "dwrap";
  d.replaceWith(w);
  w.append(d);
  const nm = document.createElement("p");
  nm.className = "dname";
  nm.textContent = g.name;
  w.append(nm);
  const base = g.src.replace(/\.\w+$/, "");
  const tries = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"].map(e => base + "." + e);
  (function next(k) {
    if (k >= tries.length) return;
    const im = new Image();
    im.onload = () => { d.style.backgroundImage = `url(${tries[k]})`; d.style.setProperty("--ar", im.naturalWidth / im.naturalHeight); d.classList.add("has"); };
    im.onerror = () => next(k + 1);
    im.src = tries[k];
  })(0);
});


/* Venue + calendar + RSVP */
document.querySelectorAll(".dst").forEach(e => e.textContent = CONFIG.venueCity);
document.getElementById("dir").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.venue);
const rsvpForm = document.getElementById("rsvp-form"), rsvpMsg = document.getElementById("rsvp-msg"), sendBtn = document.getElementById("send");
document.getElementById("wa").href = "https://wa.me/" + CONFIG.whatsapp;
rsvpForm.addEventListener("submit", async e => {
  e.preventDefault();
  const f = CONFIG.form, el = rsvpForm.elements;
  if (f.action.includes("YOUR_FORM_ID") || f.fields.name === "entry.0000000000") { rsvpMsg.textContent = "The RSVP form is not connected yet."; return; }
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
  au.play().then(() => { snd.hidden = false; }).catch(() => { });
};
snd.onclick = () => { if (au.paused) { au.play(); snd.textContent = "🔊"; } else { au.pause(); snd.textContent = "🔇"; } };

/* ===== Language switch (English / Gujarati), celebrations list, family names ===== */
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
  famBody.innerHTML = groups.map(g => `<div class="fg"><h3>${L(g.title)}</h3>${g.names.map(n => `<p>${L(n)}</p>`).join("")}</div>`).join("");
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

/* ===== Family names from a Google Sheet (optional, see namesSheet in CONFIG) ===== */
function parseCSV(t) {
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && t[i + 1] === "\n") i++; row.push(f); rows.push(row); row = []; f = ""; }
    else f += c;
  }
  if (f !== "" || row.length) { row.push(f); rows.push(row); }
  return rows;
}
async function loadNames() {
  if (!CONFIG.namesSheet) return;
  try {
    const res = await fetch(CONFIG.namesSheet);
    const rows = parseCSV(await res.text()).slice(1);
    const by = {}, raw = {};
    rows.forEach(r => {
      const g = (r[0] || "").trim(), en = (r[1] || "").trim(), gu = (r[2] || "").trim();
      if (!g || !(en || gu)) return;
      const k = g.toLowerCase();
      raw[k] = raw[k] || g;
      (by[k] = by[k] || []).push({ en: en || gu, gu: gu || en });
    });
    if (!Object.keys(by).length) return;
    CONFIG.families.forEach(f => { f.names = by[f.key] || []; delete by[f.key]; });
    Object.keys(by).forEach(k => CONFIG.families.push({ key: k, title: { en: raw[k], gu: raw[k] }, names: by[k] }));
    renderDynamic();
  } catch (e) { /* offline or blocked: the names written in CONFIG stay */ }
}
loadNames();
const bgVid = document.getElementById("bg-vid");
if (CONFIG.bgVideo && bgVid) {
  bgVid.src = CONFIG.bgVideo;
  bgVid.hidden = false;
}