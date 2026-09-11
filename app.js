const COUNTIES = [
  "Nairobi","Mombasa","Kisumu","Kiambu","Nakuru","Uasin Gishu","Machakos","Kajiado",
  "Kisii","Meru","Nyeri","Kakamega","Kilifi","Kwale","Garissa","Turkana","Bungoma",
  "Kericho","Embu","Laikipia","Narok","Migori","Homa Bay","Trans Nzoia"
];
const INTERESTS = ["Afrobeats","Gospel","Hiking","Football","Tech","Farming","Church","Nightlife","Cooking","Travel","Books","Gym"];
const MODES = ["Open","Student","Professional","Church"];
const MIN_PHOTOS = 3;
const MAX_PHOTOS = 12;
const KENYA_MAX_KM = 800;

const PEOPLE = [
  {id:"p1", name:"Amina", age:26, county:"Nairobi", town:"Westlands", tribe:"Swahili", religion:"Muslim", mode:"Professional", interests:["Travel","Cooking","Afrobeats"], bio:"Nairobi evenings, good food, no games.", dist:3, photos:["https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"]},
  {id:"p2", name:"Brian", age:29, county:"Nairobi", town:"Kilimani", tribe:"Kikuyu", religion:"Christian", mode:"Professional", interests:["Gym","Tech","Football"], bio:"Building by day, football on Sundays.", dist:5, photos:["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"]},
  {id:"p3", name:"Wanjiku", age:24, county:"Kiambu", town:"Thika", tribe:"Kikuyu", religion:"Christian", mode:"Student", interests:["Books","Gospel","Hiking"], bio:"Campus life + quiet weekends.", dist:18, photos:["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"]},
  {id:"p4", name:"Otieno", age:31, county:"Kisumu", town:"Milimani", tribe:"Luo", religion:"Christian", mode:"Open", interests:["Football","Afrobeats","Travel"], bio:"Lakeside vibes. Come with stories.", dist:320, photos:["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=900&q=80"]},
  {id:"p5", name:"Fatma", age:27, county:"Mombasa", town:"Nyali", tribe:"Swahili", religion:"Muslim", mode:"Open", interests:["Travel","Cooking","Nightlife"], bio:"Coast energy. Swahili breakfasts.", dist:440, photos:["https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"]},
  {id:"p6", name:"Mercy", age:23, county:"Nakuru", town:"Lanet", tribe:"Kalenjin", religion:"Christian", mode:"Church", interests:["Gospel","Hiking","Books"], bio:"Church girl who still loves a hike.", dist:150, photos:["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80"]},
  {id:"p7", name:"Kevin", age:28, county:"Uasin Gishu", town:"Eldoret", tribe:"Kalenjin", religion:"Christian", mode:"Professional", interests:["Gym","Football","Tech"], bio:"Eldoret mornings. Serious about life.", dist:310, photos:["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80"]},
  {id:"p8", name:"Stacy", age:25, county:"Nairobi", town:"South B", tribe:"Luhya", religion:"Christian", mode:"Open", interests:["Afrobeats","Nightlife","Travel"], bio:"City girl. Soft life, hard standards.", dist:7, photos:["https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"]}
];

const LIKED_YOU = ["p3","p5","p6","p8"];

const store = {
  get(k, d){ try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
};

function toast(msg){
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2200);
}

function user(){ return store.get("kc_user", null); }
function likes(){ return store.get("kc_likes", []); }
function passes(){ return store.get("kc_passes", []); }
function matches(){ return store.get("kc_matches", []); }
function chats(){ return store.get("kc_chats", {}); }
function isPremium(){ return !!store.get("kc_premium", false); }

let view = "home";
let chatWith = null;
let filters = { county:"", mode:"", maxAge:45, maxKm: KENYA_MAX_KM };
let draftPhotos = [];
let photoIndex = {};
let pendingMatch = null;

function setUser(u){ store.set("kc_user", u); render(); }
function primaryPhoto(p){ return (p.photos && p.photos[0]) || ""; }

function topbar(){
  const u = user();
  if (!u) return `<div class="topbar"><div class="brand">Karibu <span>Connect</span></div><button class="btn primary" data-go="register" style="padding:8px 14px;font-size:13px">Join</button></div>`;
  return `<div class="topbar">
    <div class="brand">Karibu <span>Connect</span></div>
    <button class="icon-btn" data-go="premium" title="Premium">⭐</button>
  </div>`;
}

function bottomNav(){
  const u = user();
  if (!u) return "";
  const tabs = [
    ["discover","🔥","Discover"],
    ["likes","💖","Likes"],
    ["matches","✨","Matches"],
    ["chat","💬","Chat"],
    ["profile","👤","Profile"]
  ];
  return `<nav class="bottom-nav">
    ${tabs.map(([id,ico,label]) => `<button class="${view===id?"active":""}" data-go="${id}"><span class="ico">${ico}</span>${label}</button>`).join("")}
  </nav>`;
}

function home(){
  return `<div class="landing">
    <div class="landing-hero">
      <h1>Match with people near you in Kenya</h1>
      <p>Swipe. Match. Chat. From Nairobi to Mombasa — built for real connection.</p>
      <div class="landing-cta">
        <button class="btn light" data-go="register">Create account</button>
        <button class="btn ghost" data-go="login" style="color:#fff;border:1px solid rgba(255,255,255,.35)">I already have an account</button>
      </div>
    </div>
    <div class="landing-strip">
      <div class="pill"><strong>📍 Location first</strong>County + distance filters</div>
      <div class="pill"><strong>📷 3–12 photos</strong>Full-screen profiles</div>
      <div class="pill"><strong>🔒 Safe</strong>Report anytime</div>
    </div>
  </div>`;
}

function photoUploaderHtml(){
  const slots = Array.from({length: MAX_PHOTOS}, (_, i) => {
    const src = draftPhotos[i];
    if (src) return `<div class="photo-slot"><img src="${src}" alt="" /><button type="button" class="rm" data-rm="${i}">×</button></div>`;
    return `<div class="photo-slot" data-slot="${i}">+<input type="file" accept="image/*" hidden data-file="${i}" /></div>`;
  }).join("");
  return `<label>Your photos · min ${MIN_PHOTOS}, max ${MAX_PHOTOS}</label>
    <div class="photo-grid">${slots}</div>
    <p class="photo-hint">${draftPhotos.length}/${MAX_PHOTOS} added</p>`;
}

function registerForm(isLogin=false){
  const u = user() || {};
  if (isLogin) {
    return `<form class="form" id="loginForm">
      <h2>Welcome back</h2>
      <p class="sub">Log in to keep swiping</p>
      <label>Email</label><input name="email" type="email" required value="${u.email||""}">
      <label>Password</label><input name="password" type="password" required>
      <div style="margin-top:16px"><button class="btn primary" type="submit" style="width:100%">Log in</button></div>
    </form>`;
  }
  if (u.photos && u.photos.length && !draftPhotos.length) draftPhotos = [...u.photos];
  return `<form class="form" id="regForm">
    <h2>Join Karibu Connect</h2>
    <p class="sub">Takes a minute. Make it real.</p>
    <label>Name</label><input name="name" required value="${u.name||""}">
    <label>Email</label><input name="email" type="email" required value="${u.email||""}">
    <label>Password</label><input name="password" type="password" required minlength="4">
    <label>Age</label><input name="age" type="number" min="18" max="80" value="${u.age||25}">
    <label>County</label>
    <select name="county">${COUNTIES.map(c=>`<option ${u.county===c?"selected":""}>${c}</option>`).join("")}</select>
    <label>Town</label><input name="town" value="${u.town||""}" placeholder="e.g. Westlands">
    <label>Tribe (optional)</label><input name="tribe" value="${u.tribe||""}">
    <label>Religion</label>
    <select name="religion"><option>Christian</option><option>Muslim</option><option>Other</option><option>Prefer not to say</option></select>
    <label>Mode</label>
    <select name="mode">${MODES.map(m=>`<option>${m}</option>`).join("")}</select>
    <label>Bio</label><textarea name="bio" rows="3" placeholder="A little about you...">${u.bio||""}</textarea>
    <label>Interests</label>
    <div class="chips">${INTERESTS.map(i=>`<span class="chip ${(u.interests||[]).includes(i)?"on":""}" data-i="${i}">${i}</span>`).join("")}</div>
    ${photoUploaderHtml()}
    <div style="margin-top:18px"><button class="btn primary" type="submit" style="width:100%">Start swiping</button></div>
  </form>`;
}

function filteredPeople(){
  const liked = likes(), passed = passes();
  let list = PEOPLE.filter(p => !liked.includes(p.id) && !passed.includes(p.id));
  if (filters.county) list = list.filter(p => p.county === filters.county);
  if (filters.mode) list = list.filter(p => p.mode === filters.mode);
  return list.filter(p => p.age <= filters.maxAge && p.dist <= filters.maxKm);
}

function fullCard(p){
  const photos = p.photos || [];
  const idx = Math.min(photoIndex[p.id] || 0, Math.max(photos.length-1, 0));
  const dots = photos.map((_, i) => `<span class="${i===idx?"on":""}"></span>`).join("");
  return `
    <div class="stamp like">LIKE</div>
    <div class="stamp nope">NOPE</div>
    <div class="photo" data-phototap="${p.id}" style="background-image:url('${photos[idx]||""}')"></div>
    <div class="photo-dots">${dots}</div>
    <div class="gradient"></div>
    <div class="info">
      <h2>${p.name}, ${p.age}</h2>
      <div class="loc">📍 ${p.town}, ${p.county} · ${p.dist} km</div>
      <div class="bio">${p.bio}</div>
      <div class="tags">${p.mode} · ${p.religion} · ${p.interests.slice(0,3).join(" · ")}</div>
    </div>`;
}

function discover(){
  const list = filteredPeople();
  const top = list[0];
  return `<div class="discover-shell">
    <div class="discover-head"><h1>Discover</h1><button class="btn" id="gpsBtn" style="padding:8px 12px;font-size:12px">📍 GPS</button></div>
    <div class="filters-mini">
      <select id="fCounty"><option value="">All Kenya</option>${COUNTIES.map(c=>`<option ${filters.county===c?"selected":""}>${c}</option>`).join("")}</select>
      <select id="fMode"><option value="">All modes</option>${MODES.map(m=>`<option ${filters.mode===m?"selected":""}>${m}</option>`).join("")}</select>
      <label class="chip">km <input id="fKm" type="range" min="10" max="${KENYA_MAX_KM}" value="${filters.maxKm}" style="width:80px;vertical-align:middle"> <span id="kmLabel">${filters.maxKm}</span></label>
    </div>
    ${top ? `
      <div class="deck" id="deck">
        <div class="swipe-card" id="activeCard" data-id="${top.id}">${fullCard(top)}</div>
      </div>
      <div class="actions">
        <button class="circle nope" data-pass="${top.id}">✕</button>
        <button class="circle star" data-go="premium" title="Super Like">★</button>
        <button class="circle like" data-like="${top.id}">♥</button>
      </div>
    ` : `<p class="empty">No more people in this filter. Raise distance or clear county.</p>`}
  </div>`;
}

function likesView(){
  const premium = isPremium();
  const people = LIKED_YOU.map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  return `<div class="wrap">
    <h2 class="section-title">Likes</h2>
    ${premium ? "" : `<div class="paywall-banner">
      <h3>See who likes you 👀</h3>
      <p>${people.length} people liked you. Unlock to view full profiles and match faster.</p>
      <button class="btn primary" data-go="premium">Unlock with Karibu Plus · KES 499</button>
    </div>`}
    <div class="likes-grid">
      ${people.map(p => premium ? `
        <div class="match-tile" data-openchat="${p.id}">
          <img src="${primaryPhoto(p)}" alt="" />
          <div class="cap">${p.name}, ${p.age}</div>
        </div>
      ` : `
        <div class="like-card">
          <img src="${primaryPhoto(p)}" alt="" />
          <div class="lock"><span>🔒</span>Karibu Plus</div>
        </div>
      `).join("")}
    </div>
  </div>`;
}

function matchesView(){
  const ms = matches().map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  return `<div class="wrap">
    <h2 class="section-title">Matches</h2>
    ${ms.length ? `<div class="match-grid">${ms.map(p=>`
      <div class="match-tile" data-openchat="${p.id}">
        <img src="${primaryPhoto(p)}" alt="" />
        <div class="cap">${p.name}</div>
      </div>`).join("")}</div>` : `<p class="empty">No matches yet. Keep swiping 🔥</p>`}
  </div>`;
}

function chatView(){
  const ms = matches().map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  const active = PEOPLE.find(p=>p.id===chatWith) || ms[0];
  if (active) chatWith = active.id;
  const thread = active ? (chats()[active.id] || [{from:"them", text:`Hey, it's ${active.name}. Karibu 👋`}]) : [];
  if (!ms.length) return `<div class="wrap"><h2 class="section-title">Chat</h2><p class="empty">Match someone first, then chat here.</p></div>`;
  return `<div class="wrap">
    <h2 class="section-title">Chat</h2>
    <div class="chat-list" style="margin-bottom:12px">
      ${ms.map(p=>`<button data-openchat="${p.id}"><img src="${primaryPhoto(p)}" alt=""/><div><strong>${p.name}</strong><small>${p.county}</small></div></button>`).join("")}
    </div>
    ${active ? `<div class="pane">
      <div class="msgs">${thread.map(m=>`<div class="bubble ${m.from==="me"?"me":""}">${m.text}</div>`).join("")}</div>
      <form class="send" id="sendForm"><input name="text" placeholder="Say something nice…" required /><button class="btn primary" style="padding:10px 16px">Send</button></form>
    </div>` : ""}
  </div>`;
}

function profileView(){
  const u = user();
  const photos = u.photos || [];
  return `<div class="wrap">
    <h2 class="section-title">Profile</h2>
    <div class="form" style="box-shadow:var(--shadow)">
      ${photos[0]?`<div style="height:220px;border-radius:16px;background:url('${photos[0]}') center/cover;margin-bottom:14px"></div>`:""}
      <h2 style="margin:0">${u.name}, ${u.age}</h2>
      <p class="meta" style="margin:6px 0">${u.town||""} · ${u.county} · ${u.mode}</p>
      <p>${u.bio||""}</p>
      <p class="meta" style="margin-top:8px">${(u.interests||[]).join(" · ")}</p>
      <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">
        <button class="btn" data-go="register">Edit</button>
        <button class="btn gold" data-go="premium">Karibu Plus</button>
        <button class="btn ghost" id="logout">Log out</button>
      </div>
      <p style="margin-top:12px"><button class="btn ghost" data-go="safety" style="padding:0">Safety & report</button></p>
    </div>
  </div>`;
}

function safetyView(){
  return `<form class="form" id="reportForm">
    <h2>Safety & report</h2>
    <p class="sub">Report anyone who feels unsafe or fake.</p>
    <label>Person</label>
    <select name="who">${PEOPLE.map(p=>`<option value="${p.id}">${p.name} (${p.county})</option>`).join("")}</select>
    <label>Reason</label>
    <select name="reason"><option>Harassment</option><option>Fake profile</option><option>Spam</option><option>Underage concern</option><option>Other</option></select>
    <label>Details</label><textarea name="details" rows="4" required></textarea>
    <div style="margin-top:14px"><button class="btn primary" style="width:100%">Submit report</button></div>
  </form>`;
}

function premiumView(){
  const on = isPremium();
  return `<div class="form">
    <h2>Karibu Plus</h2>
    <p class="sub">${on ? "You're on Plus. Enjoy seeing likes." : "Unlock likes, boosts, and more."}</p>
    <ul class="meta" style="padding-left:18px;margin:12px 0;line-height:1.8">
      <li>See who liked you</li>
      <li>5 Super Likes / week</li>
      <li>Rewind last swipe</li>
      <li>Travel mode across Kenya</li>
    </ul>
    ${on
      ? `<button class="btn" disabled>Active ✓</button>`
      : `<button class="btn primary" id="fakePay" style="width:100%">Pay KES 499 with M-Pesa (demo)</button>`}
  </div>`;
}

function matchModalHtml(){
  if (!pendingMatch) return "";
  const p = PEOPLE.find(x => x.id === pendingMatch);
  if (!p) return "";
  const me = user();
  const myPhoto = (me && me.photos && me.photos[0]) || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80";
  return `<div class="match-modal">
    <div class="match-box">
      <h2>It's a Match!</h2>
      <p>You and ${p.name} liked each other</p>
      <div class="match-faces">
        <img src="${myPhoto}" alt="" />
        <img src="${primaryPhoto(p)}" alt="" />
      </div>
      <div class="row">
        <button class="btn" id="matchKeep" style="background:rgba(255,255,255,.2);color:#fff;border:0">Keep swiping</button>
        <button class="btn primary" data-openchat="${p.id}">Send message</button>
      </div>
    </div>
  </div>`;
}

function render(){
  const root = document.getElementById("app");
  const pages = {
    home, login:()=>registerForm(true), register:()=>registerForm(false),
    discover, likes:likesView, matches:matchesView, chat:chatView,
    profile:profileView, safety:safetyView, premium:premiumView
  };
  if (["discover","likes","matches","chat","profile","safety","premium"].includes(view) && !user()) view = "login";
  root.innerHTML = topbar() + (pages[view]||home)() + bottomNav() + matchModalHtml();
  if (view === "discover") initSwipe();
}

function doLike(id){
  if (likes().includes(id)) return;
  store.set("kc_likes", [...likes(), id]);
  store.set("kc_matches", [...new Set([...matches(), id])]);
  pendingMatch = id;
  render();
}
function doPass(id){
  if (passes().includes(id)) return;
  store.set("kc_passes", [...passes(), id]);
  render();
}

function initSwipe(){
  const card = document.getElementById("activeCard");
  if (!card) return;
  let startX = 0, dx = 0, dragging = false;
  const likeStamp = card.querySelector(".stamp.like");
  const nopeStamp = card.querySelector(".stamp.nope");
  function onDown(e){ dragging = true; startX = (e.touches ? e.touches[0].clientX : e.clientX); dx = 0; }
  function onMove(e){
    if (!dragging) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    dx = x - startX;
    card.style.transition = "none";
    card.style.transform = `translateX(${dx}px) rotate(${dx/25}deg)`;
    const op = Math.min(1, Math.abs(dx)/80);
    if (likeStamp) likeStamp.style.opacity = dx > 0 ? op : 0;
    if (nopeStamp) nopeStamp.style.opacity = dx < 0 ? op : 0;
  }
  function onUp(){
    if (!dragging) return;
    dragging = false;
    card.style.transition = "transform .2s ease, opacity .2s ease";
    const id = card.dataset.id;
    if (dx > 100) { card.style.transform = "translateX(120%) rotate(18deg)"; card.style.opacity = "0"; setTimeout(()=>doLike(id), 180); }
    else if (dx < -100) { card.style.transform = "translateX(-120%) rotate(-18deg)"; card.style.opacity = "0"; setTimeout(()=>doPass(id), 180); }
    else { card.style.transform = ""; if (likeStamp) likeStamp.style.opacity = 0; if (nopeStamp) nopeStamp.style.opacity = 0; }
    dx = 0;
  }
  card.addEventListener("mousedown", onDown);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);
  card.addEventListener("touchstart", onDown, {passive:true});
  card.addEventListener("touchmove", onMove, {passive:true});
  card.addEventListener("touchend", onUp);
}

document.body.addEventListener("click", (e)=>{
  const go = e.target.closest("[data-go]");
  if (go){ view = go.dataset.go; render(); return; }
  const like = e.target.closest("[data-like]");
  if (like){ doLike(like.dataset.like); return; }
  const pass = e.target.closest("[data-pass]");
  if (pass){ doPass(pass.dataset.pass); return; }
  const oc = e.target.closest("[data-openchat]");
  if (oc){ chatWith = oc.dataset.openchat; pendingMatch = null; view = "chat"; render(); return; }
  if (e.target.id === "matchKeep"){ pendingMatch = null; render(); return; }
  if (e.target.id === "logout"){ localStorage.removeItem("kc_user"); draftPhotos = []; view = "home"; render(); return; }
  if (e.target.id === "fakePay"){
    store.set("kc_premium", true);
    toast("Karibu Plus unlocked (demo)");
    view = "likes"; render(); return;
  }
  if (e.target.id === "gpsBtn"){
    if (!navigator.geolocation){ toast("Location not supported"); return; }
    navigator.geolocation.getCurrentPosition(pos=>{
      const u = user();
      if (u){ u.gps = {lat:pos.coords.latitude, lng:pos.coords.longitude}; setUser(u); }
      toast("Location saved");
    }, ()=>toast("Location denied"));
    return;
  }
  const chip = e.target.closest(".chip[data-i]");
  if (chip){ chip.classList.toggle("on"); return; }
  const phototap = e.target.closest("[data-phototap]");
  if (phototap){
    const id = phototap.dataset.phototap;
    const p = PEOPLE.find(x => x.id === id);
    if (!p || !p.photos) return;
    photoIndex[id] = ((photoIndex[id] || 0) + 1) % p.photos.length;
    render(); return;
  }
  const rm = e.target.closest("[data-rm]");
  if (rm){ draftPhotos.splice(+rm.dataset.rm, 1); render(); return; }
  const slot = e.target.closest(".photo-slot[data-slot]");
  if (slot && !e.target.closest("[data-rm]")){
    const input = slot.querySelector("input[type=file]");
    if (input) input.click();
  }
});

document.body.addEventListener("change", (e)=>{
  if (e.target.id === "fCounty"){ filters.county = e.target.value; render(); }
  if (e.target.id === "fMode"){ filters.mode = e.target.value; render(); }
  if (e.target.id === "fKm"){ filters.maxKm = +e.target.value; const lab = document.getElementById("kmLabel"); if (lab) lab.textContent = filters.maxKm; render(); }
  if (e.target.matches("input[type=file][data-file]")){
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (draftPhotos.length >= MAX_PHOTOS){ toast(`Max ${MAX_PHOTOS} photos`); return; }
    const reader = new FileReader();
    reader.onload = () => { draftPhotos.push(reader.result); render(); };
    reader.readAsDataURL(file);
  }
});

document.body.addEventListener("submit", (e)=>{
  e.preventDefault();
  if (e.target.id === "regForm"){
    if (draftPhotos.length < MIN_PHOTOS){ toast(`Add at least ${MIN_PHOTOS} photos`); return; }
    const fd = new FormData(e.target);
    const interests = [...document.querySelectorAll(".chip.on")].map(c=>c.dataset.i);
    setUser({
      name: fd.get("name"), email: fd.get("email"), age:+fd.get("age"),
      county: fd.get("county"), town: fd.get("town"), tribe: fd.get("tribe"),
      religion: fd.get("religion"), mode: fd.get("mode"), bio: fd.get("bio"),
      interests, photos: [...draftPhotos]
    });
    view = "discover"; render(); toast("Karibu! Let's go 🔥");
  }
  if (e.target.id === "loginForm"){
    const u = user();
    const fd = new FormData(e.target);
    if (u && u.email === fd.get("email")){ view = "discover"; render(); }
    else toast("No account yet — tap Join");
  }
  if (e.target.id === "sendForm" && chatWith){
    const text = new FormData(e.target).get("text");
    const all = chats();
    all[chatWith] = [...(all[chatWith]||[]), {from:"me", text}];
    store.set("kc_chats", all);
    render();
  }
  if (e.target.id === "reportForm"){
    const reports = store.get("kc_reports", []);
    const fd = new FormData(e.target);
    reports.push({who:fd.get("who"), reason:fd.get("reason"), details:fd.get("details"), at:Date.now()});
    store.set("kc_reports", reports);
    toast("Report saved. Thank you.");
    view = "discover"; render();
  }
});

render();
