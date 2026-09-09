const COUNTIES = ["Nairobi","Mombasa","Kisumu","Kiambu","Nakuru","Uasin Gishu","Machakos","Kajiado","Kisii","Meru","Nyeri","Kakamega"];
const INTERESTS = ["Afrobeats","Gospel","Hiking","Football","Tech","Farming","Church","Nightlife","Cooking","Travel","Books","Gym"];
const MODES = ["Open","Student","Professional","Church"];

const PEOPLE = [
  {id:"p1", name:"Amina", age:26, county:"Nairobi", town:"Westlands", tribe:"Swahili", religion:"Muslim", mode:"Professional", interests:["Travel","Cooking","Afrobeats"], bio:"Nairobi evenings, good food, no games.", dist:3, photo:"linear-gradient(160deg,#5a3048,#1a1220)"},
  {id:"p2", name:"Brian", age:29, county:"Nairobi", town:"Kilimani", tribe:"Kikuyu", religion:"Christian", mode:"Professional", interests:["Gym","Tech","Football"], bio:"Building by day, football on Sundays.", dist:5, photo:"linear-gradient(160deg,#2a4050,#121820)"},
  {id:"p3", name:"Wanjiku", age:24, county:"Kiambu", town:"Thika", tribe:"Kikuyu", religion:"Christian", mode:"Student", interests:["Books","Gospel","Hiking"], bio:"Campus life + quiet weekends.", dist:18, photo:"linear-gradient(160deg,#4a3058,#181220)"},
  {id:"p4", name:"Otieno", age:31, county:"Kisumu", town:"Milimani", tribe:"Luo", religion:"Christian", mode:"Open", interests:["Football","Afrobeats","Travel"], bio:"Lakeside vibes. Come with stories.", dist:320, photo:"linear-gradient(160deg,#204838,#101810)"},
  {id:"p5", name:"Fatma", age:27, county:"Mombasa", town:"Nyali", tribe:"Swahili", religion:"Muslim", mode:"Open", interests:["Travel","Cooking","Nightlife"], bio:"Coast energy. Swahili breakfasts.", dist:440, photo:"linear-gradient(160deg,#584028,#201810)"},
  {id:"p6", name:"Mercy", age:23, county:"Nakuru", town:"Lanet", tribe:"Kalenjin", religion:"Christian", mode:"Church", interests:["Gospel","Hiking","Books"], bio:"Church girl who still loves a hike.", dist:150, photo:"linear-gradient(160deg,#403058,#181220)"},
  {id:"p7", name:"Kevin", age:28, county:"Uasin Gishu", town:"Eldoret", tribe:"Kalenjin", religion:"Christian", mode:"Professional", interests:["Gym","Football","Tech"], bio:"Eldoret mornings. Serious about life.", dist:310, photo:"linear-gradient(160deg,#304848,#121818)"},
  {id:"p8", name:"Stacy", age:25, county:"Nairobi", town:"South B", tribe:"Luhya", religion:"Christian", mode:"Open", interests:["Afrobeats","Nightlife","Travel"], bio:"City girl. Soft life, hard standards.", dist:7, photo:"linear-gradient(160deg,#583040,#201018)"}
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
let filters = { county:"", mode:"", maxAge:40, maxKm:50 };

function setUser(u){ store.set("kc_user", u); render(); }

function nav(){
  const u = user();
  return `<header class="nav">
    <div class="brand">Karibu <span>Connect</span></div>
    <div class="tabs">
      ${u ? `
        <button class="${view==="discover"?"active":""}" data-go="discover">Discover</button>
        <button class="${view==="matches"?"active":""}" data-go="matches">Matches</button>
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

function home(){
  return `<section class="hero">
    <h1>Find someone nearby in Kenya.</h1>
    <p>Location-based matchmaking by county, town, and vibe — Nairobi to Mombasa, campus to church, professional to open.</p>
    <button class="btn primary" data-go="register">Create your profile</button>
  </section>
  <div class="wrap grid">
    <div class="card meta"><h3>Near you</h3>GPS + county filters so you meet people in your actual city, not just “Kenya”.</div>
    <div class="card meta"><h3>Kenyan filters</h3>Age, tribe, religion, student / professional / church mode, interests.</div>
    <div class="card meta"><h3>Safe by design</h3>Report, block, and keep chats in-app. Premium + M-Pesa can plug in later.</div>
  </div>`;
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
  return `<form class="form" id="regForm">
    <h2>Join Karibu Connect</h2>
    <label>Name</label><input name="name" required value="${u.name||""}">
    <label>Email</label><input name="email" type="email" required>
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
    <label>Bio</label><textarea name="bio" rows="3" placeholder="Who are you looking for?">${u.bio||""}</textarea>
    <label>Interests</label>
    <div class="chips" id="intChips">${INTERESTS.map(i=>`<span class="chip" data-i="${i}">${i}</span>`).join("")}</div>
    <div style="margin-top:16px"><button class="btn primary" type="submit">Save profile</button></div>
  </form>`;
}

function discover(){
  const liked = likes();
  const passed = passes();
  let list = PEOPLE.filter(p => !liked.includes(p.id) && !passed.includes(p.id));
  if(filters.county) list = list.filter(p => p.county === filters.county);
  if(filters.mode) list = list.filter(p => p.mode === filters.mode);
  list = list.filter(p => p.age <= filters.maxAge && p.dist <= filters.maxKm);
  return `<div class="wrap">
    <h2 style="margin:12px 0">People near you</h2>
    <div class="filters">
      <select id="fCounty"><option value="">All counties</option>${COUNTIES.map(c=>`<option ${filters.county===c?"selected":""}>${c}</option>`).join("")}</select>
      <select id="fMode"><option value="">All modes</option>${MODES.map(m=>`<option ${filters.mode===m?"selected":""}>${m}</option>`).join("")}</select>
      <label class="chip">Max age <input id="fAge" type="range" min="22" max="50" value="${filters.maxAge}"></label>
      <label class="chip">Max km <input id="fKm" type="range" min="5" max="500" value="${filters.maxKm}"></label>
      <button class="btn" id="gpsBtn">Use my location</button>
    </div>
    <div class="grid">${list.length? list.map(p=>`
      <article class="card">
        <div class="photo" style="background-image:${p.photo}"><strong>${p.name}, ${p.age}</strong></div>
        <div class="meta">
          <h3>${p.town}, ${p.county} · ${p.dist} km</h3>
          <p>${p.bio}</p>
          <p style="margin-top:8px">${p.mode} · ${p.religion} · ${p.interests.join(" · ")}</p>
        </div>
        <div class="row">
          <button class="btn" data-pass="${p.id}">Pass</button>
          <button class="btn primary" data-like="${p.id}">Like</button>
        </div>
      </article>`).join("") : `<p class="meta">No more profiles in this filter. Relax the distance or county.</p>`}
    </div>
  </div>`;
}

function matchesView(){
  const ms = matches().map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  return `<div class="wrap"><h2 style="margin:12px 0">Matches</h2>
    <div class="grid">${ms.length? ms.map(p=>`
      <article class="card">
        <div class="photo" style="background-image:${p.photo}"><strong>${p.name}</strong></div>
        <div class="meta">${p.town}, ${p.county}</div>
        <div class="row"><button class="btn primary" data-openchat="${p.id}">Chat</button></div>
      </article>`).join("") : `<p class="meta">Like someone to match. Demo matches happen when you like.</p>`}
    </div></div>`;
}

function chatView(){
  const ms = matches().map(id => PEOPLE.find(p=>p.id===id)).filter(Boolean);
  const active = PEOPLE.find(p=>p.id===chatWith) || ms[0];
  const thread = active ? (chats()[active.id] || [{from:"them", text:`Hey, it's ${active.name}. Karibu.`}]) : [];
  if(active) chatWith = active.id;
  return `<div class="wrap"><h2 style="margin:12px 0">Chat</h2>
    ${ms.length? `<div class="chat">
      <div class="list">${ms.map(p=>`<button class="${p.id===chatWith?"active":""}" data-openchat="${p.id}">${p.name}<br><small>${p.county}</small></button>`).join("")}</div>
      <div class="pane">
        <div class="msgs">${thread.map(m=>`<div class="bubble ${m.from==="me"?"me":""}">${m.text}</div>`).join("")}</div>
        <form class="send" id="sendForm"><input name="text" placeholder="Write a message…" required /><button class="btn primary">Send</button></form>
      </div>
    </div>` : `<p class="meta">Match first, then chat.</p>`}
  </div>`;
}

function profileView(){
  const u = user();
  return `<div class="wrap">
    <div class="form">
      <h2>${u.name}, ${u.age}</h2>
      <p class="meta">${u.town||""} ${u.county} · ${u.mode} · ${u.religion}</p>
      <p>${u.bio||""}</p>
      <p style="margin-top:8px">${(u.interests||[]).join(" · ")}</p>
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
    <p class="meta">If someone is rude, fake, or unsafe, report them. We keep a local record in this demo.</p>
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
    <p class="meta">See who liked you, boost your profile, and unlock longer distance. M-Pesa checkout can be added with Safaricom Daraja.</p>
    <ul class="meta" style="padding-left:18px;margin:12px 0">
      <li>See likes</li><li>5 super-likes / week</li><li>Travel mode (other counties)</li>
    </ul>
    <button class="btn gold" id="fakePay">Pay KES 499 (demo)</button>
  </div>`;
}

function render(){
  const root = document.getElementById("app");
  const pages = {home, login:()=>registerForm(true), register:()=>registerForm(false), discover, matches:matchesView, chat:chatView, profile:profileView, safety:safetyView, premium:premiumView};
  if(["discover","matches","chat","profile","safety","premium"].includes(view) && !user()) view = "login";
  root.innerHTML = nav() + (pages[view]||home)();
}

document.body.addEventListener("click", (e)=>{
  const go = e.target.closest("[data-go]");
  if(go){ view = go.dataset.go; render(); }
  const like = e.target.closest("[data-like]");
  if(like){
    const id = like.dataset.like;
    store.set("kc_likes", [...likes(), id]);
    store.set("kc_matches", [...new Set([...matches(), id])]);
    toast("It's a match ✨");
    render();
  }
  const pass = e.target.closest("[data-pass]");
  if(pass){ store.set("kc_passes", [...passes(), pass.dataset.pass]); render(); }
  const oc = e.target.closest("[data-openchat]");
  if(oc){ chatWith = oc.dataset.openchat; view="chat"; render(); }
  if(e.target.id==="logout"){ localStorage.removeItem("kc_user"); view="home"; render(); }
  if(e.target.id==="fakePay"){ toast("M-Pesa STK push would fire here"); }
  if(e.target.id==="gpsBtn"){
    if(!navigator.geolocation){ toast("Location not supported"); return; }
    navigator.geolocation.getCurrentPosition(pos=>{
      const u = user();
      if(u){ u.gps = {lat:pos.coords.latitude, lng:pos.coords.longitude}; setUser(u); }
      toast("Location saved");
    }, ()=>toast("Location denied"));
  }
  const chip = e.target.closest(".chip[data-i]");
  if(chip) chip.classList.toggle("on");
});

document.body.addEventListener("change", (e)=>{
  if(e.target.id==="fCounty"){ filters.county = e.target.value; render(); }
  if(e.target.id==="fMode"){ filters.mode = e.target.value; render(); }
  if(e.target.id==="fAge"){ filters.maxAge = +e.target.value; render(); }
  if(e.target.id==="fKm"){ filters.maxKm = +e.target.value; render(); }
});

document.body.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(e.target.id==="regForm"){
    const fd = new FormData(e.target);
    const interests = [...document.querySelectorAll(".chip.on")].map(c=>c.dataset.i);
    setUser({
      name: fd.get("name"), email: fd.get("email"), age:+fd.get("age"),
      county: fd.get("county"), town: fd.get("town"), tribe: fd.get("tribe"),
      religion: fd.get("religion"), mode: fd.get("mode"), bio: fd.get("bio"),
      interests
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
