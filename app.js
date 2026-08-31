
const days = [
 {day:1,date:"10/26",dow:"一",title:"抵達沖繩・南部採買",summary:"那霸機場 → OTS租車 → 系滿漁市場 → 好市多 → 永旺夢樂城 → 塔普日落渡假村",
  stops:[
   {time:"10:50",name:"抵達那霸機場",desc:"CI120 抵達沖繩。出關後前往 OTS 接駁點。",map:"那覇空港",type:"spot"},
   {time:"12:00",name:"預約租車",desc:"前往 OTS 辦理取車。",map:"OTS Rent a Car Okinawa",type:"spot"},
   {time:"12:30",name:"系滿漁市場",desc:"第一餐安排海鮮與市場美食。",map:"糸満お魚センター",type:"food"},
   {time:"14:00",name:"好市多",desc:"南城倉庫店補貨、採買旅途中需要的用品。",map:"Costco Wholesale Okinawa Nanjo Warehouse",type:"shop"},
   {time:"16:30",name:"永旺夢樂城 AEON Mall",desc:"逛街、晚餐與親子採買。",map:"AEON MALL Okinawa Rycom",type:"shop"},
   {time:"21:00",name:"塔普日落渡假村",desc:"入住 Sunset Resort Canphou。",map:"Sunset Resort Canphou Okinawa",type:"spot",stay:true}
  ]},
 {day:2,date:"10/27",dow:"二",title:"美麗海・古宇利・名護",summary:"美麗海水族館 → 古宇利蝦蝦飯 → 古宇利島心型岩 → 名護AEON／唐吉訶德／釣魚",
  stops:[
   {time:"10:00",name:"出發",desc:"前往沖繩美麗海水族館。",map:"沖縄美ら海水族館",type:"spot"},
   {time:"11:00",name:"美麗海水族館",desc:"11:00 海豚秀；15:00 鯨鯊餵食。",map:"沖縄美ら海水族館",type:"spot"},
   {time:"16:00",name:"古宇利蝦蝦飯",desc:"古宇利島人氣蝦蝦飯。",map:"Kouri Shrimp",type:"food"},
   {time:"17:00",name:"古宇利島心型岩",desc:"傍晚前往心型岩拍照。",map:"ハートロック",type:"spot"},
   {time:"18:00",name:"名護 AEON／唐吉訶德／釣魚",desc:"晚上依時間與體力安排購物及名護夜釣。",map:"Nago Fishing Port",type:"shop"},
   {time:"晚間",name:"塔普日落渡假村",desc:"回住宿休息。",map:"Sunset Resort Canphou Okinawa",type:"spot",stay:true}
  ]},
 {day:3,date:"10/28",dow:"三",title:"玻璃獨木舟・JUNGLIA・PARCO",summary:"退房 → 沖縄マリンスタジオ玻璃獨木舟 → JUNGLIA → PARCO CITY → HOTEL GRACERY NAHA",
  stops:[
   {time:"09:40",name:"退房",desc:"10 點前完成退房。",map:"Sunset Resort Canphou Okinawa",type:"spot"},
   {time:"10:30",name:"玻璃獨木舟",desc:"沖縄マリンスタジオ・瀬底島，預約時段 10:30。",map:"沖縄マリンスタジオ",type:"spot"},
   {time:"11:30",name:"JUNGLIA 叢林樂園",desc:"前往沖繩北部主題樂園。",map:"JUNGLIA OKINAWA",type:"spot"},
   {time:"17:30",name:"PARCO CITY",desc:"購物、晚餐與伴手禮。",map:"SAN-A Urasoe West Coast PARCO CITY",type:"shop"},
   {time:"晚間",name:"HOTEL GRACERY NAHA",desc:"入住那霸住宿。",map:"HOTEL GRACERY NAHA",type:"spot",stay:true}
  ]},
 {day:4,date:"10/29",dow:"四",title:"DMM水族館・美麗SUN・瀨長島",summary:"iias沖繩豐崎／DMM水族館 → 美麗SUN海灘 → 瀨長島 → 18:30還車",
  stops:[
   {time:"10:00",name:"iias 沖繩豐崎／DMM水族館",desc:"DMM Kariyushi 水族館與商場。",map:"DMM Kariyushi Aquarium",type:"spot"},
   {time:"14:00",name:"美麗SUN海灘",desc:"海邊散步、拍照。",map:"美らSUNビーチ",type:"spot"},
   {time:"15:00",name:"瀨長島",desc:"Umikaji Terrace；可安排幸福鬆餅。",map:"瀬長島ウミカジテラス",type:"spot"},
   {time:"18:30",name:"還車",desc:"結束自駕行程，前往 OTS 還車。",map:"OTS Rent a Car Okinawa",type:"spot"},
   {time:"晚間",name:"HOTEL GRACERY NAHA",desc:"返回那霸住宿。",map:"HOTEL GRACERY NAHA",type:"spot",stay:true}
  ]},
 {day:5,date:"10/30",dow:"五",title:"那霸市區・神社・市場",summary:"達摩寺 → 泊港漁市場 → 波上宮 → 奧武山公園 → 沖繩ちゅらさん6 → HOTEL GRACERY NAHA",
  stops:[
   {time:"上午",name:"達摩寺",desc:"第五天市區行程第一站。",map:"達磨寺 沖縄",type:"spot"},
   {time:"中午",name:"泊港漁市場",desc:"安排海鮮與午餐。",map:"泊いゆまち",type:"food"},
   {time:"下午",name:"波上宮",desc:"沖繩代表性神社與海岸景觀。",map:"波上宮",type:"spot"},
   {time:"下午",name:"奧武山公園",desc:"市區散步與單軌移動。",map:"奥武山公園",type:"spot"},
   {time:"傍晚",name:"沖繩 ちゅらさん6",desc:"手冊中的男生行程安排。",map:"沖縄 ちゅらさん6",type:"spot"},
   {time:"晚間",name:"HOTEL GRACERY NAHA",desc:"最後一晚住宿。",map:"HOTEL GRACERY NAHA",type:"spot",stay:true}
  ]},
 {day:6,date:"10/31",dow:"六",title:"退房・國際通・返台",summary:"退房 → 國際通 → 那霸機場 → CI123 回台北",
  stops:[
   {time:"上午",name:"退房",desc:"整理行李並完成退房。",map:"HOTEL GRACERY NAHA",type:"spot"},
   {time:"白天",name:"國際通",desc:"最後採買；也可安排單軌一日遊與紀念章。",map:"国際通り 那覇",type:"shop"},
   {time:"傍晚",name:"那霸機場",desc:"提早抵達，預留國內線商店與報到時間。",map:"那覇空港",type:"spot"},
   {time:"20:25",name:"CI123 回台灣",desc:"OKA → TPE，20:25 起飛、21:05 抵達。",map:"那覇空港",type:"spot"}
  ]}
];

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function openMaps(q){ window.open("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q),"_blank","noopener"); }
window.openMaps=openMaps;

function navigate(id){
  $$(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  $$(".bottom-nav [data-nav]").forEach(b=>b.classList.toggle("active",b.dataset.nav===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
$$("[data-nav]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.nav)));

function getTripMode(){
 const start=new Date("2026-10-26T00:00:00+09:00"), end=new Date("2026-10-31T23:59:59+09:00"), now=new Date();
 if(now<start) return {mode:"before",daysLeft:Math.ceil((start-now)/86400000)};
 if(now<=end) return {mode:"during",day:Math.max(1,Math.min(6,Math.floor((now-start)/86400000)+1))};
 return {mode:"after"};
}
function renderToday(){
 const info=getTripMode(), status=$("#tripStatus"), title=$("#todayTitle"), sub=$("#todaySubtitle"), badge=$("#todayBadge"), next=$("#todayNext"), btn=$("#todayItineraryBtn");
 if(info.mode==="before"){
   status.innerHTML=`<div><strong>沖繩倒數 ${info.daysLeft} 天</strong><p>2026/10/26 出發 · 行前準備模式</p></div><div class="status-emoji">🧳</div>`;
   title.textContent="準備出發沖繩"; sub.textContent="先把行李、購物清單和資料確認好"; badge.textContent=`D-${info.daysLeft}`;
   next.innerHTML=`<small>出發第一天</small><b>那霸機場 → OTS租車 → 系滿漁市場</b><p>第一天先輕鬆抵達、吃海鮮、補貨再前往住宿。</p>`;
   btn.onclick=()=>{navigate("itinerary");selectDay(1)};
 } else if(info.mode==="during"){
   const d=days[info.day-1];
   status.innerHTML=`<div><strong>今天是 Day ${info.day}</strong><p>${d.date} · ${d.title}</p></div><div class="status-emoji">🌺</div>`;
   title.textContent=`Day ${info.day}｜${d.title}`; sub.textContent=`${d.date}（${d.dow}）`; badge.textContent=`D${info.day}`;
   const first=d.stops[0];
   next.innerHTML=`<small>今日第一站</small><b>${first.time}　${first.name}</b><p>${first.desc}</p>`;
   btn.onclick=()=>{navigate("itinerary");selectDay(info.day)};
 } else {
   status.innerHTML=`<div><strong>沖繩旅行完成 ♡</strong><p>六天五夜的回憶都留在這裡</p></div><div class="status-emoji">📸</div>`;
   title.textContent="旅行回憶模式"; sub.textContent="手冊、花費與備忘都還保留著"; badge.textContent="♡";
   next.innerHTML=`<small>回顧旅程</small><b>打開 60 頁手冊看看這趟旅行</b><p>也可以繼續查看收藏、花費和每天的備忘。</p>`;
   btn.onclick=()=>navigate("handbook");
 }
}
renderToday();

function renderOverview(){
 const wrap=$("#dayOverview");
 days.forEach(d=>{
   const b=document.createElement("button"); b.className="day-card";
   b.innerHTML=`<div class="day-badge"><small>DAY</small><b>${d.day}</b></div><div><h3>${d.date}（${d.dow}）${d.title}</h3><p>${d.summary}</p></div><div class="arrow">›</div>`;
   b.onclick=()=>{navigate("itinerary");selectDay(d.day)};
   wrap.appendChild(b);
 });
}
function renderTabs(){
 const tabs=$("#dayTabs");
 days.forEach(d=>{
   const b=document.createElement("button"); b.textContent=`D${d.day} ${d.date}`;
   b.dataset.day=d.day; b.onclick=()=>selectDay(d.day); tabs.appendChild(b);
 });
}
let selectedDay=1;
let favorites=JSON.parse(localStorage.getItem("okinawa_favorites_v3")||"[]");
function favoriteId(day,stop){return `${day}_${stop.name}`}

function selectDay(n){
 selectedDay=n;
 $$("#dayTabs button").forEach(b=>b.classList.toggle("active",+b.dataset.day===n));
 const d=days.find(x=>x.day===n), tl=$("#timeline"); tl.innerHTML="";
 $("#dayHeadline").innerHTML=`<small>DAY ${d.day} · ${d.date}（${d.dow}）</small><h3>${d.title}</h3><p>${d.summary}</p>`;
 d.stops.forEach(s=>{
   const id=favoriteId(d.day,s), isFav=favorites.some(x=>x.id===id);
   const card=document.createElement("article"); card.className="stop "+(s.stay?"stay":"");
   card.innerHTML=`<div class="stop-top"><div class="stop-time">${s.time}</div><div style="flex:1"><h3>${s.name}</h3><p>${s.desc}</p><div class="stop-actions"><button class="map-btn">📍 Google Maps</button><button class="fav-btn ${isFav?"active":""}">${isFav?"♥ 已收藏":"♡ 收藏"}</button></div></div></div>`;
   card.querySelector(".map-btn").onclick=()=>openMaps(s.map);
   card.querySelector(".fav-btn").onclick=()=>toggleFavorite(d,s);
   tl.appendChild(card);
 });
 const notes=JSON.parse(localStorage.getItem("okinawa_day_notes")||"{}");
 $("#dayNote").value=notes[n]||"";
}
renderOverview();renderTabs();selectDay(1);

let noteTimer;
$("#dayNote").addEventListener("input",()=>{
 clearTimeout(noteTimer);$("#noteSaved").textContent="儲存中…";
 noteTimer=setTimeout(()=>{const notes=JSON.parse(localStorage.getItem("okinawa_day_notes")||"{}");notes[selectedDay]=$("#dayNote").value;localStorage.setItem("okinawa_day_notes",JSON.stringify(notes));$("#noteSaved").textContent="已自動儲存"},350);
});

// Favorites
let favFilter="all";
function toggleFavorite(day,stop){
 const id=favoriteId(day.day,stop), idx=favorites.findIndex(x=>x.id===id);
 if(idx>=0) favorites.splice(idx,1);
 else favorites.push({id,day:day.day,date:day.date,name:stop.name,desc:stop.desc,map:stop.map,type:stop.type});
 localStorage.setItem("okinawa_favorites_v3",JSON.stringify(favorites));
 selectDay(day.day);renderFavorites();
}
function renderFavorites(){
 const list=$("#favoritesList");list.innerHTML="";
 const arr=favFilter==="all"?favorites:favorites.filter(x=>x.type===favFilter);
 if(!arr.length){list.innerHTML='<div class="empty-state">還沒有收藏。<br>在每日行程的景點卡按「♡ 收藏」就會出現在這裡。</div>';return}
 arr.forEach(x=>{
   const el=document.createElement("div");el.className="favorite-card";
   el.innerHTML=`<div><h3>${x.name}</h3><p>Day ${x.day} · ${x.date}　${x.desc}</p></div><div class="tools"><button class="go">導航</button><button class="remove">×</button></div>`;
   el.querySelector(".go").onclick=()=>openMaps(x.map);
   el.querySelector(".remove").onclick=()=>{favorites=favorites.filter(f=>f.id!==x.id);localStorage.setItem("okinawa_favorites_v3",JSON.stringify(favorites));renderFavorites();selectDay(selectedDay)};
   list.appendChild(el);
 });
}
$$("[data-fav-filter]").forEach(b=>b.onclick=()=>{$$("[data-fav-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");favFilter=b.dataset.favFilter;renderFavorites()});
$("#clearFavorites").onclick=()=>{if(confirm("要清除全部收藏嗎？")){favorites=[];localStorage.setItem("okinawa_favorites_v3","[]");renderFavorites();selectDay(selectedDay)}};
renderFavorites();

// Shopping
const shopNames={souvenir:"伴手禮",drug:"藥妝",kids:"孩子",other:"其他"};
let shopping=JSON.parse(localStorage.getItem("okinawa_shopping_v3")||"[]"), shopFilter="all";
function saveShopping(){localStorage.setItem("okinawa_shopping_v3",JSON.stringify(shopping));renderShopping()}
function renderShopping(){
 const list=$("#shoppingList");list.innerHTML="";
 const arr=shopFilter==="all"?shopping:shopping.filter(x=>x.cat===shopFilter);
 if(!arr.length){list.innerHTML='<div class="empty-state">還沒有購物項目。<br>想到什麼就先加進來，旅行時直接勾掉。</div>';return}
 arr.forEach(item=>{
   const row=document.createElement("div");row.className="shopping-row"+(item.done?" done":"");
   row.innerHTML=`<div class="shopping-row-main"><input type="checkbox" ${item.done?"checked":""}><div class="shopping-name">${item.text}<span class="shop-tag">${shopNames[item.cat]}</span></div></div><button>×</button>`;
   row.querySelector("input").onchange=e=>{item.done=e.target.checked;saveShopping()};
   row.querySelector("button").onclick=()=>{shopping=shopping.filter(x=>x.id!==item.id);saveShopping()};
   list.appendChild(row);
 });
}
$("#shoppingForm").onsubmit=e=>{e.preventDefault();const t=$("#shoppingText").value.trim();if(!t)return;shopping.push({id:Date.now().toString(),text:t,cat:$("#shoppingCategory").value,done:false});$("#shoppingText").value="";saveShopping()};
$$("[data-shop]").forEach(b=>b.onclick=()=>{$$("[data-shop]").forEach(x=>x.classList.remove("active"));b.classList.add("active");shopFilter=b.dataset.shop;renderShopping()});
$("#clearShopping").onclick=()=>{if(confirm("要清除全部購物清單嗎？")){shopping=[];saveShopping()}};
renderShopping();

// Checklist
const defaults={
 luggage:["護照","台灣駕照","日本駕照日文譯本","Visit Japan Web 資料","手機／充電線","行動電源","常用藥品","盥洗用品","換洗衣物","雨具","兒童用品"],
 shopping:["伴手禮","藥妝","零食／飲料","孩子想買的商品"],
 todo:["確認航班資料","確認住宿資料","確認租車預約","確認網路／漫遊","確認旅遊保險"]
};
let checkData=JSON.parse(localStorage.getItem("okinawa_checklists_v2")||"null");
if(!checkData){checkData={};for(const k of Object.keys(defaults))checkData[k]=defaults[k].map((t,i)=>({id:k+"_"+i,text:t,done:false}))}
let activeList="luggage";
function saveChecks(){localStorage.setItem("okinawa_checklists_v2",JSON.stringify(checkData));renderChecks()}
function renderChecks(){
 const wrap=$("#checkItems");wrap.innerHTML="";
 checkData[activeList].forEach(item=>{
   const row=document.createElement("div");row.className="check-row"+(item.done?" done":"");
   row.innerHTML=`<input type="checkbox" ${item.done?"checked":""}><div class="check-text">${item.text}</div><button class="delete-check">×</button>`;
   row.querySelector("input").onchange=e=>{item.done=e.target.checked;saveChecks()};
   row.querySelector("button").onclick=()=>{checkData[activeList]=checkData[activeList].filter(x=>x.id!==item.id);saveChecks()};
   wrap.appendChild(row);
 });
 const total=checkData[activeList].length,done=checkData[activeList].filter(x=>x.done).length,p=total?Math.round(done/total*100):0;
 $("#checkProgressText").textContent=`${done} / ${total} 完成`;$("#checkPercent").textContent=p+"%";$("#checkProgress").style.width=p+"%";
}
$$("[data-list]").forEach(b=>b.onclick=()=>{$$("[data-list]").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeList=b.dataset.list;renderChecks()});
$("#addCheckForm").onsubmit=e=>{e.preventDefault();const t=$("#newCheckItem").value.trim();if(!t)return;checkData[activeList].push({id:Date.now().toString(),text:t,done:false});$("#newCheckItem").value="";saveChecks()};
$("#resetChecklist").onclick=()=>{if(confirm("要把三個清單恢復成預設內容嗎？")){checkData={};for(const k of Object.keys(defaults))checkData[k]=defaults[k].map((t,i)=>({id:k+"_"+i,text:t,done:false}));saveChecks()}};
renderChecks();

// Converter
const rate=$("#rate"),jpy=$("#jpy"),twd=$("#twd");
rate.value=localStorage.getItem("okinawa_rate")||"0.205";
function j2t(){const r=+rate.value||0;twd.value=((+jpy.value||0)*r).toFixed(0);localStorage.setItem("okinawa_rate",rate.value);updateExpenseTotal()}
function t2j(){const r=+rate.value||0;jpy.value=r?((+twd.value||0)/r).toFixed(0):0;localStorage.setItem("okinawa_rate",rate.value)}
rate.addEventListener("input",j2t);jpy.addEventListener("input",j2t);twd.addEventListener("input",t2j);$$("[data-jpy]").forEach(b=>b.onclick=()=>{jpy.value=b.dataset.jpy;j2t()});j2t();

// Expenses
let expenses=JSON.parse(localStorage.getItem("okinawa_expenses")||"[]");
function saveExpenses(){localStorage.setItem("okinawa_expenses",JSON.stringify(expenses));renderExpenses()}
function updateExpenseTotal(){
 const total=expenses.reduce((a,x)=>a+(+x.amount||0),0),r=+rate.value||0;
 $("#expenseTotal").textContent="¥"+total.toLocaleString("ja-JP");
 $("#expenseTwd").textContent="約 NT$"+Math.round(total*r).toLocaleString("zh-TW");
}
function renderExpenseSummary(){
 const wrap=$("#expenseCategorySummary");wrap.innerHTML="";
 const cats=["餐飲","購物","交通","門票","住宿","其他"];
 cats.forEach(c=>{const n=expenses.filter(x=>x.category===c).reduce((a,x)=>a+(+x.amount||0),0);const el=document.createElement("div");el.className="expense-chip";el.innerHTML=`<small>${c}</small><b>¥${n.toLocaleString()}</b>`;wrap.appendChild(el)})
}
function renderExpenses(){
 const list=$("#expenseList");list.innerHTML="";
 if(!expenses.length) list.innerHTML='<div class="card" style="text-align:center;color:#9a8b99">還沒有紀錄，旅行中可以直接在這裡新增。</div>';
 expenses.slice().reverse().forEach((x,ri)=>{
   const idx=expenses.length-1-ri,el=document.createElement("div");el.className="expense-item";
   el.innerHTML=`<div><p><b>${x.note||x.category}</b></p><small>${x.category} · ${x.date}</small></div><strong>¥${(+x.amount).toLocaleString()}</strong><button aria-label="刪除">×</button>`;
   el.querySelector("button").onclick=()=>{expenses.splice(idx,1);saveExpenses()};list.appendChild(el)
 });updateExpenseTotal();renderExpenseSummary()
}
$("#expenseForm").addEventListener("submit",e=>{e.preventDefault();expenses.push({amount:+$("#expenseAmount").value,category:$("#expenseCategory").value,note:$("#expenseNote").value.trim(),date:new Date().toLocaleDateString("zh-TW")});$("#expenseAmount").value="";$("#expenseNote").value="";saveExpenses()});
$("#clearExpenses").onclick=()=>{if(confirm("要清除全部花費紀錄嗎？")){expenses=[];saveExpenses()}};
renderExpenses();




// ===== Version 4: install/share/offline =====
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

const installBtn = document.getElementById("installBtn");
if (installBtn) {
  installBtn.addEventListener("click", async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      try { await deferredInstallPrompt.userChoice; } catch(e) {}
      deferredInstallPrompt = null;
    } else {
      const help = document.querySelector(".ios-help");
      if (help) help.open = true;
    }
  });
}

const shareBtn = document.getElementById("shareBtn");
if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const data = {
      title: "沖繩親子自由行 2026",
      text: "我們的沖繩 6天5夜旅行手冊",
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        const old = shareBtn.textContent;
        shareBtn.textContent = "已複製網址";
        setTimeout(()=>shareBtn.textContent=old,1600);
      } else {
        prompt("複製這個網址：", window.location.href);
      }
    } catch(e) {}
  });
}

const offlineBadge = document.createElement("div");
offlineBadge.className = "offline-badge";
offlineBadge.textContent = "目前離線模式";
document.body.appendChild(offlineBadge);
function updateOnlineState(){ offlineBadge.classList.toggle("show", !navigator.onLine); }
window.addEventListener("online", updateOnlineState);
window.addEventListener("offline", updateOnlineState);
updateOnlineState();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(()=>{});
  });
}
