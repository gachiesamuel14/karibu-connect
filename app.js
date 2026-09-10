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
  {
    id:"p1", name:"Amina", age:26, county:"Nairobi", town:"Westlands", tribe:"Swahili", religion:"Muslim", mode:"Professional",
    interests:["Travel","Cooking","Afrobeats"], bio:"Nairobi evenings, good food, no games.", dist:3,
    photos:[
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id:"p2", name:"Brian", age:29, county:"Nairobi", town:"Kilimani", tribe:"Kikuyu", religion:"Christian", mode:"Professional",
    interests:["Gym","Tech","Football"], bio:"Building by day, football on Sundays.", dist:5,
    photos:[
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id:"p3", name:"Wanjiku", age:24, county:"Kiambu", town:"Thika", tribe:"Kikuyu", religion:"Christian", mode:"Student",
    interests:["Books","Gospel","Hiking"], bio:"Campus life + quiet weekends.", dist:18,
    photos:[
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id:"p4", name:"Otieno", age:31, county:"Kisumu", town:"Milimani", tribe:"Luo", religion:"Christian", mode:"Open",
    interests:["Football","Afrobeats","Travel"], bio:"Lakeside vibes. Come with stories.", dist:320,
    photos:[
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id:"p5", name:"Fatma", age:27, county:"Mombasa", town:"Nyali", tribe:"Swahili", religion:"Muslim", mode:"Open",
    interests:["Travel","Cooking","Nightlife"], bio:"Coast energy. Swahili breakfasts.", dist:440,
    photos:[
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id:"p6", name:"Mercy", age:23, county:"Nakuru", town:"Lanet", tribe:"Kalenjin", religion:"Christian", mode:"Church",
    interests:["Gospel","Hiking","Books"], bio:"Church girl who still loves a hike.", dist:150,
    photos:[
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id:"p7", name:"Kevin", age:28, county:"Uasin Gishu", town:"Eldoret", tribe:"Kalenjin", religion:"Christian", mode:"Professional",
    interests:["Gym","Football","Tech"], bio:"Eldoret mornings. Serious about life.", dist:310,
    photos:[
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id:"p8", name:"Stacy", age:25, county:"Nairobi", town:"South B", tribe:"Luhya", religion:"Christian", mode:"Open",
    interests:["Afrobeats","Nightlife","Travel"], bio:"City girl. Soft life, hard standards.", dist:7,
    photos:[
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

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

let view = "home";
let chatWith = null;
let filters = { county:"", mode:"", maxAge:45, maxKm: KENYA_MAX_KM };
let draftPhotos = [];
let photoIndex = {};
let pendingMatch = null;
let storyPerson = null;
let storyIdx = 0;

function setUser(u){ store.set("kc_user", u); render(); }

function primaryPhoto(p){
  if (p.photos && p.photos.length) return p.photos[0];
  return p.img || "";
}

function nav(){
  const u = user();
  const n = matches().length;
  return `<header class="nav">
    <div class="brand">Karibu <span>Connect</span></div>
    <div class="tabs">
      ${u ? `
        <button class="${view==="discover"?"active":""}" data-go="discover">Discover</button>
        <button class="${view==="matches"?"active":""}" data-go="matches">Matches${n?` (${n})`:""}</button>
        <button class="${view==="chat"?"active":""}" data-go="chat">Chat</button>
        <button class="${view==="profile"?"active":""}" data-go="profile">Profile</button>
        <button data-go="safety">Safety</button>
      ` : `
        <button class="${view==="home"?"active":""}" data-go="home">Home</button>
        <button class="${view==="login"?"active":""}" data-go="login">Login</button>
        <button class="btn primary" data-go="register">Join</button>
      `}
    </div>
  </header>`;
}

function storiesBar(){
  const ms = matches().map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  if (!ms.length) return "";
  return `<div class="stories">
    ${ms.map(p => `
      <div class="story" data-story="${p.id}">
        <div class="story-ring"><img src="${primaryPhoto(p)}" alt="" /></div>
        <small>${p.name}</small>
      </div>
    `).join("")}
  </div>`;
}

function home(){
  return `<section class="hero">
    <p class="eyebrow">Kenya · location-based</p>
    <h1>Find someone nearby in Kenya.</h1>
    <p>Swipe across the whole country — county, town, and vibe. 3–12 photos. Match popup when it’s mutual.</p>
    <button class="btn primary" data-go="register">Create your profile</button>
  </section>
  <div class="wrap grid">
    <div class="card meta"><h3>All Kenya first</h3>Default range covers the country (~800 km). Tighten later when you want only nearby.</div>
    <div class="card meta"><h3>Photos</h3>Minimum 3, maximum 12. Swipe through their gallery on each card.</div>
    <div class="card meta"><h3>Match moments</h3>Both like → big popup + status-style rings of your matches on top.</div>
  </div>`;
}

function photoUploaderHtml(){
  const slots = Array.from({length: MAX_PHOTOS}, (_, i) => {
    const src = draftPhotos[i];
    if (src) {
      return `<div class="photo-slot" data-slot="${i}">
        <img src="${src}" alt="" />
        <button type="button" class="rm" data-rm="${i}">×</button>
      </div>`;
    }
    return `<div class="photo-slot" data-slot="${i}">+
      <input type="file" accept="image/*" hidden data-file="${i}" />
    </div>`;
  }).join("");
  return `<label>Photos (min ${MIN_PHOTOS}, max ${MAX_PHOTOS})</label>
    <div class="photo-grid">${slots}</div>
    <p class="photo-hint">${draftPhotos.length} / ${MAX_PHOTOS} selected · at least ${MIN_PHOTOS} required</p>`;
}

function registerForm(isLogin=false){
  const u = user() || {};
  if(isLogin){
    return `<form class="form" id="loginForm">
      <h2>Welcome back</h2>
      <label>Email</label><input name="email" type="email" required value="${u.email||""}">
      <label>Password</label><input name="password" type="password" required>
      <div style="margin-top:14px"><button class="btn primary" type="submit">Login</button></div>
    </form>`;
  }
  if (u.photos && u.photos.length && !draftPhotos.length) draftPhotos = [...u.photos];
  return `<form class="form" id="regForm">
    <h2>Join Karibu Connect</h2>
    <label>Name</label><input name="name" required value="${u.name||""}">
    <label>Email</label><input name="email" type="email" required value="${u.email||""}">
    <label>Password</label><input name="password" type="password" required minlength="4">
    <label>Age</label><input name="age" type="number" min="18" max="80" value="${u.age||25}">
    <label>County</label>
    <select name="county">${COUNTIES.map(c=>`<option ${u.county===c?"selected":""}>${c}</option>`).join("")}</select>
    <label>Town</label><input name="town" value="${u.town||""}" placeholder="e.g. Westlands">
    <label>Tribe (optional)</label><input name="tribe" value="${u.tribe||""}">
    <label>Religion</label>
    <select name="religion">
      <option ${u.religion==="Christian"?"selected":""}>Christian</option>
      <option ${u.religion==="Muslim"?"selected":""}>Muslim</option>
      <option ${u.religion==="Other"?"selected":""}>Other</option>
      <option ${u.religion==="Prefer not to say"?"selected":""}>Prefer not to say</option>
    </select>
    <label>Mode</label>
    <select name="mode">${MODES.map(m=>`<option ${u.mode===m?"selected":""}>${m}</option>`).join("")}</select>
    <label>Bio</label><textarea name="bio" rows="3" placeholder="Who are you looking for?">${u.bio||""}</textarea>
    <label>Interests</label>
    <div class="chips" id="intChips">${INTERESTS.map(i=>`<span class="chip ${(u.interests||[]).includes(i)?"on":""}" data-i="${i}">${i}</span>`).join("")}</div>
    ${photoUploaderHtml()}
    <div style="margin-top:16px"><button class="btn primary" type="submit">Save profile</button></div>
  </form>`;
}

function filteredPeople(){
  const liked = likes();
  const passed = passes();
  let list = PEOPLE.filter(p => !liked.includes(p.id) && !passed.includes(p.id));
  if(filters.county) list = list.filter(p => p.county === filters.county);
  if(filters.mode) list = list.filter(p => p.mode === filters.mode);
  list = list.filter(p => p.age <= filters.maxAge && p.dist <= filters.maxKm);
  return list;
}

function cardPhotoHtml(p){
  const photos = p.photos || [p.img].filter(Boolean);
  const idx = photoIndex[p.id] || 0;
  const safe = Math.min(idx, photos.length - 1);
  const dots = photos.map((_, i) => `<span class="${i===safe?"on":""}"></span>`).join("");
  return `<div class="photo" data-phototap="${p.id}" style="background-image:url('${photos[safe]||""}')">
    <div class="photo-dots">${dots}</div>
    <strong>${p.name}, ${p.age}</strong>
  </div>`;
}

function discover(){
  const list = filteredPeople();
  const top = list[0];
  return `<div>
    ${storiesBar()}
    <div class="wrap" style="padding-bottom:0">
      <h2 style="margin:12px 0 4px">People in Kenya</h2>
      <p class="meta" style="padding:0 0 8px">Default range covers the whole country. Swipe right to like, left to pass.</p>
      <div class="filters">
        <select id="fCounty"><option value="">All counties</option>${COUNTIES.map(c=>`<option ${filters.county===c?"selected":""}>${c}</option>`).join("")}</select>
        <select id="fMode"><option value="">All modes</option>${MODES.map(m=>`<option ${filters.mode===m?"selected":""}>${m}</option>`).join("")}</select>
        <label class="chip">Max age <input id="fAge" type="range" min="22" max="55" value="${filters.maxAge}"></label>
        <label class="chip">Max km <input id="fKm" type="range" min="10" max="${KENYA_MAX_KM}" value="${filters.maxKm}"> <span id="kmLabel">${filters.maxKm}</span></label>
        <button class="btn" id="gpsBtn">Use my location</button>
      </div>
    </div>
    <div class="deck-wrap">
      ${top ? `
        <div class="deck" id="deck">
          <div class="swipe-card" id="activeCard" data-id="${top.id}">
            <div class="stamp like">LIKE</div>
            <div class="stamp nope">NOPE</div>
            ${cardPhotoHtml(top)}
            <div class="body">
              <h2>${top.town}, ${top.county} · ${top.dist} km</h2>
              <p>${top.bio}</p>
              <p style="margin-top:8px">${top.mode} · ${top.religion} · ${top.interests.join(" · ")}</p>
            </div>
          </div>
        </div>
        <div class="actions">
          <button class="circle nope" data-pass="${top.id}" title="Pass">✕</button>
          <button class="circle like" data-like="${top.id}" title="Like">♥</button>
        </div>
      ` : `<p class="meta" style="text-align:center;padding:40px 12px">No more profiles in this filter. Raise max km or clear county.</p>`}
    </div>
  </div>`;
}

function matchesView(){
  const ms = matches().map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  return `<div>
    ${storiesBar()}
    <div class="wrap"><h2 style="margin:12px 0">Matches</h2>
    <div class="grid">${ms.length? ms.map(p=>`
      <article class="card">
        ${cardPhotoHtml(p)}
        <div class="meta">${p.town}, ${p.county}</div>
        <div class="row"><button class="btn primary" data-openchat="${p.id}">Chat</button></div>
      </article>`).join("") : `<p class="meta">Like someone to match. Mutual likes open a popup + status rings.</p>`}
    </div></div>
  </div>`;
}

function chatView(){
  const ms = matches().map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  const active = PEOPLE.find(p=>p.id===chatWith) || ms[0];
  const thread = active ? (chats()[active.id] || [{from:"them", text:`Hey, it's ${active.name}. Karibu.`}]) : [];
  if(active) chatWith = active.id;
  return `<div>
    ${storiesBar()}
    <div class="wrap"><h2 style="margin:12px 0">Chat</h2>
    ${ms.length? `<div class="chat">
      <div class="list">${ms.map(p=>`<button class="${p.id===chatWith?"active":""}" data-openchat="${p.id}">${p.name}<br><small>${p.county}</small></button>`).join("")}</div>
      <div class="pane">
        <div class="msgs">${thread.map(m=>`<div class="bubble ${m.from==="me"?"me":""}">${m.text}</div>`).join("")}</div>
        <form class="send" id="sendForm"><input name="text" placeholder="Write a message…" required /><button class="btn primary">Send</button></form>
      </div>
    </div>` : `<p class="meta">Match first, then chat.</p>`}
    </div>
  </div>`;
}

function profileView(){
  const u = user();
  const photos = u.photos || [];
  return `<div class="wrap">
    <div class="form">
      <h2>${u.name}, ${u.age}</h2>
      <p class="meta">${u.town||""} ${u.county} · ${u.mode} · ${u.religion}</p>
      <p>${u.bio||""}</p>
      <p style="margin-top:8px">${(u.interests||[]).join(" · ")}</p>
      ${photos.length ? `<div class="photo-grid" style="margin-top:14px">${photos.map(src=>`<div class="photo-slot"><img src="${src}" alt="" /></div>`).join("")}</div>` : ""}
      ${u.gps ? `<p class="meta">GPS saved: ${u.gps.lat.toFixed(3)}, ${u.gps.lng.toFixed(3)}</p>` : ""}
      <div class="row" style="padding:16px 0 0">
        <button class="btn" data-go="register">Edit</button>
        <button class="btn gold" data-go="premium">Go Premium</button>
        <button class="btn" id="logout">Log out</button>
      </div>
    </div>
  </div>`;
}

function safetyView(){
  return `<form class="form" id="reportForm">
    <h2>Safety & report</h2>
    <p class="meta">If someone is rude, fake, or unsafe, report them. Local record in this demo.</p>
    <label>Person</label>
    <select name="who">${PEOPLE.map(p=>`<option value="${p.id}">${p.name} (${p.county})</option>`).join("")}</select>
    <label>Reason</label>
    <select name="reason"><option>Harassment</option><option>Fake profile</option><option>Spam</option><option>Underage concern</option><option>Other</option></select>
    <label>Details</label><textarea name="details" rows="4" required></textarea>
    <div style="margin-top:14px"><button class="btn primary">Submit report</button></div>
  </form>`;
}

function premiumView(){
  return `<div class="form">
    <h2>Karibu Plus</h2>
    <p class="meta">See who liked you, boost, and travel mode. M-Pesa via Daraja later.</p>
    <ul class="meta" style="padding-left:18px;margin:12px 0">
      <li>See likes</li><li>5 super-likes / week</li><li>Travel mode</li>
    </ul>
    <button class="btn gold" id="fakePay">Pay KES 499 (demo)</button>
  </div>`;
}

function matchModalHtml(){
  if (!pendingMatch) return "";
  const p = PEOPLE.find(x => x.id === pendingMatch);
  if (!p) return "";
  const me = user();
  const myPhoto = (me && me.photos && me.photos[0]) || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80";
  return `<div class="match-modal" id="matchModal">
    <div class="match-box">
      <h2>It's a match!</h2>
      <p>You and ${p.name} liked each other</p>
      <div class="match-faces">
        <img src="${myPhoto}" alt="you" />
        <img src="${primaryPhoto(p)}" alt="${p.name}" />
      </div>
      <div class="row">
        <button class="btn" id="matchKeep">Keep swiping</button>
        <button class="btn primary" data-openchat="${p.id}" id="matchChat">Send a message</button>
      </div>
    </div>
  </div>`;
}

function storyViewerHtml(){
  if (!storyPerson) return "";
  const p = PEOPLE.find(x => x.id === storyPerson);
  if (!p) return "";
  const photos = p.photos || [primaryPhoto(p)];
  const idx = Math.min(storyIdx, photos.length - 1);
  const dots = photos.map((_, i) => `<span class="${i===idx?"on":""}"></span>`).join("");
  return `<div class="story-viewer" id="storyViewer">
    <div class="top">${dots}</div>
    <div class="img" style="background-image:url('${photos[idx]}')" data-storytap="1"></div>
    <div class="bar">
      <strong>${p.name}</strong>
      <button class="btn" id="closeStory">Close</button>
    </div>
  </div>`;
}

function render(){
  const root = document.getElementById("app");
  const pages = {
    home, login:()=>registerForm(true), register:()=>registerForm(false),
    discover, matches:matchesView, chat:chatView, profile:profileView,
    safety:safetyView, premium:premiumView
  };
  if(["discover","matches","chat","profile","safety","premium"].includes(view) && !user()) view = "login";
  root.innerHTML = nav() + (pages[view]||home)() + matchModalHtml() + storyViewerHtml();
  if (view === "discover") initSwipe();
}

function doLike(id){
  if (likes().includes(id)) return;
  store.set("kc_likes", [...likes(), id]);
  // Demo: every like is mutual so users see the popup + status rings
  const nextMatches = [...new Set([...matches(), id])];
  store.set("kc_matches", nextMatches);
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

  function onDown(e){
    dragging = true;
    startX = (e.touches ? e.touches[0].clientX : e.clientX);
    dx = 0;
  }
  function onMove(e){
    if (!dragging) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    dx = x - startX;
    card.style.transition = "none";
    card.style.transform = `translateX(${dx}px) rotate(${dx/20}deg)`;
    const op = Math.min(1, Math.abs(dx)/80);
    if (likeStamp) likeStamp.style.opacity = dx > 0 ? op : 0;
    if (nopeStamp) nopeStamp.style.opacity = dx < 0 ? op : 0;
  }
  function onUp(){
    if (!dragging) return;
    dragging = false;
    card.style.transition = "transform .2s ease, opacity .2s ease";
    const id = card.dataset.id;
    if (dx > 100) {
      card.style.transform = "translateX(120%) rotate(18deg)";
      card.style.opacity = "0";
      setTimeout(() => doLike(id), 180);
    } else if (dx < -100) {
      card.style.transform = "translateX(-120%) rotate(-18deg)";
      card.style.opacity = "0";
      setTimeout(() => doPass(id), 180);
    } else {
      card.style.transform = "";
      if (likeStamp) likeStamp.style.opacity = 0;
      if (nopeStamp) nopeStamp.style.opacity = 0;
    }
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
  if(go){ view = go.dataset.go; if(view==="register"){ /* keep draftPhotos */ } render(); return; }

  const like = e.target.closest("[data-like]");
  if(like){ doLike(like.dataset.like); return; }

  const pass = e.target.closest("[data-pass]");
  if(pass){ doPass(pass.dataset.pass); return; }

  const oc = e.target.closest("[data-openchat]");
  if(oc){
    chatWith = oc.dataset.openchat;
    pendingMatch = null;
    view = "chat";
    render();
    return;
  }

  if(e.target.id==="matchKeep"){ pendingMatch = null; render(); return; }
  if(e.target.id==="logout"){
    localStorage.removeItem("kc_user");
    draftPhotos = [];
    view="home"; render(); return;
  }
  if(e.target.id==="fakePay"){ toast("M-Pesa STK push would fire here"); return; }

  if(e.target.id==="gpsBtn"){
    if(!navigator.geolocation){ toast("Location not supported"); return; }
    navigator.geolocation.getCurrentPosition(pos=>{
      const u = user();
      if(u){ u.gps = {lat:pos.coords.latitude, lng:pos.coords.longitude}; setUser(u); }
      toast("Location saved");
    }, ()=>toast("Location denied"));
    return;
  }

  const chip = e.target.closest(".chip[data-i]");
  if(chip){ chip.classList.toggle("on"); return; }

  const story = e.target.closest("[data-story]");
  if(story){
    storyPerson = story.dataset.story;
    storyIdx = 0;
    render();
    return;
  }
  if(e.target.id==="closeStory"){ storyPerson = null; render(); return; }
  if(e.target.closest("[data-storytap]")){
    const p = PEOPLE.find(x => x.id === storyPerson);
    if (!p) return;
    const photos = p.photos || [primaryPhoto(p)];
    if (storyIdx < photos.length - 1) { storyIdx++; render(); }
    else { storyPerson = null; render(); }
    return;
  }

  const phototap = e.target.closest("[data-phototap]");
  if(phototap){
    const id = phototap.dataset.phototap;
    const p = PEOPLE.find(x => x.id === id);
    if (!p || !p.photos) return;
    photoIndex[id] = ((photoIndex[id] || 0) + 1) % p.photos.length;
    render();
    return;
  }

  const rm = e.target.closest("[data-rm]");
  if(rm){
    const i = +rm.dataset.rm;
    draftPhotos.splice(i, 1);
    render();
    return;
  }

  const slot = e.target.closest(".photo-slot[data-slot]");
  if(slot && !e.target.closest("[data-rm]")){
    const input = slot.querySelector("input[type=file]");
    if (input) input.click();
  }
});

document.body.addEventListener("change", (e)=>{
  if(e.target.id==="fCounty"){ filters.county = e.target.value; render(); }
  if(e.target.id==="fMode"){ filters.mode = e.target.value; render(); }
  if(e.target.id==="fAge"){ filters.maxAge = +e.target.value; render(); }
  if(e.target.id==="fKm"){
    filters.maxKm = +e.target.value;
    const lab = document.getElementById("kmLabel");
    if (lab) lab.textContent = filters.maxKm;
    render();
  }
  if(e.target.matches("input[type=file][data-file]")){
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (draftPhotos.length >= MAX_PHOTOS) { toast(`Max ${MAX_PHOTOS} photos`); return; }
    const reader = new FileReader();
    reader.onload = () => {
      draftPhotos.push(reader.result);
      render();
    };
    reader.readAsDataURL(file);
  }
});

document.body.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(e.target.id==="regForm"){
    if (draftPhotos.length < MIN_PHOTOS) {
      toast(`Add at least ${MIN_PHOTOS} photos`);
      return;
    }
    const fd = new FormData(e.target);
    const interests = [...document.querySelectorAll(".chip.on")].map(c=>c.dataset.i);
    setUser({
      name: fd.get("name"), email: fd.get("email"), age:+fd.get("age"),
      county: fd.get("county"), town: fd.get("town"), tribe: fd.get("tribe"),
      religion: fd.get("religion"), mode: fd.get("mode"), bio: fd.get("bio"),
      interests, photos: [...draftPhotos]
    });
    view="discover"; render(); toast("Karibu! Profile saved on this device.");
  }
  if(e.target.id==="loginForm"){
    const u = user();
    const fd = new FormData(e.target);
    if(u && u.email===fd.get("email")){ view="discover"; render(); }
    else toast("No account yet — tap Join.");
  }
  if(e.target.id==="sendForm" && chatWith){
    const text = new FormData(e.target).get("text");
    const all = chats();
    all[chatWith] = [...(all[chatWith]||[]), {from:"me", text}];
    store.set("kc_chats", all);
    render();
  }
  if(e.target.id==="reportForm"){
    const reports = store.get("kc_reports", []);
    const fd = new FormData(e.target);
    reports.push({who:fd.get("who"), reason:fd.get("reason"), details:fd.get("details"), at:Date.now()});
    store.set("kc_reports", reports);
    toast("Report saved. Thank you.");
    view="discover"; render();
  }
});

render();
