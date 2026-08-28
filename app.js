const CATALOG = [
  { id:"potato", name:"البطاطس", cat:"خضار", emoji:"🥔", bg:"#efebe9", img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=60" },
  { id:"tomato", name:"الطماطم", cat:"خضار", emoji:"🍅", bg:"#ffebee", img:"https://images.unsplash.com/photo-1546470427-227e58ce36d4?auto=format&fit=crop&w=400&q=60" },
  { id:"carrot", name:"الجزر", cat:"خضار", emoji:"🥕", bg:"#fff3e0", img:"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=60" },
  { id:"eggplant", name:"الباذنجان الأسود", cat:"خضار", emoji:"🍆", bg:"#f3e5f5", img:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=60" },
  { id:"zucchini", name:"الكوسة", cat:"خضار", emoji:"🥒", bg:"#e8f5e9", img:"https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=400&q=60" },
  { id:"stuffed-egg", name:"الباذنجان الحشو", cat:"خضار", emoji:"🥒", bg:"#e8f5e9", img:"https://images.unsplash.com/photo-1597362920123-48e177247d84?auto=format&fit=crop&w=400&q=60" },
  { id:"pepper", name:"الفلفل الرومي", cat:"خضار", emoji:"🫑", bg:"#e8f5e9", img:"https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=60" },
  { id:"chili", name:"الفلفل الحامي", cat:"خضار", emoji:"🌶️", bg:"#ffebee" },
  { id:"color-pep", name:"فلفل ألوان", cat:"خضار", emoji:"🫑", bg:"#fff8e1" },
  { id:"cucumber", name:"الخيار", cat:"خضار", emoji:"🥒", bg:"#e8f5e9", img:"https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=60" },
  { id:"lemon", name:"الليمون", cat:"خضار", emoji:"🍋", bg:"#fffde7", img:"https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=400&q=60" },
  { id:"sweetpot", name:"البطاطا", cat:"خضار", emoji:"🍠", bg:"#fbe9e7", img:"https://images.unsplash.com/photo-1596097635121-14b63b7a0c23?auto=format&fit=crop&w=400&q=60" },
  { id:"expot", name:"بطاطا تصدير", cat:"خضار", emoji:"🥔", bg:"#efebe9" },
  { id:"onion-r", name:"البصل الأحمر", cat:"خضار", emoji:"🧅", bg:"#fce4ec" },
  { id:"onion-w", name:"البصل الأبيض", cat:"خضار", emoji:"🧅", bg:"#eceff1" },
  { id:"garlic", name:"الثوم", cat:"خضار", emoji:"🧄", bg:"#fafafa" },
  { id:"cabbage", name:"الكرنب", cat:"خضار", emoji:"🥬", bg:"#e8f5e9" },
  { id:"cauli", name:"القرنبيط", cat:"خضار", emoji:"🥦", bg:"#f1f8e9" },
  { id:"broccoli", name:"البروكلي", cat:"خضار", emoji:"🥦", bg:"#e8f5e9" },
  { id:"molokhia", name:"الملوخية", cat:"خضار", emoji:"🌿", bg:"#e8f5e9" },
  { id:"spinach", name:"السبانخ", cat:"خضار", emoji:"🥬", bg:"#e8f5e9" },
  { id:"lettuce", name:"الخس", cat:"خضار", emoji:"🥬", bg:"#f1f8e9" },
  { id:"beans", name:"الفاصوليا", cat:"خضار", emoji:"🫜", bg:"#e8f5e9" },
  { id:"peas", name:"البسلة", cat:"خضار", emoji:"🫜", bg:"#e8f5e9" },
  { id:"okra", name:"البامية", cat:"خضار", emoji:"🌿", bg:"#e8f5e9" },
  { id:"beet", name:"البنجر", cat:"خضار", emoji:"🟣", bg:"#f3e5f5" },
  { id:"turnip", name:"اللفت", cat:"خضار", emoji:"⚪", bg:"#eceff1" },
  { id:"radish", name:"الفجل", cat:"خضار", emoji:"🔴", bg:"#ffebee" },
  { id:"corn", name:"الذرة", cat:"خضار", emoji:"🌽", bg:"#fffde7" },
  { id:"parsley", name:"البقدونس", cat:"خضار", emoji:"🌿", bg:"#e8f5e9" },
  { id:"dill", name:"الشبت", cat:"خضار", emoji:"🌿", bg:"#e8f5e9" },
  { id:"coriander", name:"الكزبرة", cat:"خضار", emoji:"🌿", bg:"#e8f5e9" },
  { id:"arugula", name:"الجرجير", cat:"خضار", emoji:"🥬", bg:"#e8f5e9" },
  { id:"grapeleaf", name:"ورق العنب", cat:"خضار", emoji:"🍃", bg:"#e8f5e9" },
  { id:"taro", name:"القلقاس", cat:"خضار", emoji:"🟤", bg:"#efebe9" },
  { id:"pumpkin", name:"القرع", cat:"خضار", emoji:"🎃", bg:"#fff3e0" },
  { id:"banana", name:"الموز", cat:"فاكهة", emoji:"🍌", bg:"#fffde7", img:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=60" },
  { id:"grapes", name:"العنب", cat:"فاكهة", emoji:"🍇", bg:"#f3e5f5", img:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=60" },
  { id:"mango", name:"المانجو", cat:"فاكهة", emoji:"🥭", bg:"#fff8e1", img:"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=60" },
  { id:"fig", name:"التين", cat:"فاكهة", emoji:"🟤", bg:"#efebe9", img:"https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=400&q=60" },
  { id:"prickly", name:"التين الشوكي", cat:"فاكهة", emoji:"🌵", bg:"#f1f8e9" },
  { id:"apple", name:"التفاح", cat:"فاكهة", emoji:"🍎", bg:"#ffebee" },
  { id:"orange", name:"البرتقال", cat:"فاكهة", emoji:"🍊", bg:"#fff3e0" },
  { id:"mandarin", name:"اليوسفي", cat:"فاكهة", emoji:"🍊", bg:"#fff8e1" },
  { id:"guava", name:"الجوافة", cat:"فاكهة", emoji:"🟢", bg:"#f1f8e9" },
  { id:"strawberry", name:"الفراولة", cat:"فاكهة", emoji:"🍓", bg:"#ffebee" },
  { id:"peach", name:"الخوخ", cat:"فاكهة", emoji:"🍑", bg:"#fbe9e7" },
  { id:"apricot", name:"المشمش", cat:"فاكهة", emoji:"🟠", bg:"#fff3e0" },
  { id:"pear", name:"الكمثرى", cat:"فاكهة", emoji:"🍐", bg:"#f1f8e9" },
  { id:"pomegranate", name:"الرمان", cat:"فاكهة", emoji:"🔴", bg:"#fce4ec" },
  { id:"watermelon", name:"البطيخ", cat:"فاكهة", emoji:"🍉", bg:"#e8f5e9" },
  { id:"melon", name:"الشمام", cat:"فاكهة", emoji:"🍈", bg:"#f1f8e9" },
  { id:"dates", name:"البلح / التمر", cat:"فاكهة", emoji:"🟤", bg:"#efebe9" },
  { id:"pineapple", name:"الأناناس", cat:"فاكهة", emoji:"🍍", bg:"#fffde7" },
  { id:"kiwi", name:"الكيوي", cat:"فاكهة", emoji:"🥝", bg:"#f1f8e9" },
  { id:"avocado", name:"الأفوكادو", cat:"فاكهة", emoji:"🥑", bg:"#e8f5e9" },
  { id:"chicken", name:"الفراخ", cat:"لحوم", emoji:"🐔", bg:"#fff3e0", img:"https://images.unsplash.com/photo-1587593810167-a849d81b07de?auto=format&fit=crop&w=400&q=60" },
  { id:"baladi", name:"فراخ بلدي", cat:"لحوم", emoji:"🐓", bg:"#fff3e0" },
  { id:"breast", name:"صدور فراخ", cat:"لحوم", emoji:"🍗", bg:"#fbe9e7" },
  { id:"beef", name:"اللحم", cat:"لحوم", emoji:"🥩", bg:"#ffebee" },
  { id:"liver", name:"الكبد", cat:"لحوم", emoji:"🟤", bg:"#efebe9" },
  { id:"fish", name:"السمك", cat:"لحوم", emoji:"🐟", bg:"#e3f2fd" },
  { id:"egg", name:"البيض", cat:"لحوم", emoji:"🥚", bg:"#fffde7" },
  { id:"cheese", name:"الجبنة", cat:"بقالة", emoji:"🧀", bg:"#fffde7" },
  { id:"milk", name:"اللبن", cat:"بقالة", emoji:"🥛", bg:"#eceff1" },
  { id:"oil", name:"الزيت", cat:"بقالة", emoji:"🫙", bg:"#fff8e1" },
  { id:"rice", name:"الأرز", cat:"بقالة", emoji:"🍚", bg:"#fafafa" },
  { id:"sugar", name:"السكر", cat:"بقالة", emoji:"🧂", bg:"#fafafa" },
  { id:"tea", name:"الشاي", cat:"بقالة", emoji:"🍵", bg:"#efebe9" }
];

const TEMPLATES = [
  { id:"classic", name:"سوق الرابعة الكلاسيكي", desc:"اللافتة الخشبية والشريط الأحمر" },
  { id:"souq", name:"سوق شعبي حار", desc:"ألوان نار وكرتون السوق" },
  { id:"fresh", name:"طازج أخضر", desc:"مظهر خضار طازج" },
  { id:"night", name:"ليلي فاخر", desc:"خلفية داكنة للإعلانات المسائية" },
  { id:"minimal", name:"مينيمال أبيض", desc:"بسيط وواضح للطباعة" }
];
const BAR_COLORS = ["green","purple","orange","blue","brown"];
function uid(){return Math.random().toString(36).slice(2,9);}
function itemFrom(id,min,max,tag=""){
  const c=CATALOG.find(x=>x.id===id)||{name:id,emoji:"🛒",bg:"#eee"};
  return {key:uid(),catalogId:c.id||id,name:c.name,min,max,tag,emoji:c.emoji,bg:c.bg,img:c.img||""};
}
const DEFAULT_STATE=()=>({
  template:"classic", titleSouq:"سوق", titleName:"الرابعة",
  ribbon:"لمتابعين صفحة بورصة السادات", dateText:"اليوم",
  circleText:"أكبر صفحة لأسعار السوق في مدينة السادات",
  hangText:"متابعة يومية لأفضل الأسعار والعروض",
  footerText:"بورصة السادات — متوسط أسعار سوق الرابعة · للتحديث اليومي تابع الصفحة",
  activeSection:0,
  sections:[
    {title:"أسعار الخضروات",color:"green",cols:4,items:[
      itemFrom("potato","15","20"),itemFrom("tomato","10","15"),itemFrom("carrot","10",""),itemFrom("stuffed-egg","10",""),
      itemFrom("eggplant","10",""),itemFrom("pepper","10","15"),itemFrom("cucumber","10","15"),itemFrom("zucchini","20",""),
      itemFrom("lemon","15","40"),itemFrom("sweetpot","15",""),itemFrom("expot","15","")
    ]},
    {title:"أسعار الفواكه واللحوم",color:"purple",cols:3,items:[
      itemFrom("chicken","68","70"),itemFrom("banana","35",""),itemFrom("grapes","35","45"),
      itemFrom("mango","40","50"),itemFrom("prickly","5",""),itemFrom("fig","40","")
    ]}
  ]
});
let state=DEFAULT_STATE(); let history=[]; const LS="souq-rabaa-v2";
function snapshot(){history.push(JSON.stringify(state)); if(history.length>40) history.shift();}
function undo(){ if(!history.length) return setStatus("لا يوجد تراجع"); state=JSON.parse(history.pop()); bindFields(); renderAll(); setStatus("تم التراجع"); }
function load(){ try{ const raw=localStorage.getItem(LS); if(raw) state=Object.assign(DEFAULT_STATE(), JSON.parse(raw)); }catch(e){} bindFields(); renderAll(); }
function saveData(){ collectFields(); localStorage.setItem(LS, JSON.stringify(state)); setStatus("تم الحفظ في المتصفح"); }
function resetData(){ if(!confirm("إعادة ضبط كل شيء للقيمة الأصلية؟")) return; snapshot(); localStorage.removeItem(LS); state=DEFAULT_STATE(); bindFields(); renderAll(); setStatus("تمت إعادة الضبط"); }
function bindFields(){
  ["titleSouq","titleName","ribbon","dateText","circleText","hangText","footerText"].forEach(k=>{
    const el=document.getElementById(k); el.value=state[k]||""; el.oninput=()=>{collectFields(); renderFlyer();};
  });
  const sel=document.getElementById("templateSel");
  sel.innerHTML=TEMPLATES.map(t=>`<option value="${t.id}">${t.name}</option>`).join("");
  sel.value=state.template; sel.onchange=()=>{snapshot(); state.template=sel.value; renderAll();};
}
function collectFields(){ ["titleSouq","titleName","ribbon","dateText","circleText","hangText","footerText"].forEach(k=>{ state[k]=document.getElementById(k).value; }); }
function setStatus(t){ const el=document.getElementById("status"); el.textContent=t; setTimeout(()=>{ if(el.textContent===t) el.textContent=""; },2200); }
function renderAll(){ renderTemplates(); renderCatalog(); renderSectionsEditor(); renderFlyer(); }
function renderTemplates(){
  document.getElementById("tplList").innerHTML=TEMPLATES.map(t=>`<div class="tpl ${state.template===t.id?"on":""}" onclick="chooseTpl('${t.id}')"><b>${t.name}</b><span class="hint">${t.desc}</span></div>`).join("");
}
function chooseTpl(id){ snapshot(); state.template=id; document.getElementById("templateSel").value=id; renderAll(); }
let catFilter="الكل";
function renderCatalog(){
  const q=(document.getElementById("catSearch").value||"").trim();
  const cats=["الكل",...new Set(CATALOG.map(c=>c.cat))];
  document.getElementById("catFilters").innerHTML=cats.map(c=>`<button class="${catFilter===c?"on":""}" onclick="setCatFilter('${c}')">${c}</button>`).join("");
  const list=CATALOG.filter(c=>(catFilter==="الكل"||c.cat===catFilter)&&(!q||c.name.includes(q)));
  document.getElementById("catGrid").innerHTML=list.map(c=>`<div class="cat-card" draggable="true" ondragstart="dragCatalog(event,'${c.id}')" onclick="addFromCatalog('${c.id}')"><div class="emo">${c.emoji}</div>${c.name}</div>`).join("");
}
function setCatFilter(c){ catFilter=c; renderCatalog(); }
document.getElementById("catSearch").addEventListener("input", renderCatalog);
function addFromCatalog(id){ snapshot(); const i=state.activeSection>=0?state.activeSection:state.sections.length-1; state.sections[i].items.push(itemFrom(id,"10","")); renderAll(); setStatus("تمت إضافة "+(CATALOG.find(x=>x.id===id)||{}).name); }
function dragCatalog(ev,id){ ev.dataTransfer.setData("text/plain","cat:"+id); }
function renderSectionsEditor(){
  document.getElementById("sectionsEditor").innerHTML=state.sections.map((s,si)=>`
    <div class="sec-box" ${state.activeSection===si?'style="outline:2px solid #ff9800"':""} onclick="state.activeSection=${si};renderSectionsEditor()">
      <div class="sec-head">
        <input value="${esc(s.title)}" onchange="renameSection(${si}, this.value)" />
        <select onchange="recolorSection(${si}, this.value)">${BAR_COLORS.map(c=>`<option ${s.color===c?"selected":""}>${c}</option>`).join("")}</select>
        <select onchange="recolSection(${si}, this.value)">${[2,3,4,5].map(n=>`<option value="${n}" ${+s.cols===n?"selected":""}>${n}</option>`).join("")}</select>
        <button class="btn-danger" onclick="event.stopPropagation();delSection(${si})">حذف القسم</button>
      </div>
      ${s.items.map((it,ii)=>`<div class="item-ed"><div class="row3">
        <input value="${esc(it.name)}" onchange="editItem(${si},${ii},'name',this.value)" />
        <input value="${esc(it.min)}" onchange="editItem(${si},${ii},'min',this.value)" />
        <input value="${esc(it.max)}" onchange="editItem(${si},${ii},'max',this.value)" /></div>
        <input placeholder="ملصق: عرض / جديد" value="${esc(it.tag||"")}" onchange="editItem(${si},${ii},'tag',this.value)" />
        <div class="tools"><button class="btn-d" onclick="moveItem(${si},${ii},-1)">↑</button>
        <button class="btn-d" onclick="moveItem(${si},${ii},1)">↓</button>
        <button class="btn-danger" onclick="delItem(${si},${ii})">حذف</button></div></div>`).join("")}
    </div>`).join("");
}
function esc(s){ return String(s??"").replace(/"/g,"""); }
function renameSection(i,v){ snapshot(); state.sections[i].title=v; renderFlyer(); }
function recolorSection(i,v){ snapshot(); state.sections[i].color=v; renderFlyer(); }
function recolSection(i,v){ snapshot(); state.sections[i].cols=+v; renderFlyer(); }
function addSection(){ snapshot(); state.sections.push({title:"قسم جديد",color:BAR_COLORS[state.sections.length%BAR_COLORS.length],cols:4,items:[]}); state.activeSection=state.sections.length-1; renderAll(); }
function delSection(i){ if(!confirm("حذف القسم بالكامل؟")) return; snapshot(); state.sections.splice(i,1); state.activeSection=Math.max(0,i-1); renderAll(); }
function editItem(si,ii,field,val){ snapshot(); state.sections[si].items[ii][field]=val; renderFlyer(); }
function delItem(si,ii){ snapshot(); state.sections[si].items.splice(ii,1); renderAll(); }
function moveItem(si,ii,dir){ const arr=state.sections[si].items; const nj=ii+dir; if(nj<0||nj>=arr.length) return; snapshot(); [arr[ii],arr[nj]]=[arr[nj],arr[ii]]; renderAll(); }
function priceHTML(p){ if(p.max && String(p.max)!==String(p.min)) return `<span class="from">من</span><span class="num">${p.min}</span><span class="to">إلى ${p.max}</span><span class="unit">جنيه</span>`; return `<span class="num">${p.min||"—"}</span><span class="unit">جنيه</span>`; }
function cardHTML(p,si,ii){
  const img=p.img?`<img src="${p.img}" alt="" crossorigin="anonymous" onerror="this.style.display='none'" />`:"";
  return `<article class="card" draggable="true" data-si="${si}" data-ii="${ii}" ondragstart="dragCard(event)" ondragover="allowDrop(event)" ondrop="dropCard(event)">${p.tag?`<span class="tag">${p.tag}</span>`:""}<h3>${p.name}</h3><div class="pic" style="background:${p.bg||"#f1f8e9"}">${img}<span>${p.emoji||"🛒"}</span></div><div class="price">${priceHTML(p)}</div></article>`;
}
function renderFlyer(){
  const f=document.getElementById("flyer"); f.className="tpl-"+state.template;
  f.innerHTML=`<div class="header"><div class="badge-today">${state.dateText}</div><div class="hang-left">${state.hangText}</div><div class="circle-right">${state.circleText}</div><div class="wood-sign"><div class="wood-plank"><div class="souq-word">${state.titleSouq}</div><div class="rabaa-word">${state.titleName}</div></div></div></div><div class="red-ribbon">${state.ribbon}</div>${state.sections.map((s,si)=>`<div class="bar ${s.color}" ondragover="allowDrop(event)" ondrop="dropOnSection(event,${si})">${s.title}</div><div class="grid cols-${s.cols}" data-si="${si}" ondragover="allowDrop(event)" ondrop="dropOnSection(event,${si})">${s.items.map((it,ii)=>cardHTML(it,si,ii)).join("")}</div>`).join("")}<div class="footer">${state.footerText}</div>`;
}
let dragSrc=null;
function dragCard(ev){ const card=ev.target.closest(".card"); dragSrc={si:+card.dataset.si,ii:+card.dataset.ii}; ev.dataTransfer.setData("text/plain","card"); card.classList.add("dragging"); }
function allowDrop(ev){ ev.preventDefault(); }
function dropCard(ev){
  ev.preventDefault(); ev.stopPropagation();
  const card=ev.target.closest(".card"); const cat=ev.dataTransfer.getData("text/plain");
  if(cat.startsWith("cat:")){ snapshot(); const id=cat.slice(4); const si=+card.dataset.si, ii=+card.dataset.ii; state.sections[si].items.splice(ii,0,itemFrom(id,"10","")); renderAll(); return; }
  if(!dragSrc||!card) return; const tsi=+card.dataset.si, tii=+card.dataset.ii;
  if(dragSrc.si===tsi && dragSrc.ii===tii) return;
  snapshot(); const item=state.sections[dragSrc.si].items.splice(dragSrc.ii,1)[0];
  const adj=(dragSrc.si===tsi && dragSrc.ii<tii)?tii-1:tii; state.sections[tsi].items.splice(adj,0,item); dragSrc=null; renderAll();
}
function dropOnSection(ev,si){
  ev.preventDefault(); const cat=ev.dataTransfer.getData("text/plain");
  if(cat.startsWith("cat:")){ snapshot(); state.sections[si].items.push(itemFrom(cat.slice(4),"10","")); state.activeSection=si; renderAll(); return; }
  if(!dragSrc) return; if(ev.target.closest(".card")) return;
  snapshot(); const item=state.sections[dragSrc.si].items.splice(dragSrc.ii,1)[0]; state.sections[si].items.push(item); dragSrc=null; renderAll();
}
function openCustomItem(){ document.getElementById("modal").classList.add("show"); }
function closeModal(){ document.getElementById("modal").classList.remove("show"); }
function confirmCustomItem(){
  snapshot(); const name=document.getElementById("cName").value||"صنف جديد";
  const min=document.getElementById("cMin").value; const max=document.getElementById("cMax").value;
  const emoji=document.getElementById("cEmoji").value||"🛒"; const tag=document.getElementById("cTag").value;
  const i=state.activeSection>=0?state.activeSection:0;
  state.sections[i].items.push({key:uid(),name,min,max,emoji,tag,bg:"#fff8e1",img:""}); closeModal(); renderAll();
}
async function exportImage(){
  collectFields(); renderFlyer(); setStatus("جارٍ تجهيز الصورة...");
  try{
    const canvas=await html2canvas(document.getElementById("flyer"),{scale:2,useCORS:true,allowTaint:true,backgroundColor:"#fff6d9",logging:false});
    const a=document.createElement("a"); a.download="souq-rabaa-"+new Date().toISOString().slice(0,10)+".png"; a.href=canvas.toDataURL("image/png"); a.click(); setStatus("تم تنزيل الصورة");
  }catch(e){ console.error(e); setStatus("تعذّر التصدير"); alert("تعذّر تصدير الصورة. جرّب كروم."); }
}
load();
