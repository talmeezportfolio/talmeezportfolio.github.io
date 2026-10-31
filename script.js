(()=>{
const CATS = [{"id":"branding","name":"Branding","tag":"Brand identity","clients":"Pretty Please · Liberty Perfume","groups":[{"h":"Pretty Please","s":"Brand identity","items":[["pp01-1600.webp",1600,900,1],["pp02-1600.webp",1600,884,1],["pp03-1600.webp",1600,900,1],["pp04-1600.webp",1600,900,1],["pp05-1600.webp",1600,900,1],["pp06-1600.webp",1600,900,1],["pp07-1600.webp",1600,900,1],["pp08-1600.webp",1600,900,1],["pp09-1600.webp",1600,900,1]]},{"h":"Liberty Perfume","s":"Brand identity & applications","items":[["lp01-1050.webp",1050,600,1],["lp02-1052.webp",1052,600,1],["lp03-1052.webp",1052,600,1],["lp04-1052.webp",1052,600,1],["lp05-1052.webp",1052,600,1],["lp06-1052.webp",1052,600,1],["lp07-1052.webp",1052,600,1],["lp08-1052.webp",1052,600,1],["lp09-1050.webp",1050,600,1],["lp10-1052.webp",1052,600,1],["lp11-1052.webp",1052,600,1]]}],"n":20},{"id":"packaging","name":"Packaging","tag":"Packaging","clients":"Raj AAC Blocks · Magic Mop · Rocket Agarbatti · Accurate · OG Snacks","groups":[{"h":"Raj AAC Blocks","s":"Block adhesive bag","items":[["block2-1800.webp",1800,1296,1]]},{"h":"Magic Mop","s":"Box design","items":[["mop-2000.webp",2000,502,1],["mopfront-1600.webp",1600,699,1]]},{"h":"Rocket Agarbatti","s":"Musk · Fantasia · Mogra","items":[["musk-1800.webp",1800,1269,1,"Musk"],["fantasia-1100.webp",1100,2069,1,"Fantasia"],["mogra-1000.webp",1000,1967,1,"Mogra"]]},{"h":"Accurate Brake Shoes","s":"Box packaging","items":[["brake1-1800.webp",1800,1159,1],["brake2-1800.webp",1800,1159,1]]},{"h":"OG Snacks","s":"Pillow pouch","items":[["og-1100.webp",1100,2357,1]]}],"n":9},{"id":"social","name":"Social Media","tag":"Social media","clients":"Hardware Posts · Electronics Post · Event Post · Tile Adhesive Bond Post · Real Estate Post · Educational Institute Post · Festival posts","groups":[{"h":"Hardware Posts","s":"Product series","items":[["luma01.webp",1080,1080,1],["luma02.webp",1080,1080,1],["luma03.webp",1080,1080,1]]},{"h":"Electronics Post","s":"Consumer electronics","items":[["elp01-1080.webp",1080,1080,1],["elp02-1080.webp",1080,1080,1],["elp03-1080.webp",1080,1080,1],["elp04-1080.webp",1000,1000,1],["elp05-1080.webp",1080,1080,1],["elp06-1080.webp",1080,1080,1]]},{"h":"Event Post","s":"Club night","items":[["evp01-1080.webp",1080,1080,1]]},{"h":"Tile Adhesive Bond Post","s":"TYLMAX · loyalty campaign","items":[["bfs01-1080.webp",1080,1080,1],["bfs02-1080.webp",1080,1080,1],["bfs03-1080.webp",1080,1080,1],["bfs04-1080.webp",1080,1080,1],["bfs05-1080.webp",1080,1080,1]]},{"h":"Real Estate Post","s":"Instagram carousel","items":[["car01-1080.webp",1080,1350,1],["car02-1080.webp",1080,1350,1],["car03-1080.webp",1080,1350,1],["car04-1080.webp",1080,1350,1],["car05-1600.webp",1600,499,1]]},{"h":"Educational Institute Post","s":"Campaign post","items":[["fest02.webp",1080,1080,1]]},{"h":"Festival posts","s":"Dussehra · Eid al-Adha","items":[["fest01.webp",1080,1080,1,"Dussehra"],["misc01.webp",1080,1080,1,"Dussehra"],["fest03.webp",1080,1080,1,"Eid al-Adha"],["fest04.webp",1080,1350,1,"Eid al-Adha"]]}],"n":25},{"id":"banners","name":"Banners","tag":"Web & ad banners","clients":"Supplement, skincare & wellness brands","groups":[{"h":"Web & ad banners","s":"Shown at their real size","items":[["wb01.webp",845,250,1],["wb02.webp",845,250,1],["wb03.webp",845,250,1],["wb04.webp",845,250,1],["wb05.webp",845,250,1],["wb06.webp",1248,500,1],["wb07.webp",1248,500,1],["wb08.webp",1248,500,1],["wb09.webp",1248,475,1],["wb10.webp",1248,500,1],["wb11.webp",1248,450,1],["wb12.webp",1310,225,1],["wb13.webp",1310,225,1],["wb14.webp",1310,225,1],["wb15.webp",1248,500,1]]}],"n":15},{"id":"infographics","name":"Infographics","tag":"Infographics","clients":"Health & wellness","groups":[{"h":"Health & wellness","s":"Infographics","items":[["ig01.webp",715,500,0],["ig02.webp",715,685,0],["ig03.webp",900,600,1]]}],"n":3},{"id":"print","name":"Print","tag":"Print","clients":"Bondfast · TYLMAX","groups":[{"h":"Bondfast · TYLMAX","s":"TM-01 product datasheet","items":[["tm01-p1-1240.webp",1240,1753,1,"Page 1"],["tm01-p2-1240.webp",1240,1753,1,"Page 2"]]}],"n":2}];
const MID = new Set(["block2-1800.webp", "brake1-1800.webp", "brake2-1800.webp", "car05-1600.webp", "mop-2000.webp", "mopfront-1600.webp", "musk-1800.webp", "pp01-1600.webp", "pp02-1600.webp", "pp03-1600.webp", "pp04-1600.webp", "pp05-1600.webp", "pp06-1600.webp", "pp07-1600.webp", "pp08-1600.webp", "pp09-1600.webp", "wb12.webp", "wb13.webp", "wb14.webp"]);
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
let hasG = false;

/* ---------- smooth scroll ---------- */
let lenis=null;
function initSmooth(){
if(!RM && typeof window.Lenis!=='undefined'){
  try{
  lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});
  if(hasG){ lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(t=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0); }
  else { const r=t=>{lenis.raf(t);requestAnimationFrame(r)}; requestAnimationFrame(r); }
  }catch(e){ lenis=null; }
}
}
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href'); if(id.length<2) return; const el=$(id); if(!el) return;
  e.preventDefault(); if(lenis) lenis.scrollTo(el,{offset:id==='#home'?0:-80}); else el.scrollIntoView({behavior:RM?'auto':'smooth'});
}));

/* ---------- nav compaction ---------- */
/* v26: nav stays steady — no scroll-driven swap */

/* ---------- cursor ---------- */
if(fine){
  const c=$('.cursor'); let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  let run=0;
  const loop=()=>{cx+=(x-cx)*.2;cy+=(y-cy)*.2;c.style.transform=`translate3d(${cx}px,${cy}px,0)`;run=(Math.abs(x-cx)+Math.abs(y-cy)>.3)?requestAnimationFrame(loop):0};
  addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;c.classList.add('on');if(!run)run=requestAnimationFrame(loop)},{passive:true});
  document.addEventListener('mouseleave',()=>c.classList.remove('on'));
  loop();
  $$('a,button,.pcard').forEach(el=>{el.addEventListener('mouseenter',()=>c.classList.add('is-big'));el.addEventListener('mouseleave',()=>c.classList.remove('is-big'))});
}

/* ---------- accordions ---------- */
$$('.acc').forEach(acc=>{
  const items=$$('.acc__item',acc), float=$('.acc__float',acc), fimg=float&&$('img',float);
  items.forEach(it=>{
    const b=$('.acc__btn',it);
    b.addEventListener('click',()=>{
      const open=!it.classList.contains('is-open');
      items.forEach(o=>{o.classList.remove('is-open');$('.acc__btn',o).setAttribute('aria-expanded','false')});
      if(open){it.classList.add('is-open');b.setAttribute('aria-expanded','true')}
      if(hasG) setTimeout(()=>ScrollTrigger.refresh(),600);
    });
    if(float){
      it.addEventListener('mouseenter',()=>{ if(it.dataset.img && fimg.getAttribute('src')!==it.dataset.img) fimg.src=it.dataset.img; float.classList.add('on'); });
    }
  });
  if(float){
    let ty=0,cy=0,raf=0;
    acc.addEventListener('mousemove',e=>{const r=acc.getBoundingClientRect(); ty=e.clientY-r.top-float.offsetHeight/2; if(!raf){const step=()=>{cy+=(ty-cy)*.14; float.style.top=cy+'px'; raf=Math.abs(ty-cy)>.5?requestAnimationFrame(step):0}; raf=requestAnimationFrame(step);}});
    acc.addEventListener('mouseleave',()=>float.classList.remove('on'));
  }
});

/* ---------- category galleries ---------- */
const gal=$('#gal'), gbody=$('#galBody'), vw=$('#vw'), vimg=$('#vwImg');
let lastFocus=null, cur=null, flat=[], vi=0;
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
function runs(items){ // split into consecutive runs: logo tiles, wide rows, masonry columns
  const out=[]; items.forEach(f=>{const r=f[1]/f[2], k=f[5]?'logo':(r>=1.2?'strip':'col');
    const last=out[out.length-1]; if(last&&last.k===k) last.a.push(f); else out.push({k,a:[f]});}); return out;
}
window.__LQcb=()=>{ if(!gbody) return; $$('.gal__run:not(.gal__run--logo) .gal__it:not(.has-lq)',gbody).forEach(b=>{const im=$('img',b), k=im&&im.getAttribute('src').split('/').pop().split('?')[0], lq=window.__LQ[k]; if(lq&&!(im.complete&&im.naturalWidth>0)){b.style.backgroundImage=`url(data:image/webp;base64,${lq})`; b.classList.add('has-lq');}}); };
function openGal(id){
  const c=CATS.find(x=>x.id===id); if(!c) return; cur=c; lastFocus=document.activeElement;
  $('#galTag').textContent=c.tag; $('#galTitle').textContent=c.name; $('#galN').textContent=c.n+(c.id==='print'?' pages':' designs');
  flat=[]; let h='';
  c.groups.forEach(g=>{
    h+=`<section class="gal__grp"><h4 class="gal__h">${esc(g.h)}<span>${esc(g.s||'')} · ${g.items.length}</span></h4>`;
    runs(g.items).forEach(r=>{
      const c3=r.k==='col'&&r.a.length>=3&&r.a.every(f=>Math.abs(f[1]/f[2]-1)<.05);
      h+=`<div class="gal__run gal__run--${r.k}${c3?' gal__run--col3':''}">`+r.a.map(f=>{const i=flat.length; flat.push({f,g:g.h});
        const src='assets/img/'+f[0]+'?v=48', mid=MID.has(f[0])?`, assets/img/m/${f[0]}?v=48 1080w`:'', ss=f[3]?` srcset="assets/img/t/${f[0]}?v=48 720w${mid}, ${src} ${f[1]}w" sizes="${r.k==='col'?(c3?'(max-width:759px) calc(100vw - 36px), 33vw':'(max-width:759px) calc(100vw - 36px), 50vw'):(r.k==='strip'?'(max-width:759px) calc(100vw - 36px), min(1400px, 92vw)':'100vw')}"`:'';
        const lq=r.k!=='logo'&&window.__LQ&&__LQ[f[0]], bg=lq?` style="background-image:url(data:image/webp;base64,${lq})"`:'', pri=i<2?' loading="eager" fetchpriority="high"':' loading="lazy"';
        return `<button class="gal__it${lq?' has-lq':''}" data-i="${i}"${bg} aria-label="Open ${esc(g.h)} ${esc(f[4]||'')} image ${i+1} large"><img src="${src}"${ss} width="${f[1]}" height="${f[2]}" alt="${esc(g.h)}${f[4]?' — '+esc(f[4]):''}"${pri} decoding="async" style="max-width:${r.k==='logo'?Math.min(f[1],420)+'px':'100%'}"></button>`;}).join('')+'</div>';
    });
    h+='</section>';
  });
  gbody.innerHTML=h; gbody.scrollTop=0; if(window.__tmWatch) __tmWatch(gbody); gal.hidden=false; document.documentElement.classList.add('modal-open'); if(lenis) lenis.stop();
  requestAnimationFrame(()=>gal.classList.add('is-on'));
  if(history.pushState) history.pushState({gal:id},'' ,'#work-'+id);
  $('#galClose').focus();
}
function closeGal(fromPop){
  if(gal.hidden) return; if(!vw.hidden) closeVw(true);
  gal.classList.remove('is-on'); gal.hidden=true; gbody.innerHTML=''; document.documentElement.classList.remove('modal-open'); if(lenis) lenis.start();
  if(!fromPop && history.state&&history.state.gal) history.back();
  if(lastFocus) lastFocus.focus({preventScroll:true});
}
function showVw(i){
  vi=(i+flat.length)%flat.length; const {f,g}=flat[vi];
  const full='assets/img/'+f[0]+'?v=48', my=vi;
  /* show the already-loaded gallery image at once, then swap in the full-size file when it arrives */
  const th=$(`.gal__it[data-i="${vi}"] img`,gbody), quick=th&&th.complete&&th.naturalWidth>0?th.currentSrc:'';
  vimg.dataset.retry=0; vimg.onload=()=>vimg.classList.add('ready');
  vimg.classList.toggle('ready',!!quick);
  vimg.src=quick||full; vimg.width=f[1]; vimg.height=f[2]; vimg.alt=g+(f[4]?' — '+f[4]:'');
  vimg.classList.toggle('light',!!f[5]);
  if(vimg.complete&&vimg.naturalWidth>0) vimg.classList.add('ready');
  if(quick&&quick.split('?')[0]!==new URL(full,location.href).href.split('?')[0]){
    const pre=new Image(); let tries=0;
    pre.onload=()=>{ if(vi===my&&!vw.hidden) vimg.src=pre.src; };
    pre.onerror=()=>{ if(tries<4) setTimeout(()=>{ pre.src=full+'&r='+(++tries); },[1500,4000,9000,20000][tries]); };
    pre.src=full;
  }
  $('#vwCap').textContent=g+(f[4]?' · '+f[4]:''); $('#vwCount').textContent=(vi+1)+' / '+flat.length;
  [vi+1,vi-1].forEach(k=>{const n=flat[(k+flat.length)%flat.length]; if(n){const p=new Image(); p.src='assets/img/'+n.f[0]+'?v=48';}});
}
function openVw(i){ vw.hidden=false; showVw(i); $('#vwClose').focus(); }
function closeVw(){ vw.hidden=true; vimg.removeAttribute('src'); const b=$(`.gal__it[data-i="${vi}"]`,gbody); if(b) b.focus({preventScroll:true}); }
$$('.pcard--cat').forEach(c=>$('.pcard__hit',c).addEventListener('click',()=>openGal(c.dataset.cat)));
gbody.addEventListener('click',e=>{const b=e.target.closest('.gal__it'); if(b) openVw(+b.dataset.i);});
$('#galClose').addEventListener('click',()=>closeGal());
$('#vwClose').addEventListener('click',closeVw);
$('#vwPrev').addEventListener('click',()=>showVw(vi-1));
$('#vwNext').addEventListener('click',()=>showVw(vi+1));
$('#vwStage').addEventListener('click',e=>{ if(e.target===e.currentTarget) closeVw(); });
let tx=0,ty=0,tt=0;
vw.addEventListener('touchstart',e=>{const t=e.touches[0];tx=t.clientX;ty=t.clientY;tt=Date.now();},{passive:true});
vw.addEventListener('touchend',e=>{if(e.touches.length) return; const t=e.changedTouches[0],dx=t.clientX-tx,dy=t.clientY-ty;
  if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3) showVw(vi+(dx<0?1:-1)); else if(dy>110&&Math.abs(dy)>Math.abs(dx)*1.5) closeVw();},{passive:true});
addEventListener('keydown',e=>{
  if(!vw.hidden){ if(e.key==='Escape') closeVw(); else if(e.key==='ArrowRight') showVw(vi+1); else if(e.key==='ArrowLeft') showVw(vi-1); return; }
  if(!gal.hidden && e.key==='Escape') closeGal();
});
addEventListener('popstate',()=>{ if(!vw.hidden){ closeVw(); return; } if(!gal.hidden) closeGal(true); });

/* ---------- contact form -> WhatsApp ---------- */
const form=$('#waForm');
const compose=()=>{const f=new FormData(form);const n=(f.get('name')||'').trim(),c=(f.get('company')||'').trim(),m=(f.get('msg')||'').trim();
  return `Hi Talmeez, I saw your portfolio.${n?`\nName: ${n}`:''}${c?`\nCompany: ${c}`:''}${m?`\n${m}`:''}`;};
form.addEventListener('submit',e=>{e.preventDefault(); location.href='https://wa.me/919209339989?text='+encodeURIComponent('\u{1F4BC} From Talmeez portfolio website \u2014 '+compose());});
$('#mailBtn').addEventListener('click',e=>{e.preventDefault(); location.href='mailto:talmeezahmad47@gmail.com?subject='+encodeURIComponent('Graphic designer role')+'&body='+encodeURIComponent(compose());});

/* ---------- looping CSS effects pause while off screen (no visual change on screen) ---------- */
if('IntersectionObserver' in window){ const po=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('is-off',!e.isIntersecting)));
  $$('.ticker,.hero,.nav').forEach(el=>po.observe(el)); }

/* ---------- Hi circle: tap flips on touch ---------- */
const wv=$('.wave');
if(wv && !fine){ let tmr=0; wv.addEventListener('click',e=>{ e.preventDefault(); wv.classList.add('is-flipped'); clearTimeout(tmr); tmr=setTimeout(()=>wv.classList.remove('is-flipped'),2200); }); }

/* ---------- split headings into words ---------- */
$$('.split').forEach(el=>{
  const words=el.textContent.trim().split(/\s+/);
  el.innerHTML=words.map(w=>`<span class="wo"><span class="wd">${w}</span></span>`).join(' ');
});
const scrub=$('.scrub');
if(scrub){ scrub.innerHTML=scrub.textContent.trim().split(/\s+/).map(w=>`<span class="w">${w}</span>`).join(' '); }

/* ---------- motion: runs once the (deferred) animation libraries are in; page content never waits for it ----------
   v48: entry/scroll motion is back. Every hidden starting state is set by GSAP itself, only after it is running,
   and each one has its own watchdog, so if anything fails the content is simply visible (fail-open).
   Reduced-motion (e.g. Android battery saver) keeps the motion, just slower and with smaller moves. */
function motion(){
hasG = typeof window.gsap!=='undefined' && typeof window.ScrollTrigger!=='undefined';
initSmooth();
if(!hasG){ window.__tmMotion=1; document.documentElement.classList.remove('js'); $$('.about__text .w').forEach(w=>w.classList.add('on')); return; }
window.__tmMotion=1;
const K=RM?1.7:1, D=RM?.55:1; /* reduced motion: slower, shorter moves */
const H=document.documentElement;
const safe=[];  /* every element GSAP hides, cleared on any failure */
const showAll=()=>{ try{ gsap.killTweensOf(safe); gsap.set(safe,{clearProps:'opacity,visibility,clipPath,transform'}); }catch(_){ } H.classList.remove('mo'); $$('.about__text .w').forEach(w=>w.classList.add('on')); };
try{
gsap.registerPlugin(ScrollTrigger);
H.classList.add('mo');
const mm=gsap.matchMedia();
mm.add('(min-width:701px)',()=>{ gsap.set('#heroCard',{xPercent:-50,x:0}); });

/* ---------- hero intro (only when the page opens at the top) ---------- */
if(scrollY<innerHeight*.6){
  const hf=$('#heroCard .hero__face--front'), himg=$('#heroCard .hero__face--front img'), hw=$$('.hero__word>span'), hr=$$('.hero .reveal-up'), wv2=$('.hero__card .wave'), hs=$('.hero__scroll'), nv=$('.nav');
  const all=[hf,himg,wv2,hs,nv,...hw,...hr].filter(Boolean); safe.push(...all);
  const tl=gsap.timeline({defaults:{ease:'expo.out'},onComplete:()=>gsap.set(all,{clearProps:'opacity,visibility,clipPath,transform'})});
  if(nv) tl.fromTo(nv,{y:-80*D,opacity:0},{y:0,opacity:1,duration:1,clearProps:'transform,opacity'},.1);
  if(hf) tl.fromTo(hf,{clipPath:'inset(100% 0% 0% 0% round 16px)'},{clipPath:'inset(0% 0% 0% 0% round 16px)',duration:1.4,ease:'expo.inOut'},.1);
  if(himg) tl.fromTo(himg,{scale:1.18,opacity:0},{scale:1,opacity:1,duration:1.6},.45);
  if(hw.length) tl.fromTo(hw,{yPercent:105*D},{yPercent:0,duration:1.3,stagger:.1},.55);
  if(hr.length) tl.fromTo(hr,{opacity:0,y:28*D},{opacity:1,y:0,duration:1,stagger:.1},.9);
  if(wv2) tl.fromTo(wv2,{scale:0},{scale:1,duration:1.1,ease:'back.out(1.6)'},1.0);
  if(hs) tl.fromTo(hs,{opacity:0,y:20*D},{opacity:1,y:0,duration:.8},1.2);
  tl.timeScale(1.5/K);
  setTimeout(()=>{ if(tl.progress()<1) tl.progress(1); },4500*K); /* watchdog */
}

/* ---------- hero portrait: gentle float, mouse tilt, scroll tilt ---------- */
const hcard=$('#heroCard'), hface=$('#heroCard .hero__face--front');
if(hface){
  gsap.to(hface,{y:-10*D,rotation:RM?.6:1.2,duration:2.6*K,ease:'sine.inOut',yoyo:true,repeat:-1,delay:1.4});
  if(fine){
    const hero=$('.hero'); gsap.set(hface,{transformPerspective:1000});
    const rx=gsap.quickTo(hface,'rotationX',{duration:.8,ease:'power3.out'}), ry=gsap.quickTo(hface,'rotationY',{duration:.8,ease:'power3.out'});
    hero.addEventListener('mousemove',e=>{ const r=hcard.getBoundingClientRect(), dx=(e.clientX-(r.left+r.width/2))/innerWidth, dy=(e.clientY-(r.top+r.height/2))/innerHeight; ry(dx*18*D); rx(-dy*14*D); },{passive:true});
    hero.addEventListener('mouseleave',()=>{ rx(0); ry(0); });
  }
}
if(hcard){
  mm.add({d:'(min-width:701px)',m:'(max-width:700px)'},ctx=>{
    const d=ctx.conditions.d;
    gsap.fromTo(hcard,{rotation:0,rotationY:0,y:0,scale:1},{rotation:-5*D,rotationY:d?-16*D:-10*D,transformPerspective:1200,y:(d?90:50)*D,scale:.92,ease:'none',
      scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.6}});
  });
}
/* services desk card swings in */
const sc=$('#svcCard');
if(sc) gsap.fromTo(sc,{transformPerspective:1200,rotationY:28*D,rotation:7*D,y:90*D,scale:.9},{transformPerspective:1200,rotationY:-14,rotation:-3,y:0,scale:1,ease:'none',
  scrollTrigger:{trigger:'.svc__media',start:'top bottom',end:'top 30%',scrub:.6}});

mm.add({d:'(min-width:701px)',m:'(max-width:700px)'},ctx=>{
  const a=ctx.conditions.d?18:8, st={trigger:'.hero',start:'top top',end:'bottom top',scrub:true};
  gsap.to('.hero__word--l',{xPercent:-a*D,ease:'none',scrollTrigger:st});
  gsap.to('.hero__word--r',{xPercent:a*D,ease:'none',scrollTrigger:st});
});

/* ---------- scroll reveals: hidden only while JS runs, revealed by IntersectionObserver, watchdog per element ---------- */
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting||e.boundingClientRect.top<0){ io.unobserve(e.target); e.target.__go&&e.target.__go(); } }),{rootMargin:'0px 0px -8% 0px'});
  const reveal=(el,targets,from,to)=>{
    targets=targets.filter(Boolean); if(!targets.length) return;
    const r=el.getBoundingClientRect(); if(r.top<innerHeight*.92&&r.bottom>0&&el.closest('.hero')) return;
    safe.push(...targets); gsap.set(targets,from);
    let done=0; el.__go=()=>{ if(done) return; done=1; gsap.to(targets,Object.assign({ease:'expo.out',overwrite:'auto',onComplete:()=>gsap.set(targets,{clearProps:'opacity,visibility,transform'})},to,{duration:(to.duration||1)*K})); };
    io.observe(el);
  };
  $$('.split').forEach(el=>reveal(el,$$('.wd',el),{yPercent:105*D},{yPercent:0,duration:1.1,stagger:.06}));
  $$('.reveal-up').forEach(el=>{ if(el.closest('.hero')) return; reveal(el,[el],{opacity:0,y:34*D},{opacity:1,y:0,duration:1}); });
  $$('.acc__item, .exp__row, .about__links, .contact__rows, .form, .filters').forEach(el=>reveal(el,[el],{opacity:0,y:44*D},{opacity:1,y:0,duration:1}));
  const fn=$('.foot__name'); if(fn) reveal($('.foot')||fn,[fn],{yPercent:60*D,opacity:0},{yPercent:0,opacity:1,duration:1.4});
  /* watchdog: anything already scrolled past or on screen but still hidden is shown */
  const sweep=()=>$$('.split,.reveal-up,.acc__item,.exp__row,.about__links,.contact__rows,.form,.filters,.foot').forEach(el=>{ if(el.__go&&el.getBoundingClientRect().top<innerHeight) el.__go(); });
  addEventListener('load',()=>setTimeout(sweep,600)); setTimeout(sweep,5000); addEventListener('scroll',()=>{ clearTimeout(sweep.t); sweep.t=setTimeout(sweep,400); },{passive:true});
}

/* about text word scrub (words light up as you scroll) */
const ws=$$('.about__text .w');
ScrollTrigger.create({trigger:'.about__text',start:'top 85%',end:'bottom 50%',scrub:true,onUpdate:s=>{const n=Math.round(s.progress*ws.length);ws.forEach((w,i)=>w.classList.toggle('on',i<n))},
  onLeave:()=>ws.forEach(w=>w.classList.add('on'))});

/* ---------- stacked project cards: shrink + dim as the next one slides over; picture drifts inside ---------- */
const cards=$$('.pcard');
cards.forEach((c,i)=>{
  const m=$('.pcard__media',c);
  if(m) gsap.fromTo(m,{scale:1.14,yPercent:-4*D},{scale:1,yPercent:0,ease:'none',scrollTrigger:{trigger:c,start:'top bottom',end:'top 20%',scrub:true}});
  if(i===cards.length-1) return;
  gsap.to(c,{scale:.9,'--dim':.6,ease:'none',scrollTrigger:{trigger:cards[i+1],start:'top bottom',end:'top '+(parseFloat(getComputedStyle(c).top)||90)+'px',scrub:true}});
});
/* card hover tilt (mouse) */
if(fine) cards.forEach(c=>{
  const n=$('.pcard__name',c), m=$('.pcard__media img',c); if(!n&&!m) return;
  c.addEventListener('mousemove',e=>{ const r=c.getBoundingClientRect(), dx=(e.clientX-r.left)/r.width-.5, dy=(e.clientY-r.top)/r.height-.5;
    if(n) gsap.to(n,{x:dx*30*D,y:dy*18*D,duration:.8,ease:'power3.out',overwrite:'auto'});
    if(m) gsap.to(m,{x:-dx*24*D,y:-dy*16*D,duration:1,ease:'power3.out',overwrite:'auto'}); },{passive:true});
  c.addEventListener('mouseleave',()=>{ if(n) gsap.to(n,{x:0,y:0,duration:.8,ease:'power3.out'}); if(m) gsap.to(m,{x:0,y:0,duration:1,ease:'power3.out'}); });
});

/* ticker speed reacts to scroll velocity */
const tracks=$$('.ticker__track');
tracks.forEach(t=>t.getAnimations().forEach(a=>a.playbackRate=1));
let vel=0; if(lenis) lenis.on('scroll',e=>{vel=Math.min(4,Math.abs(e.velocity)/12)});
else { let ly=scrollY; addEventListener('scroll',()=>{ vel=Math.min(3,Math.abs(scrollY-ly)/40); ly=scrollY; },{passive:true}); }
const tanim=tracks.map(t=>t.getAnimations()).flat(); let lastR=1;
gsap.ticker.add(()=>{vel*=.92; if(vel<.005) vel=0; const pr=1+vel; if(Math.abs(pr-lastR)<.002) return; lastR=pr; tanim.forEach(a=>a.playbackRate=pr)});

if(document.readyState==='complete') ScrollTrigger.refresh(); else addEventListener('load',()=>ScrollTrigger.refresh());
}catch(e){ showAll(); }
}
if(window.__tmDCL) motion(); else document.addEventListener('DOMContentLoaded',motion);
})();
