document.documentElement.classList.add('js');if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('rm');
/* fail-open: if the motion scripts are slow (weak network) show everything as-is instead of waiting */
setTimeout(function(){if(!window.__tmMotion){window.__tmLate=1;document.documentElement.classList.remove('js');}},1500);
/* retry images that fail on a weak / dropping connection: 1.5s, 4s, 9s, 20s, and again when back online */
(function(){var D=[1500,4000,9000,20000];
function bust(u,n){return u.replace(/([?&])r=\d+/,'').replace(/[?&]$/,'')+(u.indexOf('?')>-1?'&':'?')+'r='+n;}
function retry(img){var n=+(img.dataset.retry||0);if(n>=D.length)return;img.dataset.retry=n+1;
 setTimeout(function(){if(img.complete&&img.naturalWidth>0)return;
  var ss=img.getAttribute('srcset');if(ss)img.setAttribute('srcset',ss.split(',').map(function(p){p=p.trim().split(/\s+/);p[0]=bust(p[0],n+1);return p.join(' ');}).join(', '));
  var s=img.getAttribute('src');if(s)img.setAttribute('src',bust(s,n+1));},D[n]);}
addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'&&t.getAttribute('src'))retry(t);},true);
addEventListener('online',function(){var a=document.images;for(var i=0;i<a.length;i++){var im=a[i];if(im.getAttribute('src')&&im.complete&&im.naturalWidth===0){im.dataset.retry=0;retry(im);}}});
})();
