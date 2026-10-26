(()=>{
const CATS = [{"id":"branding","name":"Branding","tag":"Brand identity","clients":"Pretty Please · Liberty Perfume","groups":[{"h":"Pretty Please","s":"Brand identity","items":[["pp01-1600.webp",1600,900,1],["pp02-1600.webp",1600,884,1],["pp03-1600.webp",1600,900,1],["pp04-1600.webp",1600,900,1],["pp05-1600.webp",1600,900,1],["pp06-1600.webp",1600,900,1],["pp07-1600.webp",1600,900,1],["pp08-1600.webp",1600,900,1],["pp09-1600.webp",1600,900,1]]},{"h":"Liberty Perfume","s":"Brand identity & applications","items":[["lp01-1050.webp",1050,600,1],["lp02-1052.webp",1052,600,1],["lp03-1052.webp",1052,600,1],["lp04-1052.webp",1052,600,1],["lp05-1052.webp",1052,600,1],["lp06-1052.webp",1052,600,1],["lp07-1052.webp",1052,600,1],["lp08-1052.webp",1052,600,1],["lp09-1050.webp",1050,600,1],["lp10-1052.webp",1052,600,1],["lp11-1052.webp",1052,600,1]]}],"n":20},{"id":"packaging","name":"Packaging","tag":"Packaging","clients":"Raj AAC Blocks · Magic Mop · Rocket Agarbatti · Accurate · OG Snacks","groups":[{"h":"Raj AAC Blocks","s":"Block adhesive bag","items":[["block2-1800.webp",1800,1296,1]]},{"h":"Magic Mop","s":"Box design","items":[["mop-2000.webp",2000,502,1],["mopfront-1600.webp",1600,699,1]]},{"h":"Rocket Agarbatti","s":"Musk · Fantasia · Mogra","items":[["musk-1800.webp",1800,1269,1,"Musk"],["fantasia-1100.webp",1100,2069,1,"Fantasia"],["mogra-1000.webp",1000,1967,1,"Mogra"]]},{"h":"Accurate Brake Shoes","s":"Box packaging","items":[["brake1-1800.webp",1800,1159,1],["brake2-1800.webp",1800,1159,1]]},{"h":"OG Snacks","s":"Pillow pouch","items":[["og-1100.webp",1100,2357,1]]}],"n":9},{"id":"social","name":"Social Media","tag":"Social media","clients":"Hardware Posts · Electronics Post · Event Post · Tile Adhesive Bond Post · Real Estate Post · Educational Institute Post · Festival posts","groups":[{"h":"Hardware Posts","s":"Product series","items":[["luma01.webp",1080,1080,1],["luma02.webp",1080,1080,1],["luma03.webp",1080,1080,1]]},{"h":"Electronics Post","s":"Consumer electronics","items":[["elp01-1080.webp",1080,1080,1],["elp02-1080.webp",1080,1080,1],["elp03-1080.webp",1080,1080,1],["elp04-1080.webp",1000,1000,1],["elp05-1080.webp",1080,1080,1],["elp06-1080.webp",1080,1080,1]]},{"h":"Event Post","s":"Club night","items":[["evp01-1080.webp",1080,1080,1]]},{"h":"Tile Adhesive Bond Post","s":"TYLMAX · loyalty campaign","items":[["bfs01-1080.webp",1080,1080,1],["bfs02-1080.webp",1080,1080,1],["bfs03-1080.webp",1080,1080,1],["bfs04-1080.webp",1080,1080,1],["bfs05-1080.webp",1080,1080,1]]},{"h":"Real Estate Post","s":"Instagram carousel","items":[["car01-1080.webp",1080,1350,1],["car02-1080.webp",1080,1350,1],["car03-1080.webp",1080,1350,1],["car04-1080.webp",1080,1350,1],["car05-1600.webp",1600,499,1]]},{"h":"Educational Institute Post","s":"Campaign post","items":[["fest02.webp",1080,1080,1]]},{"h":"Festival posts","s":"Dussehra · Eid al-Adha","items":[["fest01.webp",1080,1080,1,"Dussehra"],["misc01.webp",1080,1080,1,"Dussehra"],["fest03.webp",1080,1080,1,"Eid al-Adha"],["fest04.webp",1080,1350,1,"Eid al-Adha"]]}],"n":25},{"id":"banners","name":"Banners","tag":"Web & ad banners","clients":"Supplement, skincare & wellness brands","groups":[{"h":"Web & ad banners","s":"Shown at their real size","items":[["wb01.webp",845,250,1],["wb02.webp",845,250,1],["wb03.webp",845,250,1],["wb04.webp",845,250,1],["wb05.webp",845,250,1],["wb06.webp",1248,500,1],["wb07.webp",1248,500,1],["wb08.webp",1248,500,1],["wb09.webp",1248,475,1],["wb10.webp",1248,500,1],["wb11.webp",1248,450,1],["wb12.webp",1310,225,1],["wb13.webp",1310,225,1],["wb14.webp",1310,225,1],["wb15.webp",1248,500,1]]}],"n":15},{"id":"infographics","name":"Infographics","tag":"Infographics","clients":"Health & wellness","groups":[{"h":"Health & wellness","s":"Infographics","items":[["ig01.webp",715,500,0],["ig02.webp",715,685,0],["ig03.webp",900,600,1]]}],"n":3},{"id":"print","name":"Print","tag":"Print","clients":"Bondfast · TYLMAX","groups":[{"h":"Bondfast · TYLMAX","s":"TM-01 product datasheet","items":[["tm01-p1-1240.webp",1240,1753,1,"Page 1"],["tm01-p2-1240.webp",1240,1753,1,"Page 2"]]}],"n":2}];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const hasG = typeof window.gsap!=='undefined' && typeof window.ScrollTrigger!=='undefined';

/* ---------- smooth scroll ---------- */
let lenis=null;
if(!RM && typeof window.Lenis!=='undefined'){
  lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});
  if(hasG){ lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(t=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0); }
  else { const r=t=>{lenis.raf(t);requestAnimationFrame(r)}; requestAnimationFrame(r); }
}
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href'); if(id.length<2) return; const el=$(id); if(!el) return;
  e.preventDefault(); if(lenis) lenis.scrollTo(el,{offset:id==='#home'?0:-80}); else el.scrollIntoView({behavior:RM?'auto':'smooth'});
}));

/* ---------- nav compaction ---------- */
/* v26: nav stays steady — no scroll-driven swap */

/* ---------- cursor ---------- */
if(fine && !RM){
  const c=$('.cursor'); let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;c.classList.add('on')},{passive:true});
  document.addEventListener('mouseleave',()=>c.classList.remove('on'));
  const loop=()=>{cx+=(x-cx)*.2;cy+=(y-cy)*.2;c.style.transform=`translate3d(${cx}px,${cy}px,0)`;requestAnimationFrame(loop)};loop();
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
function openGal(id){
  const c=CATS.find(x=>x.id===id); if(!c) return; cur=c; lastFocus=document.activeElement;
  $('#galTag').textContent=c.tag; $('#galTitle').textContent=c.name; $('#galN').textContent=c.n+(c.id==='print'?' pages':' designs');
  flat=[]; let h='';
  c.groups.forEach(g=>{
    h+=`<section class="gal__grp"><h4 class="gal__h">${esc(g.h)}<span>${esc(g.s||'')} · ${g.items.length}</span></h4>`;
    runs(g.items).forEach(r=>{
      const c3=r.k==='col'&&r.a.length>=3&&r.a.every(f=>Math.abs(f[1]/f[2]-1)<.05);
      h+=`<div class="gal__run gal__run--${r.k}${c3?' gal__run--col3':''}">`+r.a.map(f=>{const i=flat.length; flat.push({f,g:g.h});
        const src='assets/img/'+f[0], ss=f[3]?` srcset="assets/img/t/${f[0]} 720w, ${src} ${f[1]}w" sizes="${r.k==='col'?(c3?'(max-width:759px) 100vw, 33vw':'(max-width:759px) 100vw, 50vw'):'100vw'}"`:'';
        return `<button class="gal__it" data-i="${i}" aria-label="Open ${esc(g.h)} ${esc(f[4]||'')} image ${i+1} large"><img src="${src}"${ss} width="${f[1]}" height="${f[2]}" alt="${esc(g.h)}${f[4]?' — '+esc(f[4]):''}" loading="lazy" decoding="async" style="max-width:${r.k==='logo'?Math.min(f[1],420)+'px':'100%'}"></button>`;}).join('')+'</div>';
    });
    h+='</section>';
  });
  gbody.innerHTML=h; gbody.scrollTop=0; gal.hidden=false; document.documentElement.classList.add('modal-open'); if(lenis) lenis.stop();
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
  vimg.classList.remove('ready'); vimg.onload=()=>vimg.classList.add('ready');
  vimg.src='assets/img/'+f[0]; vimg.width=f[1]; vimg.height=f[2]; vimg.alt=g+(f[4]?' — '+f[4]:'');
  vimg.classList.toggle('light',!!f[5]);
  if(vimg.complete) vimg.classList.add('ready');
  $('#vwCap').textContent=g+(f[4]?' · '+f[4]:''); $('#vwCount').textContent=(vi+1)+' / '+flat.length;
  [vi+1,vi-1].forEach(k=>{const n=flat[(k+flat.length)%flat.length]; if(n){const p=new Image(); p.src='assets/img/'+n.f[0];}});
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
form.addEventListener('submit',e=>{e.preventDefault(); location.href='https://wa.me/919209339989?text='+encodeURIComponent(compose());});
$('#mailBtn').addEventListener('click',e=>{e.preventDefault(); location.href='mailto:talmeezahmad47@gmail.com?subject='+encodeURIComponent('Graphic designer role')+'&body='+encodeURIComponent(compose());});

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

if(!hasG || RM){ if(!hasG) document.documentElement.classList.remove('js'); $$('.about__text .w').forEach(w=>w.classList.add('on')); return; }
gsap.registerPlugin(ScrollTrigger);

/* ---------- hero intro ---------- */
const mm=gsap.matchMedia();
mm.add('(min-width:701px)',()=>{ gsap.set('#heroCard',{xPercent:-50,x:0}); });
const tl=gsap.timeline({defaults:{ease:'expo.out'}});
tl.from('.nav',{y:-80,opacity:0,duration:1},.1)
  .to('#heroCard .hero__face--front',{clipPath:'inset(0% 0 0 0 round 16px)',duration:1.4,ease:'expo.inOut'},.1)
  .to('#heroCard img:not(.hero__alt)',{opacity:1,scale:1,duration:1.6},.5)
  .to('.hero__word>span',{y:0,duration:1.3,stagger:.1},.55)
  .to('.hero .reveal-up',{opacity:1,y:0,duration:1,stagger:.1},.9)
  .fromTo('.wave',{scale:0,z:2},{scale:1,z:2,duration:1.1,ease:'back.out(1.5)'},1.0)
  .from('.hero__scroll',{opacity:0,y:20,duration:.8},1.2);
mm.add('(min-width:701px)',()=>{
  const st={trigger:'.hero',start:'top top',end:'bottom top',scrub:true};
  gsap.to('.hero__word--l',{xPercent:-18,ease:'none',scrollTrigger:st});
  gsap.to('.hero__word--r',{xPercent:18,ease:'none',scrollTrigger:st});
});
/* ---------- travelling portrait card: hero -> services ---------- */
const hc=$('#heroCard'), scard=$('#svcCard'), sstick=$('.svc__stick');
if(hc&&scard){
  mm.add({d:'(min-width:1000px)',m:'(max-width:999px)'},ctx=>{
    const desk=ctx.conditions.d;
    let T=0;
    const setTop=()=>{ if(desk){ T=Math.max(90,(innerHeight-scard.offsetHeight)/2); sstick.style.setProperty('--svcTop',T+'px'); } else T=Math.round(innerHeight*.2); };
    setTop();
    const geo=()=>{ // card centre with no travel applied, slot centre at the hand-off scroll
      const st=hc.offsetParent.getBoundingClientRect(), w=hc.offsetWidth, h=hc.offsetHeight, sy=scrollY;
      const xp=gsap.getProperty(hc,'xPercent')||0;
      const cx=st.left+hc.offsetLeft+w/2+xp/100*w, cy=st.top+sy+hc.offsetTop+h/2;
      const sw=scard.offsetWidth, sh=scard.offsetHeight, op=scard.offsetParent.getBoundingClientRect();
      const mr=$('.svc__media').getBoundingClientRect(), endScroll=mr.top+sy-T;
      const tx=op.left+scard.offsetLeft+sw/2, sTop=desk?scard.offsetTop:(op.top-mr.top)+scard.offsetTop;
      return {x:tx-cx, y:(endScroll+T+sTop+sh/2)-cy, s:sw/w};
    };
    let g=geo();
    const show=on=>{ scard.style.visibility=on?'visible':'hidden'; hc.style.visibility=on?'hidden':'visible'; };
    show(false);
    const xp=gsap.getProperty(hc,'xPercent')||0, P={x:0,y:0,s:1,ry:0,rx:0,rz:0,f:0};
    const hw=hc.querySelector('.wave');
    const render=()=>{ hc.style.transform=`translate(${P.x}px,${P.y}px) translate(${xp}%,0) perspective(1200px) rotate(${P.rz}deg) rotateY(${P.ry+P.f}deg) rotateX(${P.rx}deg) scale(${P.s})`; if(hw) hw.style.visibility=Math.abs(P.ry+P.f)>95?'hidden':''; };
    const tl=gsap.timeline({onUpdate:render,scrollTrigger:{trigger:'.hero',start:'top top',endTrigger:'.svc__media',end:()=>'top '+T+'px',scrub:.6,invalidateOnRefresh:true,
      onRefreshInit:()=>{setTop();},onUpdate:s=>{show(s.progress>.995); hc.style.zIndex=s.progress>.03?6:'';},onLeaveBack:()=>{show(false);hc.style.zIndex='';}}});
    tl.to(P,{x:()=>(g=geo(),g.x),y:()=>g.y,s:()=>g.s,ease:'power1.inOut',duration:1},0)
      .to(P,{ry:-32,rx:14,rz:-7,ease:'sine.inOut',duration:.5},0)
      .to(P,{ry:-14,rx:0,rz:-3,ease:'sine.inOut',duration:.5},.5)
      .to(P,{f:-180,ease:'power2.inOut',duration:.6},.2); // 3D flip: portrait -> desk, mostly mid-travel
    return ()=>{ show(true); hc.style.visibility=''; hc.style.zIndex=''; gsap.set(hc,{xPercent:xp}); };
  });
}
/* services card: always the desk photo (no per-row image swap) */

/* ---------- reveals ---------- */
$$('.split').forEach(el=>gsap.to($$('.wd',el),{y:0,duration:1.1,ease:'expo.out',stagger:.06,scrollTrigger:{trigger:el,start:'top 88%'}}));
$$('.reveal-up').forEach(el=>{ if(el.closest('.hero')) return; gsap.to(el,{opacity:1,y:0,duration:1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 90%'}}); });
gsap.utils.toArray('.acc__item, .exp__row, .about__links, .contact__rows, .form, .filters').forEach(el=>gsap.from(el,{opacity:0,y:40,duration:1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 92%'}}));

/* about text word scrub */
const ws=$$('.about__text .w');
ScrollTrigger.create({trigger:'.about__text',start:'top 80%',end:'bottom 45%',scrub:true,onUpdate:s=>{const n=Math.round(s.progress*ws.length);ws.forEach((w,i)=>w.classList.toggle('on',i<n))}});

/* ---------- stacked project cards ---------- */
const cards=$$('.pcard');
cards.forEach((c,i)=>{
  if(i===cards.length-1) return;
  gsap.to(c,{scale:.9,'--dim':.65,ease:'none',scrollTrigger:{trigger:cards[i+1],start:'top bottom',end:'top '+(parseFloat(getComputedStyle(c).top)||90)+'px',scrub:true}});
});

/* ticker speed reacts to scroll velocity */
const tracks=$$('.ticker__track');
tracks.forEach(t=>t.getAnimations().forEach(a=>a.playbackRate=1));
let vel=0; if(lenis) lenis.on('scroll',e=>{vel=Math.min(4,Math.abs(e.velocity)/12)});
gsap.ticker.add(()=>{vel*=.92; tracks.forEach(t=>t.getAnimations().forEach(a=>a.playbackRate=1+vel))});

/* footer name rise */
gsap.from('.foot__name',{yPercent:60,opacity:0,ease:'expo.out',duration:1.4,scrollTrigger:{trigger:'.foot',start:'top 75%'}});
addEventListener('load',()=>ScrollTrigger.refresh());
})();
